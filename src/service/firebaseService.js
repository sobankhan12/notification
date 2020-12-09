import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAnN4z6OUOFrE-5wVkwaZqKW0rK4aDDZh0",
    authDomain: "notification-message-41914.firebaseapp.com",
    projectId: "notification-message-41914",
    storageBucket: "notification-message-41914.appspot.com",
    messagingSenderId: "533161511694",
    appId: "1:533161511694:web:797a80d769021a64bfa55f",
    measurementId: "G-KN3LN04035"
  };
firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();    
export function initNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // Get registration token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken({
                // vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>'
            }).then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN=>",currentToken)

                } else {
                    // Show permission request.
                    console.log('No registration token available. Request permission to generate one.');
                    // Show permission UI.

                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);

            })
        }
    })
}