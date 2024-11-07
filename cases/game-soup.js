const fs = require('fs');

module.exports = async function(m, reply, nyanBot2, sender, command, readmore) {
    function obtenerPalabrasAleatorias(ruta, cantidad) {
        const data = JSON.parse(fs.readFileSync(ruta));
        const palabras = data.palabras;
        const palabrasAleatorias = [];
        while (palabrasAleatorias.length < cantidad) {
            const randomIndex = Math.floor(Math.random() * palabras.length);
            const palabraAleatoria = palabras[randomIndex];
            if (!palabrasAleatorias.includes(palabraAleatoria)) {
                palabrasAleatorias.push(palabraAleatoria);
            }
        }
        return palabrasAleatorias;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const userGames = global.DATABASE.data.game.soup || [];
    const existingGame = userGames.find(game => game.user === sender);

    if (command == 'nuevasopa') {
        if (!existingGame) return reply('*No tienes ningún juego activo 😗*')
        userGames.splice(existingGame, 1);
        return reply('*Tu juego anterior se ah eliminado, ya puedes jugar de nuevo!*')
    }
    if (existingGame) {
        return reply(`*Ya tienes un juego en progreso.*\n*Intenta finalizarlo antes de comenzar uno nuevo.*\n_Para eliminar tu juego anterior usa el comando: *${prefix}nuevasopa*_`);
    }

    nyanBot2.sendMessage(m.chat, {
        react: {
            text: '🍜',
            key: m.key
        }
    });
    const sopa = await require("../lib/sopa.js").createWordSearchImages();
    const newGame = {
        user: sender,
        intentos: 0,
        palabras: sopa.palabras,
        palabrasEncontradas: [],
        imagenNormal: sopa.imagenNormal,
        imagenResaltada: sopa.imagenResaltada
    };

    userGames.push(newGame);
    global.DATABASE.data.game.soup = userGames;

    const instrucciones = `*Instrucciones del juego:* \n\n- Encuentra las palabras ocultas en la sopa de letras.\n- *Etiqueta este mensaje cada ves que encuentres una palabra!*\n- Cada vez que aciertes una palabra, ganarás 100 puntos.\n- Si encuentras las tres palabras, ganarás un total de 400 puntos.\n- Los puntos se contabilizan al encontrar una palabra.\n
⚠️ _*LAS PALABRAS PUEDEN ESTAR ACOMODADAS DE FORMA HORIZONTAL, VERTICAL, DIAGONAL, ABAJO HACIA ARRIBA...*_ ⚠️\nSolo podrá responder la persona del juego!\n*¡Diviértete!*`;

    const palabrasAyuda = obtenerPalabrasAleatorias('./lib/palabras.json', 7);
    const palabrasCombinadas = [...palabrasAyuda, ...sopa.palabras];
    const textoPalabrasAyuda = `*Palabras que pueden estar escondidas:* \n\n- ${shuffleArray(palabrasCombinadas).join('\n- ')}`;

    const texto = `*Nuevo juego de* \`Sopa de letras\` 🍜\n\n*Intentos: ${newGame.intentos}*\n*Palabras restantes: ${newGame.palabras.length}*`;
    await nyanBot2.sendMessage(m.chat, {
        image: sopa.imagenNormal,
        caption: `${texto}\n\n${instrucciones}\n\n_Para facilitar la búsqueda clic aquí 👉🏻_${readmore}\n${textoPalabrasAyuda}`
    }, {
        quoted: m
    });

};
