const puppeteer = require('puppeteer');

const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
    'Mozilla/5.0 (Linux; Android 10; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Mobile Safari/537.36'
];

async function randomUserAgent() {
    return userAgents[Math.floor(Math.random() * userAgents.length)];
}

async function rexdl(query, pageCount) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on('request', (request) => {
        const resourceType = request.resourceType();
        if (resourceType === 'image' || resourceType === 'stylesheet' || resourceType === 'font') {
            request.abort();
        } else {
            request.continue();
        }
    });

    const results = [];

    try {
        for (let i = 1; i <= pageCount; i++) {
            await page.setUserAgent(await randomUserAgent());
            await page.goto(`https://rexdl.com/page/${i}/?s=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' });

            const urls = await page.$$eval('h2.post-title a', elements =>
                elements.map(el => ({ url: el.href, title: el.innerText }))
            );

            for (const { url, title } of urls) {
                await page.goto(url, { waitUntil: 'domcontentloaded' });
                const appData = await page.evaluate(() => {
                    const description = document.querySelector('.entry-inner')?.innerText;
                    const updateInfo = document.querySelector('.DWPxHb')?.innerText;
                    const downloadLink = document.querySelector('.readdownload a')?.href;
                    return { description, updateInfo, downloadLink };
                });

                results.push({
                    creator: "Samu330 👑",
                    Title: title,
                    URL: url,
                    Description: appData.description,
                    Update: appData.updateInfo,
                    DownloadLink: appData.downloadLink
                });
            }
        }

        await browser.close();
        return results;
    } catch (error) {
        await browser.close();
        return { error: true, message: String(error) };
    }
}

async function getDownloadDetails(appUrl) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on('request', (request) => {
        const resourceType = request.resourceType();
        if (resourceType === 'image' || resourceType === 'stylesheet' || resourceType === 'font') {
            request.abort();
        } else {
            request.continue();
        }
    });

    const downloadDetails = {};

    try {
        await page.setUserAgent(await randomUserAgent());
        await page.goto(appUrl, { waitUntil: 'domcontentloaded' });

        const downloadLinks = await page.$$eval('#dlbox .dl a', elements =>
            elements.map(el => ({
                link: el.href,
                text: el.querySelector('span')?.innerText
            }))
        );

        const additionalInfo = await page.evaluate(() => {
            const version = document.querySelector('.dl-version span:nth-child(2)')?.innerText;
            const size = document.querySelector('.dl-size span:nth-child(2)')?.innerText;
            const password = document.querySelector('.dl-key span:nth-child(2)')?.innerText;
            const update = document.querySelector('.dl-update span:nth-child(2)')?.innerText;

            return { version, size, password, update, creator: "Samu330 👑" };
        });

        downloadDetails.downloadLinks = downloadLinks;
        downloadDetails.additionalInfo = additionalInfo;

        await browser.close();
        return downloadDetails;
    } catch (error) {
        await browser.close();
        return { error: true, message: String(error) };
    }
}

module.exports = { rexdl, getDownloadDetails };
