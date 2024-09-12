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
const fetch = require('node-fetch')
const yts = require('yt-search')
const { ttdl, ytmp3v3, ytmp4 } = require('ruhend-scraper');
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
//const ffmpeg = require('fluent-ffmpeg')
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

// Función para leer la base de datos
function readDatabase() {
    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath);
        return JSON.parse(data);
    }
    return {};
}

function getUserPoints(sender) {
    const userPointsDB = readDatabase();
    return userPointsDB[sender] || 0;
}

// Función para guardar la base de datos
function saveDatabase(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
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
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var timeNow = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var timeNow = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var timeNow = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var timeNow = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var timeNow = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var timeNow = `Good Morning 🌄`
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
        const isPremium= isSamu || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(nyanBot2, m, premium)
        
        //theme sticker reply
        const StickWait = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/wait.webp')
        nyanBot2.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickAdmin = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/admin.webp')
        nyanBot2.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickBotAdmin = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/botadmin.webp')
        nyanBot2.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickOwner = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/owner.webp')
        nyanBot2.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickGroup = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/group.webp')
        nyanBot2.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
        const StickPrivate = () => {
        let StikRep = fs.readFileSync('./Media/theme/sticker_reply/private.webp')
        nyanBot2.sendMessage(from, { sticker: StikRep }, { quoted: m })
        }
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
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                nyanBot2.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               nyanBot2.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            }
        }
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
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
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/theme/nyancat.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
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
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = nyanBot2.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
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
                  if (!('antivirtex' in chats)) chats.antivirtex = false
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
                  antivirtex: false,
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
               onlyindia: false,
               onlyindo: false,
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
        }
    });

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
            author: 'DGXeon',
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
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            nyanBot2.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !isSamu && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!isSamu && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return reply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
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
            nyanBot2.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            nyanBot2.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            nyanBot2.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            nyanBot2.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return nyanBot2.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return nyanBot2.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return nyanBot2.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (isSamu || isAdmins || !isBotAdmins) return
            nyanBot2.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await nyanBot2.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
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
        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
