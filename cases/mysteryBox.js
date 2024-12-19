const {
    randomBytes
} = require('crypto')
const {
    getBuffer
} = require('../lib/samufuncs')

module.exports = async function(nyanBot2, isSamu) {
    if (!isSamu) return
    global.DATABASE.data.game.box[0] = randomBytes(10).toString('base64')
    nyanBot2.sendMessage("120363348063997699@g.us", {
        text: `\`MYSTERY BOX\`\n\n*SE HA DESPLEGADO UNA NUEVA CAJA MISTERIOSA!! 🔮*\n_*REACCIONA CON EL EMOJI ❤️ PARA ABRIR ESTA CAJA!!*_\n\n_Disponible solo para una persona, se habilitan cajas en tiempos aleatorios, así que estate atento a la próxima!_ ⚠️`,
        contextInfo: {
            "externalAdReply": {
                "containsAutoReply": true,
                "title": "NEW MYSTERY BOX HAS BEEN RELEASED! ✈️",
                "body": "Click aquí 👉🏻 [ ⭐ ]",
                "previewType": "PHOTO",
                "thumbnailUrl": ``,
                "thumbnail": await getBuffer('https://images2.wikia.nocookie.net/__cb20120729235044/thesimssocial/images/a/ae/Tycoon_mystery_box_icon.png'),
                "sourceUrl": `https://whatsapp.com/channel/0029VaDVQFVL7UVd71R7bY23`
            }
        }
    }, {
        messageId: "MysteryBox-" + randomBytes(8).toString('hex')
    })
}
