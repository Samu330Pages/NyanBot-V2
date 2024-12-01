const {
    formatNumber,
    formatBytes,
    fetchBuffer
} = require('../lib/samufuncs')
const fg = require('api-dylux')
const forma1 = '`'

module.exports = async function(text, m, reply, nyanBot2, sender, useLimit, stcReac, command, prefix) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(mess.limit);
    if (global.DATABASE.data.users[sender].limit < 10) return reply(`*Lo siento, pero este comando requiere 10 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (!text) return reply(`*Es necesario un link válido de TikTok.*\n_*Ejemplo de uso*_\n\n${prefix + command} https://tiktok.com/...`);

    try {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '🕑',
                key: m.key
            }
        });
        const {
            result
        } = await fg.tiktok(text);

        let infoTt = `*📌 Información del contenido:*
${result.title ? `${result.title}` : ''}\n
${result.duration ? `- Duración: ${result.duration} segundos` : ''}
${result.size ? `- Tamaño: ${formatBytes(result.size)}` : ''}
${result.wm_size ? `- Tamaño con marca de agua: ${formatBytes(result.wm_size)}` : ''}
${result.play_count ? `- Reproducciones: ${formatNumber(result.play_count)}` : ''}
${result.digg_count ? `- Me gusta: ${formatNumber(result.digg_count)}` : ''}
${result.comment_count ? `- Comentarios: ${formatNumber(result.comment_count)}` : ''}
${result.share_count ? `- Compartidos: ${formatNumber(result.share_count)}` : ''}
${result.download_count ? `- Descargas: ${formatNumber(result.download_count)}` : ''}
${result.collect_count ? `- Guardados: ${formatNumber(result.collect_count)}` : ''}
${result.create_time ? `- Publicado: ${new Date(result.create_time * 1000).toLocaleString()}` : ''}
${result.is_ad ? `- ¿Es anuncio? Sí` : result.is_ad === false ? `- ¿Es anuncio? No` : ''}

*📀 Información del audio:*
${result.music_info.id ? `- ID: ${result.music_info.id}` : ''}
${result.music_info.title ? `- Título: ${result.music_info.title}` : ''}
${result.music_info.author ? `- Autor: ${result.music_info.author}` : ''}
${result.music_info.original ? `- ¿Original? Sí` : result.music_info.original === false ? `- ¿Original? No` : ''}
${result.music_info.duration ? `- Duración: ${result.music_info.duration} segundos` : ''}
${result.music_info.album ? `- Álbum: ${result.music_info.album}` : ''}

> https://samu330.com `;
        if (result.duration) {
            await nyanBot2.sendMessage(m.chat, {
                video: {
                    url: result.play
                },
                fileName: result.title + '.mp4',
                caption: infoTt,
                thumbnail: await fetchBuffer(result.author.avatar),
                jpegThumbnail: await fetchBuffer(result.author.avatar)
            }, {
                quoted: m
            });
        } else {
            await reply(`_*Se estan enviando las imágenes...*_ 🔗\n\n${infoTt}`)
            for (let i = 0; i < result.images.length; i++) {
                let imageTt = await fetchBuffer(result.images[i]);
                await nyanBot2.sendMessage(m.chat, {
                    image: imageTt,
                    caption: `*Imagen ${i + 1} de ${result.images.length}*`
                }, {
                    quoted: m
                });
            }
        }
        nyanBot2.sendMessage(m.chat, {
            audio: {
                url: result.music_info.play
            },
            mimetype: 'audio/mpeg',
            fileName: `${result.music_info.title}.mp3`,
            jpegThumbnail: await fetchBuffer(result.music_info.cover),
            contextInfo: {
                externalAdReply: {
                    renderLargerThumbnail: true,
                    mediaType: 1,
                    title: `${result.music_info.title}.mp3`,
                    body: `Click here! 👉🏻🟢`,
                    thumbnail: await fetchBuffer(result.music_info.cover),
                    jpegThumbnail: await fetchBuffer(result.music_info.cover),
                    previewType: "NONE",
                    sourceUrl: 'https://www.tiktok.com/@samu330ofc3?_t=8qPoVlCApvc&_r=1',
                }
            }
        }, {
            quoted: m
        })
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        });
        useLimit(sender, 10)
    } catch (e) {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });
        stcReac('error', `_*❌ Ha ocurrido un error!*_\n*Intenta de nuevo porfavor! 🙂*`)
    }
}
