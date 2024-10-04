const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function recognizeSong(audioFilePath) {
    try {
        const audioSize = fs.statSync(audioFilePath).size;

        if (audioSize > 5 * 1024 * 1024) { // Límite de 5 MB
            throw new Error('El archivo de audio es demasiado grande. Por favor, intenta con un archivo más pequeño.');
        }

        const audioBuffer = fs.readFileSync(audioFilePath);

        const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });

        const formData = new FormData();
        formData.append('file', audioBlob, path.basename(audioFilePath));

        const options = {
            method: 'POST',
            url: 'https://shazam-song-recognition-api.p.rapidapi.com/recognize',
            headers: {
                'x-rapidapi-key': process.env.SHAZAM_RAPID_API_KEY,
                'x-rapidapi-host': 'shazam-song-recognition-api.p.rapidapi.com',
                ...formData.getHeaders()
            },
            data: formData
        };

        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error al reconocer la canción:', error);
        throw error;
    } finally {
        fs.unlinkSync(audioFilePath);
    }
}

module.exports = {
    recognizeSong
};
