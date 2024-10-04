const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function recognizeSong(audioFilePath) {
    try {
        // Convertir el archivo de audio a base64
        const audioBuffer = fs.readFileSync(audioFilePath);
        const base64 = audioBuffer.toString('base64');

        const options = {
            method: 'POST',
            url: 'https://shazam.p.rapidapi.com/songs/detect',
            headers: {
                'content-type': 'text/plain',
                'x-rapidapi-key': process.env.SHAZAM_RAPID_API_KEY,
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            },
            data: base64
        };

        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error al reconocer la canción:', error);
        throw error;
    } finally {
        // Eliminar el archivo de audio después de usarlo
        fs.unlinkSync(audioFilePath);
    }
}

module.exports = {
    recognizeSong
};
