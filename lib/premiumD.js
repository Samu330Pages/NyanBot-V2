const fs = require("fs");
const toMs = require("ms");

const premiumPath = './src/data/role/premium.json';
const creator = "Samu330";

const loadPremiumData = () => {
    try {
        const data = fs.readFileSync(premiumPath, 'utf8');
        return JSON.parse(data) || []; // Asegura que siempre sea un array
    } catch (error) {
        console.error("Error loading premium data:", error);
        return [];
    }
};

const savePremiumData = (data) => {
    try {
        fs.writeFileSync(premiumPath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error saving premium data:", error);
    }
};

const addPremiumUser = (userId, time) => {
    const premium = loadPremiumData();
    const cekUser = premium.find((user) => user.id === userId);
    const msTime = toMs(time);

    if (!msTime) {
        return { creator, error: "Invalid time format" };
    }

    if (cekUser) {
        cekUser.expired += msTime;
    } else {
        const obj = { id: userId, expired: Date.now() + msTime };
        premium.push(obj);
    }

    savePremiumData(premium);
    return { creator, data: premium };
};

const getPremiumPosition = (userId) => {
    const premium = loadPremiumData();
    const position = premium.findIndex((user) => user.id === userId);
    return { creator, position };
};

const getPremiumExpired = (userId) => {
    const premium = loadPremiumData();
    const user = premium.find((user) => user.id === userId);
    return { creator, expired: user ? user.expired : null };
};

const checkPremiumUser = (userId) => {
    const premium = loadPremiumData();
    const isPremium = premium.some((user) => user.id === userId);
    return { creator, isPremium };
};

const expiredPremiumCheck = (NyanBotUser) => {
    setInterval(() => {
        const premium = loadPremiumData();
        const now = Date.now();
        const updatedPremium = premium.filter(user => {
            if (now >= user.expired) {
                console.log(`Premium expired: ${user.id}`);
                NyanBotUser.sendMessage(user.id, { text: "*Your premium user time has expired, contact Samu to get more time!.*" });
                return false;
            }
            return true;
        });
        savePremiumData(updatedPremium);
    }, 1000);
};

const getAllPremiumUser = () => {
    const premium = loadPremiumData();
    const userIds = premium.map(user => user.id);
    return { creator, users: userIds };
};

const deletePremiumUser = (userId) => {
    const premium = loadPremiumData();
    const updatedPremium = premium.filter(user => user.id !== userId);

    if (updatedPremium.length === premium.length) {
        return { creator, error: "User not found in premium list." };
    }
    savePremiumData(updatedPremium);
    return { creator, message: "User successfully removed from premium list." };
};

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
    deletePremiumUser,
};
