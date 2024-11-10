const {
    remini
} = require('../lib/remini')

module.exports = async function(m, reply, nyanBot2, prefix, command, quoted, mime) {
    if (!/image/.test(mime)) return reply(`*por favor envía o etiqueta una imagen junto con el comando:* ${prefix + command}`)
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    let media = await quoted.download()
    let recolor = await remini(media, "recolor")
    nyanBot2.sendMessage(m.chat, {
        image: recolor,
        caption: mess.success
    }, {
        quoted: m
    })
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '✅',
            key: m.key
        }
    });
};
