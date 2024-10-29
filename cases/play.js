const fetch = require('node-fetch');
const yts = require('yt-search');

module.exports = async function(text, m, reply, isUrl, reactionLoad, reactionOk, reactionError, sendReplyButton, formatNumber, prefix) {
    if (!text) return reply(`Ejemplo: ${prefix}play piel canela`);
    if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`);

    let playId = reactionLoad(m.chat, m.key);
    const r = await yts(text);
    if (!r || !r.videos || r.videos.length === 0) {
        reactionError(m.chat, m.key, playId);
        return reply("No se encontraron videos para esa búsqueda.");
    }
    
    const video = r.videos[0];
    const buttons = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: 'Descargar audio 🎙️',
                id: `${prefix}ytmp3 ${video.url}`
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: 'Descargar video 🎬',
                id: `${prefix}ytv ${video.url}`
            }),
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: 'Ver en la app ❤️',
                url: `${video.url}`,
                merchant_url: `${video.url}`
            }),
        },
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: 'Buscar letra de la canción 📝',
                id: `${prefix}letra ${text}`
            }),
        }
    ];
    
    await sendReplyButton(m.chat, buttons, m, {
        content: `> *YT Play 🍟.*\n\n- *Título:* ${video.title}\n- *Duración:* ${video.timestamp}\n- *Autor:* ${video.author.name}\n- *Vistas:* ${formatNumber(video.views)}\n`,
        media: await (await fetch(`${video.thumbnail}`)).buffer()
    });
    
    reactionOk(m.chat, m.key, playId);
};
