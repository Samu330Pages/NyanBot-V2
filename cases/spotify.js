const fetch = require('node-fetch');
const pkg = require('sanzy-spotifydl');
const { downloadTrack, downloadAlbum } = pkg;
const pkg2 = require('fluid-spotify.js');
const { Spotify } = pkg2;
const Archiver = require('archiver');
const { Readable } = require('stream');

module.exports = async function(m, reply, text, nyanBot2) {
    if (!text) return reply(`*Por favor, proporciona un enlace de Spotify válido o el nombre de una canción.*`);

    const isSpotifyUrl = text.match(/^(https:\/\/open\.spotify\.com\/(album|track|playlist)\/[a-zA-Z0-9]+)/i);

    try {
        if (isSpotifyUrl) {
            if (isSpotifyUrl[2] === 'album') {
                nyanBot2.sendMessage(m.chat, { react: { text: '📂', key: m.key } });
                const album = await downloadAlbum(isSpotifyUrl[0]);
                const img = await (await fetch(`${album.metadata.cover}`)).buffer();
                let spotifyInfo = `*Album:* ${album.metadata.title}\n`;
                spotifyInfo += `*Artistas:* ${album.metadata.artists}\n`;
                spotifyInfo += `*Fecha de lanzamiento:* ${album.metadata.releaseDate}\n`;
                spotifyInfo += `*Número de pistas:* ${album.trackList.length}\n\n`;

                await nyanBot2.sendMessage(m.chat, {
                    text: spotifyInfo.trim(),
                    contextInfo: {
                        forwardingScore: 9999999,
                        isForwarded: true,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "renderLargerThumbnail": true,
                            "title": album.metadata.title,
                            "mediaType": 1,
                            "thumbnail": img,
                            "mediaUrl": isSpotifyUrl[0],
                            "sourceUrl": isSpotifyUrl[0]
                        }
                    }
                }, { quoted: m });

                const archive = Archiver('zip');
                const buffers = [];
                const tracksToDownload = album.trackList.slice(0, 5);

                for (let track of tracksToDownload) {
                    const audioBuffer = await track.audioBuffer;
                    buffers.push({ name: `${track.metadata.name}.mp3`, buffer: audioBuffer });
                }

                archive.on('error', (err) => {
                    throw err;
                });

                for (let { name, buffer } of buffers) {
                    const stream = new Readable();
                    stream.push(buffer);
                    stream.push(null);
                    archive.append(stream, { name });
                }

                archive.finalize();

                await nyanBot2.sendMessage(m.chat, {
                    document: archive,
                    fileName: `${album.metadata.title}.zip`,
                    mimetype: 'application/zip'
                }, { quoted: m });

            } else if (isSpotifyUrl[2] === 'track') {
                nyanBot2.sendMessage(m.chat, { react: { text: '🎶', key: m.key } });
                const track = await downloadTrack(isSpotifyUrl[1]);
                const img = await (await fetch(track.imageUrl)).buffer();
                let spotifyInfo = `*Título:* ${track.title}\n`;
                spotifyInfo += `*Artistas:* ${track.artists}\n`;
                spotifyInfo += `*Duración:* ${track.duration}\n`;
                spotifyInfo += `*Álbum:* ${track.album.name}\n`;
                spotifyInfo += `*Fecha de lanzamiento:* ${track.album.releasedDate}\n`;

                await nyanBot2.sendMessage(m.chat, {
                    document: track.audioBuffer,
                    fileName: `${track.title}.mp3`,
                    mimetype: 'audio/mpeg',
                    caption: spotifyInfo.trim(),
                    jpegThumbnail: await reSize(img, 200, 200)
                }, { quoted: m });

            } else if (isSpotifyUrl[2] === 'playlist') {
                nyanBot2.sendMessage(m.chat, { react: { text: '📝', key: m.key } });
                const infos = new Spotify({ clientID: "7fb26a02133d463da465671222b9f19b", clientSecret: "d4e6f8668f414bb6a668cc5c94079ca1" });
                const playlistId = isSpotifyUrl[0].split('/').pop();
                const playlistInfoByID = await infos.getPlaylist(playlistId);
                const tracks = playlistInfoByID.tracks.items;
                const img = await (await fetch(`${playlistInfoByID.images[0].url}`)).buffer();
                let spotifyInfo = `*Playlist:* ${playlistInfoByID.name}\n`;
                spotifyInfo += `*Número de pistas:* ${tracks.length}\n`;

                await nyanBot2.sendMessage(m.chat, {
                    text: spotifyInfo.trim(),
                    contextInfo: {
                        forwardingScore: 9999999,
                        isForwarded: true,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "renderLargerThumbnail": true,
                            "title": playlistInfoByID.name,
                            "mediaType": 1,
                            "thumbnail": img,
                            "mediaUrl": playlistInfoByID.external_urls.spotify,
                            "sourceUrl": playlistInfoByID.external_urls.spotify
                        }
                    }
                }, { quoted: m });

                const archive = Archiver('zip');
                const buffers = [];
                const tracksToDownload = tracks.slice(0, 5);

                for (let track of tracksToDownload) {
                    const trackInfo = await downloadTrack(track.track.external_urls.spotify);
                    buffers.push({ name: `${track.track.name}.mp3`, buffer: trackInfo.audioBuffer });
                }

                archive.on('error', (err) => {
                    throw err;
                });

                for (let { name, buffer } of buffers) {
                    const stream = new Readable();
                    stream.push(buffer);
                    stream.push(null);
                    archive.append(stream, { name });
                }

                archive.finalize();

                await nyanBot2.sendMessage(m.chat, {
                    document: `${archive}`,
                    fileName: `${playlistInfoByID.name}.zip`,
                    mimetype: 'application/zip'
                }, { quoted: m });
            }
        } else {
            nyanBot2.sendMessage(m.chat, { react: { text: '⌛', key: m.key } });
            const searchTrack = await downloadTrack(text);
            const img = await (await fetch(`${searchTrack.imageUrl}`)).buffer();
            let spotifyInfo = `*Título:* ${searchTrack.title}\n`;
            spotifyInfo += `*Artistas:* ${searchTrack.artists}\n`;
            spotifyInfo += `*Duración:* ${searchTrack.duration}\n`;
            spotifyInfo += `*Álbum:* ${searchTrack.album.name}\n`;
            spotifyInfo += `*Fecha de lanzamiento:* ${searchTrack.album.releasedDate}\n`;

            await nyanBot2.sendMessage(m.chat, {
                text: spotifyInfo.trim(),
                contextInfo: {
                    forwardingScore: 9999999,
                    isForwarded: true,
                    "externalAdReply": {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "renderLargerThumbnail": true,
                        "title": searchTrack.title,
                        "mediaType": 1,
                        "thumbnail": img,
                        "mediaUrl": searchTrack.url,
                        "sourceUrl": searchTrack.url
                    }
                }
            }, { quoted: m });

            await nyanBot2.sendMessage(m.chat, {
                audio: searchTrack.audioBuffer,
                fileName: `${searchTrack.title}.mp3`,
                mimetype: 'audio/mpeg'
            }, { quoted: m });
        }
    } catch (error) {
        console.error(error);
        return reply(`*Ocurrió un error al procesar tu solicitud. Intenta nuevamente.*${error}`);
    }
};
