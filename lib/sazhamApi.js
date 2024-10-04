const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function recognizeSong(audioFilePath) {
    try {
        const audioBuffer = fs.readFileSync(audioFilePath);

        const formData = new FormData();
        formData.append('file', audioBuffer, path.basename(audioFilePath));

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
