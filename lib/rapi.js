const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

class Rapi {
    constructor() {
        this.keys = [
            { key: '657fdc78a0mshcbd4479e816afaap128a12jsn660a39727c61', name: 'primaryKey' },
            { key: '38f09263a1mshd66f8c0e1ce6fb3p199700jsn2aa7522bd5fb', name: 'secondaryKey' }
        ];
        this.usageDataFilePath = path.join(__dirname, './Media/database/usage.json'); // Ruta del archivo de uso

        this.initializeUsageData();
    }

    initializeUsageData() {
        // Verifica si el directorio existe, si no, lo crea
        const dir = path.dirname(this.usageDataFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // Crea el directorio y cualquier subdirectorio necesario
            console.log(`Directorio creado: ${dir}`);
        }

        // Verifica si el archivo de uso existe
        if (!fs.existsSync(this.usageDataFilePath)) {
            // Si no existe, se crea con valores iniciales
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
        const data = fs.readFileSync(this.usageDataFilePath);
        return JSON.parse(data);
    }

    saveUsageData(data) {
        fs.writeFileSync(this.usageDataFilePath, JSON.stringify(data, null, 2));
    }

    resetUsageIfNeeded() {
        const now = new Date();
        const usageData = this.loadUsageData();

        for (const key of this.keys) {
            const keyInfo = usageData.keys[key.name];
            if (keyInfo && keyInfo.lastReset) {
                const lastReset = new Date(keyInfo.lastReset);

                // Verificamos si el día actual es diferente del último reinicio
                const isSameDay = now.getUTCDate() === lastReset.getUTCDate() &&
                                  now.getUTCMonth() === lastReset.getUTCMonth() &&
                                  now.getUTCFullYear() === lastReset.getUTCFullYear();

                if (!isSameDay) {
                    console.log(`Reiniciando el uso de la clave: ${key.name}`);
                    keyInfo.usage = 0; // Reiniciar el uso
                    keyInfo.lastReset = now.toISOString(); // Actualizar el último reinicio
                }
            }
        }

        this.saveUsageData(usageData);
    }

    async fetchVideoData(videoId) {
        this.resetUsageIfNeeded(); // Resetear usos si es necesario
        const usageData = this.loadUsageData(); // Cargar datos de uso

        for (let i = 0; i < this.keys.length; i++) {
            const keyInfo = usageData.keys[this.keys[i].name];
            if (keyInfo.usage < 500) { // Comprobar si la clave aún tiene usos disponibles
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

                    // Incrementar el uso de la clave
                    keyInfo.usage++;
                    usageData.keys[this.keys[i].name] = keyInfo; // Actualizar el uso en el objeto
                    this.saveUsageData(usageData); // Guardar los cambios en el archivo

                    // Mostrar información en consola
                    const remainingUses = 500 - keyInfo.usage;
                    const lastReset = new Date(keyInfo.lastReset);
                    console.log(`Usando la clave: ${this.keys[i].name}. Usos restantes: ${remainingUses}. Último reinicio: ${lastReset.toISOString()}`);

                    return result; // Retornar el resultado de la API
                } catch (error) {
                    console.error(`Error usando la clave ${this.keys[i].name}: ${error.message}`);
                    if (i === this.keys.length - 1) {
                        throw new Error("Todas las claves han alcanzado el límite de uso.");
                    }
                }
            } else {
                console.log(`La clave ${this.keys[i].name} ha alcanzado su límite de uso diario.`);
                // Cambiar a la siguiente clave
            }
        }
    }
}

// Exportar la clase Rapi
module.exports = {
    Rapi
};