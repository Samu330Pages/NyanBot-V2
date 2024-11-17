module.exports = async function(m, reply, text, prefix, command, nyanBot2) {
    if (!text) return reply(`*Ejemplo de uso:* ${prefix+command} Samu330`)
    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '📍',
            key: m.key
        }
    });
    let githubstalk = require('../lib/scraper')
    aj = await githubstalk.githubstalk(`${text}`)
    nyanBot2.sendMessage(m.chat, {
        image: {
            url: aj.profile_pic
        },
        caption: `> *Github Stalker 🧸*

- Username : ${aj.username}
- Nickname : ${aj.nickname}
- Bio : ${aj.bio}
- Id : ${aj.id}
- Nodeid : ${aj.nodeId}
- Url Profile : ${aj.profile_pic}
- Url Github : ${aj.url}
- Type : ${aj.type}
- Admin : ${aj.admin}
- Company : ${aj.company}
- Blog : ${aj.blog}
- Location : ${aj.location}
- Email : ${aj.email}
- Public Repo : ${aj.public_repo}
- Public Gists : ${aj.public_gists}
- Followers : ${aj.followers}
- Following : ${aj.following}
- Created At : ${aj.ceated_at}
- Updated At : ${aj.updated_at}`
    }, {
        quoted: m
    })
}
