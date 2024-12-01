const axios = require('axios')

async function searchLyrics(term) {
    try {
        if (!term) return `"Proporciona un titulo!"`;
        const geniusResponse = await axios.get(
            `https://deliriussapi-oficial.vercel.app/search/genius?q=${term}`,
        );
        const geniusData = geniusResponse.data;
        if (!geniusData.length) return `Sin resultados para "${term}"`;
        const lyricsUrl = geniusData[0].url;
        const lyricsResponse = await axios.get(
            `https://deliriussapi-oficial.vercel.app/search/lyrics?url=${lyricsUrl}&parse=false`,
        );
        const result = {
            status: true,
            creador: "Samu330 👑",
            title: geniusData[0].title || "",
            fullTitle: geniusData[0].fullTitle || "",
            artist: geniusData[0].artist.name || "",
            artistUrl: geniusData[0].artist.url || "",
            id: geniusData[0].id || "",
            enpoint: geniusData[0].endpoint || "",
            instrumental: geniusData[0].instrumental,
            image: geniusData[0].image || "",
            url: geniusData[0].url || "",
            lyrics: lyricsResponse.data.lyrics || "",
        };
        return result;
    } catch (error) {
        console.error(error.message);
        return {
            creador: "Samu330 👑",
            status: false,
            message: new Error(error).message,
        };
    }
}

module.exports = async function(text, m, reply, nyanBot2, stcReac, command, prefix) {
    if (!text) return reply(`¡Por favor ingresa el nombre de la canción para buscar la letra!\n\nEjemplo:\n\n*${prefix + command} me olvide de vivir*`);

    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕑',
            key: m.key
        }
    });
    stcReac('lupa', '_*Buscando Lyrics*_ ✍🏻')
    try {
        let lyric = await searchLyrics(text);

        if (lyric.status == false) {
            nyanBot2.sendMessage(m.chat, {
                react: {
                    text: '❌',
                    key: m.key
                }
            });
            return reply(`*Lo siento, pero no se encontraron resultados de tu búsqueda! Intenta buscar con un nombre de canción válido.*\n_Intentaste buscar ${text}_`);
        }

        let lyricCaption = `_*${lyric.title}*_\n\n- *Artista:* ${lyric.artist}\n- *Letra*:\n\n${lyric.lyrics}`;
        await nyanBot2.sendMessage(m.chat, {
            text: lyricCaption,
            contextInfo: {
                "externalAdReply": {
                    "containsAutoReply": true,
                    "title": `(${lyric.fullTitle})`,
                    "body": '',
                    "thumbnailUrl": lyric.image,
                    "sourceUrl": lyric.artistUrl
                }
            }
        }, {
            quoted: m
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
        console.error('Error al procesar la solicitud:', error);
        reply(`Ocurrió un error al intentar obtener la letra. Por favor, verifica el nombre de la canción y vuelve a intentarlo.\n${error}`);
    }
}
