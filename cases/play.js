const fetch = require('node-fetch');
const yts = require('yt-search');
const forma1 = '`';

module.exports = async function(text, m, reply, isUrl, nyanBot2, formatNumber, prefix, readmore) {
    if (!text) return reply(`Ejemplo: ${prefix}play piel canela`);
    if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`);

    nyanBot2.sendMessage(m.chat, { react: { text: '🕓', key: m.key } });
    const r = await yts(text);
    if (!r || !r.videos || r.videos.length === 0) {
        nyanBot2.sendMessage(m.chat, { react: { text: '🔴', key: m.key } });
        return reply("No se encontraron videos para esa búsqueda.");
    }

    const video = r.videos[0];

    const caption = `> *YT Play 🍟.*\n\n` +
                    `- *Título:* ${video.title}\n` +
                    `- *Duración:* ${video.timestamp}\n` +
                    `- *Autor:* ${video.author.name}\n` +
                    `- *Vistas:* ${formatNumber(video.views)}\n\n` +
                    `*⚠️ Instrucciones de descarga:*\n` +
                    `_Etiqueta este mensaje con la opción correspondiente al formato que deseas descargar_ 📂.\n\n` +
                    `Etiqueta con ${forma1}v${forma1} para descargar el video.\n` +
                    `Etiqueta con ${forma1}a${forma1} para descargar el audio.\n\n` +
                    `${readmore}Link: ~${video.url}~`;

    await nyanBot2.sendMessage(m.chat, {
        image: await (await fetch(video.thumbnail)).buffer(),
        caption: caption
    }, { quoted: m });

    nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
};
