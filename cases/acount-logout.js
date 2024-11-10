module.exports = async function(text, m, reply, nyanBot2, sender, prefix) {
    if (global.DATABASE.data.users[sender].register == false) return reply('*No fue posible cerrar tu sesión, porque aún no la has iniciado!*');
    global.DATABASE.data.users[sender].register = false
    reply('*Tu sesión sé ha cerrado!*')
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '💔',
            key: m.key
        }
    })
};
