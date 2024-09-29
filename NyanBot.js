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
const sharp = require('sharp')
const util = require('util')
const { geminiFetch}  = require('./lib/gemini1.js'); // Asegúrate de que la ruta sea correcta
const { color } = require('./lib/color')
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const archiver = require('archiver');
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const ms = toMs = require('ms')
const axios = require('axios')
const syntax = require('syntax-error')
const fetch = require('node-fetch')
const yts = require('yt-search')
const { igdl, fbdl, ttdl, ytmp3v3, ytmp4v4 } = require('ruhend-scraper');
const gis = require('g-i-s')
const google = require('googlethis')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp = require('./lib/scraper') 
const { Rapi } = require('./lib/rapi.js')
const { getOrganicData } = require('./lib/gg.js')
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
    //ffmpeg,
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

function calculateLevenshteinDistance(a, b) {
    const matrix = [];

    // Inicializar matriz
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Calcular distancia
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // sustitución
                    Math.min(matrix[i][j - 1] + 1, // inserción
                              matrix[i - 1][j] + 1) // eliminación
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function calculateSimilarity(str1, str2) {
    const distance = calculateLevenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    
    // Normalizar la similitud
    return maxLength ? (1 - distance / maxLength) : 1; // Evita división por cero
}

// Constante de categorías y comandos disponibles
const categories = {
    "📝 Registro": [
        { command: 'login', description: '_*CORREO*_' },
        { command: 'reg', description: '' },
        { command: 'reset', description: '_*CORREO*_' },
        { command: 'logout', description: '_*CORREO*_' }
    ],
    "🔍 Búsqueda": [
	{ command: 'google', description: '' },
	{ command: 'imagen', description: '' },
	{ command: 'playlist', description: '' },
	{ command: 'ytplaylist', description: '' },
	{ command: 'youtubesearch', description: '' },
	{ command: 'yts', description: '' },
        { command: 'letra', description: '' },
	{ command: 'buscarsticker', description: '' }
    ],
    "📥 Descargas": [
        { command: 'play', description: '' },
        { command: 'yta', description: '_*URL*_' },
        { command: 'ytmp3', description: '_*URL*_' },
        { command: 'ytv', description: '_*URL*_' },
        { command: 'ytmp4', description: '_*URL*_' },
        { command: 'tiktok', description: '_*URL*_' },
        { command: 'tt', description: '_*URL*_' },
        { command: 'facebook', description: '_*URL*_' },
        { command: 'fb', description: '_*URL*_' },
        { command: 'instagram', description: '_*URL*_' },
        { command: 'ig', description: '_*URL*_' },
        { command: 'mediafire', description: '_*URL*_' }
    ],
    "🎭 Grupos": [
        { command: 'bienvenida', description: '' }
    ],
    "🛠 Herramientas": [
        { command: 'sticker', description: '' },
        { command: 's', description: '' },
	{ command: 'calculadora', description: '' },
	{ command: 'cal', description: '' },
        { command: 'puntos', description: '' },
        { command: 'take', description: '' },
        { command: 'wm', description: '' },
        { command: 'perfil', description: '' }
    ],
    "⚙ Bot": [
        { command: 'actualizar', description: '' },
        { command: 'update', description: '' },
        { command: 'addsticker', description: '' },
        { command: 'liststicker', description: '' },
        { command: 'delsticker', description: '' },
        { command: '<=', description: '_*EVAL*_' },
        { command: '=>', description: '_*EVAL*_' },
        { command: '$', description: '_*EXECUTE*_' }
    ]
};
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
moment.locale('es');
const time = moment().tz('America/Cancun').format('HH:mm:ss');
const date = moment().tz('America/Cancun').format('DD/MM/YYYY');
const time2 = moment().tz('America/Cancun').format('HH:mm:ss');
const longDate = moment().tz('America/Cancun').format('dddd, D [de] MMMM [de] YYYY');
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
        var body = (m.mtype === 'conversation')
		? m.message.conversation : (m.mtype == 'imageMessage')
		? m.message.imageMessage.caption : (m.mtype == 'videoMessage')
		? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage')
		? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage')
		? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage')
		? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage')
		? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo')
		? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
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
                        "isForwarded":true,
			forwardedNewsletterMessageInfo: {
                           "newsletterJid": '120363215018837468@newsletter',
			   "newsletterName": `ᶻ 𝗓 𐰁 ${botname} 🍟`
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

// Función para iniciar la carga de reacciones
const reactionLoad = (chatId, messageKey) => {
    const emojis = ['🟠', '⚫'];
    let emojiIndex = 0;

    const sendReaction = () => {
        nyanBot2.sendMessage(chatId, { react: { text: emojis[emojiIndex], key: messageKey } });
        emojiIndex = (emojiIndex + 1) % emojis.length;
    };
    
    const intervalId = setInterval(sendReaction, 500);
    return intervalId;
};

// Función para finalizar la carga con éxito
const reactionOk = (chatId, messageKey, intervalId) => {
    clearInterval(intervalId);
    nyanBot2.sendMessage(chatId, { react: { text: '🟢', key: messageKey } });
};

// Función para finalizar la carga con error
const reactionError = (chatId, messageKey, intervalId) => {
    clearInterval(intervalId);
    nyanBot2.sendMessage(chatId, { react: { text: '🔴', key: messageKey } });
};

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
            ...(media ? await prepareWAMessageMedia({ image: media },{ upload: nyanBot2.waUploadToServer }) : {})
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: buttons,
        }),
        contextInfo: {
            mentionedJid: [m.sender]
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

async function sendCarousel(chatId, nativeFlowMessage, options) {
    const { header, footer, cards } = options; // Eliminamos header, content y media
    let carouselCards = [];

    // Agregar todas las cards pasadas a la función
    for (const card of cards) {
        // Preparar la imagen de cada tarjeta
        var cardImageParse = await prepareWAMessageMedia({
            image: {
                url: card.header.imageMessage
            },
        }, {
            upload: nyanBot2.waUploadToServer
        });

        carouselCards.push({
            header: {
                title: card.header.title,
                imageMessage: cardImageParse.imageMessage, // Asegúrate de que esto esté correctamente formateado
                hasMediaAttachment: true,
            },
            body: card.body,
            nativeFlowMessage: card.nativeFlowMessage
        });
    }

    // Crear el mensaje interactivo
    const message = generateWAMessageFromContent(chatId, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: header
                    },
                    carouselMessage: {
                        cards: carouselCards, // Asegúrate de que esto sea un array de cards
                        messageVersion: 1
                    },
                    footer: {
                        text: footer // Pie de página
                    }
                }
            }
        }
    }, { quoted: m });

    // Enviar el mensaje
    await nyanBot2.relayMessage(chatId, message['message'], {});
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
        // Convertir el mensaje y la palabra prohibida a minúsculas para comparación
        if (budy.toLowerCase().includes(bak.toLowerCase())) {
            let baduser = await db.data.users[sender].badword;
            nyanBot2.sendMessage(m.chat,
            {
                delete: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.key.id,
                    participant: m.key.participant
                }
            });
            nyanBot2.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *recuerda que no está permitido usar malas palabras!*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m});
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
/*if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
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
*/
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

