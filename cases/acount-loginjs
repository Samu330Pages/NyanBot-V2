const fetch = require('node-fetch')

module.exports = async function(text, m, reply, nyanBot2, sender, sendReplyButton, prefix) {
const email = text;
                if (global.DATABASE.data.users[sender].register === true) return reply('Tus datos de sesión ya están guardados, no es necesario volver a iniciar sesión. 😊')
                if (!email) {
                    nyanBot2.sendMessage(m.chat, { react: { text: '📝', key: m.key } })
                    return reply('Por favor, proporciona un correo electrónico para verificar si está registrado.');
                }
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
                    return reply('El correo ingresado no es válido. Por favor, introduce un correo electrónico válido.');
                }
                const url = `https://us-central1-number-ac729.cloudfunctions.net/checkEmail?email=${encodeURIComponent(email)}`;
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        if (data.IsEmailRegistered) {
                            global.DATABASE.data.users[sender].register = true
                            const replyMessage = `*Has iniciado sesión correctamente, tus datos son los siguientes:*

Número de identificación de usuario: *${data.UID}*
Nombre de usuario: *${data.User}*

_*Ya puedes usar las funciones del bot que requieran registro!*_
> En dado caso que requieras restablecer tu contraseña, puedes usar el comando ${prefix}reset, o bien, restablecer tu contraseña desde la página.`;
                            nyanBot2.sendMessage(m.chat, { react: { text: '💚', key: m.key } })
                            reply(replyMessage);
                        } else {
                            const buttons = [{
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: 'Registro desde WhatsApp 🧩',
                                    id: `${prefix}reg`
                                }),
                            }, {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: 'Registro en la página 📝',
                                    url: `https://samu330.com/login`,
                                    merchant_url: `https://samu330.com/login`
                                }),
                            }];
                            sendReplyButton(m.chat, buttons, m, {
                                content: `> *El correo ingresado no está registrado!* 🥲
		    
Por favor accede a la página para un registro más cómodo, o si gustas puedes registrarte directamente por WhatsApp, solo sigue los pasos y lee cuidadosamente las instrucciones! 😙
- *Si te registras mediante WhatsApp ganaras 200 puntos!*`,
                                media: fs.readFileSync('../Media/theme/login.jpg')
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        reply('Ocurrió un error al verificar el correo.');
                    });
};
