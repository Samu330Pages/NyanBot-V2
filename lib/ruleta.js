const { createCanvas } = require('canvas');
const GIFEncoder = require('gifencoder');

const crearRuletaGif = () => {
    const encoder = new GIFEncoder(400, 400);
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(30);
    encoder.setQuality(10);

    const canvas = createCanvas(400, 400);
    const ctx = canvas.getContext('2d');

    const options = [
        "Queso", "Jamón", "Papas", "Gaseosa", "-10%", 
        "Huevo", "Tocino", "Imán", "Nada", "Hotdog"
    ];

    const arc = Math.PI / (options.length / 2);
    const outsideRadius = 150; // Radio más pequeño
    const insideRadius = 0; // Sin espacio en medio

    const drawRouletteWheel = (startAngle) => {
        ctx.clearRect(0, 0, 400, 400);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.font = 'bold 12px Helvetica, Arial';

        for (let i = 0; i < options.length; i++) {
            const angle = startAngle + i * arc;
            ctx.fillStyle = getColor(i, options.length);

            ctx.beginPath();
            ctx.arc(200, 200, outsideRadius, angle, angle + arc, false);
            ctx.lineTo(200, 200); // Conectar al centro
            ctx.fill();
            ctx.stroke();

            ctx.save();
            ctx.fillStyle = "black";
            ctx.translate(200 + Math.cos(angle + arc / 2) * (outsideRadius - 20), 
                          200 + Math.sin(angle + arc / 2) * (outsideRadius - 20));
            ctx.rotate(angle + arc / 2 + Math.PI / 2);
            ctx.fillText(options[i], -ctx.measureText(options[i]).width / 2, 0);
            ctx.restore();
        }

        drawLights(); 
        drawArrow(); 
    };

    const drawLights = () => {
        const colors = ['#FFDD00', '#FF00DD', '#00DDFF', '#FF0000', '#00FF00'];
        const lightCount = 20; 

        for (let i = 0; i < lightCount; i++) {
            const angle = (i / lightCount) * Math.PI * 2;
            const radius = outsideRadius + 10; // Posicionar fuera de la ruleta
            ctx.fillStyle = colors[i % colors.length]; 
            ctx.beginPath();
            ctx.arc(200 + Math.cos(angle) * radius, 200 + Math.sin(angle) * radius, 5, 0, Math.PI * 2, false);
            ctx.fill();
        }
    };

    const drawArrow = () => {
        ctx.fillStyle = "black"; 
        ctx.beginPath();
        ctx.moveTo(200 - 4, 200 - (outsideRadius + 10)); // Ajustar posición de la flecha
        ctx.lineTo(200 + 4, 200 - (outsideRadius + 10));
        ctx.lineTo(200 + 4, 200 - (outsideRadius - 5));
        ctx.lineTo(200 + 9, 200 - (outsideRadius - 5));
        ctx.lineTo(200 + 0, 200 - (outsideRadius - 15));
        ctx.lineTo(200 - 9, 200 - (outsideRadius - 5));
        ctx.lineTo(200 - 4, 200 - (outsideRadius - 5));
        ctx.lineTo(200 - 4, 200 - (outsideRadius + 10));
        ctx.fill();
    };

    const totalFrames = 120;
    let spinAngleStart = Math.random() * 10 + 10;
    let spinTime = 0;
    const spinTimeTotal = Math.random() * 3 + 4 * 1000;
    let startAngleCurrent = 0;

    while (spinTime < spinTimeTotal) {
        drawRouletteWheel(startAngleCurrent);
        encoder.addFrame(ctx);
        const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
        startAngleCurrent += (spinAngle * Math.PI / 180);
        spinTime += 30;
    }

    const finalRotation = Math.random() * Math.PI * 2;
    for (let i = 0; i < 30; i++) {
        drawRouletteWheel(finalRotation);
        encoder.addFrame(ctx);
    }

    ctx.save();
    ctx.fillStyle = "white"; 
    ctx.font = 'bold 30px Helvetica, Arial';
    const resultado = options[Math.floor((finalRotation / (Math.PI * 2)) * options.length) % options.length];
    ctx.fillText(resultado, 200 - ctx.measureText(resultado).width / 2, 250);
    ctx.restore();

    encoder.finish();
    const buffer = encoder.out.getData();

    return { buffer, resultado, creador: "Samu330 🎡" };
};

function getColor(item, maxitem) {
    const phase = 0;
    const center = 128;
    const width = 127;
    const frequency = Math.PI * 2 / maxitem;

    const red = Math.sin(frequency * item + 2 + phase) * width + center;
    const green = Math.sin(frequency * item + 0 + phase) * width + center;
    const blue = Math.sin(frequency * item + 4 + phase) * width + center;

    return RGB2Color(red, green, blue);
}

function byte2Hex(n) {
    const nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}

function RGB2Color(r, g, b) {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
}

module.exports = { crearRuletaGif };
