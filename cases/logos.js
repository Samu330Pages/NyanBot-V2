const { ephoto } = require('../lib/scraper.js')
const forma1 = '`'

module.exports = async function(text, m, nyanBot2, reply, prefix, command) {
const [efecto, texto] = text.split`+`
if (!efecto || !texto) return reply(`_*Incluye el tipo de efecto que desees, aquí te muestro la lista de efectos disponibles:*_\n
- ${forma1}1 = glitchtext${forma1}
- ${forma1}2 = writetext${forma1}
- ${forma1}3 = advancedglow${forma1}
- ${forma1}4 = typographytext${forma1}
- ${forma1}5 = pixelglitch${forma1}
- ${forma1}6 = neonglitch${forma1}
- ${forma1}7 = flagtext${forma1}
- ${forma1}8 = flag3dtext${forma1}
- ${forma1}9 = deletingtext${forma1}
- ${forma1}10 = blackpinkstyle${forma1}
- ${forma1}11 = glowingtext${forma1}
- ${forma1}12 = underwatertext${forma1}
- ${forma1}13 = logomaker${forma1}
- ${forma1}14 = cartoonstyle${forma1}
- ${forma1}15 = papercutstyle${forma1}
- ${forma1}16 = watercolortext${forma1}
- ${forma1}17 = effectclouds${forma1}
- ${forma1}18 = blackpinklogo${forma1}
- ${forma1}19 = gradienttext${forma1}
- ${forma1}20 = summerbeach${forma1}
- ${forma1}21 = luxurygold${forma1}
- ${forma1}22 = multicoloredneon${forma1}
- ${forma1}23 = sandsummer${forma1}
- ${forma1}24 = galaxywallpaper${forma1}
- ${forma1}25 = 1917style${forma1}
- ${forma1}26 = makingneon${forma1}
- ${forma1}27 = royaltext${forma1}
- ${forma1}28 = freecreate${forma1}
- ${forma1}29 = galaxystyle${forma1}
- ${forma1}30 = lighteffects${forma1}\n
*Ejemplo de uso:*\n${prefix+command} 1+Samu330\n
*Recuerda separar el efecto del texto con el simbolo ${forma1}+${forma1}*`)
nyanBot2.sendMessage(m.chat, { react: { text: '🕒', key: m.key } })
await reply('*Porfavor esperé, se está procesando su imagen y esto puede llevar tiempo, sé paciente y no satures al bot! 😁*')
let link
if (/1/.test(efecto)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/2/.test(efecto)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/3/.test(efecto)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/4/.test(efecto)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/5/.test(efecto)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/6/.test(efecto)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/7/.test(efecto)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/8/.test(efecto)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/9/.test(efecto)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/10/.test(efecto)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/11/.test(efecto)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/12/.test(efecto)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/13/.test(efecto)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/14/.test(efecto)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/15/.test(efecto)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/16/.test(efecto)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/17/.test(efecto)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/18/.test(efecto)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/19/.test(efecto)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/20/.test(efecto)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/21/.test(efecto)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/22/.test(efecto)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/23/.test(efecto)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/24/.test(efecto)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/25/.test(efecto)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/26/.test(efecto)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/27/.test(efecto)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/28/.test(efecto)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/29/.test(efecto)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/30/.test(efecto)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let picEffect = await ephoto(link, texto)
nyanBot2.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
nyanBot2.sendMessage(m.chat, { image: { url: picEffect }, caption: `texto` }, { quoted: m })
}
