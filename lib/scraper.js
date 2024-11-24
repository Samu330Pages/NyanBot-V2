const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const qs = require('qs')
const request = require('request')
const fileTypeFromBuffer = require('file-type')
const FormData = require('form-data')
const randomarray = async (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

async function ephoto(url, texto) {
    let form = new FormData
    let gT = await axios.get(url, {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
        }
    })
    let $ = cheerio.load(gT.data)
    let text = texto
    let token = $("input[name=token]").val()
    let build_server = $("input[name=build_server]").val()
    let build_server_id = $("input[name=build_server_id]").val()
    form.append("text[]", text)
    form.append("token", token)
    form.append("build_server", build_server)
    form.append("build_server_id", build_server_id)
    let res = await axios({
        url: url,
        method: "POST",
        data: form,
        headers: {
            Accept: "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"]?.join("; "),
            ...form.getHeaders()
        }
    })
    let $$ = cheerio.load(res.data)
    let json = JSON.parse($$("input[name=form_value_input]").val())
    json["text[]"] = json.text
    delete json.text
    let {
        data
    } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            cookie: gT.headers["set-cookie"].join("; ")
        }
    })
    return build_server + data.image
}

async function tiktokSearch(query) {
    try {
        const response = await axios.post("https://tikwm.com/api/feed/search", new URLSearchParams({
            keywords: query,
            count: '10',
            cursor: '0',
            HD: '1'
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                Cookie: "current_language=en",
                "User-Agent": "Mozilla/5.0 (Linux Android 10 K) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
            }
        });
        const videos = response.data.data.videos;
        if (videos.length === 0) return {
            status: false,
            resultado: "No se encontraron videos."
        };
        return {
            status: true,
            creator: 'Samu330 👑',
            resultado: videos.map(v => ({
                description: v.title ? v?.title : "Sin descripción",
                videoUrl: v.play ? v.play : "Sin URL"
            }))
        };
    } catch (error) {
        return {
            status: false,
            resultado: error.message
        };
    }
}

