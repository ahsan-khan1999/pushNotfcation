import firebase from 'firebase';
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

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const receiveNotification =() =>{
    Notification.requestPermission().then((permission) => {
        if(permission === 'granted'){
            
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log(currentToken);
                //   sendTokenToServer(currentToken);
                //   updateUIForPushEnabled(currentToken);
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                  // Show permission UI.
                //   updateUIForPushPermissionRequired();
                //   setTokenSentToServer(false);
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // showToken('Error retrieving Instance ID token. ', err);
                // setTokenSentToServer(false);
              });
              
        }
        else{
            alert('Grant Permission to Recieve Notifications');
        }
    }).catch((err) => console.log(err));
}