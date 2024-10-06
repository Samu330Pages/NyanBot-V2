const fetch = require('node-fetch');
const FormData = require('form-data');

const token = '70d0e2c549dcf2b36f63d5ec3a2a780e'; // Tu token de AudD

class AudD {
    getBuffer = (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url);
                const buffer = await response.buffer();
                resolve(buffer);
            } catch (error) {
                reject(error);
            }
        });
    }

    recognize = (source) => new Promise(async (resolve, reject) => {
        try {
            const file = Buffer.isBuffer(source) ? source : source.startsWith('http') ? await this.getBuffer(source) : source;
            const formData = new FormData();
            formData.append('file', file, { filename: 'tmp.mp3' });
            formData.append('return', 'apple_music,spotify');
            formData.append('api_token', token);
            const response = await fetch('https://api.audd.io/', {
                method: 'POST',
                body: formData,
                headers: formData.getHeaders(),
            });
            const data = await response.json();
            resolve({
                creator: 'qRei',
                status: true,
                data: data
            });
        } catch (e) {
            reject({
                creator: 'qRei',
                status: false,
                msg: e.toString()
            });
        }
    });
}

/**
 * Reconoce la música a partir de un archivo de audio.
 * @param {Buffer|string} source - El archivo de audio o la URL del archivo.
 * @returns {Promise<{
 *   creator: string,
 *   status: boolean,
 *   data: {
 *     result: {
 *       artist: string,
 *       title: string,
 *       album: string,
 *       release_date: string,
 *       label: string,
 *       timecode: string,
 *       song_link: string,
 *       apple_music: {
 *         url: string
 *       },
 *       spotify: {
 *         external_urls: {
 *           spotify: string
 *         }
 *       }
 *     }
 *   }
 * }>}
 */
const recognizeMusic = async (source) => {
    const audD = new AudD();
    const recognitionResult = await audD.recognize(source);
    return recognitionResult;
};

module.exports = recognizeMusic;