case 'menu': {
    nyanBot2.sendMessage(m.chat, {react: {text: '🧃', key: m.key}});
    let registrado = db.data.users[sender].register ? 'Usuario registrado 📌' : 'Usuario no registrado ⚠';
    let nickName = nyanBot2.getName(sender);
    let menuMessage = `${timeNow + nickName}\n\n> ${registrado}\n\n_Hora actual: ${time}_\n_Fecha actual: ${longDate}_\n\n- *Tus puntos:* ${db.data.users[sender].limit}\n- *Comandos solicitados:* ${db.data.settings[botNumber].totalhit}\n\n*Menú de Comandos*\n\n`;
    
    for (const [category, commands] of Object.entries(categories)) {
        menuMessage += `*${category}:*\n`;
        commands.forEach(cmdObj => {
            menuMessage += `- ${forma1}${cmdObj.command}${forma1} ${cmdObj.description}\n`;
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
                                "name": "quick_reply",
                                "buttonParamsJson": `{\"display_text\":\"Registrarse 📂\",\"id\":\".reg\"}`
                            }, {
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"NyanBot-V2 🌮\",\"url\":\"https://samu330.com/login\"}`
                            }],
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender],
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
                        id: `${prefix}lg ${sender}`
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
                        id: `${prefix}reg`
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
	            media: fs.readFileSync('./Media/theme/login.jpg')
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
if (isGroup) {
const cards = [
        {
            header: {
                imageMessage: './Media/theme/login.jpg',
                hasMediaAttachment: true,
            },
            body: {
                text: `◦  *El primer método seria acceder a la página oficial, En ella encontraras un formulario básico de registro, el cual te pedirá crear un usuario, solo necesitaras un correo vigente, crear una contraseña para la página, y un nombre de usuario.*\n
*¡una vez creada tu cuenta puedes iniciar sesión en el bot utilizando el comando ${forma1}${prefix}login${forma1} y el correo vinculado a la cuenta que creaste! Mira la ilustración de la imagen para basarte de ahí!*`,
            },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: `Acceder a la página oficial! 🍟`,
                        url: `https://samu330.com/login`,
                        merchant_url: `https://samu330.com/login`
                    })
                }]
            }
        },
        {
            header: {
                imageMessage: './Media/theme/reg.jpg',
                hasMediaAttachment: true,
            },
            body: {
                text: `◦  *¡la segunda manera de registrarte, es a través del chat privado del bot, sigue la ilustración que se muestra en la imagen para tener un registro exitoso! Al completar tu registro en WhatsApp obtendrás 200 puntos de regalo!*\n
*¡El correo que vayas a ingresar es necesario que esté vigente, no se te pedirá código de verificación, pero si requieres cambiar tu contraseña se te enviara un link de restablecimiento al correo vinculado a tu cuenta!*`,
            },
            nativeFlowMessage: {
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: `Registro en WhatsApp 🪀`,
                        url: `https://wa.me/samu330`,
                        merchant_url: `https://wa.me/samu330`
                    })
                }]
            }
        }
    ];

    return await sendCarousel(m.chat, {}, {
        header: `*Puedes registrarte de 2 maneras! 📌*\n\n> _*🔵 Sigue las instrucciones detalladas en las imágenes de abajo:*_\n
> _*¡LA INFORMACIÓN QUE PROPORCIONARAS SE ELIMINA AUTOMÁTICAMENTE CONCLUYENDO EL REGISTRO, Y SOLO SERA UTILIZADO PARA DARTE DE ALTA EN EL BOT, SOLO ASEGURATE DE CREAR UNA CONTRASEÑA QUE NO UTILICES EN NINGÚN OTRO SITIO!! 🛑*_\n
> ¡RECUERDA QUE SOLO PUEDES REGISTRARTE EN EL CHAT PRIVADO DEL BOT!! ⚠️`,
        footer: `${botname}`,
        cards: cards
    }); 
	}
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
                        id: `${prefix}login ${data.Result}`
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
                        id: `${prefix}login ${data.Result}`
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
        }, {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: 'Reply',
                id: ''
            }),
	}, {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: 'Page',
                url: 'https://wa.me/samu330'
            }),
        },
        {
            name: "cta_call",
            buttonParamsJson: JSON.stringify({
                display_text: 'Call',
                number: '5219984907794'
            }),
        }, {
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text: 'Copy',
                copy_code: '😈۔ᷤSᷤaͣmͫu͜͡‡ℨℨᱵ༉₃ᷜ₃ᷢ₀ݽۚۚ'
            }),
	}, {
		name: 'single_select',
                buttonParamsJson: JSON.stringify({
                title: 'Select',
                sections: [{
			title: 'Select 1',
			highlight_label: 'test 📂',
                        rows: [{
				title: 'Test',
				description: 'test 1',
                                id: '.menu'
                            }]
		}, {
			title: 'Select 2',
			highlight_label: '',
                        rows: [{
                                title: 'Test',
				description: 'test 2',
                                id: '.test'
                            }]
                        }]
                    })
                }]

    const mediaPath = ''; // Aquí coloca la ruta de la imagen si la tienes, si no, deja como string vacío

    return await sendReplyButton(m.chat, buttons, m, {
        content: 'Selecciona una opción:'
    });
    break

case 'gemini': {
    // Normalizar el texto que se quiere enviar a la función v2
    const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9ñÑ]/g, "");

    try {
        // Implementación directa del método v2 de la clase Gemini
        const response = await fetch('https://bard.rizzy.eu.org/backend/conversation/gemini', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ask: normalizedText
            })
        });

        const data = await response.json();
        
        if (data.status !== 200) {
            return reply(`*Imposible obtener metadatos.*`);
        }

        const jsonResponse = {
            creator: '@wts - Devsu',
            status: true,
            data: {
                message: data.content
            }
        };

        // Enviar el mensaje obtenido
        return await reply(`${jsonResponse.data.message.trim()}`);
    } catch (error) {
        console.error('Error en la llamada a Gemini:', error);
        return reply(`*Ocurrió un error al obtener los datos.*\n${error.message || error}`);
    }
}
break

case 'img':
case 'imagen':
case 'imagenes': {
    const query = text || m.quoted?.text;
    if (!query) {
        return reply(`Por favor, proporciona un término de búsqueda de imágenes.\n*Ejemplo:* ${prefix + command} gatos`);
    }

    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {
        let r = await fg.googleImage(query);
        if (r.length === 0) {
            return reply("No se encontraron imágenes para la búsqueda proporcionada.");
        }

        const sendRandomImage = async () => {
            const randomIndex = Math.floor(Math.random() * r.length);
            const imageUrl = r[randomIndex];

            const buttons = [
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Siguiente Imagen 🗃️',
                        id: `${prefix + command} ${query}`
                    }),
                }
            ];

            await sendReplyButton(m.chat, buttons, m, {
                content: `*🍟 Resultado de tu búsqueda:*\n${query}\n`,
                media: await fetchBuffer(imageUrl)
            });
        };
        await sendRandomImage();

        nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error en la búsqueda de imágenes:', error);
        return reply("Ocurrió un error al realizar la búsqueda de imágenes. Intenta nuevamente más tarde.");
    }
}
break

