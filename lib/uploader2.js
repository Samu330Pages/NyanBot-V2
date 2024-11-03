let axios = require('axios')
let { FormData, Blob } = require('form-data')
let { fromBuffer, fileTypeFromBuffer } = require('file-type')
let fetch = require('node-fetch')
let fs = require('fs')
let cheerio = require('cheerio')


async function TelegraPh (buffer) {
const { ext, mime } = await fileTypeFromBuffer(buffer)
const form = new FormData()
const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
form.append('files[]', blob, 'tmp.' + ext)
const res = await fetch('https://qu.ax/upload.php', { method: 'POST', body: form })
const result = await res.json()
if (result && result.success) {
return result.files[0].url
} else {
throw new Error('Failed to upload the file to qu.ax')
}
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new FormData();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}
async function webp2mp4File(path) {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append('new-image-url', '');
                form.append('new-image', fs.createReadStream(path));

                const response = await axios.post('https://ezgif.com/webp-to-mp4', form, {
                    headers: {
                        ...form.getHeaders(),
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                    }
                });

                const $ = cheerio.load(response.data);
                const file = $('input[name="file"]').attr('value');

                if (!file) return resolve({
                    status: false,
                    msg: 'Failed to get conversion file!'
                });

                const procResponse = await axios.post(`https://ezgif.com/webp-to-mp4/${file}`, new URLSearchParams({ file }), {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                const proc$ = cheerio.load(procResponse.data);
                const link = proc$('#output > p.outfile > video > source').attr('src');

                if (!link) return resolve({
                    status: false,
                    msg: 'Failed to convert!'
                });

                resolve({
                    status: true,
                    data: {
                        url: 'https:' + link
                    }
                });
            } catch (e) {
                console.error(e);
                resolve({
                    status: false,
                    msg: e.message
                });
            }
        });
    }

async function floNime(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new FormData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://flonime.my.id/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4File, floNime }
