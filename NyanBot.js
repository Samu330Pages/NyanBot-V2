require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const syntax = require('syntax-error')
const fetch = require('node-fetch')
const yts = require('yt-search')
const { igdl, fbdl, ttdl, ytmp3v3, ytmp4 } = require('ruhend-scraper');
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const { Rapi } = require('./lib/rapi.js')
/*const pkg = require('imgur')
const { ImgurClient } = pkg
const client = new ImgurClient({ clientId: "a0113354926015a" })*/
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')

const forma1 = '`'

const dbPath = path.join(__dirname, 'Media', 'database', 'userPoints.json');

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatNumber(num) {
    if (num < 1e3) return num;
    const suffixes = ["", "K", "M", "B", "T"];
    const index = Math.floor(Math.log(num) / Math.log(1e3));
    return parseFloat((num / Math.pow(1e3, index)).toFixed(2)) + ' ' + suffixes[index];
}

//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteNyan = JSON.parse(fs.readFileSync('./Media/database/vn.json'))
const Stickers = JSON.parse(fs.readFileSync('./Media/database/stickers.json'))
const ImageNyan = JSON.parse(fs.readFileSync('./Media/database/image.json'))
const VideoNyan = JSON.parse(fs.readFileSync('./Media/database/video.json'))
const DocNyan = JSON.parse(fs.readFileSync('./Media/database/doc.json'))
const ZipNyan = JSON.parse(fs.readFileSync('./Media/database/zip.json'))
const ApkNyan = JSON.parse(fs.readFileSync('./Media/database/apk.json'))

const verifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let quizmath = db.data.game.math = []

