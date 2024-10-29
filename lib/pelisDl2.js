const axios = require("axios");
const cheerio = require("cheerio");

const getMovies = async (name, fast = 0) => {
  const URL = `https://knaben.eu/search/?cat=All&q=${name}&fast=${fast}`;
  let movies = [];

  try {
    const response = await axios.get(URL);
    const $ = cheerio.load(response.data);
    
    // Imprimir el HTML para verificar la carga correcta
    console.log(response.data); // Verificar la respuesta

    const table = $("#thaTableIndeed").children("tr");
    
    await table.each((index, item) => {
      if (index > 0) {
        const link = $(item)
          .children("td:nth-child(2)")
          .children("a")
          .attr("href");

        const movieName = $(item)
          .children("td:nth-child(2)")
          .children("a")
          .attr("title");

        const size = $(item).children("td:nth-child(3)").text();
        const seeders = $(item).children("td:nth-child(5)").text();
        const peers = $(item).children("td:nth-child(6)").text();

        const category = $(item)
          .children("td:nth-child(1)")
          .children("a")
          .text();
        
        if (link && link.startsWith("https")) {
          movies.push({ category, name: movieName, size, seeders, peers, link });
        }
      }
    });
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return error;
  }

  return movies;
};

module.exports = { getMovies }
