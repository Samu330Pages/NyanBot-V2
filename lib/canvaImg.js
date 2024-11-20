const { createCanvas, loadImage, registerFont } = require('canvas');
const sharp = require('sharp');
const fetch = require('node-fetch');

//Menu Image Canvas
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
// 👑

//Welcome Image Canvas
const createWelcomeImage = async (profilePicUrl) => {
    const canvas = createCanvas(1280, 720);
    const ctx = canvas.getContext('2d');

    const background = await loadImage('./Media/theme/welcome.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const darkBackgroundColor = 'rgba(0, 0, 0, 0.5)';
    ctx.fillStyle = darkBackgroundColor;
    ctx.fillRect(100, 80, canvas.width - 200, 150);

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(100, 80, canvas.width - 200, 150, 20);
    ctx.stroke();

    const circleX = canvas.width / 2;
    const circleY = 390;
    const circleWidth = 250;
    const circleHeight = 250;

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(circleX - circleWidth / 2, circleY - circleHeight / 2, circleWidth, circleHeight, 20);
    ctx.fill();

    const profileImage = await loadImage(profilePicUrl);
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(circleX - circleWidth / 2, circleY - circleHeight / 2, circleWidth, circleHeight, 20);
    ctx.clip();
    ctx.drawImage(profileImage, circleX - circleWidth / 2, circleY - circleHeight / 2, circleWidth, circleHeight);
    ctx.restore();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 56px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('¡Bienvenido al grupo!', canvas.width / 2, 175); // Ajustar la posición del texto

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(50, 570);
    ctx.lineTo(canvas.width - 50, 570);
    ctx.stroke();

    ctx.fillText('NyanBotV2 te da la bienvenida', canvas.width / 2, 640);

    return canvas.toBuffer('image/png');
}
// 👑

//ApkCombo Image Canvas
const convertImageToPNG = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const buffer = await response.buffer();
    return await sharp(buffer).toFormat('png').toBuffer();
}

const createAppListImage = async (apps, searchText) => {
    const canvas = createCanvas(400, 800);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#007BFF';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('APK Combo', 20, 40);

    ctx.fillStyle = 'rgba(240, 240, 240, 0.9)';
    ctx.roundRect(20, 60, 360, 40, 20);
    ctx.fill();
    ctx.strokeStyle = '#bbb';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#007BFF'; 
    ctx.font = 'bold 16px Arial';
    ctx.fillText(searchText, 30, 85);

    const startY = 140;
    const spacing = 100;

    ctx.fillStyle = 'rgba(220, 220, 220, 0.9)';
    ctx.roundRect(20, 120, 360, 660, 20);
    ctx.fill();

    for (let i = 0; i < Math.min(apps.length, 6); i++) {
        const app = apps[i];
        const iconBuffer = await convertImageToPNG(app.imgSrc);
        const icon = await loadImage(iconBuffer);
        ctx.drawImage(icon, 25, startY + i * spacing, 50, 50);

        ctx.fillStyle = '#333';
        ctx.font = 'bold 16px Arial';
        const appName = app.name.replace(' APK', '');
        const truncatedName = appName.length > 20 ? appName.substring(0, 17) + '...' : appName;
        ctx.fillText(`${i + 1}. ${truncatedName}`, 90, startY + i * spacing + 20);

        ctx.font = '14px Arial';
        ctx.fillText(`Descargas: ${app.downloads}`, 90, startY + i * spacing + 35);
        ctx.fillText(`Calificación: ${app.rating}`, 90, startY + i * spacing + 50);
        ctx.fillText(`Tamaño: ${app.size}`, 90, startY + i * spacing + 65);
    }

    ctx.fillStyle = '#333';
    ctx.font = 'italic 12px Arial';
    const footerText = 'APK Combo downloads By Samu330';
    const textWidth = ctx.measureText(footerText).width;
    ctx.fillText(footerText, (canvas.width - textWidth) / 2, 765);

    return canvas.toBuffer('image/png', { compressionLevel: 3 });
}
// 👑

module.exports = {
    createCanvasImage,
    createWelcomeImage,
    createAppListImage
};
