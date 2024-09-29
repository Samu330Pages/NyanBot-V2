const fetch = require('node-fetch');

module.exports = class Gemini {
    v1 = async (query) => {
        try {
            const _thisGemini = (await import("gemini-ai")).default; // Import ES MODULE
            const _getAsk = new _thisGemini('AIzaSyDq-vzinHkZgCCX5FJpoP6N9HBX6IkOZcE'); // Key
            let response = await _getAsk.ask(query);
            return {
                creator: '@wts - Devsu',
                status: true,
                data: {
                    message: response
                }
            };
        } catch (e) {
            return {
                creator: '@wts - Devsu',
                status: false,
                msg: e.toString()
            };
        }
    };
v2 = async (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('https://bard.rizzy.eu.org/backend/conversation/gemini', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ask: query
                })
            });
            const data = await response.json();
            console.log('Respuesta de Gemini:', data); // Agregar este log
            if (data.status !== 200) {
                reject({
                    creator: '@wts - Devsu',
                    status: false,
                    msg: 'Error en la respuesta del servidor'
                });
            }
            resolve({
                creator: '@wts - Devsu',
                status: true,
                data: {
                    message: data.content
                }
            });
        } catch (e) {
            console.error('Error en la función v2:', e); // Log de error
            reject({
                creator: '@wts - Devsu',
                status: false,
                msg: e.message || 'Error desconocido'
            });
        }
    });
};
}