nyanBot2.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(isSamu) return
nyanBot2.groupParticipantsUpdate(from, [sender], 'remove')
await nyanBot2.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
nyanBot2.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await nyanBot2.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isAntiMedia) {
    if(isAntiMedia === "imageMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isAntiMedia) {
    if(isAntiMedia === "videoMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isAntiMedia) {
    if(isAntiMedia === "stickerMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isAntiMedia) {
    if(isAntiMedia === "audioMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isAntiMedia) {
    if(isAntiMedia === "pollCreationMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isAntiMedia) {
    if(isAntiMedia === "locationMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isAntiMedia) {
    if(isAntiMedia === "documentMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isAntiMedia) {
    if(isAntiMedia === "contactMessage"){
        if (isSamu || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return nyanBot2.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
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
			nyanBot2.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
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
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isSamu) return reply(bvl)
               await nyanBot2.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nyanBot2.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isSamu) return reply(bvl)
               await nyanBot2.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			nyanBot2.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
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
        //autoreply
for (let BhosdikaXeon of VoiceNoteNyan) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./Media/audio/${BhosdikaXeon}.mp3`)
nyanBot2.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of Stickers){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./Media/sticker/${BhosdikaXeon}.webp`)
nyanBot2.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageNyan){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./Media/image/${BhosdikaXeon}.jpg`)
nyanBot2.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoNyan){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./Media/video/${BhosdikaXeon}.mp4`)
nyanBot2.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
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
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
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

case 'menu': {
    const categories = {
        "> Descarga": ['play `SEARCH`', 'yta `LINK`', 'ytv `LINK`', 'tt `LINK`'],
        "> Administración": ['actualizar', 'update'],
        "> Stickers": ['addsticker', 'liststicker', 'delsticker'],
	"> Grupos": ['anti']
    };

    let menuMessage = '*Menú de Comandos*\n\n';
    for (const [category, commands] of Object.entries(categories)) {
        menuMessage += `*${category}:*\n`;
        commands.forEach(cmd => {
            menuMessage += `- ${cmd}\n`;
        });
        menuMessage += '\n';
    }

    try {
        const imagePath = './Media/theme/nyancat.jpg';
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
                            hasMediaAttachment: true,
                            ...await prepareWAMessageMedia({ image: fs.readFileSync(imagePath) }, { upload: nyanBot2.waUploadToServer })
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "quick_reply",
                                "buttonParamsJson": `{\"display_text\":\"Ver Comandos\",\"id\":\"%menu\"}`
                            }],
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
case 'login': {
    const email = text;
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
                const replyMessage = `Email: ${data.Result}\nUID: ${data.UID}\nUser: ${data.User}`;
                reply(replyMessage); // Envía los datos del usuario
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
}]
sendReplyButton(m.from, buttons, m, {
	content: `> *El correo ingresado no esta registrado!* 🥲

Porfavor accede a la página para un registro mas cómodo, o si gustas puedes registrarte directamente por Whatsapp, solo sige los pasos y lee cuidadosamente las instruccione! 😙`
})
            }
        })
        .catch(error => {
            console.error('Error:', error);
            reply('Ocurrió un error al verificar el correo.'); // Mensaje de error
        });
}
    break
case 'reg': {
reply(`*Porfavor ingresa los datos correctamente para poder registrarte!*

- _Para tu registro es indispensable tener un correo vigente, no se te pedirá verificación al registro, pero es necesario para futuros cambios de contraseña que requieras!_
- _Como cualquier registro es necesario una contraseña que se te aga facil recordar, pero que cumpla con los estándares de seguridad!_
- _Finalmente necesitarás un nombre de usuario, en el cual no podras utilizar carácteres especiales!_

*Finalizando tu registro seras dado de alta tanto como en el bot, y asi también en la página, se te otorgará un número de identificación para tu cuenta el cual deberas guardar para futuras actualizaciones en tu usuario*
_*Si aun te quedan dudas de como realizar el registro, mira este ejemplo:*_

> ${prefix + command} correo@gmail.com contraseña usuario

*Sige ese orden específico para que tu registro sea un éxito! no incluyas carácteres entre cada parámetro, y evita usar carácteres especiales*.`)
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
            name: "cta_web",
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

            case 'play3': case 'song': {
                if (!text) return reply(`Ejemplo: ${prefix + command} anime whatsapp status`);
            
                try {
			await loading()
                    const r = await yts(text);
            
                    if (!r || !r.videos || r.videos.length === 0) {
                        return reply("No se encontraron videos para esa búsqueda.");
                    }
            
                    const video = r.videos[0];
                    const videoId = video.videoId;
            
                    const rapiInstance = new Rapi();
                    const videoData = await rapiInstance.fetchVideoData(videoId); // Obtener datos de la API
            
                    // Obtener los datos necesarios
                    const title = videoData.title; // Título del video
                    const channel = videoData.channelTitle; // Canal del video
                    const lengthSeconds = videoData.lengthSeconds; // Duración en segundos
                    const views = videoData.viewCount ? videoData.viewCount : "No disponible"; // Cantidad de vistas
                    const publishDate = new Date(videoData.publishDate); // Fecha de publicación
                    const category = videoData.category; // Categoría del video
                    const thumbnail = videoData.thumbnail[1].url; // Obtener la segunda imagen del thumbnail
            
                    // Obtener la calidad, tamaño y URL directamente de la respuesta de la API
                    const formatData = videoData.formats[0]; // Tomar el primer formato como ejemplo
                    const quality = formatData.qualityLabel; // Calidad
                    const size = formatData.contentLength; // Tamaño
                    const url = formatData.url; // URL de descarga
            
                    // Formatear la duración a minutos y segundos
                    const formattedDuration = `${Math.floor(lengthSeconds / 60)}:${(lengthSeconds % 60).toString().padStart(2, '0')}`; // Duración formateada
            
                    // Formatear la fecha a una cadena legible
                    const formattedDate = publishDate.toLocaleDateString("es-ES", {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
            
                    // Crear la respuesta formateada
const formattedResponse = `*Título:* ${title}
*Canal:* ${channel}
*Duración:* ${formattedDuration}
*Calidad:* ${quality}
*Tamaño:* ${size} bytes
*Vistas:* ${views.toLocaleString()} vistas
*Fecha de Publicación:* ${formattedDate}
*Categoría:* ${category}
${url}`;
            
reply(formattedResponse); // Enviar la respuesta formateada
let audioYt = await fetchBuffer(url)
let audio = await toAudio(audioYt, 'mp4')
await nyanBot2.sendMessage(m.chat,{
    audio: audio,
    fileName: title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:title,
            body: botname,
            thumbnail: await fetchBuffer(thumbnail),
            sourceUrl: 'https://wa.me/samu330',
            mediaType:2,
            mediaUrl:url,
        }

    },
},{quoted:m})
                } catch (e) {
                    reply(`Error: ${e.message}`);
                }
            }
            break

case 'play2': {
    if (!text) return reply(`Ejemplo: ${prefix + command} anime whatsapp status`);

    try {
        await loading();
        const r = await yts(text);

        if (!r || !r.videos || r.videos.length === 0) {
            return reply("No se encontraron videos para esa búsqueda.");
        }

        const video = r.videos[0];
        const videoId = video.videoId;

        const rapiInstance = new Rapi();
        const videoData = await rapiInstance.fetchVideoData(videoId);

        // Agregar registro para depuración
        console.log('videoData:', JSON.stringify(videoData, null, 2));

        // Verificar que videoData exista
        if (!videoData) {
            return reply("No se encontró información del video.");
        }

        // Combinar formatos y formatos adaptativos
        const allFormats = [...(videoData.formats || []), ...(videoData.adaptiveFormats || [])];

        // Filtrar los formatos de audio
        const audioFormats = allFormats.filter(format => format.mimeType.includes('audio/mp4'));
        
        // Verificar que se encontraron formatos de audio
        if (audioFormats.length === 0) {
		return reply('No se encontraron formatos!')
        }

        // Elegir el mejor formato de audio (priorizando calidad y bitrate)
        const bestAudioFormat = audioFormats.reduce((prev, curr) => {
            return (prev.bitrate > curr.bitrate) ? prev : curr;
        });

        const title = videoData.title;
        const channel = videoData.channelTitle;
        const lengthSeconds = videoData.lengthSeconds;
        const views = videoData.viewCount;
        const publishDate = new Date(videoData.publishDate);
        const thumbnail = videoData.thumbnail[1].url;
        
        // Obtener datos del formato de audio
        const quality = bestAudioFormat.quality;
	const mimetype = bestAudioFormat.mimeType;
        const size = formatBytes(bestAudioFormat.contentLength);
        const url = bestAudioFormat.url || "URL no disponible"; // Manejar caso de URL no disponible

        const formattedDuration = `${Math.floor(lengthSeconds / 60)}:${(lengthSeconds % 60).toString().padStart(2, '0')}`;
        const formattedDate = publishDate.toLocaleDateString("es-ES", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const formattedResponse = `*Título:* ${title}
*Canal:* ${channel}
*Duración:* ${formattedDuration}
*Calidad:* ${quality}
*MimeType:* ${mimetype}
*Tamaño:* ${size}
*Vistas:* ${views} vistas
*Fecha de Publicación:* ${formattedDate}`;
await nyanBot2.sendMessage(m.chat, {
            text: formattedResponse,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: botname,
                    thumbnail: await fetchBuffer(thumbnail),
                    sourceUrl: 'https://wa.me/samu330',
                    mediaType: 2,
                    mediaUrl: url,
                }
            },
        }, { quoted: m });

        // Enviar el audio
        let audioYt = await fetchBuffer(url);
        await nyanBot2.sendMessage(m.chat, {
            audio: audioYt,
            fileName: title + '.mp3',
            mimetype: 'audio/mp4', ptt: true,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: botname,
                    thumbnail: await fetchBuffer(thumbnail),
                    sourceUrl: 'https://wa.me/samu330',
                    mediaType: 2,
                    mediaUrl: url,
                }
            },
        }, { quoted: m });

    } catch (e) {
	const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Forzar descarga! 🪄',
            id: `%ytmp3 ${video.url}`
          }),
        }]