//time
const time = moment.tz('America/Cancun').format('HH:mm:ss')
const date = moment.tz('America/Cancun').format('DD/MM/YYYY')
const time2 = moment().tz('America/Cancun').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var timeNow = `Buenas noches 🌌`
 }
 if(time2 < "19:00:00"){
var timeNow = `Buenas tardes 🌃`
 }
 if(time2 < "18:00:00"){
var timeNow = `Buenas tardes 🌃`
 }
 if(time2 < "15:00:00"){
var timeNow = `Buenas tardes 🌅`
 }
 if(time2 < "11:00:00"){
var timeNow = `Buenos dias 🌄`
 }
 if(time2 < "05:00:00"){
var timeNow = `Buenos dias 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = nyanBot2 = async (nyanBot2, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await nyanBot2.decodeJid(nyanBot2.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const prefBody = body.startsWith(pric)
        const isCommand = prefBody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await nyanBot2.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isAntiMedia = m.mtype
        //user status
        const isUser = verifieduser.includes(sender)
        const isSamu = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isSamu || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(nyanBot2, m, premium)

        //premium
        async function replyprem(teks) {
    reply(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendnyanBot2Message(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await nyanBot2.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function reply(teks) {
                nyanBot2.sendMessage(m.chat, {
                    contextInfo: {
                        "forwardingScore":999,"isForwarded":true,
			businessMessageForwardInfo: {
                           "businessOwnerJid": '5219984907794@s.whatsapp.net'
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
        }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/theme/NyanBot.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
		if (!('register' in user)) user.register = false
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = nyanBot2.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
	       register: false,
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: nyanBot2.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: nyanBot2.getName(botNumber), alias: botname}, owner: { nick: nyanBot2.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: nyanBot2.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: nyanBot2.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}
        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
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
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//bug loading
async function loading () {
var NyanOnLoad = [
"🟠",
"⚫",
"🟠",
"⚫",
"🟢"
]
let { key } = await nyanBot2.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'}, m)

for (let i = 0; i < NyanOnLoad.length; i++) {
await nyanBot2.sendMessage(from, {text: NyanOnLoad[i], edit: key })
}
}

async function sendReplyButton(chatId, buttons, message, options) {
    const { content, media } = options;

    const interactiveMessage = proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
            text: content,
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname,
        }),
        header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: media ? true : false,
            ...(media ? await prepareWAMessageMedia({ image: fs.readFileSync(media) }, { upload: nyanBot2.waUploadToServer }) : {})
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: buttons,
        }),
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
	    businessMessageForwardInfo: {
		"businessOwnerJid": '5219984907794@s.whatsapp.net'
	}
        }
    })

    const msgs = generateWAMessageFromContent(chatId, {
        viewOnceMessage: {
            message: {
                interactiveMessage: interactiveMessage
            }
        }
    }, { quoted: m });

    await nyanBot2.relayMessage(chatId, msgs.message, {});
}
	    

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const NyanOnResult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Samu330',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            NyanOnResult.push(result)
        }
    resolve(NyanOnResult)
    })
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            reply(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let limite = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = limite
            }
            nyanBot2.sendText(m.chat, { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !isSamu && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return reply(`No está permitido el uso del bot en privado!!`)
            }
        }
        // Private Only
        if (!isSamu && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return reply("¡lo siento, pero el bot está en modo privado, si deseas usarlo, ve al chat privado!")
	     }
	}
	     
        if (!nyanBot2.public) {
            if (isSamu && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	nyanBot2.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            nyanBot2.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            nyanBot2.updateProfileStatus(`*${botname} Activo hace ${runtime(process.uptime())}*`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let presenceMix = ['composing', 'recording']
            nyanMix = presenceMix[Math.floor(presenceMix.length * Math.random())]
            nyanBot2.sendPresenceUpdate(nyanMix, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let presenceMix = ['recording']
            nyanMix = presenceMix[Math.floor(presenceMix.length * Math.random())]
            nyanBot2.sendPresenceUpdate(nyanMix, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let nyanComposing = ['composing']
            nyanBot2.sendPresenceUpdate(nyanComposing, from)
        }
        }
        
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await nyanBot2.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await nyanBot2.getName(i)}\nFN:${await nyanBot2.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
    
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await nyanBot2.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          reply(`*Epaaa! como es que hay otro bot aquí??*\n\nAdios! aqui no se permiten más bots!!`)
    return await nyanBot2.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  nyanBot2.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nyanBot2.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *recuerda que no está permitido usar malas palabras!*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                nyanBot2.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                nyanBot2.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        

        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https') && budy.match(`chat.whatsapp.com`)) {
if (isAdmins) return
if (m.key.fromMe) return
if (isSamu) return
               await nyanBot2.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nyanBot2.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *ha enviado un link, el cual sé ha eliminado satisfactoriamente, porque en este grupo no está permitido el envió de links!*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./NyanBot.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }

const sendapk = (teks) => {
nyanBot2.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkNyan) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Media/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
nyanBot2.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipNyan) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Media/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
nyanBot2.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocNyan) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./Media/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: nyanBot2.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, nyanBot2.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
nyanBot2.ev.emit('messages.upsert', msg)
}

//math
if (quizmath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = quizmath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete quizmath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) nyanBot2.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            nyanBot2.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    nyanBot2.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    nyanBot2.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) nyanBot2.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) nyanBot2.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) nyanBot2.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    nyanBot2.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) nyanBot2.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) nyanBot2.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    nyanBot2.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
verifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(verifieduser, null, 2))
}

        switch (isCommand) {

		
case 'flow': {
    const flowMessage = {
	viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
        interactiveMessage: {
            type: "flow",
            header: {
                text: "Flow message header" // Cambia esto según tus necesidades
            },
            body: {
                text: "Flow message body" // Cambia esto según tus necesidades
            },
            footer: {
                text: "Flow message footer" // Cambia esto según tus necesidades
            },
		nativeFlowMessage: {
                            buttons: [{
                                "name": "cta_call",
                                "buttonParamsJson": `{\"display_text\":\"hola\",\"id\":\"%menu\"}`
                            }],
			}
	}
		}
	}
    };

    console.log("Mensaje a enviar:", JSON.stringify(flowMessage, null, 2)); // Verifica la estructura del mensaje

    // Generar el mensaje
    const msgs = generateWAMessageFromContent(m.chat, flowMessage, {});

    console.log("Mensaje generado:", JSON.stringify(msgs, null, 2)); // Verifica la estructura del mensaje generado

    await nyanBot2.relayMessage(m.chat, msgs.message, {});
}
break
case 'menu': {
	nyanBot2.sendMessage(m.chat, {react: {text: '🧃', key: m.key}})
    const categories = {
	"📝 Registro": ['login `CORREO`', 'reg *+200 PUNTOS*', 'reset `CORREO`', 'logout'],
        "📥 Descargas": ['play `SEARCH`', 'yta / ytmp3 `LINK` *-30 PUNTOS*', 'ytv / ytmp4 `LINK` *-30 PUNTOS*', 'tiktok / tt `LINK` *-10 PUNTOS*', 'facebook / fb `LINK` *-20 PUNTOS*', 'instagram / ig `LINK` *-20 PUNTOS*'],
	"🎭 Grupos": ['anti `(CONTROL DE PALABRAS)`', 'bienvenida'],
	"🛠 Herramientas": ['sticker', 's', 'puntos'],
        "⚙ Bot": ['actualizar', 'update', 'addsticker', 'liststicker', 'delsticker', 'groseria', 'deldb', '<', '=>', '$']
    };

    let registrado = db.data.users[sender].register ? 'Usuario registrado 📌' : 'Usuario no registrado ⚠'
    let nickName = nyanBot2.getName(sender);
    let menuMessage = `${timeNow + nickName}\n\n> ${registrado}\n\n_Hora actual: ${time}_\n_Fecha actual: ${date}_\n\n- *Tus puntos:* ${db.data.users[sender].limit}\n- *Comandos solicitados:* ${db.data.settings[botNumber].totalhit}\n\n*Menú de Comandos*\n\n`;
    for (const [category, commands] of Object.entries(categories)) {
        menuMessage += `*${category}:*\n`;
        commands.forEach(cmd => {
            menuMessage += `- ${cmd}\n`;
        });
        menuMessage += '\n';
    }

    try {
        const imagePath = './Media/theme/NyanBot.jpg';
        const msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: menuMessage
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botname
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
			    text: 'test header',
                            hasMediaAttachment: true,
                            ...await prepareWAMessageMedia({ image: fs.readFileSync(imagePath) }, { upload: nyanBot2.waUploadToServer })
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"NyanBot-V2 🌮\",\"url\":\"https://samu330.com/login\"}`
                            },],
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999,
                            isForwarded: true,
                        }
                    })
                }
            }
        }, { quoted: m });

        await nyanBot2.relayMessage(m.chat, msgs.message, {});
    } catch (e) {
        return m.reply("`*Error*`");
    }
}
break
case 'lg': {
if (text === sender) {
db.data.users[sender].register = false
reply('*Tu sesión sé ha cerrado!*')
nyanBot2.sendMessage(m.chat, {react: {text: '💔', key: m.key}})
} else {
return reply('*¡Esta opción no te corresponde!*')
}
}
break
case 'logout': {
if (db.data.users[sender].register === false) return reply('*No fue posible cerrar tu sesión, porque aún no la has iniciado!*')
nyanBot2.sendMessage(m.chat, {react: {text: '😫', key: m.key}})
const buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Si',
                        id: `%lg ${sender}`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `*Estás seguro que deseas cerrar tu sesión en el bot?* ⚠`
                });
}
break
case 'login': {
    const email = text;
    if (db.data.users[sender].register === true) return reply('Tus datos de sesión ya están guardados, no es necesario volver a iniciar sesión. 😊')
    if (!email) {
	nyanBot2.sendMessage(m.chat, {react: {text: '📝', key: m.key}})
        return reply('Por favor, proporciona un correo electrónico para verificar si está registrado.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
	nyanBot2.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
        return reply('El correo ingresado no es válido. Por favor, introduce un correo electrónico válido.');
    }

    const url = `https://us-central1-number-ac729.cloudfunctions.net/checkEmail?email=${encodeURIComponent(email)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Para depuración
            if (data.IsEmailRegistered) {
		db.data.users[sender].register = true
                const replyMessage = `*Has iniciado sesión correctamente, tus datos son los siguientes:*

Número de identificación de usuario: *${data.UID}*
Nombre de usuario: *${data.User}*

_*Ya puedes usar las funciones del bot que requieran registro!*_
> En dado caso que requieras restablecer tu contraseña, puedes usar el comando ${prefix}reset, o bien, restablecer tu contraseña desde la página.`;
		nyanBot2.sendMessage(m.chat, {react: {text: '💚', key: m.key}})
                reply(replyMessage);
            } else {
                const buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Registro desde WhatsApp 🧩',
                        id: `%reg`
                    }),
                }, {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Registro en la página 📝',
                        url: `https://samu330.com/login`,
                        merchant_url: `https://samu330.com/login`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `> *El correo ingresado no está registrado!* 🥲
		    
Por favor accede a la página para un registro más cómodo, o si gustas puedes registrarte directamente por WhatsApp, solo sigue los pasos y lee cuidadosamente las instrucciones! 😙
- *Si te registras mediante WhatsApp ganaras 200 puntos!*`,
	            media: './Media/theme/login.jpg'
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reply('Ocurrió un error al verificar el correo.'); // Mensaje de error
        });
}
break
case 'reg': {
if (db.data.users[sender].register === true) return reply('*Ya tienes cuenta registrada y as iniciado sesión, no es necesario registrarte!*')
if (isGroup) return reply('*Para continuar con tu registro, por favor ve a chat privado con el bot, ya que se te pedirá la creación de una contraseña privada!*')
    const args = text.split(' '); // Separar los argumentos por espacios
    const email = args[0]; // Correo
    const password = args[1]; // Contraseña
    const name = args[2]; // Nombre de usuario
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidPassword(password) {
    const minLength = 8; // Longitud mínima
    const hasLowerCase = /[a-z]/.test(password); // Al menos una letra minúscula
    const hasNumbers = /\d/.test(password); // Al menos un número
    const hasSpecialChars = /[!@#$%^&*]/.test(password); // Al menos un carácter especial

    // Verifica si cumple con todos los requisitos
    return password.length >= minLength && hasLowerCase && hasNumbers && hasSpecialChars;
}
    // firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqsYZA9wU9Y1YvYGicdZQ_7DDzfEVLXDU",
    authDomain: "number-ac729.firebaseapp.com",
    projectId: "number-ac729",
    storageBucket: "number-ac729.appspot.com",
    messagingSenderId: "36610055964",
    appId: "1:36610055964:web:ec80cc7ea2fb23287ce4d9",
    measurementId: "G-0BTNK7VNM3"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
    // Verificar que el comando no tenga espacios entre el prefijo y el comando
    if (text.startsWith(`${prefix} `) || text.includes(` ${prefix}`)) {
        return reply(`*El comando debe estar en el formato correcto, sin espacios entre el prefijo y el comando. Ejemplo: ${prefix + command} correo@gmail.com contraseña nombreUsuario*`);
    }

    // Validar que no haya más de tres parámetros
    if (args.length > 3) {
        return reply(`*No se pueden ingresar más de tres parámetros. Ejemplo de uso:*\n${prefix + command} correo@gmail.com contraseña nombreUsuario`);
    }

    // Validar que se haya proporcionado un texto
    if (!text.trim()) {
        return reply(`*Por favor ingresa los datos correctamente para poder registrarte!*\n*Asegúrate de incluir tanto como el correo, contraseña y nombre de usuario, todo separado por espacios.*`);
    }

    // Validar que se hayan proporcionado todos los argumentos necesarios
    if (!email || !password || !name) {
        return reply('*Asegúrate de incluir tanto como el correo, contraseña y nombre de usuario, todo separado por espacios.*');
    }

    // Validar que ninguno de los parámetros contenga espacios
    if (email.includes(' ') || password.includes(' ') || name.includes(' ')) {
        return reply('*Los datos no deben contener espacios. Asegúrate de que tu correo, contraseña y nombre de usuario sean correctos.*');
    }

    // Validar el formato del correo
    if (!emailPattern.test(email)) {
        return reply('*El correo ingresado no es válido. Por favor, introduce un correo electrónico válido.*');
    }

    // Validar la contraseña
    if (!isValidPassword(password)) {
        return reply('*La contraseña debe tener al menos 8 caracteres, incluir un número y un carácter especial.*');
    }

    // Verificar si el correo ya está registrado
    const verificationUrl = `https://us-central1-number-ac729.cloudfunctions.net/checkEmail?email=${encodeURIComponent(email)}`;

    fetch(verificationUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.IsEmailRegistered) {
		const buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Iniciar sesión! 🔐',
                        id: `%login ${data.Result}`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `*El correo ingresado ya está registrado.*\n\n_Nombre de usuario:_ ${data.User}\n_UID:_ ${data.UID}
		    
*Si deseas puedes iniciar sesión con el correo que proporcionaste, solo toca el botón de abajo!*`
                });
		nyanBot2.sendMessage(m.chat, {react: {text: '⚠', key: m.key}})
            } else {
                return createUserWithEmailAndPassword(auth, email, password)
                    .then(userCredential => {
                        const user = userCredential.user;
                        const uid = user.uid;

                        const registrationUrl = `https://us-central1-number-ac729.cloudfunctions.net/createUser?email=${encodeURIComponent(email)}&user=${encodeURIComponent(name)}`;

                        return fetch(registrationUrl);
                    });
            }
        })
        .then(response => {
            if (response) {
                return response.json();
            }
        })
        .then(data => {
            if (data) {
		const buttons = [{
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Iniciar sesión! 🔐',
                        id: `%login ${data.Result}`
                    }),
                }, {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Ya puedes iniciar sesión en la página! 🏷',
                        url: `https://samu330.com/login`,
                        merchant_url: `https://samu330.com/login`
                    }),
                }];
                sendReplyButton(m.chat, buttons, m, {
                    content: `Usuario registrado con éxito!\n\n*Email: ${data.Result}*\n*UID: ${data.UID}*
		    
_*Felicidades, has ganado 200 puntos! 🎁*_

_Para completar tu registro en el bot, solo da clic en el primer botón, y tu sesión se guardará en la base de datos._`
                });
		nyanBot2.sendMessage(m.chat, {react: {text: '💚', key: m.key}})
		db.data.users[sender].limit += 200
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reply('Ocurrió un error durante el proceso de registro.');
        });
}
break

