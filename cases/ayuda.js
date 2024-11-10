const forma1 = '`';

module.exports = async function(m, reply, sender, prefix, categories) {
    let helpMsg = `😊 _*AQUÍ TE EXPLICO COMO USAR LAS FUNCIONES DEL BOT!*_
_PRIMERO DEBES SABER QUE PARA USAR UN COMANDO DEBES PRIMERO ESCRIBIR EL PREFIJO, QUE EN ESTE CASO ES_ 👉🏻 *${prefix}* 👈🏻, _SEGUIDAMENTE VA EL COMANDO QUE DESEES USAR, EJEMPLO:_

*${prefix}menu*

TE DESCRIBO PARA QUE SIRVE CADA COMANDO 😁:\n`
    for (const [category, help] of Object.entries(categories)) {
        helpMsg += `*${category}:*\n`;
        help.forEach(cmdObj => {
            helpMsg += `- ${forma1}${cmdObj.command}:${forma1} _*${cmdObj.help}*_\n`;
        });
        helpMsg += '\n';
    }
    reply(helpMsg)
};