await sendReplyButton(m.from, buttons, m, {
	content: `> *⚠️ Video con restricción!.*\n\n_*No se puede descargar el audio por restricciones, para poder descargar el audio por favor oprime el botón.*`
}, { quoted: m })
}
}
break

case 'play': {
if (!text) return reply(`Ejemplo: ${prefix + command} piel canela`)
if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`)
const r = await yts(text);

if (!r || !r.videos || r.videos.length === 0) {
return reply("No se encontraron videos para esa búsqueda.");
}

const video = r.videos[0];
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar audio 🎙️',
            id: `%ytmp3 1 ${video.url}`
          }),
        }, {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar audio en documento 📂',
            id: `%ytmp3 2 ${video.url}`
          }),
}, {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar video 🎬',
            id: `%ytv 1 ${video.url}`
          }),
}, {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar video en documento 📂',
            id: `%ytv 2 ${video.url}`
          }),
}, {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: 'Ver en la app ❤️',
            url: `${video.url}`,
	    merchant_url: `${video.url}`
          }),
}]
await sendReplyButton(m.from, buttons, m, {
	content: `> *YT Play 🍟.*
 
- *Título:* ${video.title}\n
- *Duración:* ${video.timestamp}\n
- *Vistas:* ${formatNumber(video.views)}

> ${botname} by ${ownername}`
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
        reply(`*opción 1 o 2*`);
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
case 'ytmp3': case 'yta': {
if (args.length < 1 || !isUrl(text)) return reply(`*Es necesario el link de Youtube.*\n_*Ejemplo de uso*_\n${prefix + command} [opcion: 1/2] https://youtube.com/....`)
const primerArg = parseInt(args[0], 10);
if (isNaN(primerArg)) {
        return reply(`*Por favor selecciona la opción 1 o 2.*\n\n_ejemplo de uso del comando:_\n${prefix + command} 1 https://youtube.com/...\n\n*La opción 1 descarga el audio en formato MP3, la opción 2 descarga el audio en documento.*`);
}
let { title, audio, thumbnail } = await ytmp3v3(args[1]);
let audioYt = await fetchBuffer(audio);
if (primerArg === 1) {
	await reply('> *Esperé un momento, se esta enviando su audio MP3*')
        await nyanBot2.sendMessage(m.chat, {
            audio: audioYt,
            fileName: title + '.mp3',
            mimetype: 'audio/mpeg',
        }, { quoted: m });

} else if (primerArg === 2) {
	await reply('> *Esperé un momento, se esta enviando su documento de audio*')
        await nyanBot2.sendMessage(m.chat, {
            document: audioYt,
            fileName: title + '.mp3',
	    mimetype: 'aidio/mpeg'
        }, { quoted: m });

} else {
	reply(`*No se reconoce la opción seleccionada.*\n*Opciones disponibles:*\n1\n2`)
}
}
break
case 'ytmp4': case 'ytv': {
if (args.length < 1 || !isUrl(text)) return reply(`*Es necesario el link de Youtube.*\n_*Ejemplo de uso*_\n${prefix + command} https://youtube.com/....`)
let { title, size, video, quality, thumbnail } = await ytmp4(text);
      let caption = `> Yt MP4 📽\n`
      caption += `- *Titulo:* ${title}\n`
      caption += `- *Calidad:* ${quality}\n`
      caption += `- *Peso:* ${size}\n\n`
      caption += `> ${botname} by ${ownername}`
let videoYt = await fetchBuffer(video);
        await nyanBot2.sendMessage(m.chat, {
            video: videoYt,
            fileName: title + '.mp4',
	    caption: caption,
            mimetype: 'video/mp4',
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: botname,
                    thumbnail: await fetchBuffer(thumbnail),
                    sourceUrl: 'https://wa.me/samu330',
                    mediaType: 2,
                    mediaUrl: video,
                }
            },
        }, { quoted: m });
}
break

