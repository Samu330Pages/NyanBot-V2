const yts = require('yt-search')
const {
    formatNumber
} = require('../lib/samufuncs')

module.exports = async function(m, reply, text, prefix, command, nyanBot2, stcReac, sendCarousel) {
    if (!text) {
        return reply(`*Por favor, proporciona un término de búsqueda. Ejemplo:*\n\n${prefix + command} JuegaGerman`);
    }
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    stcReac('lupa', '_*Buscando resultados...*_ 🔎')
    try {
        const results = await yts(text);
        const videoResults = results.all.filter(video => video.type === 'video');
        const limitedResults = videoResults.slice(0, 10);
        let contents = [];
        limitedResults.forEach((video) => {
            let content = `◦  *Titulo*: ${video.title || 'Desconocido'}\n`;
            content += `◦  *Duración*: ${video.timestamp || 'Desconocido'}\n`;
            content += `◦  *Vistas*: ${formatNumber(video.views) || 'Desconocido'}\n`;
            content += `◦  *Publicado*: ${video.ago || 'Desconocido'}\n`;
            content += `◦  *Autor*: ${video.author.name || 'Desconocido'}`;

            contents.push({
                header: {
                    imageMessage: video.thumbnail,
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar Audio! 🎧`,
                            copy_code: `${prefix}yta ${video.url}`
                        })
                    }, {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar video! 📽️`,
                            copy_code: `${prefix}ytv ${video.url}`
                        })
                    }]
                },
            });
        });

        await sendCarousel(m.chat, {}, {
            header: `🍟 *Resultados de tu búsqueda de ${text}*\n\n⚠️ *IMPORTANTE!!* ￬￬\n> _Para descargar, solo desliza sobre los resultados y toca el botón para copiar, y copiaras el comando, solo envialo, y listo! 😁_`,
            footer: `${global.botname}`,
            cards: contents
        });

        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        });
    } catch (error) {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });
        console.error('Error en la búsqueda de YouTube:', error);
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
    }
}