case 'reset': {
    const args = text.split(' '); // Separar los argumentos por espacios
    const email = args[0]; // Correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// firebaseConfig.js
const { initializeApp } = require('firebase/app');
const { getAuth, sendPasswordResetEmail } = require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyCqsYZA9wU9Y1YvYGicdZQ_7DDzfEVLXDU",
    authDomain: "number-ac729.firebaseapp.com",
    projectId: "number-ac729",
    storageBucket: "number-ac729.appspot.com",
    messagingSenderId: "36610055964",
    appId: "1:36610055964:web:ec80cc7ea2fb23287ce4d9",
    measurementId: "G-0BTNK7VNM3"
};
// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtiene la instancia de autenticación

    // Verificar que el comando no tenga espacios entre el prefijo y el comando
    if (text.startsWith(`${prefix} `) || text.includes(` ${prefix}`)) {
        return reply(`*El comando debe estar en el formato correcto, sin espacios entre el prefijo y el comando. Ejemplo: ${prefix + command} correo@gmail.com*`);
    }

    // Validar que se haya proporcionado un texto
    if (!text.trim()) {
        return reply(`*Por favor ingresa el correo para restablecer la contraseña!*`);
    }

    // Validar que se haya proporcionado el correo electrónico
    if (!email) {
        return reply('*Por favor, introduce el correo electrónico registrado.*');
    }

    // Validar el formato del correo
    if (!emailPattern.test(email)) {
        return reply('*El correo ingresado no es válido. Por favor, introduce un correo electrónico válido.*');
    }

    // Verificar si el correo está registrado
    const verificationUrl = `https://us-central1-number-ac729.cloudfunctions.net/checkEmail?email=${encodeURIComponent(email)}`;

    fetch(verificationUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.IsEmailRegistered) {
                // Enviar el correo de restablecimiento de contraseña
                return sendPasswordResetEmail(auth, email)
                    .then(() => {
                        reply(`*Se ha enviado un correo de restablecimiento de contraseña a ${email}. Por favor, revisa tu bandeja de entrada.*`);
			nyanBot2.sendMessage(m.chat, {react: {text: '💌', key: m.key}})
                    });
            } else {
                reply(`*El correo ${email} no está registrado.*`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reply('Ocurrió un error durante el proceso de restablecimiento de contraseña.');
        });
}
break
case 'test':
    const buttons = [
        {
            name: "send_location",
            buttonParamsJson: JSON.stringify({
                display_text: 'Ubicación',
                id: ''
            }),
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: 'Menu',
                url: 'https://wa.me/samu330'
            }),
        },
        {
            name: "cta_call",
            buttonParamsJson: JSON.stringify({
                display_text: 'Menu',
                number: '5219984907794'
            }),
        }
    ];

    const mediaPath = ''; // Aquí coloca la ruta de la imagen si la tienes, si no, deja como string vacío

    return await sendReplyButton(m.chat, buttons, m, {
        content: 'Selecciona una opción:'
    });
    break

