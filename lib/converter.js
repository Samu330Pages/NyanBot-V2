const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { Readable } = require('stream')
const ffmpeg = require('fluent-ffmpeg')
const { spawn } = require('child_process')



async function resizeImage(buffer, scaleFactor) {
  try {
    const metadata = await sharp(buffer).metadata();
    
    const newWidth = Math.round(metadata.width * scaleFactor);
    const newHeight = Math.round(metadata.height * scaleFactor);
    
    const resizedImageBuffer = await sharp(buffer)
      .resize(newWidth, newHeight)
      .toBuffer();
    
    return resizedImageBuffer;
  } catch (error) {
    throw new Error(`Error al redimensionar la imagen: ${error.message}`);
  }
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return new Promise((resolve, reject) => {
    const inputStream = new Readable();
    inputStream.push(buffer);
    inputStream.push(null); //

    const outputFilePath = path.join(__dirname, `output.${ext}`);

    ffmpeg(inputStream)
      .audioCodec('libmp3lame')
      .audioChannels(2)
      .audioBitrate('128k')
      .audioFrequency(44100)
      .format('mp3')
      .on('end', () => {
        fs.readFile(outputFilePath, (err, data) => {
          if (err) {
            return reject(err);
          }
          fs.unlinkSync(outputFilePath);
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(err);
      })
      .save(outputFilePath);
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
  resizeImage,
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
