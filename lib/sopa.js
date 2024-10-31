const { createCanvas, loadImage } = require('canvas');

const dirx = [[1, 0], [0, 1], [1, 1], [-1, 1], [-1, 0], [0, -1], [-1, -1], [1, -1]];
const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const espacio = 24;

const listaPalabras = ['COLIBRÍ', 'GATO', 'PIZZA', 'PELUCHE', 'WHATSAPP'];

const createWordSearchImages = async () => {
    const nSize = 15;
    const canvas = createCanvas(nSize * espacio + 20, nSize * espacio + 180);
    const ctx = canvas.getContext('2d');

    const palabras = [];
    while (palabras.length < 3) {
        const palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
        if (!palabras.includes(palabra)) {
            palabras.push(palabra);
        }
    }

    const tablero = Array.from({ length: nSize }, () => Array(nSize).fill('*'));
    const letrasRelleno = Array.from({ length: nSize }, () => Array(nSize).fill('*'));
    const palabrasUbicadas = [];

    palabras.forEach(palabra => {
        let placed = false;
        while (!placed) {
            const x = Math.floor(Math.random() * nSize);
            const y = Math.floor(Math.random() * nSize);
            const r = Math.floor(Math.random() * 8);
            if (valida(tablero, palabra, x, y, dirx[r])) {
                insertar(tablero, palabra, x, y, dirx[r]);
                palabrasUbicadas.push({ palabra, x, y, dir: dirx[r] });
                placed = true;
            }
        }
    });

    for (let i = 0; i < nSize; i++) {
        for (let j = 0; j < nSize; j++) {
            if (tablero[i][j] === '*') {
                letrasRelleno[i][j] = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            } else {
                letrasRelleno[i][j] = tablero[i][j];
            }
        }
    }

    const background = await loadImage('./Media/theme/sopa.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    dibuja(ctx, letrasRelleno, nSize);
    const imagenNormal = canvas.toBuffer('image/png');

    const canvasResaltado = createCanvas(nSize * espacio + 20, nSize * espacio + 180);
    const ctxResaltado = canvasResaltado.getContext('2d');
    ctxResaltado.drawImage(background, 0, 0, canvas.width, canvas.height);
    dibuja(ctxResaltado, letrasRelleno, nSize);
    resaltarPalabras(ctxResaltado, palabrasUbicadas, nSize);
    const imagenResaltada = canvasResaltado.toBuffer('image/png');

    return {
        imagenNormal,
        imagenResaltada,
        palabras
    };
};

function valida(tablero, palabra, xi, yi, dir) {
    const len = palabra.length;
    if (xi + len * dir[0] >= 0 && xi + len * dir[0] < tablero.length &&
        yi + len * dir[1] >= 0 && yi + len * dir[1] < tablero.length) {
        for (let i = 0; i < len; i++) {
            if (tablero[xi + i * dir[0]][yi + i * dir[1]] !== '*') {
                return false;
            }
        }
        return true;
    }
    return false;
}

function insertar(tablero, palabra, xi, yi, dir) {
    for (let i = 0; i < palabra.length; i++) {
        tablero[xi + i * dir[0]][yi + i * dir[1]] = palabra.charAt(i);
    }
}

function dibuja(ctx, tablero, nSize) {
    const len = caracteres.length;
    for (let i = 0; i < nSize; i++) {
        for (let j = 0; j < nSize; j++) {
            const tmp = tablero[i][j];
            ctx.font = "19pt Tahoma";
            ctx.fillStyle = "#000";
            const textWidth = ctx.measureText(tmp).width;
            const x = 15 + (i * espacio) + (espacio - textWidth) / 2;
            const y = 30 + (j * espacio) + 10;
            ctx.fillText(tmp, x, y);
        }
    }
}

function resaltarPalabras(ctx, palabrasUbicadas, nSize) {
    const colores = ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'];
    palabrasUbicadas.forEach(({ palabra, x, y, dir }, index) => {
        const len = palabra.length;
        const startX = 15 + x * espacio;
        const startY = 30 + y * espacio;
        const endX = startX + dir[0] * len * espacio;
        const endY = startY + dir[1] * len * espacio;

        ctx.fillStyle = colores[index % colores.length];
        ctx.fillRect(startX, startY - 15, espacio * len, espacio);

        ctx.beginPath();
        ctx.moveTo(startX + espacio / 2, startY - 5);
        ctx.lineTo(endX + espacio / 2, endY - 5);
        ctx.lineWidth = 5;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.stroke();
    });
}

module.exports = {
    createWordSearchImages
};
