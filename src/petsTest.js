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
                createdAt: new Date(),
                isSleeping: false,
                imageUrl: getImageUrl(petType)
            }]
        };
        petsData.push(newPet);
        savePetsData(petsData);
        return newPet.pets[0];
    } else {
        return userPets.pets[0];
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

// Función para aumentar hambre y aburrimiento automáticamente
const updatePetNeeds = () => {
    const petsData = loadPetsData();
    const now = new Date();

    petsData.forEach(userPets => {
        userPets.pets.forEach(pet => {
            // Aumentar hambre y aburrimiento cada 2 horas
            const hoursSinceFed = pet.lastFed ? (now - new Date(pet.lastFed)) / 36e5 : Infinity;
            const hoursSinceWalked = pet.lastWalked ? (now - new Date(pet.lastWalked)) / 36e5 : Infinity;

            if (hoursSinceFed >= 2) {
                pet.hunger = Math.min(100, pet.hunger + 10);
            }
            if (hoursSinceWalked >= 2) {
                pet.boredom = Math.min(100, pet.boredom + 10);
            }
        });
    });

    savePetsData(petsData);
};

// Función para verificar el estado de la mascota y enviar notificaciones
const checkPetStatus = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (!userPets || userPets.pets.length === 0) {
        return null; // No tiene mascotas
    }

    const pet = userPets.pets[0];
    const now = new Date();
    
    // Detección de atención requerida
    if (pet.hunger >= 70 || pet.boredom >= 70 || pet.health <= 30) {
        sendReminder(nyanBot2, sender, pet);
    }

    // Verificar si la mascota se ha escapado
    if (pet.hunger >= 90 && pet.boredom >= 90 && pet.health <= 10) {
        removePet(sender);
        return `¡Tu mascota ${pet.name} ha escapado! 🏃🏻💨`;
    }

    return pet; // Retornar la mascota para más información
};

// Función para enviar recordatorios
const sendReminder = async (nyan, sender, pet) => {
    let message = `¡Atención! 🐾 ${pet.name} necesita cuidado!\n_*Utilice El comando para mascotas (.pet) para darle atención a su amiguito!*_\n\n`;
    
    if (pet.hunger >= 70) {
        message += `👉🏻 *Hambre:* ${calculatePercentage(pet.hunger)}% 🍽️\n`;
    }
    if (pet.boredom >= 70) {
        message += `👉🏻 *Diversión:* ${calculatePercentage(pet.boredom)}% 🎉\n`;
    }
    if (pet.health <= 30) {
        message += `👉🏻 *Salud crítica:* ${calculatePercentage(pet.health)}% 🚑\n`;
    }

    await nyan.sendMessage(sender, { text: message });
};

// Calcular el porcentaje
const calculatePercentage = (value) => {
    return Math.round((value / 100) * 100);
};

// Formatear fecha a un formato legible
const formatDate = (date) => {
    if (!date) return 'Nunca';
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return new Date(date).toLocaleString('es-ES', options);
};

// Función para obtener información de la mascota
const getPetInfo = (sender) => {
    const pet = checkPetStatus(sender);
    if (!pet) {
        return `No tienes ninguna mascota registrada. Por favor, crea una mascota primero.`;
    }

    let petInfo = `*😊 Información de tu mascota:*\n`;
    petInfo += `*Nombre:* ${pet.name}\n`;
    petInfo += `*Tipo:* ${pet.type}\n`;
    petInfo += `*Nivel:* ${pet.level}/100\n`;
    petInfo += `*Última vez que comió:* ${formatDate(pet.lastFed)}\n`;
    petInfo += `*Última vez que caminó:* ${formatDate(pet.lastWalked)}\n`;
    petInfo += `*Última vez que jugó:* ${formatDate(pet.lastPlayed)}\n`;
    petInfo += `*Salud:* ${calculatePercentage(pet.health)}% 🏥\n`;
    petInfo += `*Hambre:* ${calculatePercentage(pet.hunger)}% 🍽️\n`;
    petInfo += `*Diversión:* ${calculatePercentage(pet.boredom)}% 🎉\n`;
    petInfo += `*Fecha de nacimiento:*\n*${formatDate(pet.createdAt)}*\n`;

    return petInfo;
};

