const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    S_WHATSAPP_NET
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const sharp = require('sharp')
const Jimp = require('jimp')
const { createCanvas, loadImage } = require('canvas')
const util = require('util')
const { removeBackground } = require('@imgly/background-removal-node')
const { color } = require('./lib/color')
const archiver = require('archiver')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const ms = toMs = require('ms')
const axios = require('axios')
const syntax = require('syntax-error')
const fetch = require('node-fetch')
const { igdl, fbdl, ttdl } = require('ruhend-scraper')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const scp = require('./lib/scraper')
const { extractMetadata, Sticker } = require('wa-sticker-formatter')
const {
    createOrGetPet,
    feedPet,
    walkPet,
    playWithPet,
    getPetInfo,
    removePet,
    updatePetNeeds,
    sendReminder,
    startPetUpdateInterval,
    sleepPet
} = require('./src/petsTest')

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
} = require('./lib/uploader2')
const {
    resizeImage,
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    formatNumber,
    formatBytes,
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
    reSize,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase,
    WAVersion,
    calculateSimilarity,
    sizeLimit
} = require('./lib/samufuncs')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
    deletePremiumUser
} = require('./lib/premiumD')

let cache = new(require('node-cache'))({
    stdTTL: 3 // Cooldown time between action of each user with the bot.
});

const forma1 = '`'

const dbPath = path.join(__dirname, 'Media', 'database', 'userPoints.json');

// Constante de categorías y comandos disponibles
const categories = {
    "📝 Registro": [
        { command: 'login', description: '_*CORREO*_', help: 'Inicia sesión con tu correo si ya te has registrado!' },
        { command: 'reg', description: '', help: 'Registrate con un correo para obtener recompensas.' },
        { command: 'reset', description: '_*CORREO*_', help: 'Solicitar correo de restablecimiento de contraseña.' },
        { command: 'logout', description: '_*CORREO*_', help: 'Cierra tu sesión.' }
    ],
    "🔍 Búsqueda": [
        { command: 'google', description: '', help: 'Realiza búsquedas en Google.' },
        { command: 'imagen', description: '', help: 'Búsqueda de imágenes.' },
        { command: 'pinsearch', description: '', help: 'Búsqueda de imágenes en pinterest.' },
        { command: 'pin', description: '', help: 'Alias de pinsearch.' },
        { command: 'tiktoksearch', description: '', help: 'Buscar videos en Tiktok.' },
        { command: 'playlist', description: '', help: 'Busca una playlist de YouTube para descargar videos.' },
        { command: 'ytplaylist', description: '', help: 'Alias de playlist.' },
        { command: 'youtubesearch', description: '', help: 'Realiza búsquedas en YouTube.' },
        { command: 'yts', description: '', help: 'Alias de youtubesearch.' },
        { command: 'song', description: '_*RECONOCE CANCIONES*_', help: 'Etiqueta un audio con el comando para reconocer la canción.' },
        { command: 'letra', description: '', help: 'Busca la letra de canciones.' },
        { command: 'buscarsticker', description: '', help: 'Busca y envía stickers.' }
    ],
    "📥 Descargas": [
        { command: 'play', description: '', help: 'Descargar videos/adiós de YouTube con búsqueda.' },
        { command: 'yta', description: '_*URL*_', help: 'Descargar adiós de YouTube con link.' },
        { command: 'ytmp3', description: '_*URL*_', help: 'Alias de yta.' },
        { command: 'ytv', description: '_*URL*_', help: 'Descargar videos de YouTube con link.' },
        { command: 'ytmp4', description: '_*URL*_', help: 'Alias de ytv.' },
	{ command: 'spotify', description: '_*URL/BUSQUEDA*_', help: 'Descarga música de Spotify, álbum, playlist y realiza búsqueda.' },
        { command: 'tiktok', description: '_*URL*_', help: 'Descarga videos/imágenes junto con el audio de TikTok.' },
        { command: 'tt', description: '_*URL*_', help: 'Alias de tiktok.' },
        { command: 'twiter', description: '', help: 'Descarga videos/imágenes de Twitter (X).' },
        { command: 'facebook', description: '_*URL*_', help: 'Descarga videos de Facebook.' },
        { command: 'fb', description: '_*URL*_', help: 'Alias de facebook.' },
        { command: 'instagram', description: '_*URL*_', help: 'Descarga videos/imágenes de Instagram.' },
        { command: 'ig', description: '_*URL*_', help: 'Alias de instagram.' },
        { command: 'mediafire', description: '_*URL*_', help: 'Descarga archivos de Mediafire sin seguridad.' },
        { command: 'gdrive', description: '_*URL*_', help: 'Descarga archivos de Google Drive.' },
	{ command: 'modapk', description: '', help: 'Descarga aplicaciones modificadas de rexdl.' },
        { command: 'apk', description: '', help: 'Descarga aplicaciones de Aptoide.' },
	{ command: 'apk2', description: '', help: 'Descarga aplicaciones de Apk Combo.' }
    ],
    "🧠 Ia": [
        { command: 'nyan', description: '', help: 'IA con respuesta en audio! (Respuestas cortas).' },
        { command: 'bard', description: '', help: 'Inteligencia artificial.' },
        { command: 'ia', description: '', help: 'Inteligencia artificial.' },
        { command: 'chatgpt', description: '', help: 'Inteligencia artificial.' }
    ],
    "🎭 Grupos": [
        { command: 'añadir', description: '_*NUM*_', help: 'Agrega a personas a un grupo (solo administradores).' },
        { command: 'eliminar', description: '_*NUM/@tag*_', help: 'Elimina a personas de un grupo (solo administradores).' },
        { command: 'promote', description: '_*NUM/@tag*_', help: 'Asigna administración a personas en un grupo (solo administradores).' },
        { command: 'demote', description: '_*NUM/@tag*_', help: 'Quita administración a personas en un grupo (solo administradores).' },
        { command: 'link', description: '', help: 'Obtiene el enlace de invitación del grupo.' },
        { command: 'activar', description: '', help: 'Activa configuraciones en un grupo (solo administradores).' },
        { command: 'desactivar', description: '', help: 'Desactiva configuraciones en un grupo (solo administradores).' },
	{ command: 'abrir', description: '', help: 'Abre un grupo (solo administradores).' },
        { command: 'cerrar', description: '', help: 'Cierra un grupo (solo administradores).' },
        { command: 'gpimg', description: '', help: 'Cambia la imagen de perfil del grupo (solo administradores).' }
    ],
    "🛠 Herramientas": [
        { command: 'sticker', description: '_*Opciones: 1, 2, 3 y 4*_', help: 'Crea Stickers a partir de Imagen/Video/GIF, usa las opciones para agregar efecto a el Sticker.' },
        { command: 's', description: '_*Opciones: 1, 2, 3 y 4*_', help: 'Alias de sticker.' },
	{ command: 'brat', description: '_TEXT_', help: 'Crea texto en sticker.' },
        { command: 'sinfondo', description: '', help: 'Elimina el fondo de una imagen.' },
        { command: 'emojimix', description: '', help: 'Combina emojis.' },
	{ command: 'logo', description: '_*EFECTO + TEXTO*_', help: 'Genera texto con efectos de imágenes.' },
        { command: 'hd', description: '', help: 'Aumentar calidad a imagenes.' },
        { command: 'remini', description: '', help: 'Alias de hd.' },
        { command: 'recolor', description: '', help: 'Colorea imágenes en B/N o borrosas (personas/paisajes/animales).' },
        { command: 'tts', description: '', help: 'Escribe una frase para que el Bot pueda reproducirlo.' },
	{ command: 'githubstalk', description: '', help: 'Muestra información sobre usuarios en Github.com.' },
        { command: 'pinsearch', description: '', help: 'Realiza búsqueda de imágenes en pinterest.' },
        { command: 'avideo', description: '', help: 'Convierte un Sticker animado a video.' },
        { command: 'agif', description: '', help: 'Convierte un Sticker animado a GIF.' },
        { command: 'toaudio', description: '', help: 'Convierte un Video a Audio.' },
        { command: 'aimagen', description: '', help: 'Convierte un Sticker estático a imagen.' },
        { command: 'puntos', description: '', help: 'Verifica tus puntos y te da información de como ganar más.' },
        { command: 'take', description: '', help: 'Renombra el paquete y autor de los Stickers.' },
        { command: 'wm', description: '', help: 'Crea un sticker con paquete y autor custom.' },
        { command: 'perfil', description: '', help: 'Obtiene información de un número de WhatsApp.' },
        { command: 'speed', description: '', help: 'Verifica con que velocidad el bot responde.' }
    ],
    "⚙ Bot": [
        { command: 'actualizar', description: '', help: 'Actualiza el Bot a la versión más reciente (Solo Bot).' },
        { command: 'update', description: '', help: 'Alias de actualizar.' },
	{ command: 'priv', description: '', help: 'Permite el uso en chats privados (para cuando el bot esté en modo solo grupos).' },
	{ command: 'nopriv', description: '', help: 'Prohíbe el uso en chats privados (para cuando el bot esté en modo solo grupos).' },
	{ command: 'ban', description: '', help: 'Bloquea el uso del Bot en un chat.' },
	{ command: 'noban', description: '', help: 'Habilita el uso del Bot en un chat.' },
        { command: 'broadcast', description: '', help: 'Envía mensajes masivos a todos los chats (Solo Bot).' },
        { command: 'limpiar', description: '', help: 'Libera memoria (Solo Bot).' },
        { command: '<=', description: '_*EVAL*_', help: 'Eval con return.' },
        { command: '=>', description: '_*EVAL*_', help: 'Eval sin return.' },
        { command: '$', description: '_*EXECUTE*_', help: 'Ejecutar en consola.' }
    ]
};
//data
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
//let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))

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

let box = db.data.game.box = []
let gameSoup = db.data.game.soup = []
let gameMath = db.data.game.math = []

