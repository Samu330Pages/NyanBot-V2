const fetch = require('node-fetch')
const {
    sendPasswordResetEmail,
    createUserWithEmailAndPassword
} = require('firebase/auth')

module.exports = async function(text, m, reply, nyanBot2, sender, command, sendReplyButton, sendCarousel, prefix, isGroup) {
    const comilla = '`'
    if (global.DATABASE.data.users[sender].register === true) return reply('*Ya tienes cuenta registrada y as iniciado sesión, no es necesario registrarte!*')
    if (isGroup) {
        const cards = [{
                header: {
                    imageMessage: './Media/theme/login.jpg',
                    hasMediaAttachment: true,
                },
                body: {
                    text: `◦  *El primer método seria acceder a la página oficial, En ella encontraras un formulario básico de registro, el cual te pedirá crear un usuario, solo necesitaras un correo vigente, crear una contraseña para la página, y un nombre de usuario.*\n
*¡una vez creada tu cuenta puedes iniciar sesión en el bot utilizando el comando ${comilla}${prefix}login${comilla} y el correo vinculado a la cuenta que creaste! Mira la ilustración de la imagen para basarte de ahí!*`,
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Acceder a la página oficial! 🍟`,
                            url: `https://samu330.com/login`,
                            merchant_url: `https://samu330.com/login`
                        })
                    }]
                }
            },
            {
                header: {
                    imageMessage: './Media/theme/reg.jpg',
                    hasMediaAttachment: true,
                },
                body: {
                    text: `◦  *¡la segunda manera de registrarte, es a través del chat privado del bot, sigue la ilustración que se muestra en la imagen para tener un registro exitoso! Al completar tu registro en WhatsApp obtendrás 200 puntos de regalo!*\n
*¡El correo que vayas a ingresar es necesario que esté vigente, no se te pedirá código de verificación, pero si requieres cambiar tu contraseña se te enviara un link de restablecimiento al correo vinculado a tu cuenta!*`,
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Registro en WhatsApp 🪀`,
                            url: `https://wa.me/samu330`,
                            merchant_url: `https://wa.me/samu330`
                        })
                    }]
                }
            }
        ];

        return await sendCarousel(m.chat, {}, {
            header: `*Puedes registrarte de 2 maneras! 📌*\n\n> _*🔵 Sigue las instrucciones detalladas en las imágenes de abajo:*_\n
> _*¡LA INFORMACIÓN QUE PROPORCIONARAS SE ELIMINA AUTOMÁTICAMENTE CONCLUYENDO EL REGISTRO, Y SOLO SERA UTILIZADO PARA DARTE DE ALTA EN EL BOT, SOLO ASEGURATE DE CREAR UNA CONTRASEÑA QUE NO UTILICES EN NINGÚN OTRO SITIO!! 🛑*_\n
> ¡RECUERDA QUE SOLO PUEDES REGISTRARTE EN EL CHAT PRIVADO DEL BOT!! ⚠️`,
            footer: `${global.botname}`,
            cards: cards
        });
    }
    const args = text.split(' ');
    const email = args[0];
    const password = args[1];
    const name = args[2];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function isValidPassword(password) {
        const minLength = 8;
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*]/.test(password);

        return password.length >= minLength && hasLowerCase && hasNumbers && hasSpecialChars;
    }
    if (text.startsWith(`${prefix} `) || text.includes(` ${prefix}`)) {
        return reply(`*El comando debe estar en el formato correcto, sin espacios entre el prefijo y el comando. Ejemplo: ${prefix + command} correo@gmail.com contraseña nombreUsuario*`);
    }
    if (args.length > 3) {
        return reply(`*No se pueden ingresar más de tres parámetros. Ejemplo de uso:*\n${prefix + command} correo@gmail.com contraseña nombreUsuario`);
    }

    if (!text.trim()) {
        return reply(`*Por favor ingresa los datos correctamente para poder registrarte!*\n*Asegúrate de incluir tanto como:*\n- correo\n- contraseña\n- nombre de usuario\n*Todo separado por espacios.*`);
    }
    if (!email || !password || !name) {
        return reply('*Asegúrate de incluir tanto como el correo, contraseña y nombre de usuario, todo separado por espacios.*');
    }
    if (email.includes(' ') || password.includes(' ') || name.includes(' ')) {
        return reply('*Los datos (correo, contraseña y nombre de usuario) no deben contener espacios. Asegúrate de que tus datos sean correctos.*');
    }
    if (!emailPattern.test(email)) {
        return reply('*El correo ingresado no es válido. Por favor, introduce un correo electrónico válido.*');
    }
    if (!isValidPassword(password)) {
        return reply(`*La contraseña debe tener al menos 8 caracteres, incluir letras, un número y un carácter especial.*\n*Ejemplo: Pass123!*`);
    }
    const verificationUrl = `https://us-central1-number-ac729.cloudfunctions.net/checkEmail?email=${encodeURIComponent(email)}`;

    fetch(verificationUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.IsEmailRegistered) {
                const buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Iniciar sesión! 🔐',
                        id: `${prefix}login ${data.Result}`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `*El correo ingresado ya está registrado.*\n\n_Nombre de usuario:_ ${data.User}\n_UID:_ ${data.UID}
		    
*Si deseas puedes iniciar sesión con el correo que proporcionaste, solo toca el botón de abajo!*`
                });
                nyanBot2.sendMessage(m.chat, {
                    react: {
                        text: '⚠',
                        key: m.key
                    }
                })
            } else {
                return createUserWithEmailAndPassword(auth, email, password)
                    .then(userCredential => {
                        const user = userCredential.user;
                        const uid = user.uid;

                        const registrationUrl = `https://us-central1-number-ac729.cloudfunctions.net/createUser?email=${encodeURIComponent(email)}&user=${encodeURIComponent(name)}`;

                        return fetch(registrationUrl);
                    });
            }
        })
        .then(response => {
            if (response) {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
                global.DATABASE.data.users[sender].register = true
                const buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Ya puedes iniciar sesión en la página! 🏷',
                        url: `https://samu330.com/login`,
                        merchant_url: `https://samu330.com/login`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `Usuario registrado con éxito!\n\n*Email: ${data.Result}*\n*UID: ${data.UID}*
		    
_*Felicidades, has ganado 200 puntos! 🎁*_\n
_Tu sesión sé ha guardado en la base de datos del bot! 😸_`
                });
                nyanBot2.sendMessage(m.chat, {
                    react: {
                        text: '💚',
                        key: m.key
                    }
                })
                global.DATABASE.data.users[sender].limit += 200
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reply(`Ocurrió un error durante el proceso de registro.\n${error}`);
        });
};