// Función para alimentar a la mascota
const feedPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0];
        if (pet.isSleeping) {
            return `¡*${pet.name}* está durmiendo y no puede comer ahora! 💤❌`;
        }

        // Verificar si la mascota necesita comer
        if (pet.hunger < 50) {
            return `¡*${pet.name}* no tiene hambre en este momento! 🍽️❌`;
        }

        pet.lastFed = new Date();
        pet.hunger = Math.max(0, pet.hunger - 20);
        pet.level = Math.min(100, pet.level + 1);
        savePetsData(petsData);
        return `¡${pet.name} ha sido alimentado! 🍽️`;
    }
};

// Función para sacar a pasear a la mascota
const walkPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0];
        if (pet.isSleeping) {
            return `¡*${pet.name}* está durmiendo y no puede caminar ahora! 💤❌`;
        }

        // Verificar si la mascota necesita un paseo
        if (pet.boredom < 50) {
            return `¡*${pet.name}* no necesita salir a pasear en este momento! 🚶‍♂️❌`;
        }

        pet.lastWalked = new Date();
        pet.boredom = Math.max(0, pet.boredom - 20);
        pet.level = Math.min(100, pet.level + 1);
        savePetsData(petsData);
        return `¡${pet.name} ha salido a pasear! 🚶‍♂️`;
    }
};

// Función para jugar con la mascota
const playWithPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0];
        if (pet.isSleeping) {
            return `¡*${pet.name}* está durmiendo y no puede jugar ahora! 💤❌`;
        }

        // Verificar si la mascota necesita jugar
        if (pet.boredom < 50) {
            return `¡*${pet.name}* no necesita jugar en este momento! 🎉❌`;
        }

        pet.lastPlayed = new Date();
        pet.boredom = Math.max(0, pet.boredom - 15);
        pet.level = Math.min(100, pet.level + 1);
        savePetsData(petsData);
        return `¡${pet.name} ha jugado! 🎉`;
    }
};

// Función para dormir a la mascota
const sleepPet = (sender) => {
    const petsData = loadPetsData();
    const userPets = petsData.find(pet => pet.user === sender);

    if (userPets && userPets.pets.length > 0) {
        const pet = userPets.pets[0];

        if (pet.isSleeping) {
            return `¡*${pet.name}* ya está durmiendo! 💤❌`;
        }

        pet.isSleeping = true; // Cambiar estado a durmiendo
        savePetsData(petsData);

        // Despertar después de 2 horas
        setTimeout(() => {
            pet.isSleeping = false; // Cambiar estado a despierto
            savePetsData(petsData);
            sendReminder(sender, pet); // Notificar que la mascota se ha despertado
        }, 7200000); // 2 horas en milisegundos

        return `¡*${pet.name}* está durmiendo! 💤`;
    }
};

// Función para eliminar la mascota
const removePet = (sender) => {
    const petsData = loadPetsData();
    const userPetsIndex = petsData.findIndex(pet => pet.user === sender);

    if (userPetsIndex !== -1) {
        petsData.splice(userPetsIndex, 1); // Eliminar la mascota del usuario
        savePetsData(petsData);
    }
};

// Iniciar el intervalo para actualizar automáticamente las necesidades de las mascotas
const startPetUpdateInterval = () => {
    setInterval(() => {
        updatePetNeeds(); // Actualiza el hambre y aburrimiento
        const petsData = loadPetsData();
        
        petsData.forEach(userPets => {
            userPets.pets.forEach(pet => {
                checkPetStatus(userPets.user); // Verifica el estado de cada mascota
            });
        });

        savePetsData(petsData); // Guarda los cambios en el archivo
    }, 600000); // Cada 10 minutos
};

// Exportar funciones
module.exports = {
    createOrGetPet,
    feedPet,
    walkPet,
    playWithPet,
    checkPetStatus,
    getPetInfo,
    removePet,
    updatePetNeeds,
    sendReminder,
    startPetUpdateInterval,
    sleepPet
};
