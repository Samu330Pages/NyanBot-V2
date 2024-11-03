module.exports = async function(m, reply, sender) {

    let now = new Date();
    let today = now.toISOString().split('T')[0];
    let currentTime = now.getTime();
    let user = global.DATABASE.data.users[sender];

    if (!user.lastClaim) {
        user.lastClaim = {
            date: today,
            time: currentTime
        };
        user.limit += 100;
        return reply(`🎉 ¡Has reclamado tus 100 puntos!\n*Vuelve mañana para obtener 100 puntos más! 😛*`);
    }

    let lastClaimDate = user.lastClaim.date;
    let lastClaimTime = user.lastClaim.time;

    if (lastClaimDate === today) {
        let hoursSinceLastClaim = Math.floor((currentTime - lastClaimTime) / (1000 * 60 * 60));
        let hoursLeft = 24 - hoursSinceLastClaim;

        if (hoursLeft > 0) {
            return reply(`> 🚫 Ya has reclamado tus puntos hoy. Intenta nuevamente en ${hoursLeft} horas.`);
        }
    }

    user.lastClaim = {
        date: today,
        time: currentTime
    };
    user.limit += 100;
    return reply(`🎉 ¡Has reclamado tus 100 puntos!\n*Vuelve mañana para obtener 100 puntos más! 😛*`);
}:
