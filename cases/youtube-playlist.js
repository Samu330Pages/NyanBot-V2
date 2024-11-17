const yts = require('yt-search')
const {
    isUrl
} = require('../lib/samufuncs')

module.exports = async function(text, m, reply, nyanBot2, sendCarousel, stcReac, prefix, command) {

    if (!text || isUrl(text)) {
        return reply(`*Por favor, solo proporciona el nombre de la playlist, no incluyas links. Ejemplo:*\n\n${prefix+command} _*JuegaGerman*_`);
    }
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    stcReac('lupa', '_*Generando Playlist...*_ 📃')
    try {

        const results = await yts(`playlist ${text}`);
        const playlistResults = results.all.filter(item => item.type === 'list');

        if (playlistResults.length === 0) {
            return reply(`No se encontraron playlists para: ${text}`);
        }
        const playlist = playlistResults[0];
        const listId = playlist.listId;
        const listDetails = await yts({
            listId
        });
        let contents = [];
        const maxVideosToShow = 10;
        const videoCount = listDetails.size;

        listDetails.videos.slice(0, maxVideosToShow).forEach((video) => {
            let content = `◦  *Título*: ${video.title || 'Desconocido'}\n`;
            content += `◦  *Autor*: ${video.author.name || 'Desconocido'}\n`;
            content += `◦  *Duración*: ${video.duration || 'Desconocido'}`;

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
                            copy_code: `${prefix}yta https://youtube.com/watch?v=${video.videoId}`
                        })
                    }, {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar Video! 📽️`,
                            copy_code: `${prefix}ytv https://youtube.com/watch?v=${video.videoId}`
                        })
                    }]
                },
            });
        });

        const headerMessage = `Se encontraron ${videoCount} videos en la playlist "*${listDetails.title}*".\n` +
            `*Vistas*: ${listDetails.views || 'Desconocido'}\n` +
            `*Fecha*: ${listDetails.date || 'Desconocido'}\n` +
            `⚠️ *IMPORTANTE!!* ￬￬\n` +
            `_Se mostrarán solo los primeros ${maxVideosToShow} videos._\n` +
            `_Para descargar, solo desliza sobre los resultados y toca el botón para copiar el comando, luego envíalo y listo! 😁_`;
        await sendCarousel(m.chat, {}, {
            header: headerMessage,
            footer: `${botname}`,
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
        console.error('Error en la búsqueda de playlists de YouTube:', error);
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
    }

}
