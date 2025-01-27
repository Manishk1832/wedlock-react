import React, { useEffect, useState } from "react";
import { CiMap } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { FaSmoking } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { useUserByidMutation } from "../../Redux/Api/profile.api";
import { FaUserGraduate } from "react-icons/fa";
import {
  setConnectionStatus,
} from "../../Redux/Reducers/connection.reducer";
import {
  useGetConnectionStatusMutation,
  useCancelConnectionMutation,
  useRemoveConnectionMutation,
  useAcceptConnectionMutation,
} from "../../Redux/Api/connection.api";
import { useSendNotifcationMutation } from "../../Redux/Api/notification.api";
import { IoPersonAdd } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa6";
import { useCreateConnectionMutation } from "../../Redux/Api/connection.api";
import { FaUserXmark } from "react-icons/fa6";
import "../../font.css";
import Loading from "../Loading";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { RootState } from "./../../Redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface MatchProps {
  userId: string;
}

const Match: React.FC<MatchProps> = ({ userId }) => {
  const { user } = useSelector((state: RootState) => state.userReducer);

  const dispatch = useDispatch();

  const { connectionStatus, connectionType } = useSelector(
    (state: RootState) => state.connectionReducer
  );
 

  const [profileData, setProfileData] = useState<any>([]);
  const [isExclusive, setIsExclusive] = useState(false);

  const [userByid, { isLoading, isSuccess, isError }] = useUserByidMutation();
  const [cancel,{isLoading:isLoadingCancel}] = useCancelConnectionMutation();
  const [remove, { isLoading: isLoadingRemove }] = useRemoveConnectionMutation();
  const [accept, { isLoading: isLoadingAccept }] = useAcceptConnectionMutation();
  const [create, { isLoading: isLoadingConnection }] = useCreateConnectionMutation();
  const [sendNotification] = useSendNotifcationMutation();
  const [getConnectionStatus, { isLoading: isLoadingConnectionStatus }] =
    useGetConnectionStatusMutation();

  useEffect(() => {
    const isExclusive = localStorage.getItem("isExclusive");
    if (isExclusive === "true" || user?.usertype === "Exclusive") {
      setIsExclusive(true);
    }
    [];
  });

  const getBlurStyle = (
    currentUserType: string,
    targetUserType: string
  ): string => {
    if (currentUserType === "Standard" && targetUserType === "Standard") {
      return " blur-sm";
    }
    if (currentUserType === "Standard" && targetUserType === "Premium") {
      return "blur-sm";
    }
    if (currentUserType === "Standard" && targetUserType === "Exclusive") {
      return "blur-sm";
    }

    if (currentUserType === "Premium" && targetUserType === "Standard") {
      return "";
    }
    if (currentUserType === "Premium" && targetUserType === "Exclusive") {
      return "blur-sm";
    }

    return "";
  };


  interface NotificationData {
    userId: string;
    profileImage: string;
    fcmToken: string;
    name: string;
  }

  type ApiResponse = {
    success: boolean;
    message: string;
    data?: any;
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await userByid(userId).unwrap();
        setProfileData(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchProfileData();
  }, [userId]);

  const getStatus = async (userId: string) => {
    try {
      const response = await getConnectionStatus(userId);
      console.log(response.data.data);
      if (response.error) {
        const errorData = response.error as FetchBaseQueryError;
        toast.error((errorData.data as ApiResponse).message);
        return;
      }

      if (response.data.success === true) {
        dispatch(setConnectionStatus(response.data.data));
      }
    } catch (error) {
      console.error("Failed to fetch connection status:", error);
    }
  };

  const notificationData: NotificationData | null = JSON.parse(
    localStorage.getItem("notificationData") || "null"
  );

  const createConnection = async (userId: string) => {
    try {
      const response = await create(userId);

      if (response.error) {
        const errorData = response.error as FetchBaseQueryError;
        toast.error((errorData.data as ApiResponse).message);
        return;
      }

      if (!notificationData) {
        console.error("Notification data is not available");
        return;
      }

      await sendNotification({
        token: profileData[0]?.fcmToken,
        title: "Connection Request",
        body: "U have a new connection request",
        data: {
          type: "connection",
          receiverId: String(userId),
          receiverFCM: String(profileData[0]?.fcmToken),
          senderId: String(user?.userId),
          senderImage: String(notificationData?.profileImage),
          senderFCM: String(notificationData?.fcmToken),
          senderName: String(notificationData?.name),
        },
      });

      toast.success("Connection request sent successfully!");
      getStatus(userId);
    } catch (error) {
      toast.error("Failed to create connection. Please try again later.");
    }
  };

  const cancelConnection = async (userId: string) => {
    try {
      const recieverId = userId;
      const response = await cancel(recieverId);
      if (response.error) {
        const errorData = response.error as FetchBaseQueryError;
        toast.error((errorData.data as ApiResponse).message);
        return;
      }
      toast.success("Connection canceled successfully!");
      // Automatically refetch connection status after successful cancellation
      getStatus(userId);
    } catch (error) {
      toast.error("Failed to cancel connection. Please try again later.");
    }
  };

  const removeConnection = async (userId: string) => {
    try {
      const receiverId = userId;
      const response = await remove(receiverId);
      if (response.error) {
        const errorData = response.error as FetchBaseQueryError;
        toast.error((errorData.data as ApiResponse).message);
        return;
      }
      toast.success("Connection removed successfully!");
      getStatus(userId);
    } catch (error) {
      toast.error("failed to  remove connection. Please try again later.");
    }
  };

const acceptConnection = async (userId: string) => {
    try {
      const senderId = userId;
      const response = await accept(senderId);
      if (response.error) {
        const errorData = response.error as FetchBaseQueryError;
        toast.error((errorData.data as ApiResponse).message);
        return;
      }
      
      toast.success("Connection accepted successfully!");
    } catch (error) {
      toast.error("Failed to accept connection. Please try again later.");
    }
  };

  useEffect(() => {
    getStatus(userId);
  }, [userId]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Failed to load user data.</p>;
  }

  if (isSuccess && profileData.length === 0) {
    return <p>No user data found.</p>;
  }

  return (
    <div className="min-w-screen flex min-h-screen flex-col gap-4 md:gap-10 lg:flex-row">
      <div className="mb-4 md:grid grid-cols-1 gap-2 md:mb-0  auto-rows-[10rem] ">
        {profileData[0]?.profileImage.map((imageUrl: string, index: number) => (
          <img
            key={index}
            src={imageUrl}
            alt="profile image"
            className={`object-cover w-full h-full rounded-md ${getBlurStyle(
              user?.usertype || "",
              profileData[0].userType
            )}`}
          />
        ))}
      </div>
      <div className="col-span-1 xl:grid w-full md:col-span-2 gap-10">
        <div className="col-span-1 mb-4 xl:mb-0 rounded-xl bg-white p-6 md:col-span-2   md:w-auto  xl:h-[22rem]">
          <div className="self-start text-sm font-semibold  leading-5 text-zinc-900">
            <h1>Basic & Lifestyle</h1>
          </div>

          <div className="mt-2.5 flex flex-wrap items-center gap-2.5 self-start text-base font-medium leading-4 text-slate-900">
            <div
              className={`self-stretch text-xl font-bold leading-10  ${
                isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
              }
 lg:text-3xl`}
            >
              <h1>
                {profileData[0]?.basic_and_lifestye?.displayName ||
                  profileData[0]?.basic_and_lifestye?.firstName +
                    " " +
                    profileData[0]?.basic_and_lifestye?.lastName}{" "}
              </h1>
            </div>
            <div className="text-md my-auto justify-center  self-stretch whitespace-nowrap rounded-[100px] bg-orange-100 px-1 py-1.5 text-center capitalize tracking-normal md:px-3 ">
              <p> {profileData[0]?.basic_and_lifestye?.gender}</p>
            </div>
            <div className=" my-auto text-md justify-center self-stretch whitespace-nowrap rounded-[100px] bg-orange-100 px-1 py-1.5 text-center capitalize trackingl md:px-3">
              {profileData[0]?.basic_and_lifestye?.age}
            </div>

            <div>
              {connectionType === "receiver" && (
                <div className="flex items-center justify-center gap-2">
                  {connectionStatus === "pending" && (
                    <>
                      <button
                        onClick={() => acceptConnection(userId)}
                        className="rounded-[0.5rem] bg-[#007EAF] px-4 py-2 text-white"
                      >
                        {
                          isLoadingAccept ? (
                            <FaSpinner className="animate-spin" />
                          ): (

                             "Confirm request"
                            
                          )

                        }

                      </button>
                      <button
                        onClick={() => removeConnection(userId)}
                        className="rounded-full bg-red-600 px-4 py-2 text-white w-12"
                      >
                        {isLoadingRemove ? (
                          <FaSpinner className="animate-spin" />
                        ) : (
                          <FaUserXmark />
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}

              {connectionType === "sender" && (
                <div className="flex items-center justify-center gap-2">
                  {connectionStatus === "pending" && (
                    <>
                      <div className="rounded-[0.5rem] bg-gray-400 px-4 py-2 text-white">
                        
                       Request Sent

                      </div>
                      <button
                        onClick={() => cancelConnection(userId)}
                        className="rounded-full bg-red-600 px-4 py-2 text-white w-12"
                      >
                        {isLoadingCancel ? (
                          <FaSpinner className="animate-spin" />
                        ) : (
                          <FaUserXmark />
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}

              {(connectionType === "receiver" || connectionType === "sender") &&
                connectionStatus === "accepted" && (
                  <div className="flex items-center justify-center gap-2">
                    <div className="rounded-[0.5rem] bg-gray-400 px-4 py-2 text-white">
                    {
                          isLoadingConnectionStatus && (
                            <FaSpinner className="animate-spin" /> 
                          )
                          
                        }
                      Connected
                    </div>
                    <button
                      onClick={() => removeConnection(userId)}
                      className="rounded-full bg-red-600 px-4 py-2 text-white w-12"
                    >
                      {isLoadingRemove ? (
                        <FaSpinner className="animate-spin" />
                      ) : (
                        <FaUserXmark />
                      )}
                    </button>
                  </div>
                )}

              {connectionType === "none" &&
                connectionStatus !== "pending" &&
                connectionStatus !== "accepted" && (
                  <button
                    onClick={() => createConnection(userId)}
                    className={`rounded-[0.5rem] ${
                      isExclusive ? "bg-[#60457E]" : "bg-[#007EAF]"
                    } px-4 py-2 text-white`}
                  >
                    {isLoadingConnection  ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <div className="flex items-center gap-2">
                        Connect <IoPersonAdd />
                      </div>
                    )}
                  </button>
                )}
            </div>
          </div>

          <div className="mt-6 flex flex-col rounded-xl bg-cyan-600 bg-opacity-20 px-6 py-3 max-md:max-w-full max-md:px-5">
            <div className="text-base font-bold leading-6 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full">
              About{" "}
              {profileData[0]?.basic_and_lifestye?.displayName ||
                profileData[0]?.basic_and_lifestye?.firstName +
                  " " +
                  profileData[0]?.basic_and_lifestye?.lastName}
            </div>
            <div className="mt-4 text-sm leading-7 tracking-wide text-slate-600 max-md:max-w-full md:text-lg">
              <p> {profileData[0]?.basic_and_lifestye?.about}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col max-md:max-w-full md:px-5">
            <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div
                className="text-md flex-1 font-normal leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full md:text-lg"
                style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
              >
                Religion
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                {profileData[0]?.basic_and_lifestye?.religion}
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-0 font-normal max-md:flex-wrap">
              <div
                className="text-md flex-1 leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full md:text-lg"
                style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
              >
                Marital status
              </div>
              <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                {profileData[0]?.basic_and_lifestye?.maritalStatus}
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-0 max-md:flex-wrap">
              <div
                className="text-md flex-1 font-normal leading-8 tracking-wide text-gray-900 text-opacity-90 max-md:max-w-full md:text-lg"
                style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
              >
                Posted By
              </div>
              <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                {profileData[0]?.basic_and_lifestye?.postedBy}
              </div>
            </div>
          </div>
        </div>

        <div className="w-75% mb-4  xl:mb-0 flex flex-col rounded-xl bg-white md:w-auto h-[17rem]">
          {/* <div className="flex flex-col pb-6 bg-white rounded-xl shadow-sm max-md:max-w-full"> */}
          <div
            className={`w-full justify-center border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide  ${
              isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
            } max-md:max-w-full max-md:px-5 md:text-xl font-Proxima-Nova-Bold`}
          >
            Family details
          </div>
          <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5 md:mb-0">
            <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Father occupation
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                {profileData[0]?.family_details?.fatherOccupation}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Mother occupation
              </div>
              <div className="justify-center self-start rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                {profileData[0]?.family_details?.motherOccupation}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Number of siblings
              </div>
              <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                {profileData[0]?.family_details?.numberOfSiblings}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Living with family
              </div>
              <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                {profileData[0]?.family_details?.livingWithFamily}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="row-span-3 lg:row-span-3 mb-4  xl:mb-0 rounded-xl bg-white ">
          <div className="flex flex-col rounded-xl bg-white pb-6 shadow-sm">
            <div
              className={`justify-center border-b font-Proxima-Nova-Bold border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide  ${
                isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
              } max-md:px-5 md:text-xl`}
            >
              Personal Background
            </div>
            <div className="mt-6 flex flex-col px-6 gap-4 max-md:px-5">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  <CiMap />
                </div>
                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Height
                </div>
              </div>

              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-blue-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.height}
              </div>
              <div className="mt-6 flex items-center gap-1 whitespace-nowrap">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Weight
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-blue-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.weight}
              </div>
              <div className="mt-6 flex items-center gap-1">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Body Type
                </div>
              </div>
              <div className="text-md ml-8 mt-2 flex justify-center gap-1.5 self-start rounded-[100px] border border-solid border-gray-200 bg-blue-50 bg-opacity-50 px-5 py-2 font-medium capitalize leading-7 text-cyan-600 max-md:ml-2.5 md:py-4 md:text-xl">
                {profileData[0]?.personal_background?.bodyType}
              </div>
              <div className="mt-6 flex items-center gap-1 whitespace-nowrap text-xl leading-8 tracking-wide text-slate-600">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  <IoLanguage />
                </div>

                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Language
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center font-medium capitalize leading-7 text-pink-400 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.language}
              </div>
              <div className="mt-6 flex items-center gap-1 text-xl leading-8 tracking-wide text-slate-600">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  {" "}
                  <FaSmoking />
                </div>
                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Smoking habbits
                </div>
              </div>
              <div className="text-md ml-9 mt-2 justify-center self-start rounded-[100px] bg-green-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-green-700 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.smokingHabbit}
              </div>
              <div className="mt-6 flex items-center gap-1 text-xl leading-8 tracking-wide text-slate-600">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  {" "}
                  <FaWineGlassAlt />{" "}
                </div>

                <div className="text-lg leading-8 text-slate-600 md:text-xl">
                  Drinking habbit
                </div>
              </div>
              <div className="text-md ml-7 mt-2 justify-center self-start rounded-[100px] bg-gray-200 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.drinkingHabbit}
              </div>
              <div className="mt-6 flex items-center gap-1 whitespace-nowrap">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Diet
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start whitespace-nowrap rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.diet}
              </div>
              <div className="mt-6 flex items-center gap-2 whitespace-nowrap">
                <div
                  className={`text-xl leading-8 ${
                    isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                  } md:text-3xl`}
                >
                  <CiMap />
                </div>
                <div className="text-lg leading-8 tracking-wide text-slate-600 md:text-xl">
                  Complexion
                </div>
              </div>
              <div className="text-md ml-8 mt-2 justify-center self-start rounded-[100px] bg-neutral-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 max-md:ml-2.5 md:text-xl">
                {profileData[0]?.personal_background?.complexion}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[31rem] md:h-[28rem] mb-4 xl:mb-0 rounded-xl bg-white">
          <div className="flex h-[28rem] flex-col rounded-xl bg-white pb-6 shadow-sm max-md:max-w-full">
            <div
              className={`justify-center border-b font-Proxima-Nova-Bold border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide  ${
                isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
              } max-md:max-w-full max-md:px-5 md:text-xl`}
            >
              Religious Background
            </div>
            <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5">
              <div className="flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Religion
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                  {profileData[0]?.religious_background?.religion}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
                <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Sub community
                </div>
                <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                  {profileData[0]?.religious_background?.subCommunity}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-0 font-normal max-md:flex-wrap">
                <div className="text-md flex-1 leading-8 tracking-wide text-slate-600 md:text-xl">
                  Community
                </div>
                <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                  {profileData[0]?.religious_background?.community}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Gothra / Gothram
                </div>
                <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                  {profileData[0]?.religious_background?.gotra}
                </div>
              </div>
              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Date of Birth
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                  {profileData[0]?.religious_background?.dateOfBirth}
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Time of Birth
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                  {profileData[0]?.religious_background?.timeOfBirth}
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Place of Birth
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                  {profileData[0]?.religious_background?.placeOfBirth}
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                  Mother Tongue
                </div>
                <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                  {profileData[0]?.religious_background?.motherTongue}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto py-4  rounded-xl mb-4 xl:mb-0 bg-white">
          <div
            className={`justify-center border-b border-solid font-Proxima-Nova-Bold border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide  ${
              isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
            } max-md:max-w-full max-md:px-5 md:text-xl`}
          >
            Location Background
          </div>
          <div className="mt-6 flex flex-col px-6 max-md:max-w-full max-md:px-5">
          <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Country
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                {profileData[0]?.location_background?.country}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                State
              </div>
              <div className="justify-center mb-4 self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                {profileData[0]?.location_background?.state ||
                  "Not Specified"}
              </div>
            </div>
            <div className="flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Current location
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-blue-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-blue-600">
                {profileData[0]?.location_background?.currentLocation}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                City of residence
              </div>
              <div className="justify-center self-start rounded-[100px] bg-purple-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-violet-600">
                {profileData[0]?.location_background?.cityOfResidence ||
                  "Not Specified"}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-0 max-md:flex-wrap">
              <div className="text-md flex-1 font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Nationality
              </div>
              <div className="justify-center self-start rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-slate-900">
                {profileData[0]?.location_background?.nationality}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Citizenship
              </div>
              <div className="justify-center self-start rounded-[100px] bg-pink-50 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-pink-400">
                {profileData[0]?.location_background?.citizenShip}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-md font-normal leading-8 tracking-wide text-slate-600 md:text-xl">
                Residency visa status
              </div>
              <div className="justify-center self-start whitespace-nowrap rounded-[100px] bg-green-100 px-3 py-1.5 text-center text-base font-medium capitalize leading-4 tracking-normal text-green-700">
                {profileData[0]?.location_background?.residencyVisaStatus}
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto py-4 rounded-xl">
          <div className=" flex max-w-[499px] flex-col pb-9 leading-8 text-slate-900">
            <div
              className={`w-full text-lg font-Proxima-Nova-Bold leading-[110%]  ${
                isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
              } max-md:max-w-full md:text-xl`}
            >
              Interest and hobbies
            </div>
            <div className="mt-4 flex gap-2.5 whitespace-nowrap text-center capitalize tracking-wide max-md:pr-5 md:flex-wrap">
              {profileData[0]?.interest_and_hobbies?.map((interest: string) => (
                <div
                  key={interest}
                  className="justify-center rounded-[100px] bg-gray-200 px-3 py-1.5"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-58 rounded-xl bg-white mb-5">
          <div className="flex flex-col  rounded-xl border border-solid border-gray-200 bg-white pb-6 shadow-sm">
            <div
              className={`justify-center font-Proxima-Nova-Bold border-b border-solid border-zinc-300 px-6 py-4 text-lg leading-6 tracking-wide  ${
                isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
              } max-md:px-5 md:text-xl`}
            >
              Education and financial
            </div>
            <div className="mt-6 flex flex-col px-6 max-md:px-5">
              <div className="flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span
                    className={`${
                      isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                    }`}
                  >
                    <FaUserGraduate />
                  </span>
                  <div>Qualification</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-sm font-medium capitalize leading-7 text-slate-900 md:text-md text-[12px]">
                  {profileData[0]?.education_and_financial?.qualification}
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span
                    className={`${
                      isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                    }`}
                  >
                    <FaUserGraduate />
                  </span>
                  <div>Occupation</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center text-sm font-medium capitalize leading-7 text-slate-900 md:text-md text-[12px]">
                  {profileData[0]?.education_and_financial?.occupation}
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-2 whitespace-nowrap pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-between gap-2 self-start leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span
                    className={`${
                      isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                    }`}
                  >
                    <FaUserGraduate />
                  </span>
                  <div>Working Status</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 md:text-md text-[12px]">
                  {profileData[0]?.education_and_financial?.workingStatus}
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-2 pr-8 max-md:pr-5">
                <div className="text-md flex items-center justify-around gap-2 self-start whitespace-nowrap leading-8 tracking-wide text-slate-600 md:text-xl">
                  <span
                    className={`${
                      isExclusive ? "text-[#60457E]" : "text-[#007EAF]"
                    }`}
                  >
                    <FaUserGraduate />
                  </span>
                  <div>Income</div>
                </div>
                <div className="justify-center rounded-[100px] bg-orange-100 px-3 py-1.5 text-center font-medium capitalize leading-7 text-slate-900 md:text-md text-[12px]">
                  <span className="">
                    {profileData[0]?.education_and_financial?.income}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
