const { createCanvas, loadImage, registerFont } = require('canvas');

const createCanvasImage = async (nickName, userNumber, userPoints, profilePicUrl) => {
    const canvas = createCanvas(800, 600);
    const ctx = canvas.getContext('2d');

    // Registrar la fuente
    registerFont('./src/media/sprayvetica-33third.ttf', { family: 'sprayvetica-33third' });

    // Cargar el fondo
    const background = await loadImage('./Media/theme/tempBckg.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Cambiar el estilo de la fuente
    ctx.font = 'bold 34px "sprayvetica-33third"';
    ctx.fillStyle = '#FFD700'; // Color dorado para el texto

    // Texto de fondo
    const textBackgroundColor = 'rgba(0, 0, 0, 0.7)';
    const texts = [
        { label: 'Nombre:', value: nickName, y: 100 },
        { label: 'Número:', value: userNumber, y: 200 },
        { label: 'Puntos:', value: `${userPoints} | NyanBot`, y: 300 }
    ];

    texts.forEach(text => {
        ctx.fillStyle = textBackgroundColor;
        ctx.fillRect(50, text.y - 30, 700, 50);
        ctx.fillStyle = '#FFD700';
        ctx.fillText(text.label, 60, text.y);
        ctx.fillText(text.value, 260, text.y);
    });

    // Espacio para la imagen
    const circleX = 400;
    const circleY = 450;
    const circleRadius = 100; // Radio del círculo de la imagen de perfil

    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fill();

    // Cargar la imagen de perfil
    const profileImage = await loadImage(profilePicUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(profileImage, circleX - circleRadius, circleY - circleRadius, circleRadius * 2, circleRadius * 2);
    ctx.restore();

    // Cargar el aro de la imagen y aumentar su tamaño
    const aroImage = await loadImage('./Media/theme/aroPp.png');
    const aroSize = circleRadius * 2.5; // Aumentar el tamaño del aro a 2.5 veces el radio del círculo
    ctx.drawImage(aroImage, circleX - aroSize / 2, circleY - aroSize / 2, aroSize, aroSize); // Ajustar el tamaño del aro

    // Crear partículas de colores aleatorios
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

    createParticles(); // Llamar a la función para crear partículas

    // Agregar humo de colores (opcional)
    const createSmoke = () => {
        const smokeColors = ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)'];
        for (let i = 0; i < 20; i++) {
            ctx.fillStyle = smokeColors[Math.floor(Math.random() * smokeColors.length)];
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 40 + 30, 0, Math.PI * 2);
            ctx.fill();
        }
    };

    createSmoke(); // Llamar a la función para crear humo

    // Devolver la imagen como buffer
    return canvas.toBuffer('image/png');
}

module.exports = {
    createCanvasImage
};
