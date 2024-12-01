const {
  igdl
} = require('ruhend-scraper');
const forma1 = '`';
module.exports = async function(text, m, reply, sender, stcReac, useLimit, nyanBot2, prefix, command) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(mess.limit);
    if (global.DATABASE.data.users[sender].limit < 20) return reply(`*Lo siento, pero este comando requiere 20 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (!/^https?:\/\/(www\.)?instagram\.com\/.+$/.test(text)) return reply(`*Es necesario un link válido de Instagram.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://instagram.com/...`);

    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕑',
            key: m.key
        }
    });
    reply('> *Esperé un momento, se está procesando su solicitud...*');

    try {
        const {
            data
        } = await igdl(text);

        if (data.length > 1) {
            const numImages = Math.sqrt(data.length);
            await reply(`_*Sus imágenes se están enviando...*_`)
            for (let i = 0; i < numImages; i++) {
                if (data[i].url.includes('.jpg') || data[i].url.includes('.png')) {
                    const imageBuffer = await (await fetch(data[i].url)).buffer();
                    await nyanBot2.sendMessage(m.chat, {
                        image: imageBuffer,
                        caption: `*Imagen ${i + 1} de ${numImages}*`
                    }, {
                        quoted: m
                    });
                }
            }
        } else if (data[0].url.includes('.jpg') || data[0].url.includes('.png')) {
            const imageBuffer = await await (await fetch(data[0].url)).buffer();
            await nyanBot2.sendMessage(m.chat, {
                image: imageBuffer,
                caption: `> IG-DL 🌭`
            }, {
                quoted: m
            });
        } else {
            const videoBuffer = await await (await fetch(data[0].url)).buffer();
            await nyanBot2.sendMessage(m.chat, {
                video: videoBuffer,
                caption: `> IG-DL 🌭`,
                fileName: 'instagram_video.mp4',
                mimetype: 'video/mp4'
            }, {
                quoted: m
            });
        }
    } catch (error) {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });
        console.error('Error al procesar la solicitud:', error);
        reply(`${error}`)
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
    }

    useLimit(sender, 20)
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '✅',
            key: m.key
        }
    });
}
