const {
    formatNumber
} = require('../lib/samufuncs')
const axios = require('axios')
const forma1 = '`'

module.exports = async function(text, m, reply, nyanBot2, useLimit, stcReac, sender, prefix) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(mess.limit);
    if (global.DATABASE.data.users[sender].limit < 10) return reply(`*Lo siento, pero este comando requiere 10 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (!text) return reply(`*Asegúrate de incluir junto al comando un link válido de Twitter 🐦*`)
    try {
        let xInfo = await axios.get(`https://api.dorratz.com/xdown?url=${text}`)
        if (!xInfo.data) return stcReac('error', `_*No sé encontró enlace de descarga*_ 🙃`)
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '🕒',
                key: m.key
            }
        });
        let xCap = `${forma1}X / TWITTER DL 💙${forma1}\n
👍🏻 *Likes:* ${formatNumber(xInfo.data.likes)}
💬 *Respuestas:* ${formatNumber(xInfo.data.replies)}
🔃 *Retweets:* ${formatNumber(xInfo.data.retweets)}
👤 *Autor:* ${xInfo.data.authorName}
🔎 *Nombré de usuario:* ${xInfo.data.authorUsername}\n`
        if (xInfo.data.media[0].type === 'video') {
            await nyanBot2.sendMessage(m.chat, {
                video: {
                    url: xInfo.data.media[0].url
                },
                mimetype: 'video/mp4',
                caption: xCap
            }, {
                quoted: m
            })
        } else {
            await nyanBot2.sendMessage(m.chat, {
                image: {
                    url: xInfo.data.media[0].url
                },
                caption: xCap
            }, {
                quoted: m
            })
        }
        useLimit(sender, 10)
    } catch (e) {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });
        stcReac('error', '*Lo siento pero al parecer ha corrido un error! puedes volver a intentarlo 😁*')
    }
}
