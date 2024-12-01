const {
    fetchJson
} = require('../lib/samufuncs')

module.exports = async function(text, m, reply, nyanBot2, command, prefix) {
    let [emoji1, emoji2] = text.split`+`
    if (!emoji1) return reply(`*Te falta el otro emoji:* ${prefix + command} 😅+🥹`)
    if (!emoji2) return reply(`*Te falta el otro emoji*: ${prefix + command} 😅+🥹`)
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    let emoji = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of emoji.results) {
        let encmedia = await nyanBot2.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
        })
    }
}
