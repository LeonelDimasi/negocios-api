var firebase = require('firebase')

// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyAVUE419OYgga_RCklSx7WtheN60r84EUg",
    authDomain: "negocio-94b05.firebaseapp.com",
    databaseURL: "https://negocio-94b05.firebaseio.com",
    projectId: "negocio-94b05",
    storageBucket: "negocio-94b05.appspot.com",
    messagingSenderId: "452896483177"
};

var fire = firebase.initializeApp(config);
module.exports = fire;


