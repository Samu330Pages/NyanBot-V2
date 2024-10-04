const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function recognizeSong(audioFilePath) {
    try {
        const audioBuffer = fs.readFileSync(audioFilePath);
        const base64 = audioBuffer.toString('base64');

        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/songs/detect',
            params: {
                audio: base64
            },
            headers: {
                'x-rapidapi-key': '38f09263a1mshd66f8c0e1ce6fb3p199700jsn2aa7522bd5fb',
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
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
