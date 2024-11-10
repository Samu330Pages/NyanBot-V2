module.exports = async function(m, reply, sender, text, isSamu) {
    if (!isSamu) return reply(mess.bot)
    let permDNum = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    if (!permDNum) return reply('*Por favor etiqueta el mensaje de la persona que deseas permitirle el uso privado!*')
    await db.data.users[sender].priv = false
    reply('*Permiso denegado, el usuario ya no puede hacer uso privado del bot!*')
};
