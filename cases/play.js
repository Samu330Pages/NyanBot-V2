const fetch = require('node-fetch');
const yts = require('yt-search');
const forma1 = '`';
const {
    reSize
} = require('../lib/samufuncs')
    

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
                    `- *Duración:* ${video.timestamp}\n` +
                    `- *Autor:* ${video.author.name}\n` +
                    `- *Vistas:* ${formatNumber(video.views)}\n\n` +
                    `*⚠️ Instrucciones de descarga:*\n` +
                    `Menciona con ${forma1}v${forma1} para descargar el video.\n` +
                    `Menciona con ${forma1}a${forma1} para descargar el audio.\n\n` +
                    `${readmore}Link: ~${video.url}~`;

    const img = await (await fetch(video.thumbnail)).buffer();
    await nyanBot2.sendMessage(m.chat, {
        location: {
            name: video.title,
            address: 'Para descargar, menciona el texto de abajo siguiendo las instrucciones!',
            url: 'https://samu330.com',
            jpegThumbnail: await reSize(img, 200, 200)
        }
    });
    await nyanBot2.sendMessage(m.chat, {
        text: caption
    });

    nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
};
