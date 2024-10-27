const fs = require('fs')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')
const { spawn } = require('child_process')

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return new Promise((resolve, reject) => {
    const audioChunks = [];
    ffmpeg()
      .input(buffer)
      .inputFormat(ext)
      .audioCodec('libmp3lame')
      .audioChannels(2)
      .audioBitrate('128k')
      .audioFrequency(44100)
      .format('mp3')
      .on('end', () => {
        resolve(Buffer.concat(audioChunks));
      })
      .on('error', (err) => {
        reject(err);
      })
      .pipe()
      .on('data', (chunk) => {
        audioChunks.push(chunk);
      });
  });
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
