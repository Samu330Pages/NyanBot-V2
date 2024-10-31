const { createCanvas } = require('canvas');

const dirx = [[1, 0], [0, 1], [1, 1], [-1, 1], [-1, 0], [0, -1], [-1, -1], [1, -1]];
const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const espacio = 24;

const createWordSearchImage = async () => {
    const nSize = 15;
    const canvas = createCanvas(nSize * espacio + 20, nSize * espacio + 110);
    const ctx = canvas.getContext('2d');

    const palabras = [];
    for (let i = 0; i < 3; i++) {
        let palabra = '';
        const length = Math.floor(Math.random() * 8) + 1;
        for (let j = 0; j < length; j++) {
            palabra += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        palabras.push(palabra);
    }

    const tablero = Array.from({ length: nSize }, () => Array(nSize).fill('*'));

    palabras.forEach(palabra => {
        let placed = false;
        while (!placed) {
            const x = Math.floor(Math.random() * nSize);
            const y = Math.floor(Math.random() * nSize);
            const r = Math.floor(Math.random() * 8);
            if (valida(tablero, palabra, x, y, dirx[r])) {
                insertar(tablero, palabra, x, y, dirx[r]);
                placed = true;
            }
        }
    });

    colorFondo(ctx, canvas);
    dibuja(ctx, tablero, nSize);

    return canvas.toBuffer('image/png');
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

module.exports = {
    createWordSearchImage
};
