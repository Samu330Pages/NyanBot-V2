const { createCanvas } = require('canvas');

const dirx = [[1, 0], [0, 1], [1, 1], [-1, 1], [-1, 0], [0, -1], [-1, -1], [1, -1]];
const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const espacio = 24;

const createWordSearchImages = async () => {
    const nSize = 15; // tamaño de la sopa de letras
    const canvas = createCanvas(nSize * espacio + 20, nSize * espacio + 110);
    const ctx = canvas.getContext('2d');

    // Generar 3 palabras aleatorias de hasta 8 letras
    const palabras = [];
    const palabrasUbicadas = []; // Para almacenar la ubicación de las palabras
    for (let i = 0; i < 3; i++) {
        let palabra = '';
        const length = Math.floor(Math.random() * 8) + 1; // longitud de entre 1 y 8
        for (let j = 0; j < length; j++) {
            palabra += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        palabras.push(palabra);
    }

    // Inicializar el tablero
    const tablero = Array.from({ length: nSize }, () => Array(nSize).fill('*'));

    // Distribuir palabras
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

    // Crear y dibujar la primera imagen (sopa de letras normal)
    colorFondo(ctx, canvas);
    dibuja(ctx, tablero, nSize);
    const imagenNormal = canvas.toBuffer('image/png');

    // Crear y dibujar la segunda imagen (sopa de letras con palabras subrayadas)
    const canvasResaltado = createCanvas(nSize * espacio + 20, nSize * espacio + 110);
    const ctxResaltado = canvasResaltado.getContext('2d');
    colorFondo(ctxResaltado, canvasResaltado);
    dibuja(ctxResaltado, tablero, nSize);
    resaltarPalabras(ctxResaltado, palabrasUbicadas, nSize);
    const imagenResaltada = canvasResaltado.toBuffer('image/png');

    return {
        imagenNormal,
        imagenResaltada
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

function colorFondo(ctx, canvas) {
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#000";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function dibuja(ctx, tablero, nSize) {
    const len = caracteres.length;
    for (let i = 0; i < nSize; i++) {
        for (let j = 0; j < nSize; j++) {
            const tmp = tablero[i][j] === '*' ? caracteres.charAt(Math.floor(Math.random() * len)) : tablero[i][j];
            ctx.font = "13pt Tahoma";
            ctx.fillStyle = "#000";
            ctx.fillText(tmp, 15 + (i * espacio), 30 + (j * espacio));
        }
    }
}

function resaltarPalabras(ctx, palabrasUbicadas, nSize) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Color de subrayado
    palabrasUbicadas.forEach(({ palabra, x, y, dir }) => {
        const len = palabra.length;
        const startX = 15 + x * espacio;
        const startY = 30 + y * espacio;

        // Calcular el final de la línea
        const endX = startX + dir[0] * len * espacio;
        const endY = startY + dir[1] * len * espacio;

        ctx.beginPath();
        ctx.moveTo(startX + espacio / 2, startY - 5); // Ajuste para posicionar el subrayado
        ctx.lineTo(endX + espacio / 2, endY - 5);
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
        ctx.stroke();
    });
}

module.exports = {
    createWordSearchImages
};
