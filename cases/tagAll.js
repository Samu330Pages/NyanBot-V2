module.exports = async function(text, m, from, isAdmins, nyanBot2, groupMetadata) {
    if (!m.isGroup) return
    if (!isAdmins) return
    let TotalUsers = groupMetadata.participants.map(v => v.id);
    let messageTag = (!text) ? `🧀` : text
    return nyanBot2.sendMessage(from, {
        text: `@${from} ${messageTag}`,
        contextInfo: {
            remoteJid: from,
            mentionedJid: TotalUsers,
            groupMentions: [{
                'groupJid': from,
                'groupSubject': 'hola 🍄'
            }]
        }
    })
}
