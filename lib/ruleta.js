const { createCanvas } = require('canvas');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

const crearRuletaVideo = () => {
    const canvas = createCanvas(400, 400);
    const ctx = canvas.getContext('2d');

    const sections = [
        { text: '100 puntos', color: '#FF0000' },
        { text: '50 puntos', color: '#00FF00' },
        { text: '200 puntos', color: '#0000FF' },
        { text: '30 puntos', color: '#FFFF00' },
        { text: '10 puntos', color: '#FF00FF' },
        { text: '5 puntos', color: '#00FFFF' },
    ];

    const drawRoulette = (rotation) => {
        ctx.clearRect(0, 0, 400, 400);
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(rotation);
        sections.forEach((section, index) => {
            const angle = (Math.PI * 2) / sections.length;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, 150, index * angle, (index + 1) * angle);
            ctx.fillStyle = section.color;
            ctx.fill();
            ctx.stroke();
            ctx.save();
            ctx.rotate(index * angle + angle / 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(section.text, 60, 0);
            ctx.restore();
        });
        ctx.restore();
    };

    const frames = [];
    for (let i = 0; i < 72; i++) {
        const rotation = (i * Math.PI * 2) / 72;
        drawRoulette(rotation);
        frames.push(canvas.toBuffer());
    }

    const finalRotation = Math.random() * Math.PI * 2;
    for (let i = 0; i < 72; i++) {
        const rotation = finalRotation + (i * Math.PI * 2) / 72;
        drawRoulette(rotation);
        frames.push(canvas.toBuffer());
    }

    const outputVideoPath = path.join(__dirname, 'ruleta.mp4');
    const ffmpegCommand = ffmpeg()
        .input('pipe:') 
        .inputFormat('image2pipe')
        .inputOptions('-framerate 10')
        .outputOptions('-c:v libx264')
        .outputOptions('-pix_fmt yuv420p')
        .save(outputVideoPath);

    frames.forEach((frame) => {
        ffmpegCommand.input(frame);
    });

    return new Promise((resolve, reject) => {
        ffmpegCommand.on('end', () => {
            const resultado = sections[Math.floor((finalRotation / (Math.PI * 2)) * sections.length) % sections.length].text;
            resolve({ videoPath: outputVideoPath, resultado, creador: "Samu330 🎡" });
        });

        ffmpegCommand.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { crearRuletaVideo };
