module.exports = async function(m, reply, sender, text, isSamu, botNumber) {
    if (!isSamu) return reply(mess.bot)
    if (!text) return reply('*Porfavor incluye junto al comando "on" para activar y "off" para desactivar!*')

    if (text == 'on' || text == 'ON') {
        if (db.data.settings[botNumber].anticall) return reply('*Esta opción ya está activada.*')
        db.data.settings[botNumber].anticall = true
        reply('*Activado exitosamente! Ahora se bloquearán todo tipo de llamadas.*')
    } else if (text == 'off' || text == 'OFF') {
        if (db.data.settings[botNumber].anticall == false) return reply('*Esta opción ya está desactivada.*')
        db.data.settings[botNumber].anticall = false
        reply('*Desactivado exitosamente! Ahora se permitirán todo tipo de llamadas.*')
    } else {
        reply('*No se encontró opción adecuada, asegurate de solo usar `ON` y `OFF`*')
    }
}
