module.exports = async function(text, m, reply, nyanBot2, sendCarousel, stcReac, command, prefix) {

    if (!text) {
        return reply(`*Por favor, proporciona un término de búsqueda. Ejemplo:*\n\n${prefix + command} moana`);
    }
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    stcReac('lupa', '_*Buscando películas...*_ 🔎');
    try {
        const results = await require("../lib/pelisDl.js").getMovieData(text);
        const movies = results.movies;
        let contents = [];

        movies.forEach((movie) => {
            let content = `◦  *Título*: ${movie.title || 'Desconocido'}\n`;
            content += `◦  *Año*: ${movie.year || 'Desconocido'}\n`;
            content += `◦  *Calidades disponibles*:\n`;
            const buttons = [];
            if (movie.firstLink) {
                buttons.push({
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: `${movie.firstTitle} 🎥`,
                        copy_code: `${prefix}pelidl ${movie.firstLink}|${movie.title}`
                    })
                });
            }
            if (movie.secondLink) {
                buttons.push({
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: `${movie.secondTitle} 🎥`,
                        copy_code: `${prefix}pelidl ${movie.secondLink}|${movie.title}`
                    })
                });
            }
            if (movie.thirdLink) {
                buttons.push({
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: `${movie.thirdTitle} 🎥`,
                        copy_code: `${prefix}pelidl ${movie.thirdLink}|${movie.title}`
                    })
                });
            }

            contents.push({
                header: {
                    imageMessage: movie.img,
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: buttons,
                },
            });
        });

        await sendCarousel(m.chat, {}, {
            header: `📼 *Resultados de tu búsqueda de ${text}*\n\n⚠️ *IMPORTANTE!!* ￬￬\n> _Desliza sobre los resultados, toca el botón para copiar el comando, solo envíalo de vuelta y listo! 😁_`,
            footer: `By *${results.creator} | ${results.website}*`,
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
        console.error('Error en la búsqueda de películas:', error);
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo por favor! 🙂*`);
    }
}
