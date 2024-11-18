const {
    Audd
} = require('audd.io')
const fs = require('fs')
const audd = new Audd('a75003657df885776c027d0a5e17edd6'); //21/10/24

module.exports = async function(text, m, reply, nyanBot2, sender, useLimit, mime, quoted, command, prefix) {
    if (global.DATABASE.data.users[sender].limit < 1) return reply(global.mess.limit);
    if (global.DATABASE.data.users[sender].limit < 50) return reply(`*Lo siento, pero este comando requiere 50 puntos, y tu cuenta tiene ${global.DATABASE.data.users[sender].limit}!*\n_Si deseas ganar más puntos, usa el comando ${forma1}${prefix}puntos${forma1} para ver de que manera ganar puntos_`);
    if (!m.quoted) return reply('Responde a un audio o video con el comando para reconocer la canción.');
    if (/video/.test(mime)) return reply('*Para reconocer el audio de un video, primero convierte el video a audio con el comando _toaudio_!*');
    if (!/audio/.test(mime)) return reply('*No as etiquetado un audio, por favor asegurate de etiquetar el audio a reconocer junto al comando!*');

    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🕑',
            key: m.key
        }
    });
    const tempFilePath = await nyanBot2.downloadAndSaveMediaMessage(quoted, 'music');

    try {
        const recognitionResult = await audd.recognize.fromFile(tempFilePath);

        if (recognitionResult.status === 'success') {
            const result = recognitionResult.result;

            let responseMessage = `> *♫ Reconocimiento exitoso:*\n\n`;
            responseMessage += `*› Artista:* ${result.artist}\n\n`;
            responseMessage += `*› Título:* ${result.title}\n\n`;
            responseMessage += `*› Álbum:* ${result.album}\n\n`;
            responseMessage += `*› Fecha de lanzamiento:* ${result.release_date}\n\n`;
            responseMessage += `*› Sello:* ${result.label}\n\n`;
            responseMessage += `*› Duración:* ${result.timecode}\n\n`;
            responseMessage += `*› Enlace de la canción:* ${result.song_link}\n\n`;
            return await reply(responseMessage)
            nyanBot2.sendMessage(m.chat, {
                react: {
                    text: '✅',
                    key: m.key
                }
            });
        } else {
            await reply(`Error en el reconocimiento: ${recognitionResult.status}`);
        }
    } catch (error) {
        nyanBot2.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        });
        console.error('Error al procesar la solicitud:', error);
        await reply(`Ocurrió un error al procesar la solicitud. Por favor, intenta de nuevo.\n${error}`)
    } finally {
        fs.unlink(tempFilePath, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo temporal:', err);
            }
        });
    }

    useLimit(sender, 50)
}
