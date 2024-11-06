const fetch = require('node-fetch');
const yts = require('yt-search');

module.exports = async function(text, m, reply, isUrl, reactionLoad, reactionOk, reactionError, sendMessage, formatNumber, prefix) {
    if (!text) return reply(`Ejemplo: ${prefix}play piel canela`);
    if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`);

    let playId = reactionLoad(m.chat, m.key);
    const r = await yts(text);
    if (!r || !r.videos || r.videos.length === 0) {
        reactionError(m.chat, m.key, playId);
        return reply("No se encontraron videos para esa búsqueda.");
    }

    const video = r.videos[0];

    // Preparar el mensaje con la información del video
    const caption = `> *YT Play 🍟.*\n\n` +
                    `- *Título:* ${video.title}\n` +
                    `- *Duración:* ${video.timestamp}\n` +
                    `- *Autor:* ${video.author.name}\n` +
                    `- *Vistas:* ${formatNumber(video.views)}\n\n` +
                    `Instrucciones:\n` +
                    `Envía "v" para descargar el video.\n` +
                    `Envía "a" para descargar el audio.\n` +
                    `Puedes ver el video en la app aquí: ${video.url}`;

    // Enviar el mensaje con la imagen y la información
    await sendMessage(m.chat, {
        caption: caption,
        media: await (await fetch(video.thumbnail)).buffer()
    }, { quoted: m });

    reactionOk(m.chat, m.key, playId);
};
