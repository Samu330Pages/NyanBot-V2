const axios = require("axios");
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

async function cuevana(query) {
  const response = await axios.get(`https://wwv.cuevana8.com/search?q=${query}`);
  const $ = cheerio.load(response.data);
  const resultSearch = [];
  
  $('.MovieList .TPostMv').each((_, e) => {
    const element = $(e);
    const title = element.find('.TPostMv .Title').first().text();  
    const link = element.find('a').attr('href');
    const image = element.find('img').attr('src');
    resultSearch.push({ title, link, image });
  });

  const authorInfo = {
    author: 'Samu330',
    page: 'https://samu330.com'
  };

  return {
    author: authorInfo,
    results: resultSearch
  };
}

module.exports = { cuevana };
