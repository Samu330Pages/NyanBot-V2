const fetch = require('node-fetch')
const {
    auth
} = require('../lib/firebaseAuth.js')
const {
    sendPasswordResetEmail,
    createUserWithEmailAndPassword
} = require('firebase/auth')

module.exports = async function(text, m, reply, nyanBot2, command, prefix) {
    const email = text;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (text.startsWith(`${prefix} `) || text.includes(` ${prefix}`)) {
        return reply(`*El comando debe estar en el formato correcto, sin espacios entre el prefijo y el comando. Ejemplo: ${prefix + command} correo@gmail.com*`);
    }
    if (!text.trim()) {
        return reply(`*Por favor ingresa el correo para restablecer la contraseña!*`);
    }
    if (!email) {
        return reply('*Por favor, introduce el correo electrónico registrado.*');
    }
    if (!emailPattern.test(email)) {
        return reply('*El correo ingresado no es válido. Por favor, introduce un correo electrónico válido.*');
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
                return sendPasswordResetEmail(auth, email)
                    .then(() => {
                        reply(`*Se ha enviado un correo de restablecimiento de contraseña a ${email}. Por favor, revisa tu bandeja de entrada.*`);
                        nyanBot2.sendMessage(m.chat, {
                            react: {
                                text: '💌',
                                key: m.key
                            }
                        })
                    });
            } else {
                reply(`*El correo ${email} no está registrado.*`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reply('Ocurrió un error durante el proceso de restablecimiento de contraseña.');
        });
};
