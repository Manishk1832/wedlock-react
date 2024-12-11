import { useState, useEffect } from "react";
import { ref, onValue, update, remove } from "firebase/database";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { database } from "../../../utils/firebaseConfig";
import Connection from "../../components/Connection";
import {  useAcceptConnectionMutation,
  useRejectConnectionMutation} from "../../Redux/Api/connection.api";
  import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
  import { useSendNotifcationMutation } from "../../Redux/Api/notification.api";


  

  
  import { toast } from "sonner";



interface NotificationPayload {
  id?: string; 
  title: string;
  body: string;
  senderUid:string  
  type: string;
  senderId?: string;
  senderName?: string;
  senderImage?: string;
  timestamp?: string;
}

const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);
  const { user } = useSelector((state: RootState) => state.userReducer);
  const [sendNotification] = useSendNotifcationMutation();

  
  const [reject] = useRejectConnectionMutation();
  const [accept] = useAcceptConnectionMutation();

  useEffect(() => {
    if (!user?.uid) return;

    

    const notificationRef = ref(database, `users/${user.uid}/notifications`);

    const unsubscribeDatabase = onValue(notificationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const notificationsFromDB = Object.entries(data).map(
          ([key, value]: [string, any]) => ({
            id: key,
            title: value.title || "No title",
            body: value.body || "No body",
            senderUid:value.senderUid,
            type: value.type || "info",
            senderId: value.senderId,
            senderName: value.senderName,
            senderImage: value.senderImage,
            timestamp: value.timestamp,
          })
        );
        setNotifications(notificationsFromDB); 
      } else {
        setNotifications([]);
      }
    });

    return () => {
      unsubscribeDatabase();
    };
  }, [user?.uid]);

  console.log(notifications,"notifications")




  const removeNotification = (id: string | undefined, index: number) => {
    if (id) {
      const notificationRef = ref(database, `users/${user?.uid}/notifications/${id}`);
      remove(notificationRef);
    }
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };


  type ApiResponse = {
    success: boolean;
    message: string;
    data?: any;
  };








  const acceptConnection = async(id: string | undefined, index: number) => {
    try {
    const senderId = notifications[0].senderId;
    const response = await accept(senderId);

    if (response.error) {
      const errorData = response.error as FetchBaseQueryError;
      toast.error((errorData.data as ApiResponse).message);
      return;
    }

    if (id) {
      const notificationRef = ref(database, `users/${user?.uid}/notifications/${id}`);
      remove(notificationRef);
    }

    interface NotificationData {
      userId: string;
      profileImage: string;
      fcmToken: string;
      name: string;
    }

    const notificationData: NotificationData | null = JSON.parse(
      localStorage.getItem("notificationData") || "null"
    );

    await sendNotification({
      token: user?.fcmToken,
      body: "Now you can connect with ",
      title: "Connection accepted",
      data: {
        type: "connection received",
        senderId: String(notifications[0].senderId),
        receiverId:String(notificationData?.userId),
        senderImage: String(notificationData?.profileImage),
        senderName: String(notificationData?.name),
      },
    });

    const notificationsRef = ref(
      database,
      `users/${notifications[0]?.senderUid}/notifications`
    );
    const notificationId = new Date().getTime().toString();


    setNotifications((prev) => prev.filter((_, i) => i !== index));
    toast.success("Connection Accepted successfully!");

     }catch (error) {
      toast.error("Failed to accept connection. Please try again later.");
    }

  }

  const cancelConnection = async(id: string | undefined, index: number) => {
    try {
      const senderId = notifications[0].senderId;
      const response = await reject(senderId);


      if (response.error) {
        const errorData = response.error as FetchBaseQueryError;
        toast.error((errorData.data as ApiResponse).message);
        return;
      }

      if (id) {
        const notificationRef = ref(database, `users/${user?.uid}/notifications/${id}`);
        remove(notificationRef);
      }

      setNotifications((prev) => prev.filter((_, i) => i !== index));
      toast.success("Connection canceled successfully!");
    } catch (error) {
      toast.error("Failed to cancel connection. Please try again later.");
    }
  }



  return (
    <div className="space-y-4">
      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        notifications.map((notification, index) => (
          <div key={notification.id} className="p-4 bg-white  border rounded-lg shadow-md ">
            <div className="flex justify-end">
             <button
              className="mt-2 text-red-500"
              onClick={() => removeNotification(notification.id, index)}
            >
              Remove
            </button>
            </div>
            {notification.type === "connection" && (
              <Connection
                senderImage={notification.senderImage ?? ""}
                senderName={notification.senderName ?? ""}
                AcceptButton={
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded"
                    onClick={() => acceptConnection(notification.id, index)}
                  >
                    Accept
                  </button>
                }
                RejectButton={
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded"
                    onClick={() => cancelConnection(notification.id, index)}
                  >
                    Reject
                  </button>
                }
              />
            )}
           
          </div>
        ))
      )}
    </div>
  );
};

export default Notification;
