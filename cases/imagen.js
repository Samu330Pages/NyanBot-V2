const fg = require('api-dylux')

module.exports = async function(m, reply, nyanBot2, text, prefix, command, stcReac) {
    const query = text || m.quoted?.text;
    if (!query) {
        return reply(`Por favor, proporciona un término de búsqueda de imágenes.\n*Ejemplo:* ${prefix + command} gatos`);
    }

    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key
        }
    });

    try {
        let r = await fg.googleImage(query);
        if (r.length === 0) {
            return reply("No se encontraron imágenes para la búsqueda proporcionada.");
        }

        const sendRandomImage = async () => {
            const randomIndex = Math.floor(Math.random() * r.length);
            const imageUrl = r[randomIndex];

            await nyanBot2.sendMessage(m.chat, {
                image: await (await fetch(imageUrl)).buffer(),
                caption: `*🍟 Resultado de tu búsqueda:*\n${query}\n`
            }, {
                quoted: m
            })
        };
        await sendRandomImage();

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
        console.error('Error en la búsqueda de imágenes:', error);
        reply(`${error}`)
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
    }
};
