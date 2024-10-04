const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

async function recognizeSong(audioFilePath) {
    try {
        const audioSize = fs.statSync(audioFilePath).size;

        if (audioSize > 5 * 1024 * 1024) {
            throw new Error('El archivo de audio es demasiado grande. Por favor, intenta con un archivo más pequeño.');
        }

        const audioBuffer = fs.readFileSync(audioFilePath);

        const formData = new FormData();
        formData.append('file', audioBuffer, path.basename(audioFilePath));

        const options = {
            method: 'POST',
            url: 'https://shazam-api-free.p.rapidapi.com/shazam/recognize/',
            headers: {
                'x-rapidapi-key': '38f09263a1mshd66f8c0e1ce6fb3p199700jsn2aa7522bd5fb',
                'x-rapidapi-host': 'shazam-api-free.p.rapidapi.com',
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
