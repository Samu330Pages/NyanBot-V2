const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function(text, m, from, reply, sender) {
    if (!m.isGroup) return reply('Uso disponible solo en grupos!');
    if (from !== '120363348063997699@g.us') return reply(`*Lo siento, pero las recompensas solo se pueden reclamar en el grupo oficial! 🥶*\nhttps://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1`);
    if (!text) return reply('*Asegurate de tener un código de recompensa para poder canjear!*')
    const responseRewards = await axios.get('https://samu330.com/nyan/rewards');
    const html = responseRewards.data;
    const $ = cheerio.load(html);
    const jsonDataRewards = $('#json-data script[type="application/json"]').html();
    const rewards = JSON.parse(jsonDataRewards);

    const code = text;
    const reward = rewards.find(r => r.code === code);

    if (!reward) {
        return reply(`🥶 El código de recompensa *${code}* no se encontró.\n*Porfavor asegurate de que el codigo exista y este disponible en la pagina https://samu330.com/nyan/rewards* 😊`);
    }

    const puntos = reward.points;

    if (global.DATABASE.data.users[sender].rewards.includes(code)) {
        return reply(`Ya has reclamado esta recompensa. 😒`);
    }

    global.DATABASE.data.users[sender].limit += puntos;
    global.DATABASE.data.users[sender].rewards.push(code);
    reply(`_*¡Felicidades! 🤯*_\n\n*Has canjeado una recompensa!!*\n\n- *${reward.name}*\n\nSe sumaron *${puntos}* puntos a tu cuenta!. 😊\n\n_Estate pendiente a la página para más recompensas!!_ 🥶`);
}
