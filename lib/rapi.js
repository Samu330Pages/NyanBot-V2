const axios = require('axios');

class Rapi {
    constructor() {
        this.keys = [
            { key: '657fdc78a0mshcbd4479e816afaap128a12jsn660a39727c61', name: 'primaryKey' },
            { key: '38f09263a1mshd66f8c0e1ce6fb3p199700jsn2aa7522bd5fb', name: 'secondaryKey' }
        ];
    }

    // Método para seleccionar una clave aleatoria
    getRandomKey() {
        const randomIndex = Math.floor(Math.random() * this.keys.length);
        return this.keys[randomIndex];
    }

    async fetchVideoData(videoId) {
        const apiKey = this.getRandomKey(); // Obtener una clave aleatoria
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/dl',
            params: { id: videoId },
            headers: {
                'x-rapidapi-key': apiKey.key,
                'x-rapidapi-host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const data = response.data;

            // Verificar que el estado sea OK
            if (data.status === "OK") {
                // Formatear la respuesta
                const formattedResponse = {
                    author: 'Samu330',
                    title: data.title,
                    thumbnail: data.thumbnail[0]?.url, // Tomar la primera miniatura
                    publishDate: data.publishDate,
                    likes: data.viewCount, // Usar viewCount como un indicador de likes
                    dislikes: null, // La API no proporciona esto, puedes cambiar si tienes otra fuente
                    comments: null, // La API no proporciona esto, puedes cambiar si tienes otra fuente
                    videoDownloadLink: data.video, // Enlace de descarga de video
                    audioDownloadLink: data.audio // Enlace de descarga de audio
                };

                return formattedResponse;
            } else {
                throw new Error(`Error en la respuesta de la API: ${data.status}`);
            }
        } catch (error) {
            console.error("Error al obtener los datos del video:", error.message);
            throw new Error("No se pudo obtener la información del video.");
        }
    }
}

module.exports = {
    Rapi
};
