import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import * as firebase from '@firebase/app'
import axios from "axios";
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



export function requestPermission() {
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
                        sendTokentoFCM(currentToken)
                        //getAllmessage()
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

async function sendTokentoFCM(currentToken) {
const token= currentToken
// send data to firebase
const message={
    to: token,
    notification: {
        title: "Hello World",
        body:"Helo "
    },
}
// const message={
//     account_id:"645908b853b05ffb8c35d42a",
//     title:"aaaaaa",
//     body:"bbbbbb",
//     token:token
// }


const res= await axios.post('https://fcm.googleapis.com/fcm/send',message,
{
    headers: {
        Authorization: "key=AAAALt2oRnw:APA91bFwlixgPUXO3TRRtG0J4EZMa0XmrNf3FXJxj7B1Js5WCLigxQX5XfRmtU7-qL_Axz_AhPdi33EJClfAuymN2O0r0atm7ih4L9Rw3snPlkVWmzmKtj8gse6dhX6d3-WnM5_efhlq"
}
 } 
 )
console.log({res})

}


// async function getAllmessage(){
// const res= await axios.get('https://firebase.googleapis.com/v1beta1/projects'+'/'
//  + firebaseConfig.projectId +'/webApps/'+firebaseConfig.appId,{
//     headers:{
//         "Access-Control-Allow-Origin":"http://localhost:3000",  
//         // "Origin":'http://localhost:3000',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': "Accept,authorization,Authorization, Content-Type",
// 'Access-Control-Allow-Credentials': 'true',
//         Authorization: "key=AAAALt2oRnw:APA91bFwlixgPUXO3TRRtG0J4EZMa0XmrNf3FXJxj7B1Js5WCLigxQX5XfRmtU7-qL_Axz_AhPdi33EJClfAuymN2O0r0atm7ih4L9Rw3snPlkVWmzmKtj8gse6dhX6d3-WnM5_efhlq"

//     }
// })
// console.log({res})
// }

// https://www.smashingmagazine.com/2020/06/firebase-push-notifications-react/ 
// https://www.npmjs.com/package/firebase-admin 
// https://blog.logrocket.com/push-notifications-react-firebase/ 
// https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages 
// https://dev.to/jeremytenjo/how-to-send-push-notifications-with-firebase-and-react-1pol 
// https://www.audreyhal.com/blog/push-notifications-with-firebase-in-react 
// requestPermission()
// http://localhost:3001/api/notifications/
// https://firebase.google.com/docs/cloud-messaging/send-message
// https://firebase.google.com/docs/cloud-messaging/http-server-ref#table9 
// https://fcm.googleapis.com/fcm/send
// https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites
// https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps/getConfig
// Tên tài nguyên của WebApp, ở định dạng:

// projects/PROJECT_IDENTIFIER/webApps/APP_ID

// PROJECT_IDENTIFIER: của Dự án mẹ (được khuyến nghị) hoặc . Tìm hiểu thêm về cách sử dụng số nhận dạng dự án trong tiêu chuẩn AIP 2510 của Google . Lưu ý rằng giá trị choProjectNumber ProjectId
// PROJECT_IDENTIFIERtrong bất kỳ nội dung phản hồi nào sẽ là ProjectId.
// APP_ID: mã định danh duy nhất trên toàn cầu, do Firebase gán cho Ứng dụng (xem phần appId).


// res nhan ve hi dây len firebase
// data
// : 
// canonical_ids
// : 
// 0
// failure
// : 
// 0
// multicast_id
// : 
// 7110916124544916000

// 



// Received background message  
// {from: '201287288444', collapseKey: undefined, notification: {…}}
// collapseKey
// : 
// undefined
// from
// : 
// "201287288444"
// notification
// : 
// {title: 'Hello World', body: 'Helo '}
// [[Prototype]]
// : 
// Object


// CORS error:
// 
// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe