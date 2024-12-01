const scp = require('../lib/scraper')

module.exports = async function(text, m, reply, nyanBot2, sender, sendVidCarousel, command, prefix) {
    if (!text) return reply('*Porfavor incluye junto al comando una solicitud a buscar en ⚫ _TikTok_ 🔴*');
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '💬',
            key: m.key
        }
    });

    try {
        let data = await scp.tiktokSearch(text);
        const limitedResults = data.resultado.slice(0, 5);
        let contents = [];
        for (let video of limitedResults) {
            let content = `◦  *${text}*\n`;
            contents.push({
                header: {
                    videoMessage: video.videoUrl,
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Ver video! 😛',
                            url: `${video.videoUrl}`
                        })
                    }]
                },
            });
        }

        await sendVidCarousel(m.chat, {}, {
            header: `*⚫ Resultados de tu búsqueda! 🔴*\n`,
            footer: "Search by *Samu330.com*",
            cards: contents
        });
    } catch (error) {
        console.error('Error en la búsqueda:', error);
        return reply(`Ocurrió un error al realizar la búsqueda de ${text}. Intenta nuevamente más tarde.\n${error.message}`);
    }
}
