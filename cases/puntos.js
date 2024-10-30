module.exports = async function(reply, nyanBot2, sender, db, forma1) {
const puntos = ${db.data.users[sender].limit};
const puntosMsg = `*Total de puntos: ${puntos}*
		
_Para aumentar el número de puntos en tu cuenta, puedes jugar minijuegos, de esta manera se sumarán puntos cada vez que ganes!_
*Para jugar puedes simplemente enviar uno de estos emojis:*

${forma1}⚽ | 🏀 | 🎳 | 🎯 | 🎲 | 🎰${forma1}

*O también juegar a piedra, papel o tijera con el bot enviando los emojis:*

${forma1}🪨 | ✊🏻 | 📄 | 🤚🏻 | ✂️ | ✌🏻${forma1}

_*Puedes igual recolectar 100 puntos diarios con el comando:*_ claim`

const paymentDetails = {
 requestPaymentMessage: {
 currencyCodeIso4217: "MXN",
 amount1000: puntos * 1000,
 noteMessage: {
 extendedTextMessage: {
 text: puntosMsg,
 contextInfo: {
 mentionedJid: sender
 }
 }
 },
 expiryTimestamp: "0",
 amount: {
 value: "1000",
 offset: 1000,
 currencyCode: "INR"
 }
 }
};

const relayMessage = {
 key: {
 fromMe: false,
 remoteJid: from
 },
 message: paymentDetails
};

await nyanBot2.relayMessage(from, relayMessage.message, { messageId: relayMessage.key.id });
};
