const { createCanvas } = require('canvas');
const GIFEncoder = require('gifencoder');

const crearRuletaAnimada = () => {
    const encoder = new GIFEncoder(400, 400);
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(100);
    encoder.setQuality(10);

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

    for (let i = 0; i < 36; i++) {
        const rotation = (i * Math.PI * 2) / 36;
        drawRoulette(rotation);
        encoder.addFrame(ctx);
    }

    const finalRotation = Math.random() * Math.PI * 2;
    for (let i = 0; i < 36; i++) {
        const rotation = finalRotation + (i * Math.PI * 2) / 36;
        drawRoulette(rotation);
        encoder.addFrame(ctx);
    }

    encoder.finish()
    const creador = "Samu330 🎡";
    
    const buffer = encoder.out.getData();

    const resultado = sections[Math.floor((finalRotation / (Math.PI * 2)) * sections.length) % sections.length].text;

    return { creador, buffer, resultado };
};

module.exports = { crearRuletaAnimada }
