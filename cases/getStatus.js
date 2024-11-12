module.exports = async function(m, reply, nyanBot2, quoted) {
if (m.quoted && m.quoted.chat == 'status@broadcast') {
			let statusMedia = await quoted.download()
			if (/image/.test(m.quoted.mtype)) {
			await nyanBot2.sendMessage(m.chat, {image: statusMedia, caption: m.quoted.caption}, {quoted: m})
			} else if (/video/.test(m.quoted.mtype)) {
			await nyanBot2.sendMessage(m.chat, {video: statusMedia, caption: m.quoted.caption}, {quoted: m})
			} else if (/audio/.test(m.quoted.mtype)) {
			await nyanBot2.sendMessage(m.chat, {audio: statusMedia, caption: m.quoted.caption, ptt: true}, {quoted: m})
			} else {
			await reply(m.quoted.text)
			}
			} else {
			return reply('*Responde a un estado con este comando para descargar el estado del contacto! 🕵🏻*')
}
}:
