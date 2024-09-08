const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

class Rapi {
    constructor() {
        this.keys = [
            { key: '657fdc78a0mshcbd4479e816afaap128a12jsn660a39727c61', name: 'primaryKey' },
            { key: '38f09263a1mshd66f8c0e1ce6fb3p199700jsn2aa7522bd5fb', name: 'secondaryKey' }
        ];
        this.usageDataFilePath = path.resolve(__dirname, './Media/database/usage.json'); // Ruta absoluta

        this.initializeUsageData();
    }

    initializeUsageData() {
        const dir = path.dirname(this.usageDataFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Directorio creado: ${dir}`);
        }

        if (!fs.existsSync(this.usageDataFilePath)) {
            const initialData = {
                keys: {
                    primaryKey: {
                        usage: 0,
                        lastReset: new Date().toISOString()
                    },
                    secondaryKey: {
                        usage: 0,
                        lastReset: new Date().toISOString()
                    }
                }
            };
            fs.writeFileSync(this.usageDataFilePath, JSON.stringify(initialData, null, 2));
            console.log("Archivo de uso inicializado y creado.");
        } else {
            console.log("Archivo de uso ya existe. Cargando datos.");
        }
    }

    loadUsageData() {
        if (!fs.existsSync(this.usageDataFilePath)) {
            console.error("Archivo de uso no encontrado, inicializando de nuevo.");
            this.initializeUsageData();
        }
        const data = fs.readFileSync(this.usageDataFilePath, 'utf-8');
        return JSON.parse(data);
    }

    saveUsageData(data) {
        fs.writeFileSync(this.usageDataFilePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log("Datos de uso guardados:", JSON.stringify(data, null, 2));
    }

    resetUsageIfNeeded() {
        const now = new Date();
        const usageData = this.loadUsageData();

        for (const key of this.keys) {
            const keyInfo = usageData.keys[key.name];
            if (keyInfo && keyInfo.lastReset) {
                const lastReset = new Date(keyInfo.lastReset);

                const isSameDay = now.getUTCDate() === lastReset.getUTCDate() &&
                                  now.getUTCMonth() === lastReset.getUTCMonth() &&
                                  now.getUTCFullYear() === lastReset.getUTCFullYear();

                if (!isSameDay) {
                    console.log(`Reiniciando el uso de la clave: ${key.name}`);
                    keyInfo.usage = 0;
                    keyInfo.lastReset = now.toISOString();
                }
            }
        }

        this.saveUsageData(usageData);
    }

    async fetchVideoData(videoId) {
        this.resetUsageIfNeeded();
        const usageData = this.loadUsageData();

        for (let i = 0; i < this.keys.length; i++) {
            const keyInfo = usageData.keys[this.keys[i].name];
            if (keyInfo.usage < 500) {
                const url = `https://yt-api.p.rapidapi.com/dl?id=${videoId}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': this.keys[i].key,
                        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                    }
                };

                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`Error en la respuesta de la API: ${response.status} - ${response.statusText}`);
                    }

                    const result = await response.json();

                    keyInfo.usage++;
                    usageData.keys[this.keys[i].name] = keyInfo;
                    this.saveUsageData(usageData);

                    const remainingUses = 500 - keyInfo.usage;
                    const lastReset = new Date(keyInfo.lastReset);
                    console.log(`Usando la clave: ${this.keys[i].name}. Usos restantes: ${remainingUses}. Último reinicio: ${lastReset.toISOString()}`);

                    return result;
                } catch (error) {
                    console.error(`Error usando la clave ${this.keys[i].name}: ${error.message}`);
                    if (i === this.keys.length - 1) {
                        throw new Error("Todas las claves han alcanzado el límite de uso.");
                    }
                }
            } else {
                console.log(`La clave ${this.keys[i].name} ha alcanzado su límite de uso diario.`);
            }
        }
    }
}

module.exports = {
    Rapi
};
