require('./settings')
const { default: makeWASocket } = require("@whiskeysockets/baileys")
const { uncache, nocache } = require('./lib/loader')
const { color } = require('./lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./lib/lowdb')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/samufuncs')
const { getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@whiskeysockets/baileys")

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(new JSONFile(`src/database.json`))

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    database: {},
    chats: {},
    game: {},
    settings: {},
    message: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
   if (global.db.data) await global.db.write()
}, 30 * 1000)

require('./NyanBot.js')
nocache('../NyanBot.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./main.js')
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

//------------------------------------------------------
const startNyanBot = async () => {
    try {
        let { version, isLatest } = await fetchLatestBaileysVersion();
        const { state, saveCreds } = await useMultiFileAuthState('./session');
        const msgRetryCounterCache = new NodeCache();

        const nyanBot = makeWASocket({
            logger: pino({ level: 'silent' }),
            printQRInTerminal: true,
            browser: Browsers.windows('Firefox'),
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
            },
            markOnlineOnConnect: true,
            generateHighQualityLinkPreview: true,
            msgRetryCounterCache,
            getMessage: async (key) => {
                let jid = jidNormalizedUser(key.remoteJid);
                let msg = await store.loadMessage(jid, key.id);
                return msg?.message || "";
            },
        });

        nyanBot.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
                console.log('Conexión cerrada debido a', lastDisconnect.error, ', reconectando', shouldReconnect);
                if (shouldReconnect) {
                    startNyanBot(); 
                }
            } else if (connection === 'open') {
                console.log('Conexión abierta');
            }
        });

    } catch (error) {
        console.error('Error al iniciar el bot:', error);
    }
};

/*nyanBot2.ev.on('connection.update', async (update) => {
    const {
        connection,
        lastDisconnect
    } = update
try{
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                startNyanBot()
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                startNyanBot();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                startNyanBot();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                startNyanBot()
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
                startNyanBot();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                startNyanBot();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                startNyanBot();
            } else nyanBot2.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
            console.log(color(`\n🪅 Conectando...`, 'yellow'))
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            console.log(color(` `,'magenta'))
            console.log(color(`✅ Conectado a => ` + JSON.stringify(nyanBot2.user, null, 2), 'yellow'))
            await delay(1999)
            console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
            console.log(color(`< ================================================== >`, 'cyan'))
            console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
            await delay(1000 * 2) 
        }
    
} catch (err) {
      console.log('Error in Connection.update '+err)
      startNyanBot();
    }
})*/
nyanBot2.ev.on('creds.update', saveCreds)
// nyanBot2.ev.on("messages.upsert",  () => { })
//------------------------------------------------------

