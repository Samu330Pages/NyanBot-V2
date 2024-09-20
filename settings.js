const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = ""
global.socialm = "GitHub: Samu330"
global.location = "Mexico, Cancún"

//new
global.botname = '𐊪𐊲𐊣𐊪𐄚𐌖𑄓'
global.ownernumber = '5219984907794'
global.ownername = 'Ⴝᶏᷤᶆͣᶙͫ❦ვვ͠ჿ͢'
global.websitex = "https://samu330.com"
global.wagc = "https://whatsapp.com/channel/0029VaDVQFVL7UVd71R7bY23"
global.themeemoji = '🪅'
global.wm = "NyanBot V2"
global.botscript = 'https://github.com/Samu330'
global.packname = "🪅 NyanBot V2\n🎳 Web\n🍟 WhatsApp Bot By:\n💎 Meta Verified"
global.author = "WhatsApp Bot ✅\nWa.me/samu330\nᶻ 𝗓 𐰁 Ⴝᶏᷤᶆͣᶙͫ❦ვვ͠ჿ͢\n© 2024 inc"
global.creator = "5219984907794@s.whatsapp.net"
global.xprefix = ''
global.premium = ["5219984907794"]
global.hituet = 0

//bot sett
global.typemenu = 'v6' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
group: '*Este comando solo puede usarse en grupos!*',
adminBot: '*Este comando solo puede usarse si el bot es administrador del grupo!*',
admin: '*Este comando solo puede usarse por algún administrador de grupo!*',
bot: 'Este comando solo puede usarlo el bot',
limit: '*Lo siento!* _pero al parecer ya no cuentas con puntos, porfavor verifica tus puntos con el comando:_ `[puntos]`',
nsfw: '𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼 𝗽𝗲𝗿𝗼 𝗻𝗼 𝗽𝘂𝗲𝗱𝗼 𝗲𝗷𝗲𝗰𝘂𝘁𝗮𝗿 𝗲𝘀𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼, 𝗲𝘀𝘁𝗲 𝗴𝗿𝘂𝗽𝗼 𝗻𝗼 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 +𝟭𝟴',
done: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
error: 'Intentalo de nuevo mas tarde',
success: 'OK va ᶻ 𝗓 𐰁'
}
//thumbnail
global.thumb = fs.readFileSync('./Media/theme/NyanBot.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