case 'buscar': case 'gg': case 'google': {
    if (!text) {
        return reply(`*Por favor, proporciona un término de búsqueda. Ejemplo:*\n${prefix + command} [término]`);
    }
let gglId;
gglId = reactionLoad(m.chat, m.key);
    const options = {
        page: 0, 
        safe: false, 
        parse_ads: false, 
        additional_params: { 
            hl: 'es' // Configurar idioma a español
        }
    };

    try {
        // Primer intento: búsqueda con la librería de Google
        const response = await google.search(`${text}`, options);

        // Inicializar variable de contenido
        let content = '';

        // Intentar obtener datos de la búsqueda de Google
        if (response.knowledge_panel.description) {
            content += `*📝 Descripción:* ${response.knowledge_panel.description}\n\n`;
        }

        if (response.knowledge_panel.url) {
            content += `*📌 URL:* ${response.knowledge_panel.url}\n\n`;
        }

        // Incluir metadatos si existen
        if (response.knowledge_panel.metadata.length > 0) {
            content += `*📂 Información importante:*\n`;
            response.knowledge_panel.metadata.forEach(item => {
                content += `- ${item.title}: ${item.value}\n`;
            });
        }

        // Obtener datos de la nueva función si hay resultados
        const organicData = await getOrganicData(text);
        if (organicData.length > 0) {
            content += `\n*Resultados de búsqueda orgánica:*\n\n`;
            organicData.forEach(result => {
                content += `\n⬦ *Título:*\n> ${result.title}\n\n⬦ *Snippet:*\n> ${result.snippet}\n\n───✁–––`;
            });
        } else {
            content += `\nNo se encontraron resultados en la búsqueda orgánica.\n`;
        }

        // Crear botones con preguntas frecuentes
        const buttons = response.people_also_ask.map(pregunta => ({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: `❓ ${pregunta}`,
                id: `${prefix}google ${pregunta}` // ID para manejar la respuesta al pulsar el botón
            }),
        }));
	const customButton = {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: '🔗 Más información...',
                url: `https://www.google.com/search?q=${text}`
            }),
	};
	buttons.push(customButton);

        // Enviar el mensaje con los botones solo si hay preguntas frecuentes
        if (buttons.length > 0) {
            // Enviar el mensaje con los botones
            sendReplyButton(m.chat, buttons, m, {
                content: content || 'No se encontró información relevante.',
                media: fs.readFileSync('./Media/theme/google.jpg')
            });
	reactionOk(m.chat, m.key, gglId);
        } else {
	    reactionError(m.chat, m.key, gglId);
            await reply(`${content || 'No se encontró información relevante.'}`);
        }

    } catch (error) {
	reactionError(m.chat, m.key, gglId);
        console.error('Error en la búsqueda de Google:', error);
        return reply(`Ocurrió un error al realizar la búsqueda. Intenta nuevamente más tarde.\n${error.message}`);
    }
}
break

case 'letra':
case 'lyrics': {
    if (!text) return reply(`¡Por favor ingresa el nombre de la canción para buscar la letra!\n\nEjemplo:\n\n*${prefix + command} me olvide de vivir*`);
    
    let letraId;
    letraId = reactionLoad(m.chat, m.key);
    
    try {
        let lyric = await fg.lyrics(text);
        
        if (!lyric || !lyric.title || lyric.title === 'undefined' || lyric.lyrics === 'undefined') {
	    reactionError(m.chat, m.key, letraId);
            return reply(`*Lo siento, pero no se encontraron resultados de tu búsqueda! Intenta buscar con un nombre de canción válido.*\n_Intentaste buscar ${text}_`);
        }

        const buttons = [
            {
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: 'Copiar 🪄',
                    copy_code: `${lyric.lyrics}`
                }),
            }
        ];

        await sendReplyButton(m.chat, buttons, m, {
            content: `${forma1}LETRA DE LA CANCION 🍟${forma1}\n
_*Título:*_ ${lyric.title}
_*Artista:*_ ${lyric.artist}\n
*Letra:*\n
${lyric.lyrics}\n`,
            media: await fetchBuffer(`${lyric.image}`)
        });
        
        reactionOk(m.chat, m.key, letraId);
    } catch (error) {
        reactionError(m.chat, m.key, letraId);
        console.error('Error al procesar la solicitud:', error);
        reply(`Ocurrió un error al intentar obtener la letra. Por favor, verifica el nombre de la canción y vuelve a intentarlo.\n${error}`);
    }
}
break

case 'yts':
case 'youtubesearch': {
    if (!text) {
        return reply(`*Por favor, proporciona un término de búsqueda. Ejemplo:*\n\n${prefix + command} [término]`);
    }
    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {
        const results = await yts(text);
        const videoResults = results.all.filter(video => video.type === 'video');
        const limitedResults = videoResults.slice(0, 10);
        let contents = [];
        limitedResults.forEach((video) => {
            let content = `◦  *Titulo*: ${video.title || 'Desconocido'}\n`;
            content += `◦  *Duración*: ${video.timestamp || 'Desconocido'}\n`;
            content += `◦  *Vistas*: ${formatNumber(video.views) || 'Desconocido'}\n`;
            content += `◦  *Publicado*: ${video.ago || 'Desconocido'}\n`;
	    content += `◦  *Autor*: ${video.author.name || 'Desconocido'}`;

            contents.push({
                header: {
                    imageMessage: video.thumbnail,
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar Audio! 🎧`,
                            copy_code: `${prefix}yta ${video.url}`
                        })
                    }, {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar video! 📽️`,
                            copy_code: `${prefix}ytv ${video.url}`
                        })
                    }]
                },
            });
        });

        await sendCarousel(m.chat, {}, {
            header: `🍟 *Resultados de tu búsqueda de ${text}*\n\n⚠️ *IMPORTANTE!!* ￬￬\n> _Para descargar, solo desliza sobre los resultados y toca el botón para copiar, y copiaras el comando, solo envialo, y listo! 😁_`,
            footer: `${botname}`,
            cards: contents
        });

        nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error en la búsqueda de YouTube:', error);
        return reply(`Ocurrió un error al realizar la búsqueda en YouTube. Intenta nuevamente más tarde.\n${error.message}`);
    }
}
break

