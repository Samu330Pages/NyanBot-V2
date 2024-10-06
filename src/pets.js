const fs = require('fs');
const path = require('path');

const petsFilePath = path.join('./src/pets.json');

// Cargar datos de mascotas
const loadPetsData = () => {
    if (!fs.existsSync(petsFilePath)) {
        fs.writeFileSync(petsFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(petsFilePath);
    return JSON.parse(data);
};

// Guardar datos de mascotas
const savePetsData = (data) => {
    fs.writeFileSync(petsFilePath, JSON.stringify(data, null, 2));
};

// Función para crear o obtener mascota
const createOrGetPet = (sender, petName, petType) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (!userPets) {
        // Crear nueva entrada para el usuario
        const newPet = {
            user: sender,
            pets: [{
                name: petName,
                type: petType,
                level: 0,
                lastFed: null,
                lastWalked: null,
                lastPlayed: null,
                health: 100,
                hunger: 0,
                boredom: 0,
                imageUrl: getImageUrl(petType)
            }]
        };
        petsData.push(newPet);
        savePetsData(petsData);
        return newPet.pets[0];
    } else {
        return userPets.pets[0]; // Retornar la primera mascota para simplificar
    }
};

// Obtener la URL de la imagen según el tipo de mascota
const getImageUrl = (petType) => {
    const images = {
        gato: 'https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-cute-kawaii-playful-calico-kitty-cat-cartoon-drawing-doodle-outline-png-image_10449870.png',
        perro: 'https://static.vecteezy.com/system/resources/previews/036/627/741/non_2x/ai-generated-cute-chibi-dog-cartoon-dog-character-free-png.png',
        pollo: 'https://static.wikia.nocookie.net/disney/images/0/05/Heihei.png/revision/latest?cb=20161108001511&path-prefix=es',
        lorito: 'https://cdn-icons-png.flaticon.com/256/6438/6438099.png',
        pinguino: 'https://static.wikia.nocookie.net/horadeaventura/images/f/f9/Gunter3.png/revision/latest/scale-to-width/360?cb=20120818151902&path-prefix=es'
    };
    return images[petType] || '';
};

// Función para alimentar a la mascota
const feedPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0]; // Obtener la primera mascota
        pet.lastFed = new Date();
        pet.hunger = Math.max(0, pet.hunger - 20);
        pet.level = Math.min(100, pet.level + 10);
        savePetsData(petsData);
    }
};

// Función para sacar a pasear a la mascota
const walkPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0]; // Obtener la primera mascota
        pet.lastWalked = new Date();
        pet.boredom = Math.max(0, pet.boredom - 20);
        pet.level = Math.min(100, pet.level + 15);
        savePetsData(petsData);
    }
};

// Función para jugar con la mascota
const playWithPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0]; // Obtener la primera mascota
        pet.lastPlayed = new Date();
        pet.boredom = Math.max(0, pet.boredom - 15);
        pet.level = Math.min(100, pet.level + 5);
        savePetsData(petsData);
    }
};

// Función para verificar el estado de la mascota y enviar notificaciones
const checkPetStatus = () => {
    const petsData = loadPetsData();
    const now = new Date();

    petsData.forEach(user => {
        user.pets.forEach(pet => {
            const hoursSinceFed = pet.lastFed ? (now - new Date(pet.lastFed)) / 36e5 : Infinity;
            const hoursSinceWalked = pet.lastWalked ? (now - new Date(pet.lastWalked)) / 36e5 : Infinity;

            // Verificar si necesita comer
            if (hoursSinceFed >= 8) {
                pet.hunger += 10;
                if (pet.hunger >= 100) {
                    pet.level = Math.max(0, pet.level - 10);
                    sendReminder(user.user, `${pet.name} necesita comer!`);
                }
            }

            // Verificar si necesita pasear
            if (hoursSinceWalked >= 5) {
                pet.boredom += 10;
                if (pet.boredom >= 100) {
                    pet.level = Math.max(0, pet.level - 10);
                    sendReminder(user.user, `${pet.name} necesita salir a pasear!`);
                }
            }
        });
    });

    savePetsData(petsData);
};

// Función para enviar recordatorios
const sendReminder = async (chatId, message) => {
    const buttons = [
        {
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: 'Atender',
                id: `atender_mascota`
            }),
        }
    ];

    await sendReplyButton(chatId, buttons, message, {
        content: message,
        //media: await fetchBuffer('https://example.com/image.png') // Cambiar por la imagen adecuada
    });
};

module.exports = {
    createOrGetPet,
    feedPet,
    walkPet,
    playWithPet,
    checkPetStatus
};