case 'play': {
if (!text) return reply(`Ejemplo: ${prefix + command} piel canela`)
if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`)
if (db.data.users[sender].limit < 1) return reply(mess.limit)
if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`)
const r = await yts(text);

if (!r || !r.videos || r.videos.length === 0) {
return reply("No se encontraron videos para esa búsqueda.");
}
nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}})
const video = r.videos[0];
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar audio 🎙️',
            id: `%ytmp3 ${video.url}`
          }),
        }, {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar video 🎬',
            id: `%ytv ${video.url}`
          }),
	}, {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: 'Ver en la app ❤️',
            url: `${video.url}`,
	    merchant_url: `${video.url}`
          }),
}]
await sendReplyButton(m.chat, buttons, m, {
	content: `> *YT Play 🍟.*
 
- *Título:* ${video.title}\n
- *Duración:* ${video.timestamp}\n
- *Vistas:* ${formatNumber(video.views)}

`
})
}
break
case 'args': {
    // Verificamos si hay al menos un argumento
    if (args.length < 1) {
        reply(`*Nadafaffa*`);
        break;
    }

    // Convertimos el primer argumento a un número
    const primerArg = parseInt(args[0], 10);

    // Verificamos si el valor es un número válido
    if (isNaN(primerArg)) {
        reply(`${args[0]}\n${args[1]}\n${args[2]}`);
        break;
    }

    // Comparamos el primer argumento con 1 y 2
    if (primerArg === 1) {
        reply(`🪅`); // Si el primer argumento es 1
    } else if (primerArg === 2) {
        reply(`2`); // Si el primer argumento es 2
    } else {
        reply(`*Opción no reconocia: ${primerArg}.*`); // Para otros números
    }
}
break
					
