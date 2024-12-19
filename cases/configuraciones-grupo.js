const forma1 = '`';

module.exports = async function(text, m, from, reply, nyanBot2, groupMetadata, isAdmins, isBotAdmins, command, prefix) {
    if (!m.isGroup) return reply('*Ajustes solo disponibles en grupos!*')
    if (!isAdmins) return reply('*Configuración solo para administradores.*')
    if (!isBotAdmins) return reply('*El bot no es admin, no es posible realizar ajustes en el grupo!*')
    if (!text) return reply(`*Proporciona la configuración a cambiar después del comando, ejemplo de uso:*\n\n${prefix+command} 1\n\n_*Ajustes disponibles:*_\n
${forma1}1 = Activar el Modo de aprobación.${forma1}
${forma1}2 = Desactivar el Modo de aprobación.${forma1}
${forma1}3 = Permitir a los miembros agregar a más personas.${forma1}
${forma1}4 = Solo los administradores podrán agregar a más personas.${forma1}`)

    if (text == 1) {
        if (groupMetadata.joinApprovalMode) return reply('*El modo de aprobación ya esta activado, no es necesario volver a activar. 🌭*')
        await nyanBot2.groupJoinApprovalMode(from, "on")
        reply("_*El modo de aprobación se activó con éxito!*_ ⚙️")
    } else if (text == 2) {
        if (global.DATABASE.data.chats[from].restrict) return reply(`Lo siento, pero no se puede desactivar el modo de aprobación, ya que es indispensable para declinar números no deseados, para desactivar esa opción primero desactiva ${forma1}antiarabes${forma1}`)
        if (!groupMetadata.joinApprovalMode) return reply('*El modo de aprobación ya esta desactivado, no es necesario volver a desactivar. 🌭*')
        await nyanBot2.groupJoinApprovalMode(from, "off")
        reply("_*El modo de aprobación se desactivó con éxito!*_ ⚙️")
    } else if (text == 3) {
        if (groupMetadata.memberAddMode) return reply('*Este ajuste ya esta activado, no es necesario volver a activar. 🌭*')
        await nyanBot2.groupMemberAddMode(from, "all_member_add")
        reply("_*Ajuste actualizado! los miembros de este grupo podrán agregar a mas personas!*_ ⚙️")
    } else if (text == 4) {
        if (!groupMetadata.memberAddMode) return reply('*Este ajuste ya esta activado, no es necesario volver a desactivar. 🌭*')
        await nyanBot2.groupMemberAddMode(from, "admin_add")
        reply("_*Ajuste actualizado! solo administradores podrán agregar a mas personas!*_ ⚙️")
    } else {
        return reply("*Ajuste no especificado, asegúrate de solo incluir el número de ajuste a modificar! 🔴*")
    }
}