case 'playlist': case 'youtubeplaylist': case 'ytplaylist': {
    if (!text || isUrl(text)) {
        return reply(`*Por favor, solo proporciona el nombre de la playlist, no incluyas links. Ejemplo:*\n\n${prefix + command} _*nombre de la playlist*_`);
    }
    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {

        const results = await yts(`playlist ${text}`);
        const playlistResults = results.all.filter(item => item.type === 'list');

        if (playlistResults.length === 0) {
            return reply(`No se encontraron playlists para: ${text}`);
        }
        const playlist = playlistResults[0];
        const listId = playlist.listId;
        const listDetails = await yts({ listId });
        let contents = [];
        const maxVideosToShow = 10;
        const videoCount = listDetails.size;

        listDetails.videos.slice(0, maxVideosToShow).forEach((video) => {
            let content = `◦  *Título*: ${video.title || 'Desconocido'}\n`;
            content += `◦  *Autor*: ${video.author.name || 'Desconocido'}\n`;
            content += `◦  *Duración*: ${video.duration || 'Desconocido'}`;

            contents.push({
                header: {
                    imageMessage: video.thumbnail,
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar Audio! 🎧`,
                            copy_code: `${prefix}yta https://youtube.com/watch?v=${video.videoId}`
                        })
                    }, {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar Video! 📽️`,
                            copy_code: `${prefix}ytv https://youtube.com/watch?v=${video.videoId}`
                        })
                    }]
                },
            });
        });

        const headerMessage = `Se encontraron ${videoCount} videos en la playlist "*${listDetails.title}*".\n` +
                              `*Vistas*: ${listDetails.views || 'Desconocido'}\n` +
                              `*Fecha*: ${listDetails.date || 'Desconocido'}\n` +
                              `⚠️ *IMPORTANTE!!* ￬￬\n` +
                              `_Se mostrarán solo los primeros ${maxVideosToShow} videos._\n` +
                              `_Para descargar, solo desliza sobre los resultados y toca el botón para copiar el comando, luego envíalo y listo! 😁_`;
        await sendCarousel(m.chat, {}, {
            header: headerMessage,
            footer: `${botname}`,
            cards: contents
        });

        nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error en la búsqueda de playlists de YouTube:', error);
        return reply(`Ocurrió un error al realizar la búsqueda en YouTube. Intenta nuevamente más tarde.\n${error.message}`);
    }
}
break
			
case 'play': {
if (!text) return reply(`Ejemplo: ${prefix + command} piel canela`)
if (isUrl(text)) return reply(`Para descargar audio desde el link de YouTube, utiliza el comando:\n\n${prefix}ytmp3`)
let playId;
playId = reactionLoad(m.chat, m.key);
const r = await yts(text);
if (!r || !r.videos || r.videos.length === 0) {
reactionError(m.chat, m.key, playId);
return reply("No se encontraron videos para esa búsqueda.");
}
const video = r.videos[0];
const buttons = [{
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar audio 🎙️',
            id: `${prefix}ytmp3 ${video.url}`
          }),
        }, {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Descargar video 🎬',
            id: `${prefix}ytv ${video.url}`
          }),
	}, {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: 'Ver en la app ❤️',
            url: `${video.url}`,
	    merchant_url: `${video.url}`
          }),
        }, {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: 'Buscar letra de la canción 📝',
            id: `${prefix}letra ${text}`
          }),
}]
await sendReplyButton(m.chat, buttons, m, {
	content: `> *YT Play 🍟.*
 
- *Título:* ${video.title}\n
- *Duración:* ${video.timestamp}\n
- *Autor:* ${video.author.name}\n
- *Vistas:* ${formatNumber(video.views)}

`,
	media: await fetchBuffer(`${video.thumbnail}`)
})
reactionOk(m.chat, m.key, playId);
}
break

