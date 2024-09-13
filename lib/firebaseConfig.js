// firebaseConfig.js
const firebase = require('firebase/app');
require('firebase/auth');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqsYZA9wU9Y1YvYGicdZQ_7DDzfEVLXDU",
    authDomain: "number-ac729.firebaseapp.com",
    projectId: "number-ac729",
    storageBucket: "number-ac729.appspot.com",
    messagingSenderId: "36610055964",
    appId: "1:36610055964:web:ec80cc7ea2fb23287ce4d9",
    measurementId: "G-0BTNK7VNM3"
};

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
// Exporta la instancia de Firebase y la autenticación
module.exports = { firebase, auth };
