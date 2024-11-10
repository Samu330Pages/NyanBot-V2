module.exports = async function(m, reply, nyanBot2, prefix, command, quoted, mime) {
    if (!quoted) return replygcxeon(`*Porfavor etiqueta una imagen con el comando para poder realizar el aumento de calidad!* 🖼️`)
    if (!/image/.test(mime)) return reply(`*por favor envía o etiqueta una imagen junto con el comando:* ${prefix + command}`)
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    const {
        remini
    } = require('../lib/remini')
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
