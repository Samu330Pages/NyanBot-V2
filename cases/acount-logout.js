module.exports = async function(text, m, reply, nyanBot2, sender, sendReplyButton, prefix, db) {
if (db == false) return reply('*No fue posible cerrar tu sesión, porque aún no la has iniciado!*')
                nyanBot2.sendMessage(m.chat, { react: { text: '😫', key: m.key } })
                const buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Si',
                        id: `${prefix}lg ${sender}`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `*Estás seguro que deseas cerrar tu sesión en el bot?* ⚠`
                });
};
