const fs = require('fs');
let ytdl = require("@slipknot/ytdl-core");

let cookies = fs.readFileSync('./lib/cookies.txt', 'utf-8');

const sYtdl = async(url) => {
    let agent = ytdl.createAgent(JSON.parse(cookies));
    let data = await ytdl.getInfo(url, { agent })
    return data
}

module.exports = { sYtdl }
