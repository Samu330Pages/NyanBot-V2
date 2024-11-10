module.exports = async function(m, reply, nyanBot2, text, prefix, command, sendCarousel, stcReac) {
    if (!text) {
        return reply(`*Por favor, proporciona un término de búsqueda. Ejemplo:*\n\n${prefix + command} [término]`);
    }
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });
    stcReac('lupa', '_*Buscando imágenes en Pinterest...*_ 🔎');

    try {
        const results = await require("../lib/pin.js").search(text);

        if (!results || results.length === 0) {
            return reply(`*No se encontraron imágenes para el término:* ${text}`);
        }

        const limitedResults = results.slice(0, 10);
        let contents = [];

        limitedResults.forEach((image) => {
            contents.push({
                header: {
                    imageMessage: image,
                    hasMediaAttachment: true,
                },
                body: {
                    text: text
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Ver imagen 🐢`,
                            url: image
                        })
                    }]
                },
            });
        });

        await sendCarousel(m.chat, {}, {
            header: `*Resultados de tu búsqueda de ${text} en Pinterest 📍*\n`,
            footer: `Search by Samu330.com`,
            cards: contents
        });

        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        });
    } catch (error) {
        console.error('Error en la búsqueda de Pinterest:', error);
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo por favor! 🙂*`);
    }
};