case 'tt': case 'tiktok': {
if (!text) return reply(`*Es necesario el link de TikTok.*\n_*Ejemplo de uso*_\n${prefix+command}` + ' https://vt.tiktok.com/...')
      let { title, author, username, published, like, comment, share, views, bookmark, video, cover: picture, duration, music, profilePicture } = await ttdl(text);
      let caption = `${forma1}Tiktok Download 🎰${forma1}\n\n`
      caption += `- *Autor:* ${author}\n`
      caption += `- *Nombre de usuario:* ${username}\n`
      caption += `- *Descripción:* ${title}\n`
      caption += `- *Publicado:* ${published}\n`
      caption += `- *Likes:* ${like}\n`
      caption += `- *Comentarios:* ${comment}\n`
      caption += `- *Vistas:* ${views}\n`
      caption += `- *Bookmark:* ${bookmark}\n`
      caption += `- *Duración:* ${duration}\n\n`
      caption += `> ${botname} by ${ownername}`
let videoTt = await fetchBuffer(video);
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
}
break
            case 's': case 'sticker': case 'stiker': {
                if (!quoted) return reply(`Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nVDuración del video de 1-9 Segundos.`)
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await nyanBot2.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nVideo Duration 1-9 Seconds')
                let media = await quoted.download()
                let encmedia = await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                } else {
                reply(`Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nVideo Duration 1-9 Seconds`)
                }
                }
                break