//time
moment.locale('es');
const time = moment().tz('America/Panama').format('HH:mm:ss');
const date = moment().tz('America/Panama').format('DD/MM/YYYY');
const longDate = moment().tz('America/Panama').format('dddd, D [de] MMMM [del] YYYY');

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
	if (m.type === "senderKeyDistributionMessage") return;
        var body = m.message?.conversation || m.message?.viewOnceMessageV2?.message?.imageMessage?.caption || m.message?.viewOnceMessageV2?.message?.videoMessage?.caption || m.message?.imageMessage?.caption || m.message?.videoMessage?.caption || m.message?.extendedTextMessage?.text || m.message?.viewOnceMessage?.message?.videoMessage?.caption || m.message?.viewOnceMessage?.message?.imageMessage?.caption || m.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || m.message?.buttonsMessage?.imageMessage?.caption || m.message?.buttonsResponseMessage?.selectedButtonId || m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || m.message?.templateButtonReplyMessage?.selectedId || (m.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ? JSON.parse(m.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson)?.id : null) || m?.text || "";
        var budy = (typeof m.text == 'string' ? m.text : '')
	    
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const command = isCmd ? body.replace(/^\s*\.?\s*/, '').split(' ')[0].toLowerCase() : ""
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await nyanBot2.decodeJid(nyanBot2.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = body.replace(/^\.\s*\S+\s*/, '').trim();
        const from = m.key.remoteJid
        const mQuoted = (m.quoted || m)
        const quoted = (mQuoted.mtype == 'buttonsMessage') ? mQuoted[Object.keys(mQuoted)[1]] : (mQuoted.mtype == 'templateMessage') ? mQuoted.hydratedTemplate[Object.keys(mQuoted.hydratedTemplate)[1]] : (mQuoted.mtype == 'product') ? mQuoted[Object.keys(mQuoted)[0]] : m.quoted ? m.quoted : m
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
        const groupMetadata = m.isGroup ? await nyanBot2.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        //user status
        const isUser = verifieduser.includes(sender)
        const isSamu = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isSamu || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(nyanBot2, m, premium)
        //startPetUpdateInterval(nyanBot2)
        //reply
        async function reply(teks) {
            nyanBot2.sendMessage(m.chat, {
                contextInfo: {
                    "isForwarded": true,
                    forwardedNewsletterMessageInfo: {
                        "newsletterJid": '120363215018837468@newsletter',
                        "newsletterName": `ᶻ 𝗓 𐰁 ${botname} ☃️`
                    }
                },
                text: teks
            }, { quoted: m });
        }

        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 1000
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!('badword' in user)) user.badword = 0
		if (!('link' in user)) user.link = 0
                if (!('register' in user)) user.register = false
                if (!('title' in user)) user.title = ''
		if (!('priv' in user)) user.priv = false
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(5).toString('hex')
                if (!('nick' in user)) user.nick = nyanBot2.getName(sender)
                if (!('lastClaim' in user)) user.lastClaim = null
		if (!('rewards' in user)) user.rewards = []
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
                register: false,
                serialNumber: randomBytes(5).toString('hex'),
                title: `${isPremium ? 'Premium' : 'User'}`,
		priv: false,
                badword: 0,
		link: 0,
                nick: nyanBot2.getName(sender),
                premium: `${isPremium ? 'true' : 'false'}`,
                limit: limitUser,
                totalLimit: 0,
                lastClaim: null,
		rewards: []
            }

            let chats = global.db.data.chats[from]
            if (typeof chats !== 'object') global.db.data.chats[from] = {}
            if (chats) {
		if (!('welcome' in chats)) chats.welcome = false
		if (!('events' in chats)) chats.events = false
                if (!('badword' in chats)) chats.badword = false
                if (!('antibot' in chats)) chats.antibot = false
		if (!('restrict' in chats)) chats.restrict = false
                if (!('antiviewonce' in chats)) chats.antiviewonce = true
                if (!('antilink' in chats)) chats.antilink = false
		if (!('antiadult' in chats)) chats.antiadult = false
                if (!('ban' in chats)) chats.ban = false
                if (!('adminmode' in chats)) chats.adminmode = false
            } else global.db.data.chats[from] = {
		welcome: false,
		events: false,
                badword: false,
                antibot: false,
		restrict: false,
                antiviewonce: true,
                antilink: false,
		antiadult: false,
                ban: false,
                adminmode: false
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!('totalhit' in setting)) setting.totalhit = 0
                if (!('autosticker' in setting)) setting.autosticker = false
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
                if (!('autorecordtype' in setting)) setting.autorecordtype = false
                if (!('autorecord' in setting)) setting.autorecord = false
                if (!('autotype' in setting)) setting.autotype = false
                if (!('onlygroup' in setting)) setting.onlygroup = false
                if (!('onlypv' in setting)) setting.onlypv = false
		if (!('anticall' in setting)) setting.anticall = false
                if (!('watermark' in setting)) setting.watermark = { packname, author }
                if (!('about' in setting)) setting.about = { bot: { nick: nyanBot2.getName(botNumber), alias: botname }, owner: { nick: nyanBot2.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber } }
            } else global.db.data.settings[botNumber] = {
                totalhit: 0,
                autosticker: false,
                autobio: false,
                autoread: false,
                onlygroup: false,
                onlypv: false,
		anticall: false,
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
	    
	    
        const reactionLoad = (chatId, messageKey) => {
            const emojis = ['🟠', '⚫'];
            let emojiIndex = 0;

            const sendReaction = () => {
                nyanBot2.sendMessage(chatId, { react: { text: emojis[emojiIndex], key: messageKey } });
                emojiIndex = (emojiIndex + 1) % emojis.length;
            };

            const intervalId = setInterval(sendReaction, 500);

            const timeoutId = setTimeout(() => {
                clearInterval(intervalId);
                nyanBot2.sendMessage(chatId, { react: { text: '⏱️', key: messageKey } });
            }, 5000);

            return { intervalId, timeoutId };
        };

        const reactionOk = (chatId, messageKey, { intervalId, timeoutId }) => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            nyanBot2.sendMessage(chatId, { react: { text: '🟢', key: messageKey } });
        };

        const reactionError = (chatId, messageKey, { intervalId, timeoutId }) => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            nyanBot2.sendMessage(chatId, { react: { text: '🔴', key: messageKey } });
        };

        async function sendCarousel(chatId, nativeFlowMessage, options) {
            const { header, footer, cards } = options;
            let carouselCards = [];

            for (const card of cards) {
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
                        imageMessage: cardImageParse.imageMessage,
                        hasMediaAttachment: true,
                    },
                    body: card.body,
                    nativeFlowMessage: card.nativeFlowMessage,
		    footer: {
			text: "Sa፝֟፝֟mu330"
		    }
                });
            }
            const message = generateWAMessageFromContent(chatId, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: header
                            },
                            carouselMessage: {
                                cards: carouselCards,
                                messageVersion: 1
                            },
                            footer: {
                                text: footer
                            }
                        }
                    }
                }
            }, { quoted: m });

            await nyanBot2.relayMessage(chatId, message['message'], {});
        }

        async function sendVidCarousel(chatId, nativeFlowMessage, options) {
            const { header, footer, cards } = options;
            let carouselCards = [];

            for (const card of cards) {
                var cardVideoParse = await prepareWAMessageMedia({
                    video: {
                        url: card.header.videoMessage
                    },
                }, {
                    upload: nyanBot2.waUploadToServer
                });

                carouselCards.push({
                    header: {
                        title: card.header.title,
                        videoMessage: cardVideoParse.videoMessage,
                        hasMediaAttachment: true,
                    },
                    body: card.body,
                    nativeFlowMessage: card.nativeFlowMessage
                });
            }
            const message = generateWAMessageFromContent(chatId, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: header
                            },
                            carouselMessage: {
                                cards: carouselCards,
                                messageVersion: 1
                            },
                            footer: {
                                text: footer
                            }
                        }
                    }
                }
            }, { quoted: m });
            await nyanBot2.relayMessage(chatId, message['message'], {});
        }

        //stickers actions:
        async function stcReac(tipo, texto) {
            nyanBot2.sendMessage(from, {
                sticker: fs.readFileSync(`./Media/sticker/${tipo}.webp`)
            }, {
                quoted: {
                    key: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: `Samu330`,
                        participant: sender
                    },
                    message: {
                        videoMessage: {
                            caption: texto
                        }
                    }
                }
            });
        }

        //


	if (isCommand && cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
            return;
        } else if (isCommand && !isSamu) {
            cache.set(m.sender, 1);
        }

	    
        //limit func
        async function useLimit(senderLimit, amount) {
            db.data.users[senderLimit].limit -= amount
            db.data.users[senderLimit].totalLimit += amount
        }
        // Grup Only
        if (!m.isGroup && !isSamu && db.data.settings[botNumber].onlygroup && !db.data.users[sender].priv && command !== 'reg') {
		if (isCommand) {
			return reply(`*No está permitido el uso del bot en privado!!*\n\n*Si desea utilizar el bot únase al grupo oficial 🙃*\nhttps://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1\n\n- *Si deseas usar el bot en privado, comunicate con Samu en el grupo para que te de el permiso!*`)
		}
	}
        if (m.isGroup && !isSamu && db.data.chats[from].ban) {
		if (isCommand) { return }
	}
        // Private Only
        if (!isSamu && db.data.settings[botNumber].onlypv && m.isGroup) {
		if (isCommand) {
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
        if (db.data.settings[botNumber].autorecordtype) {
            if (isCommand) {
                let presenceMix = ['composing', 'recording']
                let nyanMix = presenceMix[Math.floor(presenceMix.length * Math.random())]
                nyanBot2.sendPresenceUpdate(nyanMix, from)
            }
        }
        if (db.data.settings[botNumber].autorecord) {
            if (isCommand) {
                let presenceMix = ['recording']
                let nyanMix = presenceMix[Math.floor(presenceMix.length * Math.random())]
                nyanBot2.sendPresenceUpdate(nyanMix, from)
            }
        }
        if (db.data.settings[botNumber].autotype) {
            if (isCommand) {
                let nyanComposing = ['composing']
                nyanBot2.sendPresenceUpdate(nyanComposing, from)
            }
        }

        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MENSAJE ]' : '[ COMANDO ]')), chalk.white(budy || m.mtype) + '\n' + chalk.red('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.redBright('=> En'), chalk.green(m.isGroup ? groupName : 'Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
        if (db.data.chats[m.chat].antiviewonce && m.mtype == 'viewOnceMessageV2' || m.mtype == 'viewOnceMessageV2Extension') {
            let val = { ...m }
            let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message || val.message?.viewOnceMessageV2Extension?.message
            delete msg[Object.keys(msg)[0]].viewOnce
            val.message = msg
            await nyanBot2.sendMessage(m.chat, { forward: val }, { quoted: m })
        }


        if (db.data.chats[m.chat].antibot) {
            if (m.key.id.length === 22 && !isSamu && !isAdmins) {
		await reply(`*En este grupo no se permiten otros bots 🙃 y tu ID es considerado BOT/WEB... para prevenir... te eliminaré!*\n\n_*Si solo estas usando WhatsApp web... avisa con tiempo 🥱*_`)
		await nyanBot2.sendMessage(m.chat,
                    {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    });
		return await nyanBot2.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        //respond
        if (db.data.chats[m.chat].badword && !isSamu) {
            let isBadWord = false;
            for (let bak of bad) {
                if (new RegExp(`\\b${bak.toLowerCase()}\\b`).test(budy.toLowerCase())) {
                    isBadWord = true;
                    break
                }
            }

            if (isBadWord) {
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
                nyanBot2.sendMessage(from, { text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *recuerda que no está permitido usar malas palabras!*`, contextInfo: { mentionedJid: [m.sender] } }, {quoted: m});
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
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
            if (budy.match(`whatsapp.com`)) {
		if (!isBotAdmins) return;
                if (isAdmins) return
                if (m.key.fromMe) return
                if (isSamu) return
		if (db.data.users[sender].link == 1) {
			db.data.users[sender].link = 0
			await nyanBot2.sendMessage(m.chat,{delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
			return await nyanBot2.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
		}
                await nyanBot2.sendMessage(m.chat,{delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
		db.data.users[sender].link += 1;
                nyanBot2.sendMessage(from, { text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *En este grupo no está permitido el envió de links de otros grupos!!*\n\n_Advertencia N° *${db.data.users[sender].link},* Esta es tu única advertencia! si vuelves a enviar un link de WhatsApp seras eliminado!_`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
            }
        }

        //user db
        if (isCommand && !isUser) {
            verifieduser.push(sender)
            fs.writeFileSync('./src/data/role/user.json', JSON.stringify(verifieduser, null, 2))
        }

if (m.quoted && m.quoted.text && /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/.test(m.quoted.text) && m.quoted.id.startsWith("Samu330-")) {
    const quotedText = m.quoted.text;
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = quotedText.match(regex);

    const videoLink = matches[0];

    const lowerBudy = budy.toLowerCase();

    if (lowerBudy === 'audio' || lowerBudy === 'a' || lowerBudy === 'aúdio' || lowerBudy === 'áudio') {
        const caseYtmp32 = require('./cases/ytmp3');
        await caseYtmp32(videoLink, m, reply, nyanBot2, useLimit, stcReac, sender, command, prefix);
    }

    if (lowerBudy === 'video' || lowerBudy === 'v' || lowerBudy === 'vídeo' || lowerBudy === 'vÍdeo') {
        const caseYtmp3Video = require('./cases/ytmp4');
        await caseYtmp3Video(videoLink, m, reply, nyanBot2, useLimit, stcReac, sender, command, prefix);
    }
}

if (gameMath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            let kuis = true
            let userGameMath = gameMath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == userGameMath) {
                await reply(`*COOOORRECTO!! 🤓*\n\n_Acertaste a la ecuación!_ 😦🎉`)
                delete gameMath[m.sender.split('@')[0]]
            } else reply('*Nop! 😗 intenta de nuevo 😛*')
}
	    
const userGames = db.data.game.soup || [];
const juegoActivoIndex = userGames.findIndex(game => game.user === sender);

if (juegoActivoIndex !== -1) {
    const juegoActivo = userGames[juegoActivoIndex];

    if (m.quoted && m.quoted.text.startsWith("*Nuevo juego de* `Sopa de letras` 🍜")) {
        const palabraAdivinada = m.text.toUpperCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^A-Z]/g, '');

        if (juegoActivo.palabrasEncontradas.includes(palabraAdivinada)) {
            await reply(`*La palabra "${palabraAdivinada}" ya ha sido encontrada anteriormente.*`);
        } else if (juegoActivo.palabras.includes(palabraAdivinada)) {
            juegoActivo.palabrasEncontradas.push(palabraAdivinada);
            juegoActivo.palabras = juegoActivo.palabras.filter(p => p !== palabraAdivinada);
            const puntosGanados = juegoActivo.palabrasEncontradas.length === 1 ? 100 : 0;
            const totalPalabrasEncontradas = juegoActivo.palabrasEncontradas.length;

            if (totalPalabrasEncontradas === 3) {
                db.data.users[sender].limit += 200;
                await nyanBot2.sendMessage(m.chat, {
                    image: juegoActivo.imagenResaltada,
                    caption: `*¡Felicidades! 🎊 Has encontrado todas las palabras! 😗.*\n\n*Puntos obtenidos: 400*\n*Puntos totales: ${db.data.users[sender].limit}*`
                }, {quoted: m});
                userGames.splice(juegoActivoIndex, 1);
            } else {
                if (totalPalabrasEncontradas === 1) {
                    db.data.users[sender].limit += 100;
                }
                if (totalPalabrasEncontradas === 2) {
                    db.data.users[sender].limit += 100;
                }

                const palabrasRestantes = juegoActivo.palabras.length;
                await reply(`*¡Correcto! Has encontrado la palabra "${palabraAdivinada}".*\n- *Palabras restantes: ${palabrasRestantes}*\n- *Te quedan ${3 - juegoActivo.intentos} intentos.*\n- *Total de puntos: ${db.data.users[sender].limit}*`);
            }
        } else {
            juegoActivo.intentos += 1;

            if (juegoActivo.intentos >= 3) {
                const puntosGanados = juegoActivo.palabrasEncontradas.length * 100;
                await nyanBot2.sendMessage(m.chat, {
                    image: juegoActivo.imagenResaltada,
                    caption: `*No se encontraron palabras. Has agotado tus intentos.*\n\n*Palabras encontradas:* ${juegoActivo.palabrasEncontradas.join(', ')}\n*Palabras no encontradas:* ${juegoActivo.palabras.join(', ')}\n*Puntos obtenidos: ${puntosGanados}*`
                }, {quoted: m});
                userGames.splice(juegoActivoIndex, 1);
            } else {
                await reply(`*La palabra "${palabraAdivinada}" no se encontró en la sopa de letras.*\n*Te quedan ${3 - juegoActivo.intentos} intentos.*`);
            }
        }
    }

    db.data.game.soup = userGames;
}

if (m.quoted && m.quoted.id.startsWith("ApkMod")) {
    const messageContent = m.quoted.text;
    const requestedLinkIndex = parseInt(m.text.trim(), 10) - 1;

    if (isNaN(requestedLinkIndex)) {
        return reply("❌ Por favor, ingresa un número válido.");
    }

    const nameMatch = messageContent.match(/◦\s*🍄\s*\*Nombre\*:\s*(.*?)\n/);
    const appName = nameMatch ? nameMatch[1] : "Desconocido";

    const downloadLinks = [];
    const regex = /https?:\/\/[^\s]+/g;
    let match;
    
    while ((match = regex.exec(messageContent)) !== null) {
        downloadLinks.push(match[0]);
    }

    if (requestedLinkIndex < 0 || requestedLinkIndex >= downloadLinks.length) {
        return reply(`❌ _*No se encontró la opción de enlace solicitada.*_\n\n_Asegúrate de solo enviar el número correspondiente a la aplicación que deseas descargar, la opción no debe ser mayor a *${downloadLinks.length}*_`);
    }

    const selectedLink = downloadLinks[requestedLinkIndex];

    if (selectedLink.endsWith('.html/')) {
        return reply("❌ _*Este archivo no se puede enviar, ya que necesitas realizar la búsqueda de dicha aplicación opcional.*_");
    } else if (selectedLink.endsWith('.com') || selectedLink.endsWith('.com/')) {
        return reply("❌ _*No se puede acceder a este enlace, porfavor asegúrate de que la opción contenga la aplicación ORIGINAL o MODIFICADA.*_");
    } else if (selectedLink.endsWith('.apk')) {
        nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
        stcReac('peso', `Sé paciente, esto puede tardar! 🙃\n🪁 ${appName}`);
        await nyanBot2.sendMessage(from, {
            document: { url: selectedLink },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${appName}.apk`,
	    caption: "🪁 *APK lista para instalar!! Disfruta 🍄*"
        }, {quoted: m});
	nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else if (selectedLink.endsWith('.zip')) {
        nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
        stcReac('peso', `Sé paciente, esto puede tardar! 🙃\n📦 ${appName}`);
        await nyanBot2.sendMessage(from, {
            document: { url: selectedLink },
            mimetype: 'application/zip',
            fileName: `${appName}.zip`,
	    caption: "📦 *Este archivo zip contiene lo necesario para poder instalar la aplicación, es probable que necesites ZArchiver para poder instalar aplicaciones con extensión XAPK* 🍄"
        }, {quoted: m});
	nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
        return reply("❌ Tipo de archivo no reconocido.");
    }
}

	    
if (m.quoted && m.quoted.text.startsWith(`${forma1}APKCOMBO DL 🕹️${forma1}`)) {
    let quotedText = m.quoted.text;

    let linkPattern = /https?:\/\/apkcombo\.com\/[^\s]+/g;
    let links = quotedText.match(linkPattern);

    let index = body -1;

    if (index > links.length) return reply(`*No hay ${budy} aplicaciones en la lista, asegurate de que el numero no sea mayor a ${links.length}*`)
    if (links && index >= 0 && index < links.length) {
        let selectedLink = links[index];

        let downloadInfo = await require("./lib/apk-dl.js").apkcombo.download(selectedLink);

	await stcReac('peso', `_*Se paciente, esto puede tardar! 🙃*_\n*📥 ${downloadInfo.appname}*`);
        const downloadMessage = `📥 *${downloadInfo.appname}*\n\n` +
            `◦  *Desarrollador*: ${downloadInfo.developer}\n` +
            `◦  *Versión*: ${downloadInfo.version}\n`;

	try {
        await nyanBot2.sendMessage(m.chat, {
            document: { url: downloadInfo.link },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${downloadInfo.appname}.apk`,
            caption: downloadMessage
        }, { quoted: m });
	} catch (error) {
		reply('*Ocurrio un error, porfavor intente con el comando:* apk')
	}
    }
}

        switch (isCommand) {
			
		case 'math': {
                if (gameMath.hasOwnProperty(m.sender.split('@')[0])) reply(`*Tienes ya un juego sin terminar! 🌭*`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return reply(`*Modos disponibles*:\n\n- ${forma1}${Object.keys(modes).join(`${forma1}\n- ${forma1}`)}${forma1}\n\n*⸋ Para poder jugar debes incluir después del comando el modo de juego que quieres utilizar por ejemplo*:\n${forma1}${prefix}math medio${forma1}`)
                let result = await genMath(text.toLowerCase())
                nyanBot2.sendText(m.chat, `*🕵🏻 Cual es el resultado de:*\n${forma1}${result.math.toLowerCase()}${forma1}?\n\n_*Tiempo disponible*_: ${(result.time / 1000).toFixed(2)} segundos! 🕒`, m).then(() => {
                    gameMath[m.sender.split('@')[0]] = result.answer
                })
                await sleep(result.time)
                if (gameMath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.answer)
                    reply("🔴 *SE ACABÓ EL TIEMPO!!*\nResultado: " + gameMath[m.sender.split('@')[0]])
                    delete gameMath[m.sender.split('@')[0]]
                }
            }
            break
			
case 'apk2':
    if (!text) return reply("*Incluye junto al comando la aplicación que deseas buscar! 🙃*");
    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    let r = require("./lib/apk-dl");
    let i = await r.apkcombo.search(text);

    const limitedApps = i.slice(0, 6);

    let caption = `${forma1}APKCOMBO DL 🕹️${forma1}\n\n📱 *Resultados de búsqueda para "${text}"*\n\n`;
    
    if (limitedApps.length === 0) {
        caption += `❌ *No se encontraron aplicaciones.* ❌`;
    } else {
        limitedApps.forEach(app => {
            caption += `◦  *${app.name}* - ${app.rating} (${app.downloads})\n\n`;
        });
	caption += `⚠️ _INSTRUCCIONES_ ⚠️: *Para descargar una aplicación, solo etiqueta este mensaje con el número correspondiente a la aplicación que deseas.*\n`;
	caption += `\n_*Ejemplo:*_ ${forma1}2${forma1}`;
        caption += `\n${readmore}🔗 *Links*\n`;
        limitedApps.forEach(app => {
            caption += `${app.link}\n`;
        });
    }

    let s = await require("./lib/canvaImg.js").createAppListImage(i, text);
    await nyanBot2.sendMessage(from, { image: s, caption: caption }, { quoted: m });
    break
			
		case 'ruleta':
		nyanBot2.sendMessage(m.chat, { react: { text: '🎡', key: m.key } });
		const { crearRuletaGif } = require("./lib/ruleta.js");
		const { buffer, resultado, creador } = crearRuletaGif();
		await nyanBot2.sendVideoAsSticker(from, buffer, m, { packname: global.packname, author: global.author });
		reply(resultado)
		break



	    case 'grupo':
		const caseSettings = require('./cases/configuraciones-grupo');
		await caseSettings(text, m, from, reply, nyanBot2, groupMetadata, isAdmins, isBotAdmins, command, prefix);
		break
			
	    case 'rw':
		const caseRewards = require('./cases/rewards');
		await caseRewards(text, m, from, reply, sender);
		break
			
	    case 'lot':
		const caseMysteryBox = require('./cases/mysteryBox');
		await caseMysteryBox(nyanBot2, isSamu);
		break
			
	    case 'todos': case 'tagall':
		const caseTagAll = require('./cases/tagAll');
		await caseTagAll(text, m, from, isAdmins, nyanBot2, groupMetadata);
		break
			
	    case 'get':
		const caseGetStatus = require('./cases/getStatus');
		await caseGetStatus(m, reply, nyanBot2, quoted);
		break

            case 'menu': case 'comandos':
                const caseMenu = require('./cases/menu');
                await caseMenu(m, reply, nyanBot2, sender, categories, checkPremiumUser, botNumber);
                break
		
	   case 'ayuda': case 'help':
                const caseAyuda = require('./cases/ayuda');
                await caseAyuda(m, reply, sender, prefix, categories);
                break

            case 'claim':
                const caseClaim = require('./cases/claim');
                await caseClaim(m, reply, sender);
                break
			
	    case 'sopa': case 'letras': case 'nuevasopa':
		const caseSopa = require('./cases/game-soup');
                await caseSopa(m, reply, nyanBot2, sender, command, readmore, prefix);
		break
			
            case 'logout':
                const caseLogout = require('./cases/acount-logout');
                await caseLogout(text, m, reply, nyanBot2, sender, prefix);
                break
			
            case 'login':
                const caseLogin = require('./cases/acount-login');
                await caseLogin(text, m, reply, nyanBot2, sender, prefix);
                break
			
            case 'reg':
                const caseRegister = require('./cases/acount-register');
                await caseRegister(text, m, reply, nyanBot2, sender, command, sendCarousel, prefix, isGroup);
                break
		
            case 'reset':
                const caseReset = require('./cases/acount-reset');
                await caseReset(text, m, reply, nyanBot2, command, prefix);
                break

            case 'bard': case 'ia': case 'ai': case 'chatgpt': case 'nyan': case 'bot':
                const caseIa = require('./cases/chatGpt');
                await caseIa(text, m, reply, nyanBot2, sender, command, prefix, date, time);
                break

            case 'pins': case 'pinterest': case 'pin': case 'pinsearch':
                const casePinterest = require('./cases/pinterest');
                await casePinterest(m, reply, nyanBot2, text, prefix, command, sendCarousel, stcReac);
                break

            case 'img': case 'imagen': case 'imagenes':
                const caseImagen = require('./cases/imagen');
                await caseImagen(m, reply, nyanBot2, text, prefix, command, stcReac);
                break

            case 'color': case 'recolor':
                const caseColor = require('./cases/color');
                await caseColor(m, reply, nyanBot2, prefix, command, quoted, mime);
                break

            case 'remini': case 'hd':
		const caseRemini = require('./cases/remini');
                await caseRemini(m, reply, nyanBot2, prefix, command, quoted, mime, date);
                break

            case 'spotify': case 'sp': case 'downloadspotify':
                const caseSpotify = require('./cases/spotify');
                await caseSpotify(m, reply, text, nyanBot2, reSize);
                break

            case 'buscar': case 'gg': case 'google':
		const caseGoogle = require('./cases/google-search');
                await caseGoogle(m, reply, text, prefix, command, reactionLoad, reactionOk, reactionError);
		break
            
	    case 'ghstalk': case 'githubstalk':
		const caseGitStalk = require('./cases/stalk-github');
                await caseGitStalk(m, reply, text, prefix, command, nyanBot2);
		break

            case 'yts': case 'youtubesearch': case 'ytsearch':
		const caseYtSearch = require('./cases/youtube-search');
                await caseYtSearch(m, reply, text, prefix, command, nyanBot2, stcReac, sendCarousel);
                break

            case 'playlist': case 'youtubeplaylist': case 'ytplaylist':
                const caseYtPlaylist = require('./cases/youtube-playlist');
                await caseYtPlaylist(text, m, reply, nyanBot2, sendCarousel, stcReac, prefix, command);
                break

            case 'play':
                const casePlay = require('./cases/play');
                await casePlay(text, m, reply, isUrl, nyanBot2, formatNumber, prefix);
                break

            case 'ytmp3': case 'yta':
                const caseYtmp3 = require('./cases/ytmp3');
                await caseYtmp3(text, m, reply, nyanBot2, useLimit, stcReac, sender, command, prefix);
                break

            case 'ytmp4': case 'ytv':
                const caseYtmp4 = require('./cases/ytmp4');
                await caseYtmp4(text, m, reply, nyanBot2, useLimit, stcReac, sender, command, prefix);
                break

            case 'pelis': case 'peliculas':
		const casePelis = require('./cases/pelis');
                await casePelis(text, m, reply, nyanBot2, sendCarousel, stcReac, command, prefix);
                break

            case 'pelidl':
		const casePelisDl = require('./cases/pelis-dl');
                await casePelisDl(text, m, reply, nyanBot2, command, prefix);
                break

            case 'cuevana':
		const caseCuevana = require('./cases/cuevana');
                await caseCuevana(text, m, reply);
                break

            case 'toaud': case 'tomp3': case 'toaudio':
		const caseToAudio = require('./cases/to-audio');
                await caseToAudio(m, reply, nyanBot2, mime, qmsg, command, prefix);
                break

            case 'music': case 'song': case 'whatmusic':
		const caseWhatmusic = require('./cases/whatmusic');
                await caseWhatmusic(text, m, reply, nyanBot2, sender, useLimit, mime, quoted, command, prefix);
                break

            case 'facebook': case 'fb':
		const caseFacebook = require('./cases/facebook');
                await caseFacebook(m, text, reply, nyanBot2, args, sender, stcReac, command, useLimit, prefix);
                break
			
	    case 'logo': case 'logos':
		const caseLogos = require('./cases/logos');
                await caseLogos(text, m, nyanBot2, reply, prefix, command);
		break

            case 'insta': case 'ig': case 'instagram':
		const caseInstagram = require('./cases/instagram');
                await caseInstagram(text, m, reply, sender, stcReac, useLimit, nyanBot2, prefix, command);
                break

	    case 'x': case 'twiter': case 'tw':
                const caseX = require('./cases/twiter');
                await caseX(text, m, reply, nyanBot2, useLimit, stcReac, sender, prefix);
                break

            case 'emojimix':
		const caseEmojiMix = require('./cases/emojiMix');
                await caseEmojiMix(text, m, reply, nyanBot2, command, prefix);
                break

	    case 'tt': case 'tiktok':
		const caseTikok = require('./cases/tiktok');
                await caseTikok(text, m, reply, nyanBot2, sender, useLimit, stcReac, command, prefix);
                break

            case 'tiktoks': case 'tiktoksearch':
		const caseTiktokSearch = require('./cases/tiktok-search');
                await caseTiktokSearch(text, m, reply, nyanBot2, sender, sendVidCarousel, command, prefix);
                break

	    case 'letra': case 'lyrics':
		const caseLyrics = require('./cases/lyrics');
                await caseLyrics(text, m, reply, nyanBot2, stcReac, command, prefix);
                break

case 'brat':
    if (!text) return reply("*Ingresá tu texto después del comando 😛*");
    if (text.length > 25) return reply("*El texto ingresado no debe ser mayor a 25 letras! 🧐*");

    const brat = await require("./lib/canvaImg.js").brat({ text: text });
    nyanBot2.sendMessage(m.chat, { react: { text: '🥶', key: m.key } });

    const resizedImageBuffer = await sharp(brat)
        .resize(512, 512, {
            fit: sharp.fit.fill
        })
        .toBuffer();

    await nyanBot2.sendImageAsSticker(m.chat, resizedImageBuffer, m, { packname: '🥶 S A M U 3 3 0 ©', author: '' });
    break
			

case 'apk':
    if (!text) return reply(`*❌ Por favor ingresa una solicitud a buscar junto con el comando*\n_*Ejemplo:*_\n\n${prefix + command} pubg`);
    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    try {
        const results = await require("./lib/apk-dl").aptoide.search(text);
        
        const limitedResults = results.slice(0, 5);
        
        if (limitedResults.length === 0) {
            return reply(`*No se encontraron resultados para "${text}".*`);
        }

        let contents = limitedResults.map(app => {
            let content = `◦  *Nombre*: ${app.name || 'Desconocido'}\n`;
            content += `◦  *Tamaño*: ${formatBytes(app.size)}\n`;
            content += `◦  *Paquete*: ${app.package || 'Desconocido'}\n`;
            content += `◦  *ID*: ${app.id || 'Desconocido'}\n`;
            content += `◦  *Versión*: ${app.file.vername || 'Desconocido'}\n`;
            content += `◦  *Descargas*: ${formatNumber(app.stats.downloads) || 'Desconocido'}\n`;
            content += `◦  *Clasificación promedio*: ${app.stats.rating.avg || 'Desconocido'} ⭐\n`;
	    content += `◦  *Total de votos*: ${formatNumber(app.stats.rating.total) || 'Desconocido'}\n`;
            content += `◦  *INC*: ${app.developer.name || 'Desconocido'}\n`;
	    content += `◦  *Virus Scaner*: ${app.file.malware.rank || 'Desconocido'} 🐍\n`;
	    content += `◦  *Última actualización*: ${formatDate(app.updated) || 'Desconocido'}\n`;

            return {
                header: {
                    imageMessage: app.icon || 'https://default-icon-url.com',
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar ${app.name}`,
                            copy_code: `${prefix}apkdl ${app.file.path}|${app.size}|${app.name}|${app.file.vername}|${app.icon}`
                        })
                    }]
                },
            };
        });

        await sendCarousel(m.chat, {}, {
            header: `🍟 *Resultados de tu búsqueda de ${text}*\n\n⚠️ *IMPORTANTE!!* ￬￬\n> _Para descargar, solo desliza sobre los resultados, toca el botón para copiar el comando, luego envíalo, y listo! 😁_`,
            footer: `*Si no encuentras tu aplicacion intenta con ${prefix}apk2*\n\nScraper ApkDl By Samu330.com`,
            cards: contents
        });
    } catch (e) {
        console.log(e);
	reply(`${e}`)
        stcReac('error', '*Lo siento pero al parecer ha corrido un error! puedes volver a intentarlo 😁*');
    }
    break

case 'apkdl':
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 30) return reply(`*Lo siento, pero este comando requiere 30 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    
    if (!text) return reply(`*❌ Por favor ingresa un enlace junto con el comando*\n_*Ejemplo:*_\n\n${prefix + command} https://pool.apk.aptoide.com/...|21335319|Master for Minecraft- Launcher|1.4.25|imagen`);

    const argApk = text.split('|');
    if (argApk.length < 5) return reply(`*❌ El formato es incorrecto. Usa: .apkdl link|size|nombre|version|imagen*`);

    if (argApk[1] > 1000000000) {
        return reply(`*Lo siento pero el archivo pesa más de 1GB (${formatBytes(argApk[1])}), por tal motivo no es posible el envío! 🙃*`);
    }

    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    stcReac('peso', `_*Se paciente, esto puede tardar! 🙃*_\n*🔻 ${argApk[2]}*`);
    const downloadMessage = `📥 *${argApk[2]}*\n\n` +
        `◦  *Tamaño*: ${formatBytes(argApk[1])}\n` +
        `◦  *Versión*: ${argApk[3]}`;

    await nyanBot2.sendMessage(m.chat, {
        document: { url: argApk[0] },
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${argApk[2]}.apk`,
        caption: downloadMessage,
        contextInfo: {
            "externalAdReply": {
                "showAdAttribution": true,
                "containsAutoReply": true,
                "title": `📥 Descarga por Samu330 👑`,
                "body": `Download by Samu330.com!`,
                "thumbnailUrl": argApk[4],
                "sourceUrl": 'https://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1'
            }
        }
    }, { quoted: m });
    
    useLimit(sender, 30);
    break


case 'modapk': case 'apkmod':
    if (!text) return reply(`*❌ Por favor ingresa una solicitud a buscar junto con el comando*\n_*Ejemplo:*_\n\n${prefix + command} pou`);
    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    try {
        let results = await require("./lib/rexdl.js").rexdl(text, 1);
        
        let limitedResults = results.slice(0, 10);
        
        if (limitedResults.length === 0) {
            return reply(`*No se encontraron resultados para "${text}".*`);
        }

        let contents = limitedResults.map(app => {
	const shortDescription = app.Description.length > 250 ? app.Description.substring(0, 150) + '...' : app.Description;
		
            let content = `\n◦  *Título*: ${app.Title || 'Desconocido'}`;

            return {
                header: {
                    imageMessage: app.Icon || 'https://default-icon-url.com',
                    hasMediaAttachment: true,
                },
                body: {
                    text: content
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: `Descargar 🪁`,
                            copy_code: `${prefix}modapkdl ${app.DownloadLink}|${app.Title}`
                        })
                    }]
                },
            };
        });

        await sendCarousel(m.chat, {}, {
            header: `📥 *Resultados de tu búsqueda de ${text}*\n\n⚠️ *IMPORTANTE!!* ￬￬\n> _Para descargar, solo desliza sobre los resultados, toca el botón para copiar el comando, envíalo, y sige las instrucciones! 😁_`,
            footer: `*Si no encuentras tu aplicación intenta con otro término de búsqueda.*\n\nDownloads from Rexdl by Sa፝֟፝֟mu330`,
            cards: contents
        });
    } catch (e) {
        console.log(e);
        reply(`${e}`)
        stcReac('error', '*Lo siento, pero al parecer ha ocurrido un error! Puedes volver a intentarlo 😁*');
    }
    break

case 'modapkdl':
    if (!text) return reply(`*❌ Por favor, proporciona un enlace de descarga junto con el comando*\n_*Ejemplo:*_\n\n${prefix + command} https://rexdlbox.com....`);
    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    let argApkMod = text.split("|")
    try {
        const result = await require("./lib/rexdl.js").getDownloadDetails(argApkMod[0]);
        
        if (result.error) {
            return reply(`*Error al obtener los detalles de descarga: ${result.message}*`);
        }

	let n = 1;
        const additionalInfo = result.additionalInfo;
        let message = `⚙️ *Detalles de la aplicación:*\n\n`;
	message += `◦  🍄 *Nombre*: ${argApkMod[1]}\n`;
        message += `◦  🪁 *Versión*: ${additionalInfo.version || 'Desconocida'}\n`;
        message += `◦  📦 *Tamaño*: ${additionalInfo.size || 'Desconocido'}\n`;
        message += `◦  🪄 *Última actualización*: ${additionalInfo.update || 'Desconocida'}\n\n`;

	message += `⚠️ *INSTRUCCIONES DE DESCARGA!!*\n\n_Responde este mensaje con el número de la aplicación que desees descargar!_`;
        message += `*Descargas disponibles:*\n\n`;
        result.downloadLinks.forEach((linkData, index) => {
            message += `╭ *${n++}•*\n├ ◦  *${linkData.text}*:\n╰───────\n${linkData.link}\n\n`;
        });

        nyanBot2.sendMessage(from, {text: message}, {quoted: m, messageId: `ApkMod-` + randomBytes(8).toString('hex')});
    } catch (e) {
        console.log(e);
        reply(`*Lo siento, ocurrió un error al procesar tu solicitud. Por favor intenta nuevamente.*`);
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

                    let responseMessage = `\n*◦ Número:* @${target.split("@")[0]}\n*◦ Nombre:* ${nickName}\n*◦ Puntos:* ${points}\n> _*${reg}*_`;
                    if (countryInfo) {
                        responseMessage += `\n*◦ País:* ${countryInfo.name} ${countryInfo.emoji}\n*◦ Código:* ${countryInfo.code}\n`;
                    } else {
                        responseMessage += `\nNo se pudo identificar el país.`;
                    }

                    responseMessage += `\n*◦ Biografía:* ${biography}\n*◦ Última actualización:* ${lastUpdated} (${lastUpdatedDate})\n\n`;

                    const { isPremium } = checkPremiumUser(target);
                    if (isPremium) {
                        const { expired } = getPremiumExpired(target);
                        const remainingTime = Math.max(expired - Date.now(), 0); // Asegúrate de que no sea negativo
                        const timeRemaining = runtime(Math.floor(remainingTime / 1000)); // Convertir milisegundos a segundos

                        responseMessage += `\n*◦ Estado Premium:* Activo 👑\n*◦ Tiempo restante:* ${timeRemaining}`;
                    } else {
                        responseMessage += `\n*◦ Estado Premium:* No activo`;
                    }
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

            case 'say': case 'tts': case 'gtts': {
                if (!text) return reply('*Porfavor ingresa un texto junto con el comando para que el Bot pueda reproducirlo!* 😛')
                let texttts = text
                const ttsUrl = await googleTTS(texttts, 'es', 1, 'https://translate.google.com', ',.?!')
                return nyanBot2.sendMessage(m.chat, {
                    audio: {
                        url: ttsUrl,
                    },
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m,
                })
            }
                break

            case 'gdrive': {
                if (!text) return reply("*Por favor, asegúrate de incluir el link de Google Drive después del comando*");
                if (db.data.users[sender].limit < 1) return reply(mess.limit);
                if (db.data.users[sender].limit < 50) {
                    return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de qué manera ganar puntos_`);
                }

                if (!/drive\.google\.com/.test(text)) {
                    return reply("🛑 El enlace proporcionado no es un enlace válido de Google Drive.");
                }

                try {
                    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

                    let data = await require("api-dylux").GDriveDl(text);
                    const filesizeMB = parseFloat(data.fileSizeB / (1024 * 1024));
                    if (filesizeMB > 1000) {
                        return reply("😔 El tamaño del archivo es mayor a 1000 MB y no se puede enviar.");
                    }

                    let mimeType;
                    const fileExtension = path.extname(data.fileName).slice(1).toLowerCase();
                    switch (fileExtension) {
                        case 'pdf': mimeType = 'application/pdf'; break;
                        case 'doc': case 'docx': mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'; break;
                        case 'xls': case 'xlsx': mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'; break;
                        case 'ppt': case 'pptx': mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'; break;
                        case 'zip': mimeType = 'application/zip'; break;
                        case 'rar': mimeType = 'application/x-rar-compressed'; break;
                        case '7z': mimeType = 'application/x-7z-compressed'; break;
                        case 'mp4': mimeType = 'video/mp4'; break;
                        case 'mp3': mimeType = 'audio/mpeg'; break;
                        case 'jpg': case 'jpeg': mimeType = 'image/jpeg'; break;
                        case 'png': mimeType = 'image/png'; break;
                        case 'gif': mimeType = 'image/gif'; break;
                        case 'bmp': mimeType = 'image/bmp'; break;
                        case 'svg': mimeType = 'image/svg+xml'; break;
                        case 'txt': mimeType = 'text/plain'; break;
                        case 'html': case 'htm': mimeType = 'text/html'; break;
                        case 'csv': mimeType = 'text/csv'; break;
                        case 'apk': mimeType = 'application/vnd.android.package-archive'; break;
                        case 'exe': mimeType = 'application/vnd.microsoft.portable-executable'; break;
                        case 'json': mimeType = 'application/json'; break;
                        case 'xml': mimeType = 'application/xml'; break;
                        default: mimeType = 'application/octet-stream'; break;
                    }

                    if (mimeType === 'application/octet-stream') {
                        const tempFilePath = path.join(__dirname, data.fileName);
                        const zipFilePath = path.join(__dirname, `${data.fileName}.zip`);

                        const fileBuffer = await fetchBuffer(data.downloadUrl);
                        fs.writeFileSync(tempFilePath, fileBuffer);

                        const output = fs.createWriteStream(zipFilePath);
                        const archive = archiver('zip', { zlib: { level: 9 } });

                        output.on('close', async () => {
                            await nyanBot2.sendMessage(m.chat, {
                                document: fs.readFileSync(zipFilePath),
                                fileName: `${data.fileName}.zip`,
                                mimetype: 'application/zip',
                                caption: `${forma1}GOOGLE DRIVE DL 🗳️${forma1}\n
_*No se encontró extensión adecuada al documento, así que se empaquetó en un ZIP para el envío y asegurar tu documento, requerirás una aplicación para descomprimir archivos 🗄️*_\n
*Título:* ${data.fileName}
*Tamaño:* ${data.fileSize}
*Descarga:* ${data.downloadUrl}\n
> ${botname}`
                            }, { quoted: m });

                            fs.unlinkSync(tempFilePath);
                            fs.unlinkSync(zipFilePath);
                        });

                        archive.pipe(output);
                        archive.file(tempFilePath, { name: data.fileName });
                        archive.finalize();

                    } else {
                        await nyanBot2.sendMessage(m.chat, {
                            document: await fetchBuffer(data.downloadUrl),
                            fileName: `${data.fileName}`,
                            mimetype: `${mimeType}`,
                            caption: `
*Título:* ${data.fileName}
*Tamaño:* ${data.fileSize}
*Descarga:* ${data.downloadUrl}\n
> ${botname}`
                        }, { quoted: m });
                    }

                    nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                    useLimit(sender, 50)
                } catch (error) {
                    nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
                    console.error('Error al procesar la solicitud:', error);
                    reply(`Ocurrió un error al intentar obtener el archivo. Por favor, verifica el enlace y vuelve a intentarlo.\n${error}`);
                }
            }
                break

case 'mediafire': case 'mf': {
    if (!text) return reply("*Por favor, asegúrate de incluir el link de MediaFire después del comando*");
    if (db.data.users[sender].limit < 1) return reply(mess.limit);
    if (db.data.users[sender].limit < 50) {
        return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de qué manera ganar puntos_`);
    }

    if (!/mediafire\.com/.test(text)) {
        return reply("🛑 El enlace proporcionado no es un enlace válido de MediaFire.");
    }

    try {
        nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

        let data = await require("./lib/mediafire.js").mediafireDownload(text);

        const filesizeMB = sizeLimit(data.data.size, 500);
        if (filesizeMB.oversize) {
            return reply(`El peso del archivo *( ${data.data.size} )* supera el límite permitido *( 500MB )* 🙃.`);
        }

        let mimeType = data.data.mime;
        switch (data.data.extension.toLowerCase()) {
            case 'pdf': mimeType = 'application/pdf'; break;
            case 'doc': case 'docx': mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'; break;
            case 'xls': case 'xlsx': mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'; break;
            case 'ppt': case 'pptx': mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'; break;
            case 'zip': mimeType = 'application/zip'; break;
            case 'rar': mimeType = 'application/x-rar-compressed'; break;
            case '7z': mimeType = 'application/x-7z-compressed'; break;
            case 'mp4': mimeType = 'video/mp4'; break;
            case 'mp3': mimeType = 'audio/mpeg'; break;
            case 'jpg': case 'jpeg': mimeType = 'image/jpeg'; break;
            case 'png': mimeType = 'image/png'; break;
            case 'gif': mimeType = 'image/gif'; break;
            case 'bmp': mimeType = 'image/bmp'; break;
            case 'svg': mimeType = 'image/svg+xml'; break;
            case 'txt': mimeType = 'text/plain'; break;
            case 'html': case 'htm': mimeType = 'text/html'; break;
            case 'csv': mimeType = 'text/csv'; break;
            case 'apk': mimeType = 'application/vnd.android.package-archive'; break;
            case 'exe': mimeType = 'application/vnd.microsoft.portable-executable'; break;
            case 'json': mimeType = 'application/json'; break;
            case 'xml': mimeType = 'application/xml'; break;
            default: mimeType = 'application/octet-stream'; break;
        }

        if (mimeType === 'application/octet-stream') {
            const tempFilePath = path.join(__dirname, data.data.filename);
            const zipFilePath = path.join(__dirname, `${data.data.filename}.zip`);

            const fileBuffer = await fetchBuffer(data.data.link);
            fs.writeFileSync(tempFilePath, fileBuffer);

            const output = fs.createWriteStream(zipFilePath);
            const archive = archiver('zip', { zlib: { level: 9 } });

            archive.pipe(output);
            archive.file(tempFilePath, { name: data.data.filename });
            await archive.finalize();

            output.on('close', async () => {
                await nyanBot2.sendMessage(m.chat, {
                    document: fs.readFileSync(zipFilePath),
                    fileName: `${data.data.filename}.zip`,
                    mimetype: 'application/zip',
                    caption: `
*Título:* ${data.data.filename}
*Tamaño:* ${data.data.size}
*Fecha de Publicación:* ${data.data.uploaded}\n\n
> Download By Samu330.com & Laden`
                }, { quoted: m });

                fs.unlinkSync(tempFilePath);
                fs.unlinkSync(zipFilePath);
            });
        } else {
            await nyanBot2.sendMessage(m.chat, {
                document: await fetchBuffer(data.data.link),
                fileName: `${data.data.filename}`,
                mimetype: `${mimeType}`,
                caption: `
*Título:* ${data.data.filename}
*Tamaño:* ${data.data.size}
*Fecha de Publicación:* ${data.data.uploaded}\n\n
> Download By Samu330.com & Laden`
            }, { quoted: m });
        }

        nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
        useLimit(sender, 50);
    } catch (error) {
        nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error('Error al procesar la solicitud:', error);
        reply(`${error}`);
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`);
    }
}
break
            

            case 'mascota': {
                let petExist = await createOrGetPet(sender);
                if (petExist.name) return reply(`*No puedes crear una mascota, porque ya cuentas con una, y su nombre es ${petExist.name}! es un lindo ${petExist.type} 😍*`)
                if (!text) return reply(`*Por favor incluye el nombre que deseas darle a tu mascota después del comando, ejemplo:*\n\n- ${prefix + command} Tom`);
                if (text.toLowerCase().startsWith(command)) return reply(`*NO INCLUYAS ESPACIOS ENTRE EL PREFIJO Y EL COMANDO, ASEGURATE DE ENVIAR* _*${prefix + command}*_ *JUNTO.*`);
                const buttons = [
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Gato 😺',
                            id: `${prefix}pet+ ${args[0]} gato ${sender}`
                        }),
                    }, {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Perro 🐶',
                            id: `${prefix}pet+ ${args[0]} perro ${sender}`
                        }),
                    }, {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Pollo 🐣',
                            id: `${prefix}pet+ ${args[0]} pollo ${sender}`
                        }),
                    }, {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Lorito 🦜',
                            id: `${prefix}pet+ ${args[0]} lorito ${sender}`
                        }),
                    }, {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: 'Pingüino 🐧',
                            id: `${prefix}pet+ ${args[0]} pinguino ${sender}`
                        }),
                    }]

                return await sendReplyButton(m.chat, buttons, m, {
                    content: `_*Quieres cuidar a una mascota? 😍*_\n
_Puedes tener un amiguito y cuidar de él, atender sus necesidades como alimentarlo, sacarlo a caminar, jugar con el! 😊_\n
*Es una responsabilidad eh!* 🧐 _si descuidas de el puede perder salud... y si no lo atiendes bien se te puede escapar! 😖_

_*Asi que si estás dispuesto a cargar esa responsabilidad, selecciona el tipo de mascota que desees!*_

⚠️ _*una vez seleccionada tu mascota no podrás cambiar de tipo, asi que escoge con sabiduria*_ ⚠️

*Que mascota deseas cuidar?* 😁`
                });
            }
                break

            case 'pet+': {
                if (!text.includes(sender)) return reply('*Esta acción no te corresponde! 🙂*');
                let petName = args[0];
                let petType = args[1];
                let petOwn = args[2];
                let pet = createOrGetPet(`${petOwn}`, `${petName}`, `${petType}`);
                reply(`*¡🥳 Felicidades, has creado a ${pet.name}, tu nueva mascota!*\n\n_*Para atender a tu amiguito y ver su estado, puedes usar el comando: ${prefix}pet*_`);
            }
                break

            case 'pet': { // Un solo case para manejar las acciones
                const action = args[0]; // El comando de acción (comer, caminar, jugar, estado, dormir)

                switch (action) {
                    case 'comer':
                        const feedMessage = feedPet(sender);
                        await nyanBot2.sendMessage(m.chat, { text: feedMessage }, { quoted: m });
                        break;
                    case 'caminar':
                        const walkMessage = walkPet(sender);
                        await nyanBot2.sendMessage(m.chat, { text: walkMessage }, { quoted: m });
                        break;
                    case 'jugar':
                        const playMessage = playWithPet(sender);
                        await nyanBot2.sendMessage(m.chat, { text: playMessage }, { quoted: m });
                        break;
                    case 'estado':
                        const petInfo = getPetInfo(sender);
                        await nyanBot2.sendMessage(m.chat, { text: petInfo }, { quoted: m });
                        break;
                    case 'dormir':
                        const sleepMessage = sleepPet(sender);
                        await nyanBot2.sendMessage(m.chat, { text: sleepMessage }, { quoted: m });
                        break;
                    case 'notificacion':
                        const petStatus = checkPetStatus(sender);
                        if (petStatus) {
                            await sendReminder(nyanBot2, sender, petStatus);
                        } else {
                            await nyanBot2.sendMessage(m.chat, { text: `No tienes ninguna mascota registrada.` }, { quoted: m });
                        }
                        break;
                    default:
                        await nyanBot2.sendMessage(m.chat, { text: `Acción no reconocida. Usa: comer, caminar, jugar, estado, dormir, notificacion.` }, { quoted: m });
                        break;
                }
            }
                break

            case 'pets':
                const fakeQuoted = {
                    key: {
                        participant: "0@s.whatsapp.net", //usuario
                        remoteJid: "0@s.whatsapp.net", //grupo
                        fromMe: false
                    },
                    message: { conversation: "Aqui encontraras información sobre tu mascota! 🍟" }
                }
                let msgOptions = { userJid: m.chat, quoted: fakeQuoted };
                let media = await prepareWAMessageMedia({ image: { url: "https://cdn-icons-png.flaticon.com/256/6438/6438099.png" } }, { upload: nyanBot2.waUploadToServer })
                let msgL = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                header: {
                                    title: `${date}`,
                                    subtitle: "subtitle",
                                    hasMediaAttachment: true,
                                    imageMessage: media?.imageMessage,
                                },
                                body: { text: "test" },
                                footer: { text: "NyanV2" },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "review_and_pay",
                                        buttonParamsJson: "{\"currency\":\"COP\",\"total_amount\":{\"value\":500000,\"offset\":100},\"reference_id\":\"4PMSGGOW981\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":500000,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"26108774512103632\",\"product_id\":\"26108774512103632\",\"name\":\"Información de tu mascota\",\"amount\":{\"value\":500000,\"offset\":100},\"quantity\":1}]},\"native_payment_methods\":[]}",
                                    }],
                                    messageVersion: 1
                                },
                            }
                        }
                    },
                }, msgOptions)
                await nyanBot2.relayMessage(m.chat, msgL.message, { messageId: msgL.key.id });
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
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                nyanBot2.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`_Menciona el audio al cuál quieres agregarle el efecto con el comando:_\n*${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break			

            case 'buscarsticker': {
		return reply('*EN MANTENIMIENTO*')
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

            case 'addprem':
                if (!isSamu) return reply(mess.bot);

                let userId;
                let timePremium;

                if (m.mentionedJid.length !== 0) {
                    userId = m.mentionedJid[0];
                    timePremium = args[1];
                } else if (m.quoted) {
                    userId = `${m.quoted.sender}`;
                    timePremium = args[0];
                } else {
                    userId = `${text.replace(/[\@\+\s\-\(\)\[\]\{\}]/g, '')}@s.whatsapp.net`;
                    timePremium = args[1];
                }

                if (!userId || !timePremium) {
                    return reply(`_*Uso incorrecto, asegúrate de incluir el tag/número de la persona a quien le darás prémium y por cuánto tiempo...*_
*Ejemplo:* ${prefix + command} @tag 3d\n${prefix + command} +521**** 3d\n
_Sigue el formato de tiempo para cada caso:_\n
- Segundos: *#s*
- Minutos: *#m*
- Horas: *#h*
- Días: *#d*`);
                }

                const { isPremium } = checkPremiumUser(userId);
                if (isPremium) {
                    return reply("*El usuario ya es premium y no se puede añadir nuevamente.*");
                }

                addPremiumUser(userId, timePremium);
                db.data.users[userId].premium = true
                reply("*Se ha añadido al usuario premium!*");
                break

            case 'delprem':
                if (!isSamu) return reply(mess.bot);

                let userToDeleteId;
                if (m.mentionedJid.length !== 0) {
                    userToDeleteId = m.mentionedJid[0];
                } else if (m.quoted) {
                    userToDeleteId = `${m.quoted.sender}`;
                } else {
                    userToDeleteId = `${text.replace(/[\@\+\s\-\(\)\[\]\{\}]/g, '')}@s.whatsapp.net`;
                }

                if (!userToDeleteId) {
                    return reply(`_*Uso incorrecto, asegúrate de incluir el tag/número de la persona a quien le quitarás prémium...*_
*Ejemplo:* ${prefix + command} @tag\n${prefix + command} +521****`);
                }

                const { isPremium: isUserPremium } = checkPremiumUser(userToDeleteId);
                if (!isUserPremium) {
                    return reply("*No se puede eliminar, el usuario no está en la lista de premium.*");
                }

                const deleteResponse = deletePremiumUser(userToDeleteId);
                if (deleteResponse.error) {
                    return reply(deleteResponse.error);
                }
                db.data.users[userToDeleteId].premium = false
                reply("*¡Se ha eliminado al usuario premium!*");
                break

            case 'listprem': case 'premium': {
                const { users } = getAllPremiumUser();
                let txt = `🏆 *USUARIOS PRÉMIUM* 🏆\n\n`;

                for (let userId of users) {
                    const { expired } = getPremiumExpired(userId);
                    const remainingTime = Math.max(expired - Date.now(), 0);
                    const timeRemaining = runtime(Math.floor(remainingTime / 1000));
                    if (remainingTime > 0) {
                        txt += `*Número*: @${userId.split("@")[0]}\n`;
                        txt += `*Expira en*: ${timeRemaining.trim()}\n\n`;
                    } else {
                        txt += `*Número*: @${userId.split("@")[0]}\n`;
                        txt += `*Status*: Expirado\n\n`;
                    }
                }
                await nyanBot2.sendMessage(m.chat, {
                    text: txt,
                    mentions: users
                }, {
                    quoted: m
                });
            }
                break


            case 'wn': case 'stickerwm': case 'take': {
                if (db.data.users[sender].limit < 1) return reply(mess.limit);
                if (db.data.users[sender].limit < 50) return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
                if (!args.join(" ")) return reply(`*Porfavor incluye los datos correctos, tanto como el nombre de paquete y autor para renombrar el sticker, ejemplo:*\n\n${prefix + command} paquete|autor\n\n*Asegurate de incluir el símbolo ${forma1}|${forma1}*`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                try {
                    if (/image/.test(mime)) {
                        let media = await quoted.download()
                        let encmedia = await nyanBot2.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                        useLimit(sender, 50)
                    } else {
                        let media = await quoted.download()
                        let encmedia = await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                        useLimit(sender, 50)
                    }
                } catch (error) {
                    stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
                    reply(`Etiqueta porfavor un sticker, imagen o video!`)
                }
            }
                break

            case 'nobg': case 'sinfondo': {
                if (!quoted) return reply("*Por favor, responde a una imagen para eliminar el fondo*");
                if (db.data.users[sender].limit < 1) return reply(mess.limit);
                if (db.data.users[sender].limit < 50) {
                    return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${db.data.users[sender].limit}!*\n\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de qué manera ganar puntos_`);
                }

                try {
                    nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

                    let media = await nyanBot2.downloadAndSaveMediaMessage(quoted, "samuNoBg");

                    const blob = await removeBackground(media);
                    const buffer = Buffer.from(await blob.arrayBuffer());

                    await nyanBot2.sendMessage(m.chat, {
                        image: buffer,
                        caption: `${forma1}IMAGEN CON FONDO ELIMINADO 🖼️${forma1}\n\n> ${botname}`
                    }, { quoted: m });
                    fs.unlinkSync(media);
                    nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
                    useLimit(sender, 50)
                } catch (error) {
                    nyanBot2.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
                    console.error('Error al procesar la solicitud:', error);
                    reply(`Ocurrió un error al intentar eliminar el fondo de la imagen. Por favor, inténtalo de nuevo.\n${error}`);
                }
            }
                break

            case 'togif': case 'agif':
            case 'tovideo': case 'tovid': case 'avideo':
            case 'aimg': case 'aimagen': case 'toimg': {
                if (!/webp/.test(mime)) return reply(`*Por favor etiqueta un sticker con el comando:* ${prefix + command}`);
                await reply('_*Tu solicitud se está procesando, espera un momento por favor!*_');
                nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                let media = await nyanBot2.downloadAndSaveMediaMessage(quoted, "samuSt");
                if (!fs.existsSync(media)) {
                    return reply('Error: No se pudo descargar el archivo. Asegúrate de que sea un sticker.');
                }
                let metadata = await extractMetadata(media)
                const conversionResult = await webp2mp4File(media);

                if (!conversionResult.status) {
                    return reply(`Error: ${conversionResult.msg}`);
                }
                try {
                    if (command.includes('gif')) {
                        if (!m.quoted.isAnimated) return reply('*Eh...* _asegúrate de que el sticker sea animado, porque no se puede convertir un estático a gif!!_ 😁');
                        await nyanBot2.sendMessage(m.chat, {
                            video: {
                                url: conversionResult.data.url
                            },
                            caption: `*Conversión exitosa! 🍋‍🟩*\n\n_*Información del sticker:*_\n\n*🧩 Pack name:* ${metadata['sticker-pack-name']}\n\n*👤 Pack publisher:* ${metadata['sticker-pack-publisher']}\n\n*🔗 ID del paquete:* ${metadata['sticker-pack-id']}\n> ${botname}`,
                            gifPlayback: true
                        }, {
                            quoted: m
                        });
                    } else if (command.includes('vid')) {
                        if (!m.quoted.isAnimated) return reply('*Eh...* _asegúrate de que el sticker sea animado, porque no se puede convertir un estático a gif!!_ 😁');
                        await nyanBot2.sendMessage(m.chat, {
                            video: {
                                url: conversionResult.data.url
                            },
                            caption: `*Conversión exitosa! 🍋‍🟩*\n\n- _*Información del sticker:*_\n\n*🧩 Pack mame:* ${metadata['sticker-pack-name']}\n\n*👤 Pack publisher:* ${metadata['sticker-pack-publisher']}\n\n*🔗 ID del paquete:* ${metadata['sticker-pack-id']}\n> ${botname}`
                        }, {
                            quoted: m
                        });
                    } else if (command.includes('img')) {
                        if (m.quoted.isAnimated) return reply('*Eh...* _asegúrate de que el sticker no sea animado!!_ 😁');
                        let buffer = await fs.readFileSync(media)
                        nyanBot2.sendMessage(m.chat, {
                            image: buffer,
                            caption: `*Conversión exitosa! 🍋‍🟩*\n\n- _*Información del sticker:*_\n\n*🧩 Pack mame:* ${metadata['sticker-pack-name']}\n\n*👤 Pack publisher:* ${metadata['sticker-pack-publisher']}\n\n*🔗 ID del paquete:* ${metadata['sticker-pack-id']}\n> ${botname}`
                        }, { quoted: m });
                    }
                } catch (err) {
                    return reply(`*Lo siento, ocurrió un error! intenta de nuevo.*\n${err}`)
                }

                nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

                if (fs.existsSync("samuSt.webp")) {
                    fs.unlinkSync("samuSt.webp");
                }
            }
                break

            case 's':
            case 'sticker':
            case 'stiker': {
                let mediaPath;

                if (!quoted || !isMedia) {
                    return reply(`*Por favor, envía o etiqueta una imagen/video/gif usando el comando ${prefix + command}*\n_La duración del video debe estar entre 1-9 segundos._\n\n*Puedes incluir algunas opciones para envio de stickers:*\n- ${prefix + command} 1 _*(para estirar el sticker de forma cuadrada)*_\n- ${prefix + command} 2 _*(para sticker circular)*_\n- ${prefix + command} 3 _*(para sticker en forma de corazón)*_\n- ${prefix + command} 4 _*(para sticker sin fondo)*_\n- ${prefix + command} _*(sin opciones para enviar como está)*_`);
                }

                nyanBot2.sendMessage(m.chat, { react: { text: '🧃', key: m.key } });

                const option = text.trim().split(' ')[0];

                try {
                    if (quoted) {
                        mediaPath = await nyanBot2.downloadAndSaveMediaMessage(quoted, "samuSt");
                        mediaPath = await nyanBot2.downloadAndSaveMediaMessage(m, "samuSt");
                    }
                } catch (err) {
                    console.error('Error al descargar el medio:', err);
                    return reply(`No se pudo descargar el medio: ${err.message}. Intenta de nuevo.`);
                }

                if (!mediaPath) {
                    return reply('No se pudo descargar el medio. Asegúrate de que sea una imagen o video válido.');
                }

                let encmedia;
                const outputFilePath = 'output.webp';

                try {
                    if (/image/.test(mime)) {
                        if (option === '1') {
                            await sharp(mediaPath)
                                .resize(512, 512, {
                                    fit: sharp.fit.fill
                                })
                                .toFile(outputFilePath);
                        } else if (option === '2') {
                            const image = sharp(mediaPath);
                            const { width, height } = await image.metadata();
                            const size = Math.max(width, height);
                            const mask = Buffer.from(`
                    <svg width="${size}" height="${size}">
                        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white" />
                    </svg>
                `);
                            await image
                                .resize(size, size)
                                .composite([{ input: mask, blend: 'dest-in' }])
                                .toFile(outputFilePath);
                        } else if (option === '3') {
                            const heartMask = Buffer.from(`
                    <svg width="512" height="512" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
                    </svg>
                `);
                            await sharp(mediaPath)
                                .resize(512, 512)
                                .composite([{ input: heartMask, blend: 'dest-in' }])
                                .toFile(outputFilePath);
                        } else if (option === '4') {
                            const blob = await removeBackground(mediaPath);
                            const buffer = Buffer.from(await blob.arrayBuffer());
                            encmedia = buffer;
                            await nyanBot2.sendImageAsSticker(m.chat, encmedia, m, { packname: '🥶 S A M U 3 3 0 ©', author: '' });

                            if (fs.existsSync(mediaPath)) {
                                fs.unlinkSync(mediaPath);
                            }
                            return;
                        } else {
                            encmedia = fs.readFileSync(mediaPath);
                            await nyanBot2.sendImageAsSticker(m.chat, encmedia, m, { packname: '🥶 S A M U 3 3 0 ©', author: '' });

                            if (fs.existsSync(mediaPath)) {
                                fs.unlinkSync(mediaPath);
                            }
                            return;
                        }

                        if (fs.existsSync(outputFilePath)) {
                            encmedia = fs.readFileSync(outputFilePath);
                            await nyanBot2.sendImageAsSticker(m.chat, encmedia, m, { packname: '🥶 S A M U 3 3 0 ©', author: '' });

                            if (fs.existsSync(mediaPath)) {
                                fs.unlinkSync(mediaPath);
                            }
                            if (fs.existsSync(outputFilePath)) {
                                fs.unlinkSync(outputFilePath);
                            }
                        } else {
                            return reply('Error al procesar la imagen. No se generó el archivo de salida.');
                        }

                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 11) return reply('*Lo siento pero el vídeo recibido dura más de 10 segundos, solo puedo crear tu Sticker si el vídeo dura menos de 10 segundos! 🙂*')
                        let media = await quoted.download()
                        let encmedia = await nyanBot2.sendVideoAsSticker(m.chat, media, m, { packname: '🥶 S A M U 3 3 0 ©', author: '' })

                        if (fs.existsSync(mediaPath)) {
                            fs.unlinkSync(mediaPath);
                        }
                    } else {
                        return reply(`Tipo de archivo no reconocido. Asegúrate de enviar una imagen o un video.`);
                    }

                } catch (err) {
                    console.error('Error al procesar el medio:', err);
                    return reply(`Ocurrió un error al procesar el medio: ${err.message}. Intenta de nuevo.`);
                }
            }
                break

            case 'actualizar':
            case 'update':
                if (!isSamu) return reply('tu quien eres para decirme que hacer!?🤔')
                exec(`bash update.sh`, (err, stdout) => {
                    if (err) return reply(`${err}`)
                    if (stdout) reply(`🍟 ¬\n> ${stdout}\n\n> *NyanBot-V2*`)
                })
                break

case 'creador': case 'owner':
nyanBot2.sendMessage(from, {
  contacts: {
    contacts: [{
      displayName: `Sa፝֟፝֟mu330 🍄`,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sa፝֟፝֟mu330 🍄;;;\nFN:Sa፝֟፝֟mu330 🍄\nORG:NyanBot-V2 Owner\nTITLE: Developer\nTEL;type=CELL;type=VOICE;waid=5219984907794:+521 998 4990 7794\nTEL;type=WORK;type=VOICE:+521 998 4990 794\nEMAIL:samu330ofc@gmail.com\nADR;type=WORK:;;🔮;;;;\nURL:https://www.samu330.com\nNOTE:NyanBot-2.\nBDAY:2003-10-04\nPHOTO;VALUE=URI:https://mystickermania.com/cdn/stickers/cute/mochi-peach-cat-bread-512x512.png\nEND:VCARD`
    }]
  },
 contextInfo: {
"externalAdReply": {
"renderLargerThumbnail": true,
"mediaType": 1,
"title": `NyanBot-2 © 🪁`,
"body": '',
"thumbnail": await fetchBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqqOuXUnKjRMnJIP4r_b7v3eXQVw2omtOJV6BliBF3dlBVsX3OCi5fPE&s=10')
}
}
}, {
  quoted: m
});
break
		
		
		
	case 'script': case 'code':
                var order = generateWAMessageFromContent(from, proto.Message.fromObject({
                    "orderMessage": {
                        "orderId": "1219264465945127",
                        "thumbnail": fs.readFileSync('./Media/theme/NyanBot.jpg'),
                        "itemCount": 1,
                        "status": "1",
                        "surface": "1",
                        "messageVersion": 1,
                        "message": `*Hola, puedes encontrar al creador en el pedido, la información sobre el SourceCode la encuentras en el catálogo dentro del pedido 😁*`,
                        "orderTitle": " NyanBotV2",
                        "sellerJid": "5219984907794@s.whatsapp.net",
                        "totalCurrencyCode": 'MXN',
                        "token": "AR6Ng13K53KjBI5JQ2NS4l/E+ExOHvZQe3H0YcFbCeqruA==",
                        "sender": sender
                    }
                }), { userJid: from, quoted: m })
                nyanBot2.relayMessage(m.chat, order.message, { messageId: order.key.id })
                break

            case 'xvideos': case 'xxx': case 'porno': case 'xnxxsearch': case 'xnxx': {
		if (db.data.chats[from].antiadult) return reply("*🔞 ESTE CHAT NO PERMITE CONTENIDO SENSIBLE!*")
                if (!text) return reply('*Porfavor incluye junto al comando una solicitud a buscar en _XVideos_ 🔞*');
                nyanBot2.sendMessage(m.chat, { react: { text: '🔥', key: m.key } });

                try {
                    let data = await fg.xnxxSearch(text);

                    const limitedResults = data.result.slice(0, 2);

                    let contents = [];

                    for (let video of limitedResults) {
                        let rD = await fg.xnxxdl(video.link);

                        let content = `◦  *Título*: ${rD.title}\n`;
                        content += `◦  *Duración*: ${rD.duration}\n◦ *Calidad*: ${rD.quality}\n◦ *Tamaño*: ${rD.size}`;

                        contents.push({
                            header: {
                                videoMessage: rD.url_dl,
                                hasMediaAttachment: true,
                            },
                            body: {
                                text: content
                            },
                            nativeFlowMessage: {
                                buttons: [{
                                    name: 'cta_url',
                                    buttonParamsJson: JSON.stringify({
                                        display_text: 'Ver video! 🔥',
                                        url: `${video.link}`
                                    })
                                }]
                            },
                        });
                    }

                    await sendVidCarousel(m.chat, {}, {
                        header: `*🔞 Resultados de búsqueda de xnxx.com*\n`,
                        footer: `Resultados de la búsqueda`,
                        cards: contents
                    });
                } catch (error) {
                    console.error('Error en la búsqueda de Xnxx.com:', error);
                    return reply(`Ocurrió un error al realizar la búsqueda en Xvideos. Intenta nuevamente más tarde.\n${error.message}`);
                }
            }
                break

            case 'xnxxdl': {
		if (db.data.chats[from].antiadult) return reply("*🔞 ESTE CHAT NO PERMITE CONTENIDO SENSIBLE!*")
                nyanBot2.sendMessage(m.chat, { react: { text: '🧃', key: m.key } });
                let v = await fg.xnxxdl(text)
                nyanBot2.sendMessage(m.chat, {
                    video: { url: v.url_dl },
                    fileName: `${v.title}.mp4`,
                    mimeType: 'video/mp4',
                    caption: `- *Título:* ${v.title}\n- *Duración:* ${v.duration}\n- *Calidad:* ${v.quality}\n- *Tamaño:* ${v.size}\n`,
                }, { quoted: m })
            }
                break


            case 'puntos':
                const puntosMsg = `*Hola @${sender.split("@")[0]}, tienes ${db.data.users[sender].limit} puntos*
		
_Para aumentar el número de puntos en tu cuenta, puedes jugar minijuegos, de esta manera se sumarán puntos cada vez que ganes!_
*Para jugar puedes simplemente enviar uno de estos emojis:*

${forma1}⚽ | 🏀 | 🎳 | 🎯 | 🎲 | 🎰${forma1}

*O también juegar a piedra, papel o tijera con el bot enviando los emojis:*

${forma1}🪨 | ✊🏻 | 📄 | 🤚🏻 | ✂️ | ✌🏻${forma1}

*NUEVO JUEGO!! 🎊* ${forma1}Sopa de letras 🍜${forma1}

*Para jugar sopa de letras usa el comando: ${prefix}sopa*

_*Puedes igual recolectar 100 puntos diarios con el comando:*_ ${prefix}claim`

                const paymentDetails = {
                    requestPaymentMessage: {
                        currencyCodeIso4217: "MXN",
                        amount1000: `${db.data.users[sender].limit}` * 1000,
                        requestFrom: m.sender,
                        noteMessage: {
                            extendedTextMessage: {
                                text: puntosMsg,
                                contextInfo: {
                                    mentionedJid: [m.sender]
                                }
                            }
                        },
                        expiryTimestamp: "0",
                        name: 'test',
                        amount: {
                            value: "1000",
                            offset: 1000,
                            currencyCode: "INR"
                        }
                    }
                };

                const relayMessage = {
                    key: {
                        fromMe: false,
                        remoteJid: m.sender
                    },
                    message: paymentDetails
                };

                await nyanBot2.relayMessage(m.chat, relayMessage.message, { messageId: relayMessage.key.id });
                break

            case 'groseria': case 'addbd':
                if (!isSamu) return reply(mess.bot)
                if (!groupAdmins) return reply(mess.admin)
                if (args.length < 1) return reply(`*USO CORRECTO DEL COMANDO*\n\n${prefix + command} [mala palabra].\n*Ejemplo:* ${prefix + command} puchaina`)
                bad.push(q)
                fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
                reply(`> *${q} Se añadio a la lista correctamente!*\n_Para ver la lista de malas palabras usa el comando:_\n${prefix}listbadword`)
                break
            case 'deldb':
                if (!isSamu) return reply(mess.bot)
                if (!groupAdmins) return reply(mess.admin)
                if (args.length < 1) return reply(`*USO CORRECTO DEL COMANDO*\n\n${prefix + command} [mala palabra].\n*Ejemplo:* ${prefix + command} puchaina`)
                bad.splice(q)
                fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
                reply(`> *${q} Se ha eliminado de la lista correctamente!*\n_Para ver la lista de malas palabras usa el comando:_\n${prefix}listbadword`)
                break

            case 'add': case 'añadir':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.adminBot)
                if (!text) return reply(`*¡No has proporcionado el número de la persona a agregar al grupo! Asegurate de incluir el número después del comando!*`)
                let addNum = `${text.replace(/[\@\+\s\-\(\)\[\]\{\}]/g, '')}@s.whatsapp.net`;
                const existsAdd = await nyanBot2.onWhatsApp(addNum);
                if (existsAdd.length > 0 && existsAdd[0].exists) {
                    try {
                        await nyanBot2.groupParticipantsUpdate(m.chat, [addNum], 'add')
                    } catch (err) {
                        reply(`Ah ocurrido un error:\n${err}`)
                    }
                } else {
                    return reply(`_*El número ingresado no existe en WhatsApp, por tal motivo no se puede agregar al grupo! Asegurate de escribir bien el número.*_`)
                }
                break

	    case 'anticall':
		const caseAnticall = require('./cases/anticall');
                await caseAnticall(m, reply, sender, text, isSamu, botNumber);
		break

	    case 'priv':
                const casePriv = require('./cases/privado-permiso');
                await casePriv(m, reply, sender, text, isSamu);
                break

	    case 'nopriv':
                const caseNoPriv = require('./cases/privado-denegado');
                await caseNoPriv(m, reply, sender, text, isSamu);
                break
			
            case 'kick': case 'eliminar':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.adminBot)
                let delNum = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!delNum) return reply('*Por favor etiqueta o menciona algún participante o responde al mensaje de la persona que deseas eliminar!*')
                await nyanBot2.groupParticipantsUpdate(m.chat, [delNum], 'remove')
                break

            case 'promote': case 'admin':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.adminBot)
                let admNum = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!admNum) return reply('*Por favor etiqueta o menciona algún participante o responde al mensaje de la persona que deseas otorgarle admin!*')
                await nyanBot2.groupParticipantsUpdate(m.chat, [admNum], 'promote')
                break

			case 'tourl': {
                nyanBot2.sendMessage(m.chat, { react: { text: '📍', key: m.key } });
		let media = await nyanBot2.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let r = await TelegraPh(media)
                    reply(util.format(r))
                } else if (!/image/.test(mime)) {
                    let r = await UploadFileUgu(media)
                    reply(util.format(r))
                }
                await fs.unlinkSync(media)

            }
            break

            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.adminBot)
                let demNum = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!demNum) return reply('*Por favor etiqueta o menciona algún participante o responde al mensaje de la persona que deseas quitarle admin!*')
                await nyanBot2.groupParticipantsUpdate(m.chat, [demNum], 'demote')
                break

            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'link':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isSamu) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.adminBot)
                let response = await nyanBot2.groupInviteCode(m.chat)
                nyanBot2.sendText(m.chat, `*💬 INFORMACION DEL GRUPO*\n- *NOMBRE :* ${groupMetadata.subject}\n- *CREADOR :* ${groupMetadata.owner !== undefined ? '+' + groupMetadata.owner.split`@`[0] : 'null'}\n- *LINK :* https://chat.whatsapp.com/${response}\n- *MIEMBROS :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break

            case 'limpiar': {
                if (!isSamu) return reply('tu quien eres para decirme que hacer!?🤔')
                fs.readdir("./session", async function (err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-")
                    )
                    console.log(filteredArray.length);
                    let teks = `Se detectó ${filteredArray.length} archivos innecesarios!\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function (e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Fuera basura... 👨🏻‍🦯")
                    await filteredArray.forEach(function (file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("*Sé ha limpiado la session!* ♻️")
                });
            }
                break

            case 'speed': {
                let vel = speed()
                let velP = speed() - vel
                stcReac('run', `_*⚡ Velocidad de ${velP.toFixed(3)} seg.*_\n_Realizando prueba profunda... 🪂_`)
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python3 speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) reply(`${stdout}`)
                    if (stderr.trim()) reply(`${stderr}`)
                }
            }
                break

case 'abrir':
case 'cerrar':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !isSamu) return reply(mess.admin)
                if (!isBotAdmins) return reply(mess.adminBot)
                if (command === 'cerrar') {
                    await nyanBot2.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Grupo Cerrado ❌`))
                } else if (command === 'abrir') {
                    await nyanBot2.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Grupo Abierto 😁`))
                } else {
                    reply(`*Uso ${command}*`)
                }
            break

            case 'gpimg': case 'setppgruop': case 'ppg': {
                if (!m.isGroup) return
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return
                if (!quoted) return
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await nyanBot2.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                var {
                        img
                    } = await generateProfilePicture(medis)
                    await nyanBot2.query({
                        tag: 'iq',
                        attrs: {
			    target: m.chat,
                            to: S_WHATSAPP_NET,
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
	    }
                break

            case 'listbadword': {
                let teks = '> _LISTA DE MALAS PALABRAS_\n\n'
                for (let x of bad) {
                    teks += `- ${x}\n`
                }
                teks += `\n\n*TOTAL DE PALABRAS ${bad.length}*`
                reply(teks)
            }
                break

case 'ban': case 'noban':
if (!isSamu) return reply('tu quien eres para decirme que hacer!?🤔')
if (command == 'ban') {
if (db.data.chats[m.chat].ban) return reply('*Este chat ya esta baneado!*')
db.data.chats[m.chat].ban = true;
reply('*Este chat sé ah baneado!*')
} else if (command == 'noban') {
if (!db.data.chats[m.chat].ban) return reply('*Este chat no esta baneado!*')
db.data.chats[m.chat].ban = false;
reply('*Se ah habilitado este chat!*')
}
break

case 'activar':
case 'desactivar':
case 'on':
case 'off':
case 'enable':
case 'disable': {
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.adminBot);
    if (!isAdmins) return reply(mess.admin);

    const action = command === 'activar' || command === 'on' || command === 'enable'; 
    const optionsMap = {
        arabes: 'restrict',
        bienvenida: 'welcome',
	eventos: 'events',
        badword: 'badword',
        antibot: 'antibot',
        unavista: 'antiviewonce',
        antilink: 'antilink',
        adult: 'antiadult',
        admin: 'adminmode'
    };

    const availableOptions = Object.keys(optionsMap);
    const option = text;
    let feedbackMessage = '';

    if (option === 'arabes') {
        if (action) {
            if (!groupMetadata.joinApprovalMode) {
		await nyanBot2.groupJoinApprovalMode(from, 'on')
		db.data.chats[m.chat].restrict = true;
                return reply(`*[ ✅ Activado ✅ ]*\n*Para un funcionamiento óptimo se activo el modo de aprobación, para evitar números no deseados. Favor de mantener esa configuración activa, en caso de que se desactive, se volverá a activar automáticamente! 🥕*`);
            }
            if (db.data.chats[m.chat].restrict) {
                return reply('*Esta configuración ya está activa.*');
            }
            db.data.chats[m.chat].restrict = true;
            return reply('*Ajuste actualizado, ahora se le prohibirá el acceso a números considerados "FAKE/ARABES"*');
        } else {
            if (!db.data.chats[m.chat].restrict) {
                return reply('*Esta configuración ya está desactivada.*');
            }
            db.data.chats[m.chat].restrict = false;
            return reply('*Ajuste actualizado, ahora se permitirá el acceso a números considerados "FAKE/ARABES", ya puedes desactivar el modo de aprobación*');
        }
    }

    if (!option) {
        if (action) {
            const disabledOptions = availableOptions.filter(opt => !db.data.chats[from][optionsMap[opt]]);
            if (disabledOptions.length === 0) {
                feedbackMessage = `*Todas las opciones ya están activadas.*`;
            } else {
                feedbackMessage = `📍 *Opciones desactivadas que puedes activar:*\n`;
                disabledOptions.forEach(opt => {
                    feedbackMessage += `- ${opt}: ${db.data.chats[from][optionsMap[opt]]} _*(desactivada)*_\n`;
                });
            }
        } else {
            const enabledOptions = availableOptions.filter(opt => db.data.chats[from][optionsMap[opt]]);
            if (enabledOptions.length === 0) {
                feedbackMessage = `*Todas las opciones ya están desactivadas.*`;
            } else {
                feedbackMessage = `📍 *Opciones activadas que puedes desactivar:*\n`;
                enabledOptions.forEach(opt => {
                    feedbackMessage += `- ${opt}: ${db.data.chats[from][optionsMap[opt]]} _*(activada)*_\n`;
                });
            }
        }
        return reply(feedbackMessage);
    }

    if (!optionsMap[option]) {
        feedbackMessage = `*Opción no encontrada. Opciones disponibles:*\n- ${availableOptions.join('\n- ')}`;
        return reply(feedbackMessage);
    }

    if (action) {
        if (db.data.chats[from][optionsMap[option]]) {
            return reply('*Esta configuración ya está activa!*');
        }
        db.data.chats[from][optionsMap[option]] = true;
        feedbackMessage = `📍 La opción *${option}* se ha activado en este chat.`;
    } else {
        if (!db.data.chats[from][optionsMap[option]]) {
            return reply('*Esta configuración ya está desactivada!*');
        }
        db.data.chats[from][optionsMap[option]] = false;
        feedbackMessage = `📍 La opción *${option}* se ha desactivado en este chat.`;
    }

    reply(feedbackMessage);
}
break

            case 'addsticker': {
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

            case 'liststicker': {
                let teks = '*Lista de Stickers*\n\n'
                for (let x of Stickers) {
                    teks += `- ${x}\n`
                }
                teks += `\n\n*Total de Stickers : ${Stickers.length}*`
                reply(teks)
            }
                break

            case 'delsticker': {
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

            case 'bc':
            case 'broadcast': {
                if (!isSamu) return reply(mess.bot)
                if (!text) return reply('e.... *y el mensaje a enviar? jeje*')
                let bcText = `${text}\n\n\n\nDate: ${date} ${time}`
                for (let i of Object.keys(global.db.data.users)) {
                    await sleep(1500)
                    if (/image/.test(mime)) {
                        let media = await quoted.download()
                        await nyanBot2.sendMessage(i, {
                            image: media,
                            caption: bcText,
                            contextInfo: {
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": `☃️ ${botname} 🏰`,
                                    "body": '¡Este mensaje ha sido enviado masivamente a cada chat registrado en lista! ⚠️',
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ``,
                                    "thumbnail": await fetchBuffer('https://www.shutterstock.com/shutterstock/videos/3537518985/thumb/1.jpg?ip=x480'),
                                    "sourceUrl": 'https://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1'
                                }
                            }
                        })
                    } else if (/video/.test(mime)) {
                        let media = await quoted.download()
                        await nyanBot2.sendMessage(i, {
                            video: media,
                            caption: bcText,
                            contextInfo: {
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": `☃️ ${botname} 🏰`,
                                    "body": '¡Este mensaje ha sido enviado masivamente a cada chat registrado en lista! ⚠️',
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ``,
                                    "thumbnail": await fetchBuffer('https://www.shutterstock.com/shutterstock/videos/3537518985/thumb/1.jpg?ip=x480'),
                                    "sourceUrl": 'https://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1'
                                }
                            }
                        })
                    } else if (text) {
                        await nyanBot2.sendMessage(i, {
                            text: bcText,
                            contextInfo: {
                                "externalAdReply": {
                                    "showAdAttribution": true,
                                    "containsAutoReply": true,
                                    "title": `☃️ ${botname} 🏰`,
                                    "body": '¡Este mensaje ha sido enviado masivamente a cada chat registrado en lista! ⚠️',
                                    "previewType": "PHOTO",
                                    "thumbnailUrl": ``,
                                    "thumbnail": await fetchBuffer('https://www.shutterstock.com/shutterstock/videos/3537518985/thumb/1.jpg?ip=x480'),
                                    "sourceUrl": 'https://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1'
                                }
                            }
                        })
                    }
                }
                reply(`*Se finalizo el envio de mensajes a* ${Object.keys(global.db.data.users).length} Chats`)
            }
                break

case 'run': case 'runtime':
await stcReac('run', `*${runtime(process.uptime())}*`)
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
*🔮 RUNTIME* : ${runtime(process.uptime())}

*💻 SERVIDOR:*\n
_*RAM:*_ ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
${readmore}
_*Memoria NodeJS*_\n
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_*Uso total del CPU*_\n
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_*CPU Core(s) Usage (${cpus.length} Core CPU)*_\n
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(`${respon}`)
                stcReac('run', `_*⚡ Velocidad:*_ ${latensi.toFixed(3)} _Seg._`)
            }

                break

            default:
if (isCmd && budy.startsWith('.')) {
    if (!command) return;
    const allCommands = Object.values(categories)
        .flat()
        .map(cmdObj => cmdObj.command.toLowerCase());

    if (!allCommands.includes(command)) {
        const similarities = allCommands.map(availableCommand => {
            const similarity = calculateSimilarity(command, availableCommand);
            return { availableCommand, similarity };
        }).filter(item => item.similarity > 0.5);

        let response = `❌ *Al parecer el comando "${command}" no está disponible o quizá lo escribiste mal!*\n\nA continuación te muestro unas sugerencias de comandos parecidos y que probablemente quisiste usar! 😁\n\n`;

        if (similarities.length > 0) {
            const suggestions = similarities.map(item => `- *${item.availableCommand}* _(Similitud: ${Math.round(item.similarity * 100)}%)_`).join('\n');
            response += suggestions;
            reply(response);
        } else {
            return reply(`*El comando "${command}" no existe o está mal escrito.*\n_*Para ver la lista de comandos escribe:*_ ${prefix}menu\n\n_*Y si deseas una explicación más detallada de cada comando escribe:*_ ${prefix}ayuda`);
        }

        return;
    }
}
			
                if (budy == '🎯') {
		    if (cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
			    return nyanBot2.sendMessage(m.chat, {react: {text: '😡', key: m.key}});
		    } else if (!isSamu) {
			    cache.set(m.sender, 1);
		    }
                    let totalTiro = ["failTiro", "tiro10p", "tiro30p", "tiro50p", "tiro70p", "tiroWin"]
                    const tiroStickers = Math.floor(Math.random() * totalTiro.length)
                    let puntos = 0;
                    let msgTiro = 'Puntos Ganados:'
                    switch (totalTiro[tiroStickers]) {
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
			    nyanBot2.sendMessage(m.chat, {react: {text: '🎉', key: m.key}});
                            msgTiro = '🎉¡Premio mayor! Puntos:'
                            break
                        default:
                            puntos = 0;
                            msgTiro = 'Has fallado el tiro! 😞'
                    }
                    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/tiro/${totalTiro[tiroStickers]}.webp`) }, {
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
                        }
                    })
                }
                if (budy == '🎳') {
		    if (cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
			    return nyanBot2.sendMessage(m.chat, {react: {text: '😡', key: m.key}});
		    } else if (!isSamu) {
			    cache.set(m.sender, 1);
		    }
                    let totalBolo = ["boloFail", "bolo10", "bolo20", "bolo60", "bolo80", "boloWin"]
                    const boloStickers = Math.floor(Math.random() * totalBolo.length)
                    let puntos = 0;
                    let msgBolo = 'Puntos Ganados:'
                    switch (totalBolo[boloStickers]) {
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
			    nyanBot2.sendMessage(m.chat, {react: {text: '🎉', key: m.key}});
                            msgBolo = '🎉¡Lechusa 🦉! o como era?🤔 Puntos:'
                            break
                        default:
                            puntos = 0;
                            msgBolo = 'Has fallado el tiro! 😞'
                    }
                    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/bolo/${totalBolo[boloStickers]}.webp`) }, {
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
                        }
                    })
                }
                if (budy == '⚽') {
		    if (cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
			    return nyanBot2.sendMessage(m.chat, {react: {text: '😡', key: m.key}});
		    } else if (!isSamu) {
			    cache.set(m.sender, 1);
		    }
                    let footTiro = ["footFail", "footPoste", "foot50", "foot75", "foot100"]
                    const footStickers = Math.floor(Math.random() * footTiro.length)
                    let puntos = 0;
                    let msgFoot = 'Puntos Ganados:'
                    switch (footTiro[footStickers]) {
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
			    nyanBot2.sendMessage(m.chat, {react: {text: '🎉', key: m.key}});
                            msgTiro = '🎉¡Premio mayor! Puntos:'
                            break
                        default:
                            puntos = 0;
                            msgFoot = 'Uff! te la volaste pai 😞 0 puntos!'
                    }
                    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/foot/${footTiro[footStickers]}.webp`) }, {
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
                        }
                    })
                }
                if (budy == '🏀') {
		    if (cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
			    return nyanBot2.sendMessage(m.chat, {react: {text: '😡', key: m.key}});
		    } else if (!isSamu) {
			    cache.set(m.sender, 1);
		    }
                    let baskTiro = ["baskFail", "baskFail2", "baskFail3", "bask50", "bask100"]
                    baskStickers = Math.floor(Math.random() * baskTiro.length)
                    let puntos = 0;
                    let msgbask = 'Puntos Ganados:'
                    switch (baskTiro[baskStickers]) {
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
			    nyanBot2.sendMessage(m.chat, {react: {text: '🎉', key: m.key}});
                            msgbask = '🎉¡Excelente tiro! 🏀 Puntos:'
                            break
                    }
                    db.data.users[sender].limit += puntos
                    let amount1000 = puntos * 1000;
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/bask/${baskTiro[baskStickers]}.webp`) }, {
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
                        }
                    })
                }
                if (budy == '🎲') {
		    if (cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
			    return nyanBot2.sendMessage(m.chat, {react: {text: '😡', key: m.key}});
		    } else if (!isSamu) {
			    cache.set(m.sender, 1);
		    }
                    let dadoTiro = ["dado1", "dado2", "dado3", "dado4", "dado5", "dado6"]
                    const dadoStickers = Math.floor(Math.random() * dadoTiro.length)
                    let puntos = 0;
                    let msgDado = 'Puntos Ganados:'
                    switch (dadoTiro[dadoStickers]) {
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
                    nyanBot2.sendMessage(from, { sticker: fs.readFileSync(`./Media/sticker/dado/${dadoTiro[dadoStickers]}.webp`) }, {
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
                        }
                    })
                }

                if (budy == '🎰') {
		    if (cache.has(m.sender) && cache.get(m.sender) === 1 && !isSamu) {
			    return nyanBot2.sendMessage(m.chat, {react: {text: '😡', key: m.key}});
		    } else if (!isSamu) {
			    cache.set(m.sender, 1);
		    }
                    const frutas = ["🍐", "🍎", "🍌", "🍒", "🍇"];
                    const filaGanadora = Math.random() < 0.5 ? frutas[Math.floor(Math.random() * frutas.length)] : null;
                    const resultado = [
                        frutas[Math.floor(Math.random() * frutas.length)],
                        frutas[Math.floor(Math.random() * frutas.length)],
                        frutas[Math.floor(Math.random() * frutas.length)],
                        filaGanadora ? filaGanadora : frutas[Math.floor(Math.random() * frutas.length)],
                        filaGanadora ? filaGanadora : frutas[Math.floor(Math.random() * frutas.length)],
                        filaGanadora ? filaGanadora : frutas[Math.floor(Math.random() * frutas.length)],
                        frutas[Math.floor(Math.random() * frutas.length)],
                        frutas[Math.floor(Math.random() * frutas.length)],
                        frutas[Math.floor(Math.random() * frutas.length)],
                    ];

                    let puntos = 0;
                    let msgSlot = `> ⎽⎽⎽⎽⎽⎽⎽⏠⎽⎽⎽⎽⎽⎽⎽┃
>   𝐺𝑎𝑚𝑒 𝑆𝑙𝑜𝑡   ┃
> ⎺⎺⎺⎺⎺⎺⎺⏡⎺⎺⎺⎺⎺⎺⎺┃\n
${forma1}╭────▵────╮${forma1}
${forma1}│${resultado[0]}│${resultado[1]}│${resultado[2]}│${forma1}
${forma1}├────▵────┤${forma1}
~${forma1}│${resultado[3]}│${resultado[4]}│${resultado[5]}│${forma1}~
${forma1}├────▵────┤${forma1}
${forma1}│${resultado[6]}│${resultado[7]}│${resultado[8]}│${forma1}
${forma1}╰────▵────╯${forma1}\n\n`;

                    if (resultado[3] === resultado[4] && resultado[4] === resultado[5]) {
                        switch (resultado[3]) {
                            case "🍐":
                                puntos = 50;
                                msgSlot += '*¡Ganaste 50 puntos con 🍐!* 🎉';
                                break;
                            case "🍎":
                                puntos = 70;
                                msgSlot += '*¡Ganaste 70 puntos con 🍎!* 🎉';
                                break;
                            case "🍌":
                                puntos = 100;
				nyanBot2.sendMessage(m.chat, {react: {text: '🎉', key: m.key}});
                                msgSlot += '🎉 *¡Excelente! Ganaste 100 puntos con 🍌!* 🎉';
                                break;
                            case "🍒":
                                puntos = 80;
                                msgSlot += '*¡Ganaste 80 puntos con 🍒!* 🎉';
                                break;
                            case "🍇":
                                puntos = 60;
                                msgSlot += '*¡Ganaste 60 puntos con 🍇!* 🎉';
                                break;
                        }
                    } else {
                        msgSlot += '*Suerte la próxima!* ☃️';
                    }

                    db.data.users[sender].limit += puntos;
                    nyanBot2.sendMessage(from, { text: msgSlot }, { quoted: m });
                }

                const emojis = {
                    piedra: ['🪨', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿', '✊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '👊'],
                    papel: ['📄', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿', '🤚'],
                    tijera: ['✂️', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', '✌️']
                };

                if (Object.values(emojis).flat().includes(budy)) {
                    let userChoice;

                    for (const [key, value] of Object.entries(emojis)) {
                        if (value.includes(budy)) {
                            userChoice = key;
                            break;
                        }
                    }

                    const choices = ['piedra', 'papel', 'tijera'];
                    const botChoice = choices[Math.floor(Math.random() * choices.length)];

                    let resultMessage = '';
                    let puntos = 0;

                    if (userChoice === botChoice) {
                        resultMessage = "¡Es un empate! 🤝";
                    } else if (
                        (userChoice === 'piedra' && botChoice === 'tijera') ||
                        (userChoice === 'papel' && botChoice === 'piedra') ||
                        (userChoice === 'tijera' && botChoice === 'papel')
                    ) {
                        puntos = 50;
                        resultMessage = `¡Felicidades! 🎉 Has ganado 50 puntos.`;
                    } else {
                        const lossMessages = [
                            `¡Uy! Has perdido 😢. ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
                            `¡Qué pena! 😭 Has perdido. ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
                            `¡Ja! Te ganó un bot 🤷‍♂️ ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
                            `¡Te gané xD! 😩 ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`,
                            `¡Perdiste! 😬 ${botChoice.charAt(0).toUpperCase() + botChoice.slice(1)} gana a ${userChoice}.`
                        ];
                        resultMessage = lossMessages[Math.floor(Math.random() * lossMessages.length)];
                    }

                    db.data.users[sender].limit += puntos;

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
                            return;
                    }

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
                    const emojis = ['🌮', '❤️', '🐡', '🪅', '🔥', '🦞', '🍟', '🪀', '🌺', '🍋‍🟩'];
                    let emojiIndex = 0;
                    const sendReaction = () => {
                        nyanBot2.sendMessage(m.chat, { react: { text: emojis[emojiIndex], key: m.key } });
                        emojiIndex = (emojiIndex + 1) % emojis.length;
                    };

                    const intervalId = setInterval(sendReaction, 1000);

                    setTimeout(() => clearInterval(intervalId), 11000);
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
                    nyanBot2.copyNForward(m.chat, msgs[budy.toLowerCase()], true, { quoted: m })
                }
        }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
        nyanBot2.sendMessage("5219984907794@s.whatsapp.net", {
            text: "Hello developer, there seems to be an error, please fix it " + util.format(e),
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        })
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