case 'ytmp3': case 'yta': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(text)) return reply(`*Es necesario un link válido de YouTube.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://youtube.com/...`);
    nyanBot2.sendMessage(m.chat, { react: { text: '🕑', key: m.key } });
    reply(`*Esperé un momento, se está procesando su solicitud...* 😙`);

    const axios = require('axios'); // Asegúrate de tener axios instalado
    const apiUrl = 'https://api.cobalt.tools/';

    // Configuración de la solicitud POST
    const requestBody = {
        url: text,
        videoQuality: '480', // Puedes ajustar esto según tus necesidades
        audioFormat: 'mp3', // Formato de audio
        downloadMode: 'audio', // Modo de descarga
        disableMetadata: false, // Asegúrate de que esto esté en false para obtener metadatos
        filenameStyle: 'basic' // Estilo de nombre de archivo básico
    };

    try {
        const response = await axios.post(apiUrl, requestBody, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        // Manejo de la respuesta
        if (response.data.status === 'tunnel' || response.data.status === 'redirect') {
            const downloadUrl = response.data.url;
	    const audioName = response.data.filename;

            // Enviar el audio
	    let jpg = 'https://i0.wp.com/smsem.mx/wp-content/uploads/2022/01/kisspng-computer-icon-angle-brand-downloads-metal-folder-5ab0a7da2bbc92.2954475715215267461792-4.png?resize=474%2C474&ssl=1';
            await nyanBot2.sendMessage(m.chat, {document: await fetchBuffer(downloadUrl), caption: '*Descarga este archivo para guardar el audio en tu reproductor! 📀*', mimetype: "audio/mpeg", fileName: audioName, jpegThumbnail: await fetchBuffer(jpg)}, {quoted: m});
	    nyanBot2.sendMessage(m.chat, {audio: await fetchBuffer(downloadUrl), mimetype: "audio/mpeg", fileName: audioName}, {quoted: m});
		
        } else if (response.data.status === 'error') {
            reply(`Error: ${response.data.error.code} - ${response.data.error.context ? response.data.error.context.service : 'Sin contexto'}`);
        } else {
            reply('Ocurrió un error inesperado. Por favor, intenta nuevamente.');
        }
    } catch (error) {
	nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error al procesar la solicitud:', error);
        reply('Ocurrió un error al conectarse a la API. Por favor, verifica la URL y vuelve a intentarlo.');
    }

    db.data.users[sender].limit -= 30;
    nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case 'ytmp4': case 'ytv': {
if (db.data.users[sender].limit < 1) return reply(mess.limit);
if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
if (args.length < 1 || !/^https?:\/\/(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(text)) return reply(`*Es necesario un link válido de YouTube.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://youtube.com/...`);
nyanBot2.sendMessage(m.chat, { react: { text: '🕑', key: m.key } });
try {
let res = await fg.ytv(text)
await nyanBot2.sendMessage(m.chat, {
                document: await fetchBuffer(res.dl_url),
                fileName: `${res.title}.mp4`,
                mimetype: 'video/mp4',
		jpegThumbnail: await fetchBuffer('https://i0.wp.com/smsem.mx/wp-content/uploads/2022/01/kisspng-computer-icon-angle-brand-downloads-metal-folder-5ab0a7da2bbc92.2954475715215267461792-4.png?resize=474%2C474&ssl=1')
            }, { quoted: m });
nyanBot2.sendMessage(m.chat, {
                video: await fetchBuffer(res.dl_url),
		caption: `*Descarga completa! 🍟*\n\n_Tamaño:_ *${res.size}*\n_Bytes:_ ${formatBytes(res.sizeB)}\n_Calidad:_ ${res.quality}\n\n*Encontrarás el video con el nombre:* ${res.title}`,
                fileName: `${res.dl_url}.mp4`,
                mimetype: 'video/mp4'
            }, { quoted: m });
db.data.users[sender].limit -= 30;
nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (error) {
	nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error al procesar la solicitud:', error)
        reply(`Ocurrió un error al intentar obtener el video. Por favor, verifica la URL y vuelve a intentarlo.\n${error}`)
    }
}
break

// Case para Facebook
case 'facebook': case 'fb': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 20) return reply(`*Lo siento, pero este comando requiere 20 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !/^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(text)) return reply(`*Es necesario un link válido de Facebook.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://facebook.com/....\n\n*Asegúrate de que no se encuentren espacios entre el prefijo y el comando!* 🟠`);

    nyanBot2.sendMessage(m.chat, { react: { text: '🕑', key: m.key } });
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
        nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        db.data.users[sender].limit -= 20;
    } catch {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        return reply('Ha ocurrido un error inesperado, por favor repórtalo para darle solución!');
    }
}
break

case 'insta': case 'ig': case 'instagram': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 20) return reply(`*Lo siento, pero este comando requiere 20 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1 || !/^https?:\/\/(www\.)?instagram\.com\/.+$/.test(text)) return reply(`*Es necesario un link válido de Instagram.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://instagram.com/...`);
    let instalId;
    instalId = reactionLoad(m.chat, m.key);
    reply('> *Esperé un momento, se está procesando su solicitud...*');
    
    const apiUrl = 'https://api.cobalt.tools/';
    const requestBody = {
        url: text,
        videoQuality: '720', // Puedes ajustar esto según tus necesidades
        downloadMode: 'auto', // Descarga el video completo
        disableMetadata: false,
        filenameStyle: 'basic'
    };

    try {
        const response = await axios.post(apiUrl, requestBody, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        // Manejo de la respuesta
        if (response.data.status === 'tunnel' || response.data.status === 'redirect') {
            const downloadUrl = response.data.url;
            const originalFilename = response.data.filename;

            // Obtener el video
            const videoBuffer = await fetchBuffer(downloadUrl);

            // Enviar video al usuario
            await nyanBot2.sendMessage(m.chat, {
                video: videoBuffer, // Enviar el video
                caption: `_Encontrarás el vídeo con el siguiente nombre:_\n\n*${originalFilename}*\n\n> ${ownername}`,
                fileName: originalFilename,
                mimetype: 'video/mp4', // Asegúrate de que sea el tipo correcto
            }, { quoted: m });

        } else if (response.data.status === 'error') {
            reply(`Error: ${response.data.error.code} - ${response.data.error.context ? response.data.error.context.service : 'Sin contexto'}`);
        } else {
            reply('Ocurrió un error inesperado. Por favor, intenta nuevamente.');
        }
    } catch (error) {
	reactionError(m.chat, m.key, instalId);
        console.error('Error al procesar la solicitud:', error);
        reply('Ocurrió un error al conectarse a la API. Por favor, verifica la URL y vuelve a intentarlo.');
    }

    db.data.users[sender].limit -= 20;
    reactionOk(m.chat, m.key, instalId);
}
break

// Case para TikTok
case 'tt': case 'tiktok': {
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 10) return reply(`*Lo siento, pero este comando requiere 10 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (args.length < 1) return reply(`*Es necesario un link válido de TikTok.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://tiktok.com/...`);

    let ttlId;
    try {
        ttlId = reactionLoad(m.chat, m.key);

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
        await nyanBot2.sendMessage(m.chat, {
                video: videoTt,
		fileName: title + '.mp4',
                caption: caption,
		jpegThumbnail: await fetchBuffer(profilePicture)
            }, { quoted: m });

        reactionOk(m.chat, m.key, ttlId);
        db.data.users[sender].limit -= 10;
    } catch (e) {
        reactionError(m.chat, m.key, ttlId);
        return reply(`Ha ocurrido un error inesperado, por favor repórtalo para darle solución!\n${e}`);
    }
}
break

case 'calc':
case 'calculadora':
case 'suma':
case 'sumar':
case 'resta':
case 'multiplicar':
case 'dividir':
case 'porcentaje': {
    // Obtener la ecuación del mensaje
    const equation = text || m.quoted?.text; // Si hay texto o un mensaje citado
    if (!equation) {
        return reply("Por favor, proporciona una operación matemática. Ejemplo: `5 + 5 + 20 - 50`");
    }

    // Reemplazar espacios para una mejor evaluación
    const sanitizedEquation = equation.replace(/\s+/g, '');

    // Expresión regular para validar la ecuación
    const validCharacters = /^[0-9+\-*/().]+$/;
    if (!validCharacters.test(sanitizedEquation)) {
        return reply("La operación contiene caracteres no permitidos. Asegúrate de usar solo los siguientes caracteres:\n\n" +
                     "* Números: 0-9\n" +
                     "* Operadores: + (suma), - (resta), * (multiplicación), / (división)\n" +
                     "* Paréntesis: () para agrupar operaciones\n\n" +
                     "Ejemplo de uso: `5 + 5 - 2 * 3 / (1 + 1)`");
    }

    try {
        // Evaluar la ecuación usando eval (con precaución)
        let result = eval(sanitizedEquation);

        // Formatear la respuesta
        let response = `El resultado de la operación:\n- *${equation}*\nEs igual a:\n- *${result}*`;
        reply(response);
    } catch (error) {
        console.error('Error al evaluar la ecuación:', error);
        return reply("Ocurrió un error al intentar evaluar la operación. Asegúrate de que esté escrita correctamente.");
    }
}
break

case 'perfil': {
    const countryData = require('./src/country.json');
    let target = '';
    if (text.includes('@')) {
        target = `${text.replace(/[\@\sA-Za-z]/g, '')}@s.whatsapp.net`;
    } else if (m.quoted) {
        target = `${m.quoted.sender}`;
    } else if (text) {
        if (m.quoted) return;
        target = `${text.replace(/[\@\+\s\-\(\)\[\]\{\}]/g, '')}@s.whatsapp.net`;
    } else {
        return reply(`Lo siento, pero no puede obtener el perfil! Por favor asegúrate de incluir un número de WhatsApp, puedes hacerlo de estas maneras:

- Escribiendo el número de la persona después del comando, *ejemplo: 521***** _(para números de México incluye el "1" después del "52")_.

- Puedes responder al mensaje de la persona.

- Puedes arrobar a la persona.`);
    }
  
    const existsResponse = await nyanBot2.onWhatsApp(target);
    if (existsResponse.length > 0 && existsResponse[0].exists) {
        let p;
        try {
            p = await nyanBot2.profilePictureUrl(target, 'image');
        } catch (err) {
            p = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
        }

        const phoneNumber = target.replace(/^\+/, '');
        let countryInfo = null;
        for (const country of countryData) {
            if (Array.isArray(country.dialCodes)) {
                for (const code of country.dialCodes) {
                    const cleanCode = code.replace(/[\+\s]/g, '');
                    if (phoneNumber.startsWith(cleanCode)) {
                        countryInfo = country;
                        break;
                    }
                }
            }
            if (countryInfo) break;
        }

        let reg = '';
        let nickName = nyanBot2.getName(target);
        let points = '';
        if (db.data.users[target]) {
            points = `${db.data.users[target].limit}`;
            reg = `${db.data.users[target].register ? 'Esta registrado ✅' : 'No esta registrado ❌'}`;
        } else {
            points = '0';
            reg = 'No está en la base de datos del Bot! 🗑️';
        }

        let biography = 'Biografía no disponible.';
        let lastUpdated = '';
        let lastUpdatedDate = '';
        try {
            let status = await nyanBot2.fetchStatus(target);
            if (status.status) {
                biography = status.status;
                const updatedAt = new Date(status.setAt);
                const now = new Date();
                const diffInMs = now - updatedAt;
                const diffInMinutes = Math.floor(diffInMs / 60000);
                const diffInHours = Math.floor(diffInMinutes / 60);
                const diffInDays = Math.floor(diffInHours / 24);

                // Formatear la fecha
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                lastUpdatedDate = updatedAt.toLocaleDateString('es-ES', options); // Cambiar 'es-ES' al idioma que prefieras

                if (diffInMinutes < 60) {
                    lastUpdated = `Actualizado hace ${diffInMinutes} minuto${diffInMinutes !== 1 ? 's' : ''}`;
                } else if (diffInHours < 24) {
                    lastUpdated = `Hace ${diffInHours} hora${diffInHours !== 1 ? 's' : ''}`;
                } else {
                    lastUpdated = `Hace ${diffInDays} día${diffInDays !== 1 ? 's' : ''}`;
                }
            }
        } catch (err) {
            biography = 'No se pudo obtener la biografía; la persona tiene la biografía privada.';
        }

        let responseMessage = `\n*◦ Numero:* @${target.split("@")[0]}\n*◦ Nombre* ${nickName}\n*◦ Puntos:* ${points}\n> _*${reg}*_`;
        if (countryInfo) {
            responseMessage += `\n*◦ País:* ${countryInfo.name} ${countryInfo.emoji}\n*◦ Código:* ${countryInfo.code}\n`;
        } else {
            responseMessage += `\nNo se pudo identificar el país.`;
        }

        responseMessage += `\n*◦ Biografía:* ${biography}\n*◦ Última actualización:* ${lastUpdated} (${lastUpdatedDate})\n\n> ${ownername}`;

        const svgUrl = countryInfo ? countryInfo.image : null;
        if (svgUrl) {
            const response = await fetch(svgUrl);
            const buffer = await response.buffer();
            const pngBuffer = await sharp(buffer)
                .png()
                .toBuffer();
            nyanBot2.sendMessage(m.chat, {
                image: await getBuffer(p),
                caption: responseMessage,
                contextInfo: {
                    mentionedJid: [target],
                    "externalAdReply": {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "title": `${global.botname}`,
                        "body": `${ownername}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": ``,
                        "thumbnail": pngBuffer,
                        "sourceUrl": `${wagc}`
                    }
                }
            }, { quoted: m });
        } else {
            return reply('*No se pudo obtener la imagen del país.*');
        }
    } else {
        return reply('*El número ingresado no existe en WhatsApp, intenta con otro por favor.*');
    }
}
break

case 'clima': {
    if (!text) return reply('¿Qué ubicación?');
    let wdata = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=es`
    );
    let textw = "";
    textw += `*🗺️ Clima de ${wdata.data.name}*\n\n`;
    textw += `*Clima:-* ${wdata.data.weather[0].main}\n`;
    textw += `*Descripción:-* ${wdata.data.weather[0].description}\n`;
    textw += `*Temp. Promedio:-* ${wdata.data.main.temp} °C\n`;
    textw += `*Sensación Térmica:-* ${wdata.data.main.feels_like} °C\n`;
    textw += `*Temp. Mínima:-* ${wdata.data.main.temp_min} °C\n`;
    textw += `*Temp. Máxima:-* ${wdata.data.main.temp_max} °C\n`;
    textw += `*Presión:-* ${wdata.data.main.pressure} hPa\n`;
    textw += `*Humedad:-* ${wdata.data.main.humidity}%\n`;
    textw += `*Velocidad del Viento:-* ${wdata.data.wind.speed} m/s\n`;
    textw += `*Dirección del Viento:-* ${wdata.data.wind.deg}°\n`;
    textw += `*Lluvia en la última hora:-* ${wdata.data.rain ? wdata.data.rain['1h'] : 0} mm\n`;
    textw += `*Nubosidad:-* ${wdata.data.clouds.all}%\n`;
    textw += `*Latitud:-* ${wdata.data.coord.lat}\n`;
    textw += `*Longitud:-* ${wdata.data.coord.lon}\n`;
    textw += `*País:-* ${wdata.data.sys.country}\n`;

    nyanBot2.sendMessage(
        m.chat, {
            text: textw,
        }, {
            quoted: m,
        }
    );
}
break


case 'mediafire': {
if (!text) return reply("*Porfavor asegurate de incluir el link de mediafire después del comando*");
if (db.data.users[sender].limit < 1) return reply(mess.limit);
if (db.data.users[sender].limit < 50) return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);

    // Lógica para detectar si el link es válido de MediaFire
    if (!/mediafire\.com/.test(text)) {
    return reply("🛑 El enlace proporcionado no es un enlace válido de MediaFire.");
    }

    try {
	let mfId;
	mfId = reactionLoad(m.chat, m.key);
        let data = await require("api-dylux").mediafireDl(text);

        // Verifica si el tamaño del archivo es mayor a 100 MB
        const filesizeMB = parseFloat(data.filesize);
        if (filesizeMB > 100) {
	    reactionError(m.chat, m.key, mfId);
            return reply("😔 El tamaño del archivo es mayor a 100 MB y no se puede enviar.");
        }

        // Determina el mimetype según la extensión del archivo
        let mimeType;
        switch (data.ext.toLowerCase()) {
            case 'pdf':
                mimeType = 'application/pdf';
                break;
            case 'doc':
            case 'docx':
                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'xls':
            case 'xlsx':
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'ppt':
            case 'pptx':
                mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                break;
            case 'zip':
                mimeType = 'application/zip';
                break;
            case 'rar':
                mimeType = 'application/x-rar-compressed';
                break;
            case '7z':
                mimeType = 'application/x-7z-compressed';
                break;
            case 'mp4':
                mimeType = 'video/mp4';
                break;
            case 'mp3':
                mimeType = 'audio/mpeg';
                break;
            case 'jpg':
            case 'jpeg':
                mimeType = 'image/jpeg';
                break;
            case 'png':
                mimeType = 'image/png';
                break;
            case 'gif':
                mimeType = 'image/gif';
                break;
            case 'bmp':
                mimeType = 'image/bmp';
                break;
            case 'svg':
                mimeType = 'image/svg+xml';
                break;
            case 'txt':
                mimeType = 'text/plain';
                break;
            case 'html':
            case 'htm':
                mimeType = 'text/html';
                break;
            case 'csv':
                mimeType = 'text/csv';
                break;
            case 'apk':
                mimeType = 'application/vnd.android.package-archive';
                break;
            case 'exe':
                mimeType = 'application/vnd.microsoft.portable-executable';
                break;
            case 'mcp':
            case 'mcpack':
                mimeType = 'application/octet-stream'; // Para archivos MCPACK
                break;
            case 'json':
                mimeType = 'application/json';
                break;
            case 'xml':
                mimeType = 'application/xml';
                break;
            // Agrega más tipos de archivos según sea necesario
            default:
                mimeType = 'application/octet-stream'; // Tipo genérico para otros documentos
                break;
        }

        // Si el mimetype es 'application/octet-stream', comprime el archivo en un ZIP
        if (mimeType === 'application/octet-stream') {
            const tempFilePath = path.join(__dirname, data.filename); // Crear una ruta temporal para el archivo
            const zipFilePath = path.join(__dirname, `${data.filename}.zip`);

            // Descarga el archivo primero
            const fileBuffer = await fetchBuffer(data.url);
            fs.writeFileSync(tempFilePath, fileBuffer);

            // Crear un archivo ZIP
            const output = fs.createWriteStream(zipFilePath);
            const archive = archiver('zip', { zlib: { level: 9 } });

            output.on('close', async () => {
                await nyanBot2.sendMessage(m.chat, {
                    document: fs.readFileSync(zipFilePath),
                    fileName: `${data.filename}.zip`,
                    mimetype: 'application/zip',
                    caption: `${forma1}MEDIAFIRE DL 🗳️${forma1}\n
_*No se encontró extención adecuada al documento, asi que se empaquetó en un ZIP para el envío y asegurar tu documento, requerirás una aplicación para descomprimir archivos 🗄️*_\n
*Título:* ${data.filename}
*Tamaño:* ${data.filesize}
*Fecha de Publicación:* ${data.upload_date}\n
> ${botname}`
                }, { quoted: m });

                // Elimina los archivos temporales
                fs.unlinkSync(tempFilePath);
                fs.unlinkSync(zipFilePath);
            });

            archive.pipe(output);
            archive.file(tempFilePath, { name: data.filename });
            archive.finalize();

        } else {
            // Envía el documento directamente si tiene un mimetype reconocido
            await nyanBot2.sendMessage(m.chat, {
                document: await fetchBuffer(data.url), // URL 1 de la respuesta
                fileName: `${data.filename}`,
                mimetype: `${mimeType}`,
                caption: `
*Título:* ${data.filename}
*Tamaño:* ${data.filesize}
*Fecha de Publicación:* ${data.upload_date}\n
> ${botname}
                `
            }, { quoted: m });
        }
reactionOk(m.chat, m.key, mfId);
db.data.users[sender].limit -= 50;
    } catch (error) {
	reactionError(m.chat, m.key, mfId);
        console.error('Error al procesar la solicitud:', error);
        reply(`Ocurrió un error al intentar obtener el archivo. Por favor, verifica el enlace y vuelve a intentarlo.\n${error}`);
    }
}
break


case 'buscarsticker': {
    if (!text) return reply("*Escribe después del comando el tipo de stickers que desees*");

    try {
        // Esperar la resolución de la promesa
        let data = await fg.StickerSearch(text); 
        if (data.status !== 200) {
            return reply("*No se encontraron stickers*");
        }

        let stickers = data.sticker_url;
        let totalStickers = stickers.length;
        
        // Enviar mensaje con la cantidad de stickers y el título
        reply(`Se están enviando ${totalStickers} stickers\n\n*Título:* ${data.title}`);

        let stlId;
        stlId = reactionLoad(m.chat, m.key);

        // Procesar cada URL de sticker
        for (const url of stickers) {
            try {
                let media = await fetchBuffer(url)
                if (!media) {
                    reply(`Error: No se pudo obtener el contenido de la URL: ${url}`)
                    reactionError(m.chat, m.key, stlId);
                    continue; // Saltar a la siguiente URL
                }

                let isImage = url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg')
                let isVideo = url.includes('.mp4') || url.includes('.gif')

                if (isImage) {
                    await nyanBot2.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                } else if (isVideo) {
                    await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                }
                reactionOk(m.chat, m.key, stlId);
            } catch (error) {
                // Enviar reacción de error
                reactionError(m.chat, m.key, stlId);
                console.error("Error al enviar el sticker:", error)
            }
        }
    } catch (error) {
	reactionError(m.chat, m.key, stlId);
        reply(`*Hubo un error al buscar los stickers*\n${error}`)
        console.error("Error en buscarsticker:", error);
    }
}
break


case 'wn': case 'stickerwm': case 'take':{
if (db.data.users[sender].limit < 1) return reply(mess.limit);
if (db.data.users[sender].limit < 50) return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
if (!args.join(" ")) return reply(`*Porfavor incluye los datos correctos, tanto como el nombre de paquete y autor para renombrar el sticker, ejemplo:*\n\n${prefix+command} paquete|autor\n\n*Asegurate de incluir el símbolo ${forma1}|${forma1}*`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
nyanBot2.downloadAndSaveMediaMessage(quoted, "gifee")
nyanBot2.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
db.data.users[sender].limit -= 50;
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await nyanBot2.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
db.data.users[sender].limit -= 50;
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('El video debe ser de maximo 10 segundos!')
let media = await quoted.download()
let encmedia = await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
db.data.users[sender].limit -= 50;
} else {
reply(`Etiqueta porfavor un sticker, imagen o video!`)
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


case 'xvideos': case 'xxx': {
if (!text) return reply('*Porfavor incluye junto al comando una solicitud a buscar en _XVideos_ 🔞*')
let xvlId;
    xvlId = reactionLoad(m.chat, m.key);

    try {
        // Realizar la búsqueda en Xvideos
        let data = await fg.xvideosSearch(text);

        // Limitar a los primeros 10 resultados
        const limitedResults = data.slice(0, 10);

        // Crear un array para las cards del carrusel
        let contents = [];
        // Mapeo de los resultados para crear las cards
        limitedResults.forEach((video) => {
            let content = `◦  *Título*: ${video.title}\n`;
            content += `◦  *Duración*: ${video.duration}`;

            contents.push({
                header: {
                    imageMessage: video.thumb, // Usar la miniatura del video
                    hasMediaAttachment: true,
                },
                body: {
                    text: content // Contenido de la tarjeta
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: 'quick_reply', // Cambiar a botón de respuesta rápida
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Descargar video! 🔥',
                            id: `${prefix}xvideosdl ${video.url}` // Enlace directo al video
                        })
                    }]
		},
            });
        });

        // Llamada a la función sendCarousel para enviar todas las tarjetas en un solo mensaje
        await sendCarousel(m.chat, {}, {
	    header: `*🔞 Resultados de búsqueda de xvideos*\n\n> *Busca tu video favorito y descárgalo!! 🍋‍🟩*`,
            footer: `Resultados de la búsqueda`,
            cards: contents // Pasar todas las cards
        });

        reactionOk(m.chat, m.key, xvlId);
    } catch (error) {
        reactionError(m.chat, m.key, xvlId);
        console.error('Error en la búsqueda de Xvideos:', error);
        return reply(`Ocurrió un error al realizar la búsqueda en Xvideos. Intenta nuevamente más tarde.\n${error.message}`);
    }
}
break

case 'xvideosdl': {
let v = await fg.xvideosdl(text)
nyanBot2.sendMessage(m.chat, {
	video: await fetchBuffer(v.url_dl),
        fileName: `${v.title}.mp4`,
        mimeType: 'video/mp4',
        jpegThumbnail: await fetchBuffer(v.thumb),
        caption: `- *Vistas:* ${v.views}\n- *Comentarios:* ${v.vote}\n- *likes:* ${v.likes}\n- *Deslikes:* ${v.deslikes}\n- *Tamaño:* ${v.size}\n`,
	contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: await fetchBuffer(v.thumb),
                        sourceUrl: 'https://samu330.com/login',
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }}, {quoted:m})
}
break


            case 'puntos':
                reply(`*Total de puntos: ${db.data.users[sender].limit}*
		
_Para aumentar el número de puntos en tu cuenta, puedes jugar minijuegos, de esta manera se sumarán puntos cada vez que ganes!_
*Para jugar puedes simplemente enviar uno de estos emojis:*

${forma1}⚽ | 🏀 | 🎳 | 🎯 | 🎲${forma1}

*O también juegar a piedra, papel o tijera con el bot enviando los emojis:*

${forma1}🪨 | ✊🏻 | 📄 | ✋🏻 | ✂️ | ✌🏻${forma1}

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
            id: `${prefix}welon'`
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
            id: `${prefix}weloff`
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
reply(`La bienvenida sé ha activado en este chat.`)
}
break
case 'weloff': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.adminBot)
if (!isAdmins) return reply(mess.admin)
if (welcome === false) return reply('¡la opción de bienvenida está ya desactivada!')
welcome = false
reply(`La bienvenida sé ha desactivado en este chat.`)
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
            id: `${prefix}bdon`
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
            id: `${prefix}bdoff`
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
if (isCmd && budy.startsWith('.')) {
if (!isCmd) return
    const allCommands = Object.values(categories)
        .flat()
        .map(cmdObj => cmdObj.command.toLowerCase());

    // Verificar si el comando existe
    if (!allCommands.includes(command)) {
        // Calcular similitudes
        const similarities = allCommands.map(availableCommand => {
            const similarity = calculateSimilarity(command, availableCommand);
            return { availableCommand, similarity };
        }).filter(item => item.similarity > 0.5); // Filtra similitudes mayores a 50%

        // Mensaje de respuesta
        let response = `❌ *Al parecer el comando "${command}" no está disponible o quizá lo escribiste mal!*\n\nA continuación te muestro unas sugerencias de comandos parecidos y que probablemente quisiste usar! 😁\n`;

        // Crear botones para las sugerencias
        const buttons = similarities.map(item => ({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: `✏️ ${item.availableCommand} (Similitud: ${Math.round(item.similarity * 100)}%)`,
                id: `.${item.availableCommand} ${text}` // Aquí se pone el comando corregido
            }),
        }));

        // Enviar el mensaje con los botones solo si hay sugerencias
        if (buttons.length > 0) {
            sendReplyButton(m.chat, buttons, m, {
                content: response
            });
        } else {
            // Si no hay sugerencias, enviar un mensaje simple
            return reply(`*El comando "${command}" no existe o está mal escrito.*`);
        }

        return; // Asegurarse de que no se continúe con el resto del código
    }
}
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
// Definimos los emojis de entrada
const emojis = {
    piedra: ['🪨','✊🏻','✊🏼','✊🏽','✊🏾','✊🏿','✊','👊🏻','👊🏼','👊🏽','👊🏾','👊🏿','👊'],
    papel: ['📄','🤚🏻','🤚🏼','🤚🏽','🤚🏾','🤚🏿','🤚'],
    tijera: ['✂️','✌🏻','✌🏼','✌🏽','✌🏾','✌🏿','✌️']
};

