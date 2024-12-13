require('./settings')
const {
    default: makeWASocket
} = require("@whiskeysockets/baileys")
const {
    uncache,
    nocache
} = require('./lib/loader')
const {
    color
} = require('./lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const {
    Boom
} = require('@hapi/boom')
const {
    Low,
    JSONFile
} = require('./lib/lowdb')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const canvaImg = require('./lib/canvaImg.js')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
} = require('./lib/exif')
const {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetch,
    await,
    sleep,
    reSize
} = require('./lib/samufuncs')
const {
    getAggregateVotesInPollMessage,
    delay,
    PHONENUMBER_MCC,
    makeCacheableSignalKeyStore,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    Browsers
} = require("@whiskeysockets/baileys")

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
    if (global.db.READ) return new Promise((resolve) => setInterval(function() {
        (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)
    }, 1 * 1000))
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
let phoneNumber = "5219984907794"
let owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const startNyanBot = async () => {
    try {
        let {
            version,
            isLatest
        } = await fetchLatestBaileysVersion()
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./session')
        const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
        const nyanBot2 = makeWASocket({
            logger: pino({
                level: 'silent'
            }),
            printQRInTerminal: !pairingCode, // popping up QR in terminal log
            browser: Browsers.windows('Firefox'),
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, pino({
                    level: "fatal"
                }).child({
                    level: "fatal"
                })),
            },
            markOnlineOnConnect: true, // set false for offline
            generateHighQualityLinkPreview: true,
            getMessage: async (key) => {
                let jid = jidNormalizedUser(key.remoteJid)
                let msg = await store.loadMessage(jid, key.id)

                return msg?.message || ""
            },
            msgRetryCounterCache, // Resolve waiting messages
            defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
        })

        store.bind(nyanBot2.ev)

        // login use pairing code
        // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
        if (pairingCode && !nyanBot2.authState.creds.registered) {
            if (useMobile) throw new Error('Cannot use pairing code with mobile api')

            let phoneNumber
            setTimeout(async () => {
                let code = await nyanBot2.requestPairingCode("5219984907794")
                code = code?.match(/.{1,4}/g)?.join("-") || code
                console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
            }, 3000)
        }

        nyanBot2.ev.on('connection.update', async (update) => {
            const {
                connection,
                lastDisconnect
            } = update
            try {
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
                    console.log(color(` `, 'magenta'))
                    console.log(color(`✅ Conectado a => ` + JSON.stringify(nyanBot2.user, null, 2), 'yellow'))
                    await delay(1999)
                    console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
                    console.log(color(`< ================================================== >`, 'cyan'))
                    console.log(color(`${themeemoji} WA NUMBER: ${owner}`, 'magenta'))
                    console.log(color(`${themeemoji} CREDIT: ${wm}\n`, 'magenta'))
                    await delay(1000 * 2)
                }

            } catch (err) {
                console.log('Error in Connection.update ' + err)
                startNyanBot();
            }
        })
        nyanBot2.ev.on('creds.update', saveCreds)
        // nyanBot2.ev.on("messages.upsert",  () => { })
        //------------------------------------------------------

        //farewell/welcome
        nyanBot2.ev.on('group-participants.update', async (anu) => {
            if (global.DATABASE.data.chats[anu.id].welcome) {
                console.log(anu);
                try {
                    let metadata = await nyanBot2.groupMetadata(anu.id);
                    let participants = anu.participants;
                    const countryData = require('./src/country.json');

                    let ppuser;
                    let ppgroup;
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

                        const ppCanvas = await canvaImg.createWelcomeImage(ppuser);
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

                        const adminCount = metadata.participants.filter(participant => participant.admin).length;
                        const ephemeralDuration = metadata.ephemeralDuration ? metadata.ephemeralDuration / 86400 : null;
                        const members = metadata.participants.length;
                        const time = moment.tz('America/Cancun').format('HH:mm:ss');
                        const date = moment.tz('America/Cancun').format('DD/MM/YYYY');

                        if (anu.action == 'add') {
                            let WlcBody = `> *Hola* @${num.split("@")[0]}\n\nEres el participante Nº.: ${members}\nHora/Fecha de ingreso : ${time} | ${date}\n`;

                            WlcBody += `\n*Configuraciones del Grupo 👉🏻* ${readmore}\n\n`;
                            WlcBody += `🔔 Bienvenida: ${global.DATABASE.data.chats[anu.id].welcome ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `🚫 Malas Palabras: ${global.DATABASE.data.chats[anu.id].badword ? 'No permitido' : 'Permitido'}\n`;
                            WlcBody += `🤖 AntiBots: ${global.DATABASE.data.chats[anu.id].antibot ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `👁️ Vista Una Vez: ${global.DATABASE.data.chats[anu.id].antiviewonce ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `🔗 Antilink: ${global.DATABASE.data.chats[anu.id].antilink ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `🔞 Antiadultos: ${global.DATABASE.data.chats[anu.id].antiadult ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `🚫 Chat ban: ${global.DATABASE.data.chats[anu.id].ban ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `🛡️ Modo Admin: ${global.DATABASE.data.chats[anu.id].adminmode ? 'Activa' : 'Desactivada'}\n`;
                            WlcBody += `⏳ Duración Efímera: ${ephemeralDuration ? `${ephemeralDuration} días` : 'Desactivada'}\n`;
                            WlcBody += `👥 Administradores: ${adminCount} ${adminCount > 1 ? 'administradores' : 'administrador'}`;

                            nyanBot2.sendMessage(anu.id, {
                                text: WlcBody,
                                contextInfo: {
                                    mentionedJid: [num],
                                    externalAdReply: {
                                        renderLargerThumbnail: true,
                                        mediaType: 1,
                                        title: `👋🏻 Bienvenido al grupo ${metadata.subject}`,
                                        body: ``,
                                        thumbnail: await reSize(ppCanvas, 600, 315),
                                        previewType: "NONE",
                                        sourceUrl: 'https://chat.whatsapp.com/GtG0Q6rBVTTGAz8GmfS3e1',
                                    }
                                }}, { quoted: {
                                    key: {
                                        remoteJid: anu.id,
                                        fromMe: false,
                                        participant: num
                                    },
                                    message: {
                                        imageMessage: {
                                            jpegThumbnail: await reSize(ppgroup, 300, 300),
                                            caption: `*Hola, soy de ${countryInfo.name}* _(${countryInfo.code})_ ${countryInfo.emoji}`
                                        }
                                    }}
                            });
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        });


//join-request antiArabes by Samu330
////////////////////////////////////
/*👑*/        nyanBot2.ev.on('group.join-request', async (requestJoin) => {
/*👑*/            console.log(requestJoin)
/*👑*/            let metadata = await nyanBot2.groupMetadata(requestJoin.id)
/*👑*/            const fakeArab = ['91', '92', '222', '93', '265', '61', '62', '966', '229', '40', '49', '20', '963', '967', '234', '210', '212'];
/*👑*/            if (global.DATABASE.data.chats[requestJoin.id].restrict) {
/*👑*/                const userNumber = requestJoin.participant.split('@')[0];
/*👑*/                const shouldReject = fakeArab.some(prefixArab => userNumber.startsWith(prefixArab));
/*👑*/                if (shouldReject) {
/*👑*/                    console.log(`Aprobación denegada a ${requestJoin.participant}`)
/*👑*/                    await nyanBot2.groupRequestParticipantsUpdate(requestJoin.id, [requestJoin.participant], "reject");
/*👑*/                } else {
/*👑*/                    await nyanBot2.groupRequestParticipantsUpdate(requestJoin.id, [requestJoin.participant], "approve");
/*👑*/                }
/*👑*/            }
/*👑*/        })
/*👑*/
/*👑*/        nyanBot2.ev.on("groups.update", async (arabsOn) => {
/*👑*/            let res = arabsOn[0]
/*👑*/            if (res.joinApprovalMode == false) {
/*👑*/                if (global.DATABASE.data.chats[res.id].restrict) {
/*👑*/                    nyanBot2.sendMessage(res.id, {
/*👑*/                        text: `*Se desactivó la aprobación de miembros, pero la función para denegar el acceso a números prohibidos está activa, por lo tanto el modo de aprobación se activará de nuevo!!*\n
> _*Si deseas deshabilitar el modo de aprobación, primero desactiva la función antiArabes con el comando correspondiente!!!*_ ⚠️`,
/*👑*/                    })
/*👑*/                    await nyanBot2.groupJoinApprovalMode(res.id, 'on')
/*👑*/               }
/*👑*/            }
/*👑*/        })
////////////////////////////////////

//AntiCalls reject By Samu330
////////////////////////////////////
/*👑*/        nyanBot2.ev.on('call', async (callDetec) => {
/*👑*/            if (global.DATABASE.data.settings[nyanBot2.decodeJid(nyanBot2.user.id)].anticall) {
/*👑*/                console.log(callDetec)
/*👑*/                for (let callStatus of callDetec) {
/*👑*/                    if (callStatus.isGroup == false) {
/*👑*/                        if (callStatus.status == "offer") {
/*👑*/                            await nyanBot2.sendMessage(callStatus.from, {
/*👑*/                                text: `*Lo siento @${callStatus.from.split('@')[0]}*\nLas llamadas de ${callStatus.isVideo ? `*video*` : `*audio*` } estan bloqueadas 🚫!\n\n> AutoBlockCall For ${nyanBot2.user.name}!`,
/*👑*/                                contextInfo: {
/*👑*/                                    mentionedJid: [callStatus.from],
/*👑*/                                    "externalAdReply": {
/*👑*/                                        "showAdAttribution": true,
/*👑*/                                        "containsAutoReply": true,
/*👑*/                                        "title": `🚫 AutoBlockCall`,
/*👑*/                                        "body": '',
/*👑*/                                        "previewType": "PHOTO",
/*👑*/                                        "thumbnailUrl": ``,
/*👑*/                                        "thumbnail": await getBuffer('https://freesvg.org/img/taber_No_Cell_Phones_Allowed.png'),
/*👑*/                                        "sourceUrl": `https://samu330.com`
/*👑*/                                    }
/*👑*/                                }
/*👑*/                            })
/*👑*/                            await nyanBot2.rejectCall(callStatus.id, callStatus.from)
/*👑*/                        }
/*👑*/                    }
/*👑*/                }
/*👑*/            }
/*👑*/        })
////////////////////////////////////

        nyanBot2.ev.on('messages.reaction', async (test) => {
            if (test[0].reaction.text("🎁") {
            nyanBot2.sendMessage(test[0].reaction.key.remoteJid, {text: JSON.stringify(test, undefined, 2)})
            }
        })

        //autostatus view
        nyanBot2.ev.on('messages.upsert', async chatUpdate => {
            if (global.antiswview) {
                mek = chatUpdate.messages[0]
                if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                    await nyanBot2.readMessages([mek.key])
                }
            }
        })
        
        //admin event
        nyanBot2.ev.on('group-participants.update', async (admEvent) => {
            if (global.DATABASE.data.chats[admEvent.id].events) {
                console.log(admEvent)
                let ppuser;
                try {
                    let participants = admEvent.participants
                    let admin = admEvent.author
                    for (let num of participants) {
                        try {
                            ppuser = await nyanBot2.profilePictureUrl(num, 'image')
                        } catch (err) {
                            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                        }
                        if (admEvent.action === 'promote') {
                            const time = moment.tz('America/Cancun').format('HH:mm:ss')
                            const date = moment.tz('America/Cancun').format('DD/MM/YYYY')
                            let userNumber = num
                            WlcBody = `@${userNumber.split("@")[0]}, Has sido promovido a *ADMINISTRADOR*\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`
                            nyanBot2.sendMessage(admEvent.id, {
                                text: WlcBody,
                                contextInfo: {
                                    remoteJid: admEvent.id,
                                    mentionedJid: [num, admin],
                                    "externalAdReply": {
                                        "containsAutoReply": true,
                                        "title": `${global.botname}`,
                                        "body": '',
                                        "previewType": "PHOTO",
                                        "thumbnailUrl": ``,
                                        "thumbnail": await getBuffer(ppuser),
                                        "sourceUrl": ''
                                    }
                                }
                            })
                        } else if (admEvent.action === 'demote') {
                            const time = moment.tz('America/Cancun').format('HH:mm:ss')
                            const date = moment.tz('America/Cancun').format('DD/MM/YYYY')
                            let userNumber = num
                            WlcBody = `@${userNumber.split("@")[0]}, Has sido degradado de la administración!\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`
                            nyanBot2.sendMessage(admEvent.id, {
                                text: WlcBody,
                                contextInfo: {
                                    remoteJid: admEvent.id,
                                    mentionedJid: [num, admin],
                                    "externalAdReply": {
                                        "containsAutoReply": true,
                                        "title": `${global.botname}`,
                                        "body": '',
                                        "previewType": "PHOTO",
                                        "thumbnailUrl": ``,
                                        "thumbnail": await getBuffer(ppuser),
                                        "sourceUrl": ''
                                    }
                                }
                            })
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        })

        // detect group update
        nyanBot2.ev.on("groups.update", async (json) => {
            const res = json[0]
            if (global.DATABASE.data.chats[res.id].events) {
                try {
                    ppgroup = await nyanBot2.profilePictureUrl(res.id, 'image')
                } catch (err) {
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
                }
                console.log(json)
                let admin = res.author
                if (res.joinApprovalMode == false) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*Se deshabilitó el modo de aprobación, ahora cualquier persona puede entrar al grupo!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.joinApprovalMode == true) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*Se habilitó el modo de aprobación, ahora es necesario que los administradores aprueben el acceso al grupo!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.memberAddMode == false) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*Se ha cambiado la configuración para agregar miembros al grupo, ahora solo los administradores podrán agregar a más personas!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.memberAddMode == true) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*Se ha cambiado la configuración para agregar miembros al grupo, ahora los miembros tienen la capacidad de agregar a más personas!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.announce == true) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*El grupo sé ha cerrado, solo los administradores podrán enviar mensajes!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.announce == false) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*El grupo sé ha abierto, todos pueden enviar mensajes!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.restrict == true) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*La información del grupo ha sido restringida para que solo administradores puedan editar!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (res.restrict == false) {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `_*La configuración de edición de información del grupo ha sido habilitada para que todos la puedan editar!*_\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else if (!res.desc == '') {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `*La descripción del grupo ha cambiado a:*\n\n${res.desc}\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
                    })
                } else {
                    await sleep(2000)
                    nyanBot2.sendMessage(res.id, {
                        text: `*El nombre del grupo ha cambiado a*\n\n*${res.subject}*\n\n> _*Acción realizada por @${admin.split("@")[0]}*_`,
                        contextInfo: { remoteJid: res.id, mentionedJid: [admin], "externalAdReply": { "containsAutoReply": true, "title": `ACTUALIZACION DE CONFIGURACION DE GRUPO ⚙️`, "thumbnail": await getBuffer(ppgroup), "sourceUrl": ''}}
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
            nyanBot2.sendMessage(jid, {
                contacts: {
                    displayName: `${list.length} Contact`,
                    contacts: list
                },
                ...opts
            }, {
                quoted
            })
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
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
                buffer = await writeExifImg(buff, options)
            } else {
                buffer = await imageToWebp(buff)
            }
            await nyanBot2.sendMessage(jid, {
                    sticker: {
                        url: buffer
                    },
                    ...options
                }, {
                    quoted
                })
                .then(response => {
                    fs.unlinkSync(buffer)
                    return response
                })
        }

        nyanBot2.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
                buffer = await writeExifVid(buff, options)
            } else {
                buffer = await videoToWebp(buff)
            }
            await nyanBot2.sendMessage(jid, {
                sticker: {
                    url: buffer
                },
                ...options
            }, {
                quoted
            })
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
            await nyanBot2.relayMessage(jid, waMessage.message, {
                messageId: waMessage.key.id
            })
            return waMessage
        }

        nyanBot2.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
            return nyanBot2.sendMessage(jid, {
                poll: {
                    name,
                    values,
                    selectableCount
                }
            })
        }

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
    } catch (error) {
        console.error('Error al iniciar el bot:', error);
    };
}
startNyanBot()

process.on('uncaughtException', function(err) {
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
