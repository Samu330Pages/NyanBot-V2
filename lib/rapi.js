const axios = require('axios');

class Rapi {
    constructor() {
        this.keys = [
            { key: '657fdc78a0mshcbd4479e816afaap128a12jsn660a39727c61', name: 'primaryKey' },
            { key: '38f09263a1mshd66f8c0e1ce6fb3p199700jsn2aa7522bd5fb', name: 'secondaryKey' }
        ];
    }

    getRandomKey() {
        const randomIndex = Math.floor(Math.random() * this.keys.length);
        return this.keys[randomIndex];
    }

    async fetchVideoData(videoId) {
    const apiKey = this.getRandomKey();
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

        if (data.status === "OK") {
            if (data.isPrivate) {
                throw new Error("El video es privado y no se puede descargar :c");
            }

            const author = data.channelTitle || 'Desconocido';
            const videoFormat = data.formats.find(format => format.mimeType.includes('video'));
            const audioFormat = data.formats.find(format => format.mimeType.includes('audio'));

            const videoDownloadLink = videoFormat ? videoFormat.url : 'No disponible';
            const contentLength = videoFormat ? videoFormat.contentLength : 'No disponible';
            const audioBitrate = audioFormat ? audioFormat.bitrate : 'No disponible';

            const formattedResponse = {
                author: author,
                title: data.title,
                thumbnail: data.thumbnail[0]?.url,
                publishDate: data.publishDate,
                likes: data.viewCount,
                dislikes: null,
                comments: null,
                videoDownloadLink: videoDownloadLink,
                category: data.category,
                contentLength: contentLength,
                qualityLabel: videoFormat ? videoFormat.qualityLabel : 'No disponible',
                approxDurationMs: data.approxDurationMs,
                audioBitrate: audioBitrate
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
