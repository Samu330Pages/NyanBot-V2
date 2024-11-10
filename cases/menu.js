const moment = require('moment-timezone')
const canvaImg = require('../lib/canvaImg.js')
const forma1 = '`'
const {
    WAVersion,
    runtime
} = require('../lib/samufuncs')
moment.locale('es');
const time = moment().tz('America/Cancun').format('HH:mm:ss');
const date = moment().tz('America/Cancun').format('DD/MM/YYYY');
if (time < "23:59:00") {
    var timeNow = `❄️ Buenas noches `
}
if (time < "19:00:00") {
    var timeNow = `❄️ Buenas tardes `
}
if (time < "18:00:00") {
    var timeNow = `☃️ Buenas tardes `
}
if (time < "15:00:00") {
    var timeNow = `☃️ Buenas tardes `
}
if (time < "11:00:00") {
    var timeNow = `🎄 Buenos dias `
}
if (time < "05:00:00") {
    var timeNow = `🎄 Buenos dias `
}
module.exports = async function(m, reply, nyanBot2, sender, categories, checkPremiumUser, botNumber) {
const TipoDispositivo = m.key.id.length === 20 ? 'iPhone' : m.key.id.length === 32 ? 'Android' : m.key.id.length === 16 ? 'Baileys' : m.key.id.length === 22 ? 'Web Browser' : m.key.id.length === 18 ? 'Desktop' : m.key.id.length > 21 ? 'Android' : 'WhatsApp web';
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🧃',
            key: m.key
        }
    });

    let registrado = global.DATABASE.data.users[sender].register ? 'Usuario registrado 📌' : 'Usuario no registrado ⚠';
    let nickName = nyanBot2.getName(sender);
    let userNumber = sender.split("@")[0];
    let userPoints = global.DATABASE.data.users[sender].limit;
    let version = await WAVersion();

    let p;
    try {
        p = await nyanBot2.profilePictureUrl(sender, 'image');
    } catch (err) {
        p = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
    }

    const canvasImage = await canvaImg.createCanvasImage(nickName, userNumber, userPoints, p);

    let menuMessage = `${timeNow + nickName}\n\n> ${registrado}\n\n- *Tus puntos:* ${userPoints}\n- *Puntos usados:* ${global.DATABASE.data.users[sender].totalLimit}\n- *Tu dispositivo:* ${TipoDispositivo}\n`;

    const {
        isPremium
    } = checkPremiumUser(sender);
    if (isPremium) {
        const {
            expired
        } = getPremiumExpired(sender);
        const remainingTime = Math.max(expired - Date.now(), 0);
        const timeRemaining = runtime(Math.floor(remainingTime / 1000));

        menuMessage += `- *Estado Premium:* Activo 👑\n- *Tiempo restante:* ${timeRemaining}\n\n`;
    } else {
        menuMessage += `- *Estado Premium:* No activo\n\n`;
    }

    menuMessage += `*Estado del Bot:*\n\n- *Versión de WhatsApp:* ${version}\n- *Activo hace* ${runtime(process.uptime())}\n- *Comandos solicitados:* ${global.DATABASE.data.settings[botNumber].totalhit}\n- *Usuarios activos:* ${Object.keys(global.DATABASE.data.users).length}\n- *Chats totales:* ${Object.keys(global.DATABASE.data.chats).length}\n\n*Menú de Comandos*\n\n`;

    for (const [category, commands] of Object.entries(categories)) {
        menuMessage += `*${category}:*\n`;
        commands.forEach(cmdObj => {
            menuMessage += `- ${forma1}${cmdObj.command}${forma1} ${cmdObj.description}\n`;
        });
        menuMessage += '\n';
    }

    try {
        nyanBot2.sendMessage(m.chat, {
            text: menuMessage,
            contextInfo: {
                externalAdReply: {
                    renderLargerThumbnail: true,
                    mediaType: 1,
                    title: `☃️ ${time} ❄️`,
                    body: date,
                    thumbnail: canvasImage,
                    jpegThumbnail: canvasImage,
                    previewType: "NONE",
                    sourceUrl: 'https://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1',
                }
            }
        }, {
            quoted: m
        })
    } catch (e) {
        return m.reply("*Error*");
    }
};