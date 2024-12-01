const fetch = require('node-fetch');
const ytdl = require('../lib/ytdlNew.js');
const { toAudio } = require('../lib/converter');
const {
    formatNumber
} = require('../lib/samufuncs')
const forma1 = '`'

module.exports = async function(link, m, reply, nyanBot2, useLimit, stcReac, sender, command, prefix) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(global.mess.limit);
    if (global.DATABASE.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);

    if (!/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})|(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{12})/.test(link)) {
        return reply(`*Es necesario un link válido de YouTube.*\n_*Ejemplo de uso*_\n\n${prefix+command} link...`);
    }

    nyanBot2.sendMessage(m.chat, { react: { text: '🕑', key: m.key } });
    reply(`*Esperé un momento, se está procesando su solicitud...* 😙`);

    try {
        let r = await ytdl.sYtdl(link);
        
        const durationMinutes = Math.floor(r[0].duration / 60);
        if (r[0].duration >= 3600) return reply(`*No se puede descargar este audio ya que supera el límite de duración, este video dura ${durationMinutes} minutos*`);
        const publishDate = new Date(r[0].publishDate).toLocaleDateString();

        const audioBuffer = await (await fetch(`${r[0].url}`)).buffer();
        let audioC = await toAudio(audioBuffer, 'mp4');

        await nyanBot2.sendMessage(m.chat, {
            document: audioC,
            caption: `*Descarga este documento para guardar el audio en tu reproductor! 📀*\n\n- *Título:* ${r[0].title}\n- *Canal:* ${r[0].author}\n- *Vistas:* ${formatNumber(r[0].views)}\n- *Duración:* ${durationMinutes}m\n- *Categoría:* ${r[0].category}\n- *Fecha de publicación:* ${publishDate}\n`,
            mimetype: "audio/mpeg",
            fileName: `${r[0].title}.mp3`,
            jpegThumbnail: await (await fetch(`${r[0].thumbnail}`)).buffer()
        }, { quoted: m });

        await nyanBot2.sendMessage(m.chat, {
            audio: audioC,
            mimetype: "audio/mpeg",
            fileName: `${r[0].title}.mp3`
        }, { quoted: m });
    } catch (error) {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error al procesar la solicitud:', error);
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo por favor! 🙂*`);
    }
    
    useLimit(sender, 30);
    nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
};
