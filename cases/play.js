const fetch = require('node-fetch');
const yts = require('yt-search');

module.exports = async function(text, m, reply, isUrl, reactionLoad, reactionOk, reactionError, nyanBot2, formatNumber, prefix, readmore) {
    if (!text) return reply(`Ejemplo: ${prefix}play piel canela`);
    if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`);

    let playId = reactionLoad(m.chat, m.key);
    const r = await yts(text);
    if (!r || !r.videos || r.videos.length === 0) {
        reactionError(m.chat, m.key, playId);
        return reply("No se encontraron videos para esa búsqueda.");
    }

    const video = r.videos[0];

    const caption = `> *YT Play 🍟.*\n\n` +
                    `- *Título:* ${video.title}\n` +
                    `- *Duración:* ${video.timestamp}\n` +
                    `- *Autor:* ${video.author.name}\n` +
                    `- *Vistas:* ${formatNumber(video.views)}\n\n` +
                    `Instrucciones:\n` +
                    `Etiqueta con "v" para descargar el video.\n` +
                    `Etiqueta con "a" para descargar el audio.\n` +
                    `${readmore}Link: ${video.url}`;

    await nyanBot2.sendMessage(m.chat, {
        image: await (await fetch(video.thumbnail)).buffer(),
        caption: caption
    }, { quoted: m });

    reactionOk(m.chat, m.key, playId);
};
