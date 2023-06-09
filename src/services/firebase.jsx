import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import * as firebase from '@firebase/app'
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCqhb4dG-xGhUqo7JX5tiqYVehSG1-0nzw",
    authDomain: "my-first-project-23-11-2021.firebaseapp.com",
    projectId: "my-first-project-23-11-2021",
    storageBucket: "my-first-project-23-11-2021.appspot.com",
    messagingSenderId: "201287288444",
    appId: "1:201287288444:web:ae5a2e1927bde4426dabf9"
};



function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            // Initialize Firebase Cloud Messaging and get a reference to the service
            const messaging = getMessaging(app);
            getToken(messaging, { vapidKey: "BD9IgJwEjRWTKf69hsffxrbqCrzGArXjDcc9jHroO7gNsHgtilOEBompIjJljKU0pHaImwktsQJCO_BVyxfRmT8" })
                .then((currentToken) => {
                    if (currentToken) {
                        // Send the token to your server and update the UI if necessary
                        // ...
                        console.log(currentToken)
                    } else {
                        // Show permission request UI
                        console.log('No registration token available. Request permission to generate one.');
                        // ...

                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                    // ...
                });
        } else {
            console.log('Unable to get permission to notify.');
        }
    }
    )
};

requestPermission()