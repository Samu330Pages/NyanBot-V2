const axios = require("axios");

class Bard {
    constructor(cookie) {
        this.baseUrl = 'https://gemini.google.com';
        this.headers = {};
        this.cookie = cookie;
        this.SNlM0e = '';
        this.initPromise = this.init(cookie);
    }

    async init(cookie) {
        try {
            this.headers = {
                Host: "gemini.google.com",
                "X-Same-Domain": "1",
                'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; CPH1803) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36',
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                Origin: this.baseUrl,
                Referer: this.baseUrl,
                Cookie: (typeof cookie === "object") ? (Object.entries(cookie).map(([key, val]) => `${key}=${val};`).join("")) : ("__Secure-1PSID=" + cookie),
            };

            const response = await axios.get(this.baseUrl, { headers: this.headers });
            const responseText = response.data;
            this.SNlM0e = responseText.match(/SNlM0e":"(.*?)"/)[1];
            console.log(this.SNlM0e);
        } catch (e) {
            console.log("Could not fetch Google Bard. You may be disconnected from internet: " + e);
        }
    }

    async fetch(query) {
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
}

module.exports = Bard;