case 'ytmp3': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !isUrl(text)) return reply(`*Es necesario el link de Youtube.*\n_*Ejemplo de uso*_\n\n${prefix + command} [opcion: 1/2] https://youtube.com/....`);

    nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}});
    reply('> *Esperé un momento, se esta enviando su audio...*');

    let { title, audio, thumbnail } = await ytmp3v3(text);
    let audioYt = await fetchBuffer(audio);
    
    // Guardar el audio original
    /*const originalAudioPath = './src/output.mp3';
    fs.writeFileSync(originalAudioPath, audioYt);

    // Definir el archivo de salida con metadatos
    const outputAudioPath = './src/output.mp3';

    // Comando ffmpeg para agregar metadatos
    const ffmpegCommand = `ffmpeg -i ${originalAudioPath} -metadata title="${title}" -metadata artist="Samu330" -metadata album="NyanBot" -metadata genre="Bot de WhatsApp" -codec copy ${outputAudioPath}`;

    // Ejecutar el comando ffmpeg
    exec(ffmpegCommand, async (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al procesar el audio: ${error.message}`);
            return reply('Ocurrió un error al procesar el audio.');
        }

        // Enviar el audio como documento
        */const mediaMessage = await prepareWAMessageMedia({
            document: audioYt,
            mimetype: 'audio/mpeg',
            fileName: title + '.mp3',
            jpegThumbnail: await fs.readFileSync("./Media/theme/NyanBot.jpg")
        }, { upload: nyanBot2.waUploadToServer });

        const message = generateWAMessageFromContent(m.chat, mediaMessage, { quoted: m });
        await nyanBot2.relayMessage(m.chat, message.message, { messageId: message.key.id });

        // Enviar el audio con metadatos
        const processedAudioMessage = await prepareWAMessageMedia({
            audio: fs.readFileSync(outputAudioPath),
            mimetype: 'audio/mpeg',
            fileName: title + '.mp3'
        }, { upload: nyanBot2.waUploadToServer });

        const processedMessage = generateWAMessageFromContent(m.chat, processedAudioMessage, { quoted: m });
        await nyanBot2.relayMessage(m.chat, processedMessage.message, { messageId: processedMessage.key.id });

        // Limpiar archivos temporales
        fs.unlinkSync(originalAudioPath);
        fs.unlinkSync(outputAudioPath);

        nyanBot2.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        db.data.users[sender].limit -= 30;
    });
}
break


case 'ytmp5': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !isUrl(text)) return reply(`*Es necesario el link de Youtube.*\n_*Ejemplo de uso*_\n\n${prefix + command} [opcion: 1/2] https://youtube.com/....`);

    nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}});
    reply('> *Esperé un momento, se está procesando su solicitud...*');

    // Importación dinámica del módulo ES6
    (async () => {
        try {
            const s = (await import('videos-downloader')).default;
            const downloadUrl = await s.youtube(text); // Esperar la resolución de la promesa

            if (downloadUrl) {
                reply(`Aquí está tu enlace de descarga: ${downloadUrl}`);
            } else {
                reply('Ocurrió un error al obtener el enlace de descarga.');
            }
        } catch (error) {
            console.error('Error al obtener el enlace de descarga:', error);
            if (error.message.includes('ECONNRESET')) {
                reply('Ocurrió un error de conexión. Por favor, intenta nuevamente más tarde.');
            } else {
                reply('Ocurrió un error al procesar el enlace.');
            }
        }
    })();

    db.data.users[sender].limit -= 30;
    nyanBot2.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
}
break
			

case 'ytmp4': case 'ytv': {
if (db.data.users[sender].limit < 1) return reply(mess.limit)
if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`)
if (args.length < 1 || !isUrl(text)) return reply(`*Es necesario el link de Youtube.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://youtube.com/....`);

nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}})
reply('> Esperé un momento, se esta enviando su video...')
let { title, size, video, quality, thumbnail } = await ytmp4(text);
let caption = `> Yt MP4 📽\n`;
      caption += `- *Titulo:* ${title}\n`;
      caption += `- *Calidad:* ${quality}\n`;
      caption += `- *Peso:* ${size}\n\n`;
      caption += `> ${botname} by ${ownername}`;
let videoYt = await fetchBuffer(video);
await nyanBot2.sendMessage(m.chat, {
            video: videoYt,
            fileName: title + '.mp4',
	    caption: caption,
            mimetype: 'video/mp4',
        }, { quoted: m });
	nyanBot2.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
db.data.users[sender].limit -= 30
}
break

// Case para Facebook
case 'facebook': case 'fb': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 20) return reply(`*Lo siento, pero este comando requiere 20 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !/^https?:\/\/(www\.)?(facebook\.com|fb\.watch)\/.+$/.test(text)) return reply(`*Es necesario un link válido de Facebook.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://facebook.com/....`);

    nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}});
    try {
        let res = await fbdl(text);
        let result = res.data;
        let data;
        if (data = result.find(i => i.resolution === "720p (HD)")) {
            reply('*Se está enviando el video en resolución HD, espera un momento...*');
        } else {
            reply('*No se pudo obtener resolución HD, se está enviando el video en SD...*');
            data = result.find(i => i.resolution === "360p (SD)");
        }
        
        let video = data.url;
        let videoFb = await fetchBuffer(video);
        
        await nyanBot2.sendMessage(m.chat, {
            video: videoFb,
            fileName: nyanBot2.getName(sender) + '.mp4',
            caption: '> *FaceBook Dl*',
            mimetype: 'video/mp4',
	    jpegThumbnail: await fetchBuffer(data.thumbnail)
        }, { quoted: m });
        nyanBot2.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        db.data.users[sender].limit -= 20;
    } catch {
        nyanBot2.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        return reply('Ha ocurrido un error inesperado, por favor repórtalo para darle solución!');
    }
}
break

// Case para Instagram
case 'instagram': case 'ig': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 20) return reply(`*Lo siento, pero este comando requiere 20 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !/^https?:\/\/(www\.)?(instagram\.com)\/.+$/.test(text)) return reply(`*Es necesario un link válido de Instagram.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://instagram.com/....`);

    nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}});
    try {
        let res = await igdl(text);
        let data = await res.data;
        let videoIg = await fetchBuffer(url);
        
        await nyanBot2.sendMessage(m.chat, {
            video: videoIg,
            fileName: nyanBot2.getName(sender) + '.mp4',
            caption: '> *Instagram Dl*',
            mimetype: 'video/mp4'
        }, { quoted: m });
        
        db.data.users[sender].limit -= 20;
        nyanBot2.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
    } catch (err) {
        nyanBot2.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        return reply(`Ha ocurrido un error inesperado, por favor repórtalo para darle solución!\n${err}`);
    }
}
break

