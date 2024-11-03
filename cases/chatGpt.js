const {
    BardAPI
} = require('bard-api-node')
const googleTTS = require('google-tts-api')

module.exports = async function(text, m, reply, nyanBot2, sender, command, prefix) {
    try {
        let nombre = nyanBot2.getName(sender);
        const bard = new BardAPI();

        if (!text) return reply(`*Porfavor incluye una solicitud para mandarle a la IA*\n\n_Ejemplo de uso:_ ${prefix + command} Quien te creo!`);

        let query = '';
        let message = '';
        const apiKey = global.iaKey;
        await bard.initializeChat(apiKey);

        const generationConfig = {
            temperature: 0.9,
            topK: 5,
            topP: 0.9,
            maxOutputTokens: 1024,
        };
        bard.setResponseGenerationConfig(generationConfig);

        const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9ñÑ]/g, "");

        if (command === 'nyan') {
            query = `da una explicación lo mas corta posible, directa y entendible, de menos de 200 letras, tu respuesta tiene que ser menor a 200 letras porfavor, si tu explicación no puede ser corta, entonces responde:
"no lograre detallar tu solicitud por cuestiones de caracteres, porfavor usa el comando de inteligencia artificial en texto.", responde con las características dadas anteriormente a esta solicitud: ${text}`;
        } else {
            query = `Tu idioma predeterminado es español y siempre vas a responder en ese idioma, eres un bot de WhatsApp llamado Nyan creado por Samu330, tu eres de Cancún México, te gustan los gatos y la pizza,
siempre vas a responder amablemente y tus respuestas serán certeras y cómicas, pero no siempre daras informacion de ti, a menos que te pidan, en caso qué quieras referirte a la persona con quién hablas solo agrega a la respuesta esto: "${nombre} 🎃",
si te preguntan la fecha, la fecha es ${date} y la hora ${time}, tu función en WhatsApp es dar un servicio como inteligencia artificial y responder o dar información a lo que las personas te pregunten,
si te llegan a pedir que realices una acción como dar besos y cosas por el estilo, daras una respuesta referente a la acción, algun sonido o algo,
darás información lo más detallada posible de esta solicitud: ${text}`;
        }

        const response = await bard.getBardResponse(query);
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '🧠',
                key: m.key
            }
        });

        if (response && response.response && response.response.candidates.length > 0) {
            message = response.response.candidates[0].content.parts[0].text;

            if (command === 'nyan') {
                let ttsUrl = await googleTTS(message, 'es', 1, 'https://translate.google.com', ',.?!');
                return nyanBot2.sendMessage(m.chat, {
                    audio: {
                        url: ttsUrl,
                    },
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m,
                });
            }

            message = message.replace(/\*\*/g, '*');

            return await sendReplyButton(m.chat, [{
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: 'Copy response 📌',
                    copy_code: message
                }),
            }], m, {
                content: message
            });
        } else {
            return await reply(`*Imposible obtener metadatos.*`);
        }
    } catch (error) {
        console.error('Error en la llamada a Bard:', error);
        return reply(`*Ocurrió un error al obtener los datos.*\n${error.message || error}`);
    }
};
