const {
    fbdl
} = require('ruhend-scraper')
const forma1 = '`'

module.exports = async function(m, text, reply, nyanBot2, args, sender, stcReac, command, useLimit, prefix) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(mess.limit);
    if (global.DATABASE.data.users[sender].limit < 20) return reply(`*Lo siento, pero este comando requiere 20 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !/^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(text)) return reply(`*Es necesario un link válido de Facebook.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://facebook.com/....`);
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕑',
            key: m.key
        }
    });
    try {
        let res = await fbdl(text);
        let result = res.data;
        let data;
        if (data = result.find(i => i.resolution === "720p (HD)")) {
            reply('*Se está enviando el video en resolución HD, espera un momento...*');
        } else {
            reply('*No se pudo obtener resolución HD, se está enviando el video en SD...*');
            data = result.find(i => i.resolution === "360p (SD)");
        }

        let video = data.url;

        await nyanBot2.sendMessage(m.chat, {
            video: {
                url: video
            },
            caption: '> *FaceBook Dl*',
            mimetype: 'video/mp4'
        }, {
            quoted: m
        });
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        });
        useLimit(sender, 20)
    } catch (e) {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });
        reply(`${e}`)
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
    }
}
