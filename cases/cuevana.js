const forma1 = '`'

module.exports = async function(text, m, reply) {
    if (!text) return reply('_*¿Qué película estás buscando?*_');

    let searchResults = await require("../lib/cuevana.js").cuevana(text);

    let responseText = `${forma1}CUEVANA SEARCH 📼${forma1}\n\n`;
    responseText += `*Resultados de búsqueda para "${text}":*\n\n`;

    if (searchResults.results.length === 0) {
        responseText += `_*No se encontraron resultados para "${text}".*_`;
    } else {
        searchResults.results.forEach((movie, index) => {
            responseText += `*${forma1}${index + 1}. ${movie.title}${forma1}*\n\n`;
            responseText += `*Enlace:* ${movie.link}\n`;
            responseText += `📍--------------\n\n`;
        });
    }
    await reply(responseText)
}
