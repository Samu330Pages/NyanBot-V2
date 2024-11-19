const axios = require("axios");
const cheerio = require('cheerio');

const config = {
    URL: "https://www.flightstats.com",
};

async function flightStatus(date, flightNumber) {
    if (!date) throw new Error("Proporciona la fecha del vuelo");
    if (!flightNumber) throw new Error("Proporciona el número de vuelo");

    const airlineInitials = flightNumber.slice(0, 2).toUpperCase();
    const flightN = flightNumber.slice(2);

    const d = new Date(date).getDate();
    const m = new Date(date).getMonth() + 1;
    const y = new Date(date).getFullYear();

    try {
        const response = await axios.get(`${config.URL}/v2/flight-tracker/${airlineInitials}/${flightN}?year=${y}&month=${m}&date=${d}`);
        const $ = cheerio.load(response.data);
        const flightId = parseInt($.html().match(/href="(.*?)"/g).find(text => text.includes("flightId")).split("flightId=")[1].match(/\d+/g)[0], 10);

        const detailsResponse = await axios.get(`${config.URL}/v2/api/extendedDetails/${airlineInitials}/${flightN}/${y}/${m}/${d}/${flightId}?rqid=3ydg9jnn2yd`);
        return detailsResponse.data;
    } catch (error) {
        throw new Error("Error al obtener el estado del vuelo: " + error.message);
    }
}

module.exports = { flightStatus };