// Case para TikTok
case 'tt': case 'tiktok': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 10) return reply(`*Lo siento, pero este comando requiere 10 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (!text) return reply(`*Es necesario el link de TikTok.*\n_*Ejemplo de uso*_\n${prefix+command}` + ' https://vt.tiktok.com/...');
    try {
        let { title, author, username, published, like, comment, share, views, bookmark, video, cover: picture, duration, music, profilePicture } = await ttdl(text);
        let caption = `${forma1}Tiktok Download 🎰${forma1}\n\n`;
        caption += `- *Autor:* ${author}\n`;
        caption += `- *Nombre de usuario:* ${username}\n`;
        caption += `- *Descripción:* ${title}\n`;
        caption += `- *Publicado:* ${published}\n`;
        caption += `- *Likes:* ${like}\n`;
        caption += `- *Comentarios:* ${comment}\n`;
        caption += `- *Vistas:* ${views}\n`;
        caption += `- *Bookmark:* ${bookmark}\n`;
        caption += `- *Duración:* ${duration}\n\n`;
        caption += `> ${botname} by ${ownername}`;

        let videoTt = await fetchBuffer(video);
        nyanBot2.sendMessage(m.chat, {react: {text: '🕒', key: m.key}});
        
        await nyanBot2.sendMessage(m.chat, {
            video: videoTt,
            fileName: title + '.mp4',
            caption: caption,
            mimetype: 'video/mp4',
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: botname,
                    thumbnail: await fetchBuffer(profilePicture),
                    sourceUrl: 'https://wa.me/samu330',
                    mediaType: 2,
                    mediaUrl: video,
                }
            },
        }, { quoted: m });

        nyanBot2.sendMessage(m.chat, {react: {text: '✅', key: m.key}});
        db.data.users[sender].limit -= 10;
    } catch {
        nyanBot2.sendMessage(m.chat, {react: {text: '❌', key: m.key}});
        return reply('Ha ocurrido un error inesperado, por favor repórtalo para darle solución!');
    }
}
break
            case 's': case 'sticker': case 'stiker': {
                if (!quoted) return reply(`Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nDuración del video de 1-9 Segundos.`)
		nyanBot2.sendMessage(m.chat, {react: {text: '🧃', key: m.key}})
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await nyanBot2.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply(`Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nDuración del video de 1-9 Segundos`)
                let media = await quoted.download()
                let encmedia = await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                } else {
                reply(`Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nDuración del video de 1-9 Segundos`)
                }
                }
                break

case 'actualizar':
case 'update':
if (!isSamu) return reply('tu quien eres para decirme que hacer!?🤔')
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) reply(`*El bot se ah actualizado!*\nInforme de la actualización:\n\n${stdout}\n\n> *NyanBot-V2*`)
})
break



            case 'puntos':
                reply(`*Total de puntos: ${db.data.users[sender].limit}*
		
_Para aumentar el número de puntos en tu cuenta, puedes jugar minijuegos, de esta manera se sumarán puntos cada vez que ganes!_
*Usa el comando ${forma1}${prefix}juegos${forma1} para ver los juegos disponibles! O bien, puedes simplemente enviar uno de estos emojis:*

${forma1}⚽ | 🏀 | 🎳 | 🎯 | 🎲${forma1}

_*Y ganarás puntos de manera más rápida!*_`);
            break

            case 'llaves': // Comando para ver el uso de claves
    const usageDataFilePath = path.join(__dirname, './lib/Media/database/usage.json'); // Ruta del archivo de uso

    if (fs.existsSync(usageDataFilePath)) {
        const usageData = JSON.parse(fs.readFileSync(usageDataFilePath)); // Cargar datos de uso

        let message = '*Usos de las claves:*\n\n'; // Mensaje para enviar

        // Iterar sobre las claves y agregar su uso al mensaje
        for (const key of Object.keys(usageData.keys)) {
            const keyInfo = usageData.keys[key];
            const formattedLastReset = new Date(keyInfo.lastReset).toLocaleString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false // Para usar el formato de 24 horas
            });

            message += `*Clave:* ${key}, *Usos:* ${keyInfo.usage}, *Último reinicio:* ${formattedLastReset}\n`;
        }

        reply(message); // Enviar el mensaje con la información de uso
    } else {
        reply("El archivo de uso no existe."); // Mensaje si el archivo no se encuentra
    }
    break
			
	case 'groseria': case 'addbd':
               if (!isSamu) return reply(mess.bot)
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `*USO CORRECTO DEL COMANDO*\n\n${prefix + command} [mala palabra].\n*Ejemplo:* ${prefix + command} puchaina`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply(`> *${q} Se añadio a la lista correctamente!*\n_Para ver la lista de malas palabras usa el comando:_\n${prefix}listbadword`)
            break
            case 'deldb':
               if (!isSamu) return reply(mess.bot)
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `*USO CORRECTO DEL COMANDO*\n\n${prefix + command} [mala palabra].\n*Ejemplo:* ${prefix + command} puchaina`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply(`> *${q} Se ha eliminado de la lista correctamente!*\n_Para ver la lista de malas palabras usa el comando:_\n${prefix}listbadword`)
            break


case 'bienvenida': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (!welcome === true) {
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Activar ✔',
            id: '%welon'
          }),
        }]
return await sendReplyButton(m.chat, buttons, m, {
	content: '*La bienvenida en este grupo está desactivada, presiona el botón para poder activar esta opción*'
})	
} else {
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Desactivar ❌',
            id: '%weloff'
          }),
        }]
return await sendReplyButton(m.chat, buttons, m, {
	content: '*La bienvenida en este grupo está activada, presiona el botón para poder desactivar esta opción*'
})
}
}
break

case 'welon': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (welcome === true) return reply('¡la opción de bienvenida está ya activa!')
welcome = true
reply(`La opción de badwords sé ha activado en este chat.`)
}
break
case 'weloff': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (welcome === false) return reply('¡la opción de bienvenida está ya desactivada!')
welcome = false
reply(`La opción de badwords sé ha desactivado en este chat.`)
}
break
			
case 'listbadword':{
let teks = '> _LISTA DE MALAS PALABRAS_\n\n'
for (let x of bad) {
teks += `- ${x}\n`
}
teks += `\n\n*TOTAL DE PALABRAS ${bad.length}*`
reply(teks)
}
break

case 'anti': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (!db.data.chats[from].badword === true) {
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Activar ✔',
            id: '%bdon'
          }),
        }]
return await sendReplyButton(m.chat, buttons, m, {
	content: '*AntiBadWords esta desactivado, Si deseas activar esta opción toca el botón.*'
})	
} else {
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Desactivar ❌',
            id: '%bdoff'
          }),
        }]
return await sendReplyButton(m.chat, buttons, m, {
	content: '*AntiBadWords esta activado, Si deseas desactivar esta opción toca el botón.*'
})
}
}
break

case 'bdon': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (db.data.chats[from].badword === true) return reply('¡la opción de badwords está ya activa!')
db.data.chats[from].badword = true
reply(`La opción de badwords sé ha activado en este chat.`)
}
break
case 'bdoff': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (db.data.chats[from].badword === false) return reply('¡la opción de badwords está ya desactivada!')
db.data.chats[from].badword = false
reply(`La opción de badwords sé ha desactivado en este chat.`)
}
break
			
            case 'addsticker':{
                if (!isSamu) return reply(mess.bot)
                if (args.length < 1) return reply('cuál sería el nombre del sticker a guardar? Porfavor introduce el nombre junto al comando.')
                if (Stickers.includes(q)) return reply("No se puede guardar, ya que el nombre del sticker ya está en la base de datos.")
                let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                Stickers.push(q)
                await fsx.copy(delb, `./Media/sticker/${q}.webp`)
                fs.writeFileSync('./Media/database/stickers.json', JSON.stringify(Stickers))
                fs.unlinkSync(delb)
                reply(`Se añadio el Sticker.\nPara ver los Stickers añadidos usa: *${prefix}liststicker*`)
                }
                break

                case 'liststicker':{
                    let teks = '*Lista de Stickers*\n\n'
                    for (let x of Stickers) {
                    teks += `- ${x}\n`
                    }
                    teks += `\n\n*Total de Stickers : ${Stickers.length}*`
                    reply(teks)
                    }
                    break

                    case 'delsticker':{
                        if (!isSamu) return reply(mess.bot)
                        if (args.length < 1) return reply('Por favor ingresa el nombre del sticker junto al comando para eliminar!')
                        if (!Stickers.includes(q)) return reply("No se puede eliminar el sticker, ya que no está en la base de datos.")
                        let wanu = Stickers.indexOf(q)
                        Stickers.splice(wanu, 1)
                        fs.writeFileSync('./Media/database/stickers.json', JSON.stringify(Stickers))
                        fs.unlinkSync(`./Media/sticker/${q}.webp`)
                        reply(`Sé ha eliminado el sticker ${q}`)
                        }
                        break

case 'ping': case 'botstatus': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
*Velocidad de respuesta* ${latensi.toFixed(4)} _Segundos_\n\n*Runtime* : ${runtime(process.uptime())}

*Info Server*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_\n
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	reply(`${respon}`)
    }
	
	break

            default:
                if (budy == '🎯') {
                    totalTiro = ["failTiro","tiro10p","tiro30p","tiro50p","tiro70p","tiroWin"]
                    tiroStickers = Math.floor(Math.random() * totalTiro.length)
                    let puntos = 0;
                    let msgTiro = 'Puntos Ganados:'
                    switch (totalTiro[tiroStickers]){
                        case 'tiro10p':
                            puntos = 10;
                            break
                        case 'tiro30p':
                            puntos = 30;
                            break
                        case 'tiro50p':
                            puntos = 50;
                            break
                        case 'tiro70p':
                            puntos = 70;
                            break
                        case 'tiroWin':
                            puntos = 100;
                            msgTiro = '🎉¡Premio mayor! Puntos:'
                            break
                        default:
                            puntos = 0;
                            msgTiro = 'Has fallado el tiro! 😞'
                    }
		    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/tiro/${totalTiro[tiroStickers]}.webp`)}, { quoted: {
                        key: {
                            remoteJid: '0@s.whatsapp.net',
                            fromMe: false,
                            id: `${ownername}`,
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "USD",
                                amount1000: amount1000,
                                requestFrom: '0@s.whatsapp.net',
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: msgTiro
                                    }
                                },
                                expiryTimestamp: 999999999,
                                amount: {
                                    value: 5219984907794,
                                    offset: 1000,
                                    currencyCode: "INR"
                                }
                            }
                        }
                    } })
                }
                if (budy == '🎳') {
                    totalBolo = ["boloFail","bolo10","bolo20","bolo60","bolo80","boloWin"]
                    boloStickers = Math.floor(Math.random() * totalBolo.length)
                    let puntos = 0;
                    let msgBolo = 'Puntos Ganados:'
                    switch (totalBolo[boloStickers]){
                        case 'bolo10':
                            puntos = 10;
                            break
                        case 'bolo20':
                            puntos = 20;
                            break
                        case 'bolo60':
                            puntos = 60;
                            break
                        case 'bolo80':
                            puntos = 80;
                            break
                        case 'boloWin':
                            puntos = 100;
                            msgBolo = '🎉¡Lechusa 🦉! o como era?🤔 Puntos:'
                            break
                        default:
                            puntos = 0;
                            msgBolo = 'Has fallado el tiro! 😞'
                    }
		    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/bolo/${totalBolo[boloStickers]}.webp`)}, { quoted: {
                        key: {
                            remoteJid: '0@s.whatsapp.net',
                            fromMe: false,
                            id: `${ownername}`,
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "USD",
                                amount1000: amount1000,
                                requestFrom: '0@s.whatsapp.net',
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: msgBolo
                                    }
                                },
                                expiryTimestamp: 999999999,
                                amount: {
                                    value: 5219984907794,
                                    offset: 1000,
                                    currencyCode: "INR"
                                }
                            }
                        }
                    } })
                }
                if (budy == '⚽') {
                    footTiro = ["footFail", "footPoste", "foot50", "foot75", "foot100"]
                    footStickers = Math.floor(Math.random() * footTiro.length)
                    let puntos = 0;
                    let msgFoot = 'Puntos Ganados:'
                    switch (footTiro[footStickers]){
                        case 'footPoste':
                            puntos = 0;
                            msgFoot = 'Poste carnal! 🫣 0 puntos!'
                            break
                        case 'foot50':
                            puntos = 50;
                            break
                        case 'foot75':
                            puntos = 75;
                            break
                        case 'foot100':
                            puntos = 100;
                            msgTiro = '🎉¡Premio mayor! Puntos:'
                            break
                        default:
                            puntos = 0;
                            msgFoot = 'Uff! te la volaste pai 😞 0 puntos!'
                    }
		    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/foot/${footTiro[footStickers]}.webp`)}, { quoted: {
                        key: {
                            remoteJid: '0@s.whatsapp.net',
                            fromMe: false,
                            id: `${ownername}`,
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "USD",
                                amount1000: amount1000,
                                requestFrom: '0@s.whatsapp.net',
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: msgFoot
                                    }
                                },
                                expiryTimestamp: 999999999,
                                amount: {
                                    value: 5219984907794,
                                    offset: 1000,
                                    currencyCode: "INR"
                                }
                            }
                        }
                    } })
                }
                if (budy == '🏀') {
                    baskTiro = ["baskFail", "baskFail2", "baskFail3", "bask50", "bask100"]
                    baskStickers = Math.floor(Math.random() * baskTiro.length)
		    let puntos = 0;
                    let msgbask = 'Puntos Ganados:'
                    switch (baskTiro[baskStickers]){
                        case 'baskFail':
                            puntos = 0;
                            msgbask = 'Uff! Casi 😬 0 puntos!'
                            break
                        case 'baskFail2':
                            puntos = 0;
                            msgbask = 'Casiiii! 🤯 0 puntos!'
                            break
                        case 'baskFail3':
                            puntos = 0;
                            msgbask = 'Y ahora como lo bajamos de ahi!😑 0 puntos!'
                            break
                        case 'bask50':
                            puntos = 50;
                            msgbask = 'Bien! Ganaste:'
                            break
                        case 'bask100':
                            puntos = 100;
                            msgbask = '🎉¡Excelente tiro! 🏀 Puntos:'
                            break
                    }
                    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/bask/${baskTiro[baskStickers]}.webp`)}, { quoted: {
                        key: {
                            remoteJid: '0@s.whatsapp.net',
                            fromMe: false,
                            id: `${ownername}`,
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "USD",
                                amount1000: amount1000,
                                requestFrom: '0@s.whatsapp.net',
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: msgbask
                                    }
                                },
                                expiryTimestamp: 999999999,
                                amount: {
                                    value: 5219984907794,
                                    offset: 1000,
                                    currencyCode: "INR"
                                }
                            }
                        }
                    } })
                }
                if (budy == '🎲') {
                    dadoTiro = ["dado1", "dado2", "dado3", "dado4", "dado5", "dado6"]
                    dadoStickers = Math.floor(Math.random() * dadoTiro.length)
                    let puntos = 0;
                    let msgDado = 'Puntos Ganados:'
                    switch (dadoTiro[dadoStickers]){
                        case 'dado1':
                            puntos = 10;
                            msgDado = 'Dado #1! Ganaste:'
                            break
                        case 'dado2':
                            puntos = 20;
                            msgDado = 'Dado #2! Ganaste:'
                            break
                        case 'dado3':
                            puntos = 30;
                            msgDado = 'Dado #3! Ganaste:'
                            break
                        case 'dado4':
                            puntos = 40;
                            msgDado = 'Dado #4! Ganaste:'
                            break
                        case 'dado5':
                            puntos = 50;
                            msgDado = 'Dado #5! Ganaste:'
                            break
                        case 'dado6':
                            puntos = 60;
                            msgDado = 'Dado #6! Ganaste:'
                            break
                    }
		    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/dado/${dadoTiro[dadoStickers]}.webp`)}, { quoted: {
                        key: {
                            remoteJid: '0@s.whatsapp.net',
                            fromMe: false,
                            id: `${ownername}`,
                            participant: '0@s.whatsapp.net'
                        },
                        message: {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "USD",
                                amount1000: amount1000,
                                requestFrom: '0@s.whatsapp.net',
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: msgDado
                                    }
                                },
                                expiryTimestamp: 999999999,
                                amount: {
                                    value: 5219984907794,
                                    offset: 1000,
                                    currencyCode: "INR"
                                }
                            }
                        }
                    } })
                }
                if (budy.startsWith('=>')) {
                    if (!isSamu) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isSamu) return
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(`${stdout}`)
                    })
                }
		if (budy.startsWith('<')) {
		if (!isSamu) return
		if (!budy.slice(2)) return
		  let _syntax = ''
		  let _return
		  let _text = `(async () => { ${budy.slice(2)} })()`
		  try {
		  _return = await eval(_text)
	  } catch (e) {
		  let err = await syntax(_text, 'Sistema De Ejecución')
		    if (err) _syntax = err + '\n\n'
		    _return = e
	  } finally {
		  reply(`${_syntax + util.format(_return)}`)
	  }
			}
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
nyanBot2.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
nyanBot2.sendMessage("5219984907794@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
