const google = require('googlethis')
const { getOrganicData } = require('./lib/gg.js')

module.exports = async function(m, reply, text, prefix, command, reactionLoad, reactionOk, reactionError) {
if (!text) {
        return reply(`*Por favor, proporciona un término de búsqueda. Ejemplo:*\n${prefix + command} [término]`);
    }
    let gglId;
    gglId = reactionLoad(m.chat, m.key);
    const options = {
        page: 0,
        safe: false,
        parse_ads: false,
        additional_params: {
            hl: 'es'
        }
    };

    try {
        const response = await google.search(`${text}`, options);

        let content = '';

        if (response.knowledge_panel.description) {
            content += `*📝 Descripción:* ${response.knowledge_panel.description}\n\n`;
        }

        if (response.knowledge_panel.url) {
            content += `*📌 URL:* ${response.knowledge_panel.url}\n\n`;
        }

        if (response.knowledge_panel.metadata.length > 0) {
            content += `*📂 Información importante:*\n`;
            response.knowledge_panel.metadata.forEach(item => {
                content += `- ${item.title}: ${item.value}\n`;
            });
        }

        const organicData = await getOrganicData(text);
        if (organicData.length > 0) {
            content += `\n*Resultados de búsqueda orgánica:*\n\n`;
            organicData.forEach(result => {
                content += `\n⬦ *Título:*\n> ${result.title}\n\n⬦ *Snippet:*\n> ${result.snippet}\n\n───✁–––`;
            });
        } else {
            content += `\nNo se encontraron resultados en la búsqueda orgánica.\n`;
        }

        if (response.people_also_ask.length > 0) {
            content += `\n*Preguntas frecuentes:*\n`;
            response.people_also_ask.forEach(pregunta => {
                content += `> ❓ ${pregunta}\n`;
            });
        }

        await reply(content || 'No se encontró información relevante.');
        reactionOk(m.chat, m.key, gglId);

    } catch (error) {
        reactionError(m.chat, m.key, gglId);
        console.error('Error en la búsqueda de Google:', error);
        await reply(`_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo por favor! 🙂*`);
    }
}
