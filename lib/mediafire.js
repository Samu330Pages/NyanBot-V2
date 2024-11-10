const axios = require("axios");
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const { lookup, extension } = require('mime-types');

function getName(filename, split) {
    return filename.split(split).slice(0, -1).join(split);
}

function getExt(filename, split) {
    const getFilename = filename.split(split);
    return getFilename[getFilename.length - 1];
}

async function mediafireDownload(url) {
    return new Promise(async (resolve, reject) => {
        try {
            let input;
            if (url.includes('/file?dkey=')) {
                input = getName(url, '/file?dkey=');
            } else if (/https:\/\/www\.mediafire\.com\/view\/([a-zA-Z0-9]+)\/.+/.test(url)) {
                input = url.replace(/https:\/\/www\.mediafire\.com\/view\/([a-zA-Z0-9]+)\/.+/, "https://www.mediafire.com/?$1/");
            } else {
                input = url;
            }

            if (/^https:\/\/download\d+\.mediafire\.com\//.test(input)) {
                return resolve({
                    creator: 'Laden',
                    status: false
                });
            }

            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36');
            await page.goto(input, { waitUntil: 'load' });
            const content = await page.content();
            const $ = cheerio.load(content);
            let isObject = {};
            let downloadLink = $("#downloadButton").attr('href');
            isObject.filename = $("body > main > div.content > div.center > div > div.dl-info > div > div.filename").text().trim() || getExt(downloadLink, '/');
            isObject.size = $("body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span").text() || $("#downloadButton").text().trim().replace(')', "").replace('(', "").replace('Download ', '');
            isObject.mime = lookup(getExt(isObject.filename)) || lookup(getExt(downloadLink, '/'));
            isObject.extension = getExt(isObject.filename, '.');
            isObject.uploaded = $("body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span").text().split(" ").join(" | ") || '-';
            isObject.link = downloadLink;

            resolve({
                creator: 'Laden 👑',
                mod: 'Samu330 🍕',
                status: true,
                data: {
                    ...isObject
                }
            });
            await browser.close();
        } catch (e) {
            console.error(e);
            resolve({
                creator: 'Laden 👑',
                mod: 'Samu330 🍕',
                status: false,
                msg: e.toString()
            });
        }
    });
}

module.exports = { mediafireDownload };
