const fs = require('fs');
let ytdl = require("@slipknot/ytdl-core");

let cookies = fs.readFileSync('cookies.txt', 'utf-8');

const ytdl = async(url) {
    let agent = ytdl.createAgent(JSON.parse(cookies));
    let data = await ytdl.getInfo(url, { agent })
    return data
}

module.exports = { ytdl }
