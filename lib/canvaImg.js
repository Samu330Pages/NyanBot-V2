const { createCanvas, loadImage, registerFont } = require('canvas');

const createCanvasImage = async (nickName, userNumber, userPoints, profilePicUrl) => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    registerFont('./src/media/sprayvetica-33third.ttf', { family: 'sprayvetica-33third' });

    const background = await loadImage('./Media/theme/tempBckg.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = 'bold 34px "sprayvetica-33third"';
    ctx.fillStyle = '#FFD700';

    const textBackgroundColor = 'rgba(0, 0, 0, 0.7)';
    const texts = [
        { label: 'Nombre:', value: nickName, y: 100 },
        { label: 'Numero:', value: userNumber, y: 200 },
        { label: 'Puntos:', value: `${userPoints} | NyanBot`, y: 300 }
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

    const profileImage = await loadImage(profilePicUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(profileImage, circleX - circleRadius, circleY - circleRadius, circleRadius * 2, circleRadius * 2);
    ctx.restore();

    const aroImage = await loadImage('./Media/theme/aroPp.png');
    const aroSize = circleRadius * 2.5;
    ctx.drawImage(aroImage, circleX - aroSize / 2, circleY - aroSize / 2, aroSize, aroSize);

    const createParticles = () => {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFF833'];
        for (let i = 0; i < 100; i++) {
            const particleX = Math.random() * canvas.width;
            const particleY = Math.random() * canvas.height;
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.beginPath();
            ctx.arc(particleX, particleY, Math.random() * 3, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    createParticles();

    const createSmoke = () => {
        const smokeColors = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)'];
        for (let i = 0; i < 20; i++) {
            ctx.fillStyle = smokeColors[Math.floor(Math.random() * smokeColors.length)];
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 40 + 30, 0, Math.PI * 2);
            ctx.fill();
        }
    };
    createSmoke();

    return canvas.toBuffer('image/png');
}

module.exports = {
    createCanvasImage
};