// Recibir el mensaje del usuario
if (Object.values(emojis).flat().includes(budy)) {
    let userChoice;
    
    // Determinar la elección del usuario
    for (const [key, value] of Object.entries(emojis)) {
        if (value.includes(budy)) {
            userChoice = key; // 'piedra', 'papel' o 'tijera'
            break;
        }
    }

    const choices = ['piedra', 'papel', 'tijera'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)]; // Elección aleatoria del bot

    let resultMessage = '';
    let puntos = 0;

    // Determinar el resultado del juego
    if (userChoice === botChoice) {
        resultMessage = "¡Es un empate! 🤝";
    } else if (
        (userChoice === 'piedra' && botChoice === 'tijera') || // Piedra gana a tijera
        (userChoice === 'papel' && botChoice === 'piedra') || // Papel gana a piedra
        (userChoice === 'tijera' && botChoice === 'papel')    // Tijera gana a papel
    ) {
        puntos = 50; // Ganancia de puntos
        resultMessage = `¡Felicidades! 🎉 Has ganado 50 puntos.`;
    } else {
        // Mensajes de pérdida
        const lossMessages = [
            `¡Uy! Has perdido 😢. ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
            `¡Qué pena! 😭 Has perdido. ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
            `¡Ja! Te ganó un bot 🤷‍♂️ ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
            `¡Te gané xD! 😩 ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
            `¡Perdiste! 😬 ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`
        ];
        resultMessage = lossMessages[Math.floor(Math.random() * lossMessages.length)];
    }

    // Sumar puntos al usuario
    db.data.users[sender].limit += puntos;

    // Enviar el sticker correspondiente al bot
    let stickerPath;
    switch (botChoice) {
        case 'piedra':
            stickerPath = './Media/sticker/Game/piedra.webp';
            break;
        case 'papel':
            stickerPath = './Media/sticker/Game/papel.webp';
            break;
        case 'tijera':
            stickerPath = './Media/sticker/Game/tijeras.webp';
            break;
        default:
            console.error("Elección del bot no válida.");
            return; // Salir si no hay una elección válida
    }

    // Enviar el sticker y el mensaje de resultado
    try {
        await nyanBot2.sendMessage(from, { sticker: fs.readFileSync(stickerPath) }, {
            quoted: {
                key: {
                    remoteJid: '0@s.whatsapp.net',
                    fromMe: false,
                    id: `${ownername}`,
                    participant: '0@s.whatsapp.net'
                },
                message: {
                    requestPaymentMessage: {
                        currencyCodeIso4217: "USD",
                        amount1000: puntos * 1000,
                        requestFrom: '0@s.whatsapp.net',
                        noteMessage: {
                            extendedTextMessage: {
                                text: resultMessage
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
            }
        });
    } catch (error) {
        console.error("Error al enviar el sticker:", error);
    }
}

if (budy.includes('@5219984907794')) {
    if (isSamu) return;
    const emojis = ['🌮', '❤️', '🐡', '🪅', '🔥', '🦞', '🍟', '🪀', '🌺', '🍋‍🟩']; // Array de emojis para las reacciones
    let emojiIndex = 0; // Índice para el emoji actual
    const sendReaction = () => {
        nyanBot2.sendMessage(m.chat, { react: { text: emojis[emojiIndex], key: m.key } });
        emojiIndex = (emojiIndex + 1) % emojis.length; // Cambiar al siguiente emoji, y volver al inicio si es necesario
    };
    
    const intervalId = setInterval(sendReaction, 1000); // Enviar reacción cada segundo

    // Opcional: detener el intervalo después de cierto tiempo o bajo una condición
    setTimeout(() => clearInterval(intervalId), 11000); // Detener después de 10 segundos, por ejemplo
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
		if (budy.startsWith('<=')) {
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
