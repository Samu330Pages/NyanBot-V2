const { createCanvas, loadImage, registerFont } = require('canvas');

const createCanvasImage = async (nickName, userNumber, userPoints, profilePicUrl) => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    registerFont('./src/media/Bad_Behaviour.ttf', { family: 'Bad_Behaviour' });

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 600);

    ctx.font = 'bold 40px "Bad_Behaviour"';

    const drawBackgroundLines = () => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;

        for (let i = 0; i < 800; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 600);
            ctx.stroke();
        }

        for (let j = 0; j < 600; j += 20) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(800, j);
            ctx.stroke();
        }
    }

    drawBackgroundLines();

    const drawCubes = () => {
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * 800;
            const y = Math.random() * 600;
            const size = Math.random() * 40 + 30;

            const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`;
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 20;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(Math.random() * Math.PI * 2);
            ctx.fillRect(-size / 2, -size / 2, size, size);
            ctx.restore();
        }
    }

    drawCubes();

    const textBackgroundColor = 'rgba(0, 0, 0, 0.7)';
    const texts = [
        { label: 'Nombre:', value: nickName, y: 100 },
        { label: 'Número:', value: userNumber, y: 200 },
        { label: 'Puntos:', value: `${userPoints} | NyanBot` , y: 300 }
    ];

    texts.forEach(text => {
        ctx.fillStyle = textBackgroundColor;
        ctx.fillRect(50, text.y - 30, 700, 50);
        ctx.fillStyle = '#FFD700';
        ctx.fillText(text.label, 60, text.y);
        ctx.fillText(text.value, 260, text.y);
    });

    const circleX = 400;
    const circleY = 450;
    const circleRadius = 100;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 0, 255, 0.8)';
    ctx.lineWidth = 10;
    ctx.shadowColor = 'rgba(255, 0, 255, 0.5)';
    ctx.shadowBlur = 15;
    ctx.stroke();

    const profileImage = await loadImage(profilePicUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(profileImage, circleX - circleRadius, circleY - circleRadius, circleRadius * 2, circleRadius * 2);
    ctx.restore();

    return canvas.toBuffer('image/png');
}

module.exports = {
    createCanvasImage
};
