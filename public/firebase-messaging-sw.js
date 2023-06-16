 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
    apiKey: "AIzaSyCqhb4dG-xGhUqo7JX5tiqYVehSG1-0nzw",
    authDomain: "my-first-project-23-11-2021.firebaseapp.com",
    projectId: "my-first-project-23-11-2021",
    storageBucket: "my-first-project-23-11-2021.appspot.com",
    messagingSenderId: "201287288444",
    appId: "1:201287288444:web:ae5a2e1927bde4426dabf9"
};


 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
     icon: payload.notification.icon
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });