const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function recognizeSong(audioFilePath) {
    try {
        const audioUrl = `data:audio/mpeg;base64,${fs.readFileSync(audioFilePath, 'base64')}`;

        const options = {
            method: 'GET',
            url: 'https://shazam-song-recognition-api.p.rapidapi.com/recognize/url',
            params: {
                url: audioUrl
            },
            headers: {
                'x-rapidapi-key': process.env.SHAZAM_RAPID_API_KEY,
                'x-rapidapi-host': 'shazam-song-recognition-api.p.rapidapi.com'
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
