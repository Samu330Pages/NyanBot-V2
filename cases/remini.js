const {
    remini
} = require('../lib/remini')
const fs = require('fs')

module.exports = async function(m, reply, nyanBot2, prefix, command, quoted, mime) {
if (!/image/.test(mime)) return reply(`*por favor envía o etiqueta una imagen junto con el comando:* ${prefix + command}`)
nyanBot2.sendMessage(m.chat, {
    react: {
        text: '🕒',
        key: m.key
    }
});
let media = await quoted.download()
let proses = await remini(media, "enhance")
await resizeImage(proses, 2)
    .then(resizedBuffer => {
        fs.writeFileSync('hd.jpg', resizedBuffer);
        reply('_*Se agregó calidad a su imagen, espere mientras se agregan pixeles!*_ 👾.');
    })
    .catch(error => {
        reply(error.message);
    });
nyanBot2.sendMessage(m.chat, {
    document: fs.readFileSync("hd.jpg"),
    mimetype: 'image/png',
    fileName: `HD ${date}`,
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
fs.unlinkSync('hd.jpg')
}
};