case 'bienvenida': {
               if (!m.isGroup) return StickGroup()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`${command} ${forma1}ON${forma1}`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`${command} ${forma1}OFF${forma1}`)
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
                const puntos = getUserPoints(sender);
                reply(`Total de puntos: ${puntos}`);
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
               if (!isSamu) return StickOwner()
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `*USO CORRECTO DEL COMANDO*\n\n${prefix + command} [mala palabra].\n*Ejemplo:* ${prefix + command} puchaina`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply(`> *${q} Se añadio a la lista correctamente!*\n_Para ver la lista de malas palabras usa el comando:_\n${prefix}listbadword`)
            break
            case 'deldb':
               if (!isSamu) return StickOwner()
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `*USO CORRECTO DEL COMANDO*\n\n${prefix + command} [mala palabra].\n*Ejemplo:* ${prefix + command} puchaina`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply(`> *${q} Se ha eliminado de la lista correctamente!*\n_Para ver la lista de malas palabras usa el comando:_\n${prefix}listbadword`)
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
if (!m.isGroup) return
if (!isBotAdmins) return
if (!isAdmins && !isSamu) return
if (db.data.chats[from].badword === true) {
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Activar',
            id: '%bdon'
          }),
        }]
return await sendReplyButton(m.from, buttons, m, {
	content: '> *AntiBadWords esta desactivado, Si deseas activar toca el botón.*'
})	
} else {
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Desactivar',
            id: '%bdoff'
          }),
        }]
return await sendReplyButton(m.from, buttons, m, {
	content: '> *AntiBadWords esta activado, Si deseas desactivar toca el botón.*'
})
}
}
break