function igstalk(username) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.instagram.com/' + username + '/?__a=1', {
                method: 'GET',
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
                    "cookie": "mid=XBXl1AALAAEbFoAEfNjZlMMG9dwX; ig_did=91E66A48-5AA2-445D-BFE6-84DC4456DE8F; fbm_124024574287414=base_domain=.instagram.com; ig_nrcb=1; shbid=\"12737\0544008624962\0541656157971:01f72a5102dc07af6845adf923ca70eb86e81ab95fa9dbfdaf157c9eef0e82fd1f10fe23\"; shbts=\"1624621971\0544008624962\0541656157971:01f74841fba8e77a0066b47ea891dec8fba6fdf9216c0816f9fb3532292f769828800ae2\"; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; fbsr_124024574287414=86D8femzH4_KFW4hd3Z6XFdowU6lG-uXsXRQDNl44VM.eyJ1c2VyX2lkIjoiMTAwMDA0Njc2MDc4Nzg5IiwiY29kZSI6IkFRQngzXzVOejdwVnBwby1LRGRUdEYxUFlzcUdDQXJjcmJfb05HaWFvYkNvOGtLN2paam50bHpvMTNOakFnTzVKOHQ5M0V3U3dvNkRtZ0RiY1l1Z3dQSTIybnExOUxLd3lpZTVfZll0bkNXZXBuM1hoYWFLX0w2R0pZaUpzaDBOTDBhb3pmTVBkRTVQRC12X3FnbUgxLXZYdGVmcHhfaFU0aUZNZVMxNHhFUk5OblJyMmxYTUpDa2RFYTdISXNCR2swdHhaaGF0NUt4UDR3cWZTamRwcVFfQ19sa1RUek5fU0taUTYtMjlzTkdnLUVWb3oxMUZWc3Q2OEx2ZnlIY0V0eFp0ZUxacXpiWmh6MzZrVl83VmFGd0FqVnVkTGFQN2VzT3ZRcmlTQ2pLUE5XbVcyNWhudzIzejJBSnVURW00YWR1cmN6a3ZLWU1icTd2SnN0SVdJV09RIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUJBZmJuQ3haQzZMd3h4MDFJV2MyZ3dsQ3k3Qmp0b05UNUY0WDY2NHBrUzRQeERNVXRsdmhWWkI3SXE0MGsyZ2hJQm55RHRPcW5iVjlPbUNiWGhyTFBaQUhBQjFzVFpBdHF6RFEzVTROUkhOU1V6MFVXWkNtTEdLcDNNWDRoazVIOURLbERHN0QwUlhZNHY4dHBCdVNNYjN4dnBTRGtQcHdYRlBXVU82VCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI0NjIxOTgxfQ; csrftoken=PpiPMEl0R2pAwThsw4NXynO6cVIXHZDo; ds_user_id=38316792800; sessionid=38316792800:rQj5Tr3g5zkg7b:4; rur=\"RVA\05438316792800\0541656158332:01f759cf624bef147397144805bb4c26f6c8b36a232e0f5738c570ee492f6b629f84f6e5\""
                }
            })
            .then(async data => {
                const user = data.graphql.user
                let result = {
                    creator: 'Samu330 👑',
                    id: user.id,
                    biography: user.biography,
                    followers: user.edge_followed_by.count,
                    following: user.edge_follow.count,
                    fullName: user.full_name,
                    highlightCount: user.highlight_reel_count,
                    isBusinessAccount: user.is_business_account,
                    isRecentUser: user.is_joined_recently,
                    accountCategory: user.business_category_name,
                    linkedFacebookPage: user.connected_fb_page,
                    isPrivate: user.is_private,
                    isVerified: user.is_verified,
                    profilePicHD: user.profile_pic_url_hd,
                    username: user.username,
                    postsCount: user.edge_owner_to_timeline_media.count
                }
                resolve(result)
            })
            .catch(reject)
    })
}

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text=' + teks)
            .then(({
                data
            }) => {
                let $ = cheerio.load(data)
                let hasil = []
                $('table > tbody > tr').each(function(a, b) {
                    hasil.push({
                        name: $(b).find('td:nth-child(1) > span').text(),
                        result: $(b).find('td:nth-child(2)').text().trim()
                    })
                })
                resolve(hasil)
            })
    })
}

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/' + user)
            .then(({
                data
            }) => {
                let hasil = {
                    username: data.login,
                    nickname: data.name,
                    bio: data.bio,
                    id: data.id,
                    nodeId: data.node_id,
                    profile_pic: data.avatar_url,
                    url: data.html_url,
                    type: data.type,
                    admin: data.site_admin,
                    company: data.company,
                    blog: data.blog,
                    location: data.location,
                    email: data.email,
                    public_repo: data.public_repos,
                    public_gists: data.public_gists,
                    followers: data.followers,
                    following: data.following,
                    ceated_at: data.created_at,
                    updated_at: data.updated_at
                }
                resolve(hasil)
            })
    })
}

async function npmstalk(packageName) {
    let stalk = await axios.get("https://registry.npmjs.org/" + packageName)
    let versions = stalk.data.versions
    let allver = Object.keys(versions)
    let verLatest = allver[allver.length - 1]
    let verPublish = allver[0]
    let packageLatest = versions[verLatest]
    return {
        name: packageName,
        versionLatest: verLatest,
        versionPublish: verPublish,
        versionUpdate: allver.length,
        latestDependencies: Object.keys(packageLatest.dependencies).length,
        publishDependencies: Object.keys(versions[verPublish].dependencies).length,
        publishTime: stalk.data.time.created,
        latestPublishTime: stalk.data.time[verLatest]
    }
}

async function ffstalk(userId) {
    let data = {
        "voucherPricePoint.id": 8050,
        "voucherPricePoint.price": "",
        "voucherPricePoint.variablePrice": "",
        "email": "",
        "n": "",
        "userVariablePrice": "",
        "order.data.profile": "",
        "user.userId": userId,
        "voucherTypeName": "FREEFIRE",
        "affiliateTrackingId": "",
        "impactClickId": "",
        "checkoutId": "",
        "tmwAccessToken": "",
        "shopLang": "in_ID",
    }
    let ff = await axios({
        "headers": {
            "Content-Type": "application/json; charset\u003dutf-8"
        },
        "method": "POST",
        "url": "https://order.codashop.com/id/initPayment.action",
        "data": data
    })
    return {
        id: userId,
        nickname: ff.data["confirmationFields"]["roles"][0]["role"]
    }
}

module.exports = {
    ephoto,
    tiktokSearch,
    npmstalk,
    githubstalk,
    igstalk,
    styletext
}
