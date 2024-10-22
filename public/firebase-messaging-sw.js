importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);



const firebaseConfig = {
    apiKey: "AIzaSyBOG_Yg-2kKeH1a0sdjc_zBvn_p7A_WaJE",
    authDomain: "wedlock-4f698.firebaseapp.com",
    databaseURL: "https://wedlock-4f698-default-rtdb.firebaseio.com",
    projectId: "wedlock-4f698",
    storageBucket: "wedlock-4f698.appspot.com",
    messagingSenderId: "539956268610",
    appId: "1:539956268610:web:f01a4dbc2ced2e96c027db",
    measurementId: "G-95Z5LR49PG"
};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});