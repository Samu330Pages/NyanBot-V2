const axios = require("axios");

async function fetchBard(query) {
    try {
        const input = `Tu idioma predeterminado es el español.\n\n Lo que te piden es lo siguiente:`;
        const response = await axios.get(`https://neoxr.my.id/v2/bard?q=${input} ${query}`);
        const json = response.data;
        json.creator = "@leno - Arugas";
        return json;
    } catch (error) {
        return {
            creator: "@leno - Arugas",
            status: false,
            msg: `Can't get metadata!`
        };
    }
}

module.exports = { fetchBard }
