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

    async prompt(message) {
        await this.initPromise;

        if (!this.SNlM0e) return ({
            creator: "@leno - Arugas",
            status: false,
            msg: `Authorization failed!`
        });

        try {
            const params = {
                bl: "boq_assistant-bard-web-server_20230711.08_p0",
                rt: "c"
            };

            const messageStruct = [
                [message],
                null,
                [null, null, null],
            ];

            // HTTPs data
            const data = {
                "f.req": JSON.stringify([null, JSON.stringify(messageStruct)]),
                at: this.SNlM0e,
            };

            // URL that we are submitting to
            const url = new URL(
                "/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",
                this.baseUrl
            );

            // Append parameters to the URL
            for (const key in params) {
                url.searchParams.append(key, params[key]);
            }

            // Encode the data
            const formBody = Object.entries(data)
                .map(
                    ([property, value]) =>
                        `${encodeURIComponent(property)}=${encodeURIComponent(value)}`
                )
                .join("&");

            const response = await axios.post(url.toString(), formBody, { headers: this.headers });
            const result = JSON.parse(JSON.parse(response.data.split("\n")[3])[0][2])[4][0][1][0];

            if (!result) return ({
                creator: "@leno - Arugas",
                status: false,
                msg: `Can't get metadata!`
            });

            return ({
                creator: "@leno - Arugas",
                status: true,
                data: {
                    message: result.replace(/\*\*/g, '*')
                }
            });
        } catch (e) {
            return ({
                creator: "@leno - Arugas",
                status: false,
                msg: e.message
            });
        }
    }

    fetch = async (q) => {
        try {
            const input = `Tu idioma predeterminado es el espanol.\n\n Lo que te piden es lo siguiente:`;
            const response = await axios.get(`https://neoxr.my.id/v2/bard?q=${input} ${q}`);
            const json = response.data;
            json.creator = "@leno - Arugas";
            return json;
        } catch {
            return ({
                creator: "@leno - Arugas",
                status: false,
                msg: `Can't get metadata!`
            });
        }
    }
}

module.exports = Bard;
