const fetch = require('node-fetch');

async function geminiFetch(query) {
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
        
        if (data.status !== 200) {
            throw new Error('Error en la respuesta del servidor');
        }

        return {
            creator: '@wts - Devsu',
            status: true,
            data: {
                message: data.content
            }
        };
    } catch (error) {
        return {
            creator: '@wts - Devsu',
            status: false,
            msg: error.message || 'Error desconocido'
        };
    }
}
module.exports = geminiFetch;
