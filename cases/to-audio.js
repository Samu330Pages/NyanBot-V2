const {
    toAudio
} = require('../lib/converter')

module.exports = async function(m, reply, nyanBot2, mime, qmsg, command, prefix) {
    if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Porfavor asegúrate de solamente etiquetar el video el cual quieres convertir en audio utilizando El comando:*\n\n${prefix + command}`)
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕑',
            key: m.key
        }
    });
    let media = await nyanBot2.downloadMediaMessage(qmsg)
    let audio = await toAudio(media, 'mp4')
    nyanBot2.sendMessage(m.chat, {
        audio: audio,
        mimetype: 'audio/mpeg'
    }, {
        quoted: m
    })
}