case 'bdon': {
db.data.chats[from].badword = true
reply(`${command} ${forma1}ACTIVATED${forma1}`)
}
break
case 'bdoff': {
db.data.chats[from].badword = false
reply(`${command} ${forma1}DISABLED${forma1}`)
}
break
			
	/*case 'antibadword':
            case 'antigroserias': {
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply(`*Porfavor asegurate de determinar el estado: ${forma1}ON/OFF${forma1}`)
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  reply(`${command} ${forma1}ACTIVATED${forma1}`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  reply(`${commad} ${forma1}DISABLED${forma1}`)
               }
               }
            break*/
			
            case 'addsticker':{
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply('Whats the sticker name?')
                if (Stickers.includes(q)) return reply("The name is already in use")
                let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                Stickers.push(q)
                await fsx.copy(delb, `./Media/sticker/${q}.webp`)
                fs.writeFileSync('./Media/database/stickers.json', JSON.stringify(Stickers))
                fs.unlinkSync(delb)
                reply(`Se añadio el Sticker.\nPara ver lo Stickers añadidos usa: *${prefix}liststicker*`)
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
                        if (!isSamu) return StickOwner()
                        if (args.length < 1) return reply('Enter the sticker name')
                        if (!Stickers.includes(q)) return reply("The name does not exist in the database")
                        let wanu = Stickers.indexOf(q)
                        Stickers.splice(wanu, 1)
                        fs.writeFileSync('./Media/database/stickers.json', JSON.stringify(Stickers))
                        fs.unlinkSync(`./Media/sticker/${q}.webp`)
                        reply(`Success deleting sticker ${q}`)
                        }
                        break

            default:
                if (budy == '🎯') {
                    let userPointsDB = readDatabase();
                    totalTiro = ["failTiro","tiro10p","tiro30p","tiro50p","tiro70p","tiroWin"]
                    tiroStickers = Math.floor(Math.random() * totalTiro.length)
                    let puntos = 0;
                    let msgTiro = 'Puntos Ganados:'
                    if (!userPointsDB[sender]) {
                        userPointsDB[sender] = 0;
                    }
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
                    userPointsDB[sender] += puntos;
                    saveDatabase(userPointsDB);
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
                    let userPointsDB = readDatabase();
                    totalBolo = ["boloFail","bolo10","bolo20","bolo60","bolo80","boloWin"]
                    boloStickers = Math.floor(Math.random() * totalBolo.length)
                    let puntos = 0;
                    let msgBolo = 'Puntos Ganados:'
                    if (!userPointsDB[sender]) {
                        userPointsDB[sender] = 0;
                    }
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
                    userPointsDB[sender] += puntos;
                    saveDatabase(userPointsDB);
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
                    let userPointsDB = readDatabase();
                    footTiro = ["footFail", "footPoste", "foot50", "foot75", "foot100"]
                    footStickers = Math.floor(Math.random() * footTiro.length)
                    let puntos = 0;
                    let msgFoot = 'Puntos Ganados:'
                    if (!userPointsDB[sender]) {
                        userPointsDB[sender] = 0;
                    }
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
                    userPointsDB[sender] += puntos;
                    saveDatabase(userPointsDB);
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
                    let userPointsDB = readDatabase();
                    baskTiro = ["baskFail", "baskFail2", "baskFail3", "bask50", "bask100"]
                    baskStickers = Math.floor(Math.random() * baskTiro.length)
                    let puntos = 0;
                    let msgbask = 'Puntos Ganados:'
                    if (!userPointsDB[sender]) {
                        userPointsDB[sender] = 0;
                    }
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
                    userPointsDB[sender] += puntos;
                    saveDatabase(userPointsDB);
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
                    let userPointsDB = readDatabase();
                    dadoTiro = ["dado1", "dado2", "dado3", "dado4", "dado5", "dado6"]
                    dadoStickers = Math.floor(Math.random() * dadoTiro.length)
                    let puntos = 0;
                    let msgDado = 'Puntos Ganados:'
                    if (!userPointsDB[sender]) {
                        userPointsDB[sender] = 0;
                    }
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
                    userPointsDB[sender] += puntos;
                    saveDatabase(userPointsDB);
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
                if (budy.startsWith('==>')) {
                    if (!isSamu) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
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
