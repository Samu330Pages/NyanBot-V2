module.exports = async function(m, reply, sender, text, isSamu) {
    if (!isSamu) return reply(global.mess.bot)
    let permNum = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!permNum) return reply('*Por favor etiqueta el mensaje de la persona que deseas permitirle el uso privado!*')
    await global.DATABASE.data.users[sender].priv = true
    reply('*Permiso concedido, el usuario ya puede hacer uso privado del bot!*')
};