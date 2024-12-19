const forma1 = '`';
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

module.exports = async function(text, m, reply, nyanBot2) {
    if (!text) return reply("*Incluye junto al comando la aplicación que deseas buscar! 🙃*");
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    let r = require("../lib/apk-dl");
    let i = await r.apkcombo.search(text);

    const limitedApps = i.slice(0, 6);

    let caption = `${forma1}APKCOMBO DL 🕹️${forma1}\n\n📱 *Resultados de búsqueda para "${text}"*\n\n`;

    if (limitedApps.length === 0) {
        caption += `❌ *No se encontraron aplicaciones.* ❌`;
    } else {
        limitedApps.forEach(app => {
            caption += `◦  *${app.name}* - ${app.rating} (${app.downloads})\n\n`;
        });
        caption += `⚠️ _INSTRUCCIONES_ ⚠️: *Para descargar una aplicación, solo etiqueta este mensaje con el número correspondiente a la aplicación que deseas.*\n`;
        caption += `\n_*Ejemplo:*_ ${forma1}2${forma1}`;
        caption += `\n${readmore}🔗 *Links*\n`;
        limitedApps.forEach(app => {
            caption += `${app.link}\n`;
        });
    }

    let s = await require("../lib/canvaImg.js").createAppListImage(i, text);
    await nyanBot2.sendMessage(m.chat, {
        image: s,
        caption: caption
    }, {
        quoted: m
    });
}
