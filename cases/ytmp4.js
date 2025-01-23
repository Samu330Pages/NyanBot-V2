const fetch = require('node-fetch');
const ytdl = require('../lib/ytdlNew.js');
const { getBuffer } = require('../lib/samufuncs.js');
const {
    formatNumber
} = require('../lib/samufuncs')
const forma1 = '`'

module.exports = async function(text, m, reply, nyanBot2, useLimit, stcReac, sender, command, prefix) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(global.mess.limit);
    if (global.DATABASE.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);

    if (!/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{12})|(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{10})/.test(text)) {
        return reply(`*Es necesario un link válido de YouTube.*\n_*Ejemplo de uso*_\n\n${prefix+command} link...`);
    }

    nyanBot2.sendMessage(m.chat, { react: { text: '🕑', key: m.key } });
    reply(`*Esperé un momento, se está procesando su solicitud...* 😙`);

    try {
        const v = await require('ruhend-scraper').ytmp4(text)
        //const durationMinutes = Math.floor(r[0].duration / 60);
        //if (r[0].duration >= 10800) return reply(`*No se puede descargar este video ya que supera el límite de duración, este video dura ${durationMinutes} minutos*`);
        //const publishDate = new Date(r[0].publishDate).toLocaleDateString();

        //const video = await getBuffer(`${r[0].url}`);
        const caption = `*Descarga completa! 🍟*\n\n*Vistas:* ${v.views)}\n*Duración:* ${v.duration}\n*Fecha de publicación:* ${v.upload}\n*Vistas:* ${v.views}\n\n*Encontrarás el video con el nombre:* ${v.title}`;

        /*if (durationMinutes > 30) {
            await nyanBot2.sendMessage(m.chat, {
                document: video,
                fileName: `${r[0].title}.mp4`,
                mimetype: 'video/mp4',
                caption: caption,
                jpegThumbnail: await (await fetch(`${r[0].thumbnail}`)).buffer()
            }, { quoted: m });
        } else {*/
            await nyanBot2.sendMessage(m.chat, {
                video: {url: v.video},
                caption: caption,
                fileName: `${v.title}.mp4`,
                mimetype: 'video/mp4'
            }, { quoted: m });
        //}
    } catch (error) {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error al procesar la solicitud:', error);
        stcReac('error', `_*❌ La descarga ha fallado!*_\n*Intenta de nuevo! 🙂*`);
    }

    useLimit(sender, 30);
};
