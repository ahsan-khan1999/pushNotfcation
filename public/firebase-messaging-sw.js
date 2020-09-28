// For Firebase JS SDK v7.20.0 and later, measurementId is optional
importScripts('/__/firebase/7.18.0/firebase-app.js');
importScripts('/__/firebase/7.18.0/firebase-messaging.js');
importScripts('/__/firebase/init.js');

// const messaging = firebase.messaging();

importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyAUjv3HN7PFaaL6wr7HXkI58xHwgFN91Hw",
    authDomain: "reactpushnotifcation.firebaseapp.com",
    databaseURL: "https://reactpushnotifcation.firebaseio.com",
    projectId: "reactpushnotifcation",
    storageBucket: "reactpushnotifcation.appspot.com",
    messagingSenderId: "20982463198",
    appId: "1:20982463198:web:8d6c92afcc62cc5b2ea04f",
    measurementId: "G-9NSY0LLNZ2"
};
firebaseConfig.initializeApp(firebaseConfig);

const messaging = firebase.messaging();