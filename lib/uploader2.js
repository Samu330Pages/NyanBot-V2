let axios = require('axios')
let FormData = require('form-data')
let { fromBuffer } = require('file-type')
let fetch = require('node-fetch')
let fs = require('fs')
let cheerio = require('cheerio')


function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
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
