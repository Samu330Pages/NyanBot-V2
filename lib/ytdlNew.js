const fs = require('fs');
let ytdl = require("@slipknot/ytdl-core");

let cookies = fs.readFileSync('./lib/cookies.txt', 'utf-8');

const sYtdl = async(url) => {
    let agent = ytdl.createAgent(JSON.parse(cookies));
    let data = await ytdl.getInfo(url, { agent })
    let format = data.formats
    let details = data.videoDetails
    let object = []
    for (let i = 0; i < format.length; i++) {
        let video = (format[i].qualityLabel == '1080p') ? (format[i].qualityLabel == '1080p') : (format[i].qualityLabel == '720p') ? (format[i].qualityLabel == '720p') : (format[i].qualityLabel == '480p') ? (format[i].qualityLabel == '480p') : (format[i].qualityLabel == '360p') ? (format[i].qualityLabel == '360p') : (format[i].qualityLabel == '240p') ? (format[i].qualityLabel == '240p') : (format[i].qualityLabel == '144p');
            if (format[i].container == 'mp4' && format[i].hasVideo == true && format[i].hasAudio == true && video) {
                let vid = format[i]
                object.push({
                title: details.title,
                duration: details.lengthSeconds,
                views: details.viewCount,
                category: details.category,
                publishDate: details.publishDate,
                author: `${details.author.name} (${details.author.user})`,
                thumbnail: details.thumbnails[0].url,
                quality: vid.qualityLabel,
                url: vid.url
            })
        }
    }
    return object
}

module.exports = { sYtdl }
