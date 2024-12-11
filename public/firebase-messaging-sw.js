importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOG_Yg-2kKeH1a0sdjc_zBvn_p7A_WaJE",
    authDomain: "wedlock-4f698.firebaseapp.com",
    databaseURL: "https://wedlock-4f698-default-rtdb.firebaseio.com",
    projectId: "wedlock-4f698",
    storageBucket: "wedlock-4f698.appspot.com",
    messagingSenderId: "539956268610",
    appId: "1:539956268610:web:f01a4dbc2ced2e96c027db",
    measurementId: "G-95Z5LR49PG",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(async (payload) => {
    console.log("[firebase-messaging-sw.js] Received background message", payload);

    const notificationTitle = `${payload.data.title} from ${payload.data.senderName}`;
    const notificationOptions = {
        body: payload.data.body,
        icon: payload.data.senderImage,
        data: {
            receiverId: payload.data.receiverId,
            receiverFCM: payload.data.receiverFCM,
            senderId: payload.data.senderId,
            senderFCM: payload.data.senderFCM,
            senderName: payload.data.senderName,
        },
    };

    try {
        const uid = localStorage.getItem("uid")
        if (!uid) {
            console.error("User ID (receiverId) is missing in the payload.");
            return;
        }

        const database = firebase.database();
        const notificationsRef = database.ref(`users/${uid}/notifications`);
        const notificationId = new Date().getTime().toString(); 

        await notificationsRef.child(notificationId).set({
            id: notificationId,
            title: payload.data.title,
            body: payload.data.body,
            type: payload.data.type,
            senderId: payload.data.senderId,
            senderImage: payload.data.senderImage,
            senderFCM: payload.data.senderFCM,
            receiverFCM: payload.data.receiverFCM,
            senderName: payload.data.senderName,
            timestamp: new Date().toISOString(),
        });

        console.log("Notification saved to Realtime Database.");
    } catch (error) {
        console.error("Error saving notification to database:", error);
    }

    // Show notification
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle foreground messages
messaging.onMessage((message) => {
    console.log("Message received in foreground:", message);
});
