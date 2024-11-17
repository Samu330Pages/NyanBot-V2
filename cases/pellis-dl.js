module.exports = async function(text, m, reply, nyanBot2, command, prefix) {
    if (!text) {
        return reply(`*Por favor, proporciona un link de descarga. Ejemplo:*\n\n${prefix + command} link...`);
    }
    const [link, movieName] = text.split('|');
    if (!link) {
        return reply(`*No se encontró un link válido.*`);
    }
    const caption = `Para descargar la película, necesitas una aplicación de torrent.`;
    nyanBot2.sendMessage(m.chat, {
        document: {
            url: link
        },
        mimetype: 'application/x-bittorrent',
        caption: caption,
        fileName: `${movieName}.torrent`
    });
}