//farewell/welcome
nyanBot2.ev.on('group-participants.update', async (anu) => {
    if (global.welcome) {
        console.log(anu);
        try {
            let metadata = await nyanBot2.groupMetadata(anu.id);
            let participants = anu.participants;
            const countryData = require('./src/country.json');

            for (let num of participants) {
                try {
                    ppuser = await nyanBot2.profilePictureUrl(num, 'image');
                } catch (err) {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
                }
                
                try {
                    ppgroup = await nyanBot2.profilePictureUrl(anu.id, 'image');
                } catch (err) {
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
                }

                const phoneNumber = num.replace(/^\+/, '');
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

                const members = metadata.participants.length;
                const time = moment.tz('America/Cancun').format('HH:mm:ss');
                const date = moment.tz('America/Cancun').format('DD/MM/YYYY');

                if (anu.action == 'add') {
                    let WlcBody = `> *Hola* @${num.split("@")[0]}\n_*Bienvenido al grupo*_\n${metadata.subject}\n\nEres el participante Nº.: ${members}\nHora/Fecha de ingreso : ${time} ${date}`;
                    
                    if (countryInfo) {
                        WlcBody += `\n\n_*Tu info:*_\n*País:* ${countryInfo.name} ${countryInfo.emoji}\n*Código:* ${countryInfo.code}`;
                    }

                    nyanBot2.sendMessage(anu.id, {
                        text: WlcBody,
                        contextInfo: {
                            mentionedJid: [num],
                            "externalAdReply": {
                                "showAdAttribution": true,
                                "containsAutoReply": true,
                                "title": `${global.botname}`,
                                "body": `${ownername}`,
                                "previewType": "PHOTO",
                                "thumbnailUrl": ``,
                                "thumbnail": await getBuffer(ppuser),
                                "sourceUrl": `${wagc}`
                            }
                        }
                    });
                } else if (anu.action == 'remove') {
                    let WlcBody = `*Sa ah salido* @${num.split("@")[0]}\n> a las ${time} del ${date}`;
                    
                    if (countryInfo) {
                        WlcBody += `\n\n*País:* ${countryInfo.name} ${countryInfo.emoji}\n*Código:* ${countryInfo.code}`;
                    }

                    nyanBot2.sendMessage(anu.id, {
                        text: WlcBody,
                        contextInfo: {
                            mentionedJid: [num],
                            "externalAdReply": {
                                "showAdAttribution": true,
                                "containsAutoReply": true,
                                "title": `${global.botname}`,
                                "body": `${ownername}`,
                                "previewType": "PHOTO",
                                "thumbnailUrl": ``,
                                "thumbnail": await getBuffer(ppuser),
                                "sourceUrl": `${wagc}`
                            }
                        }
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
});
    //autostatus view
        nyanBot2.ev.on('messages.upsert', async chatUpdate => {
            if (global.antiswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await nyanBot2.readMessages([mek.key]) }
            }
    })
    //admin event
    nyanBot2.ev.on('group-participants.update', async (anu) => {
        if (global.adminevent){
console.log(anu)
try {
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await nyanBot2.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await nyanBot2.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
 if (anu.action === 'promote') {
const time = moment.tz('America/Cancun').format('HH:mm:ss')
const date = moment.tz('America/Cancun').format('DD/MM/YYYY')
let userNumber = num
WlcBody = `@${userNumber.split("@")[0]}, Has sido promovido a *ADMINISTRADOR*`
   nyanBot2.sendMessage(anu.id,
 { text: WlcBody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": Wlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action === 'demote') {
const time = moment.tz('America/Cancun').format('HH:mm:ss')
const date = moment.tz('America/Cancun').format('DD/MM/YYYY')
let userNumber = num
WlcBody = `@${userNumber.split("@")[0]}, Has sido degradado de la administración!`
nyanBot2.sendMessage(anu.id,
 { text: WlcBody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": Lft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
}
})

// detect group update
        nyanBot2.ev.on("groups.update", async (json) => {
            if (global.groupevent) {
            try {
ppgroup = await nyanBot2.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
            console.log(json)
            const res = json[0]
            if (res.joinApprovalMode == false) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nCualquier persona puede entrar al grupo!!`,
                })
            } else if (res.joinApprovalMode == true) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nPara poder entrar al grupo se requerirá aprobación de los administradores!!`,
                })
            } else if (res.memberAddMode == false) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nAhora solo los administradores pueden agregar personas al grupo!!`,
                })
            } else if (res.memberAddMode == true) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nAhora todos pueden agregar personas al grupo!!`,
                })
            } else if (res.announce == true) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nEl grupo ha sido cerrado, solo los administradores podrán enviar mensajes!`,
                })
            } else if (res.announce == false) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nEl grupo sé ha abierto, ahora todos podrán enviar mensajes!`,
                })
            } else if (res.restrict == true) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nLa información del grupo ha sido restringida para que solo administradores puedan editar!`,
                })
            } else if (res.restrict == false) {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\nLa configuración de edición de información del grupo ha sido habilitada para que todos la puedan editar!`,
                })
            } else if(!res.desc == ''){
                await sleep(2000)
                nyanBot2.sendMessage(res.id, { 
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\n*La descripción del grupo ha cambiado a:*\n\n${res.desc}`,
                })
      } else {
                await sleep(2000)
                nyanBot2.sendMessage(res.id, {
                    text: `> *ACTUALIZACION DE CONFIGURACION DE GRUPO*\n\n*El nombre del grupo ha cambiado a*\n\n*${res.subject}*`,
                })
            } 
            }
        })
            
    nyanBot2.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!nyanBot2.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('Nyan') && mek.key.id.length === 16) return
            if (mek.key.id.startsWith('BAE5')) return
            m = smsg(nyanBot2, mek, store)
            require("./NyanBot")(nyanBot2, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

   
    nyanBot2.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    nyanBot2.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = nyanBot2.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    nyanBot2.getName = (jid, withoutContact = false) => {
        id = nyanBot2.decodeJid(jid)
        withoutContact = nyanBot2.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = nyanBot2.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === nyanBot2.decodeJid(nyanBot2.user.id) ?
            nyanBot2.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

nyanBot2.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    let list = []
    for (let i of kon) {
        list.push({
            displayName: await nyanBot2.getName(i),
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await nyanBot2.getName(i)}\nFN:${await nyanBot2.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
        })
    }
    nyanBot2.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

    nyanBot2.public = true

 nyanBot2.serializeM = (m) => smsg(nyanBot2, m, store)

    nyanBot2.sendText = (jid, text, quoted = '', options) => nyanBot2.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    nyanBot2.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await nyanBot2.sendMessage(jid, {
            image: buffer,
            caption: caption,
            ...options
        }, {
            quoted
        })
    }
    nyanBot2.sendTextWithMentions = async (jid, text, quoted, options = {}) => nyanBot2.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    nyanBot2.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await nyanBot2.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

nyanBot2.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await nyanBot2.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    nyanBot2.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    nyanBot2.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await nyanBot2.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
    
    nyanBot2.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return nyanBot2.sendMessage(jid, { poll: { name, values, selectableCount }}) }

nyanBot2.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
            
    nyanBot2.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    return nyanBot2
    } catch (e) {
    console.log(e)
}
    }

startNyanBot()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log(err)
})
