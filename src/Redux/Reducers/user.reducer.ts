import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const accessToken = Cookies.get("access_token") || null;
const refreshToken = Cookies.get("refresh_token") || null;

const activationToken = Cookies.get("activationToken") || null;
const token = Cookies.get("token") || null;

interface User {
  id: number;
  uid: string;
  userStatus: boolean;
  fcmToken: string;
  userId: string;
  email: string;
  otp: string | null;
  password: string;
  usertype: string;
  isVerified: boolean;
  isPersonalFormFilled: boolean;
  isQualificationFormFilled: boolean;
  isLocationFormFilled: boolean;
  isOtherFormFilled: boolean;
  isImageFormFilled: boolean;
  role: string;
  createdAt: string; // Consider using Date if you intend to handle these as Date objects
  updatedAt: string; // Same as above
}

interface InitialState {
  loading: boolean;
  user: User | null;
  notificationData: any | null;
  accessToken: string | null;
  refreshToken: string | null;
  activationToken: string | null;
  token: string | null;
  isPersonalFormFilled: boolean;
  isQualificationFormFilled: boolean;
  isOtherFormFilled: boolean;
  isLocationFormFilled: boolean;
  isImageFormFilled: boolean;
  myDetails: Array<any> | null;
}



const initialState : InitialState = {
  loading:true,
  user: null,
  notificationData: null,
  accessToken: accessToken || null,
  refreshToken: refreshToken || null,
  activationToken: activationToken,
  token: token,
  isPersonalFormFilled: false,
  isQualificationFormFilled: false,
  isOtherFormFilled: false,
  isLocationFormFilled: false,
  isImageFormFilled: false,
  myDetails: null,
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setActivationToken: (state, action) => {
      const activationToken = (state.activationToken = action.payload);
      Cookies.set("activationToken", activationToken);
    },


    setUser: (state, action) => {
      state.loading = false;
      const {
        user,
        accessToken,
        refreshToken,
        isImageFormFilled,
        isLocationFormFilled,
        isPersonalFormFilled,
        isQualificationFormFilled,
        isOtherFormFilled,
      } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      state.isLocationFormFilled = user?.isLocationFormFilled || isLocationFormFilled || false;
      state.isImageFormFilled = user?.isImageFormFilled || isImageFormFilled || false;
      state.isPersonalFormFilled = user?.isPersonalFormFilled || isPersonalFormFilled || false;
      state.isQualificationFormFilled =user?.isQualificationFormFilled || isQualificationFormFilled || false;
      state.isOtherFormFilled = user?.isOtherFormFilled || isOtherFormFilled || false;

    },

    setCredentials: (state, action) => {
      state.accessToken = action.payload;
    },

    setNotificationData: (state, action) => {
      state.notificationData = action.payload;
    },

    setMyDetails: (state, action) => {
      state.myDetails = action.payload;
    },

    setUserType: (state, action) => {
      if (state.user) {
        state.user.usertype = action.payload;
      }
    },

    logout: (state) => {
      state.user = initialState.user;
      state.accessToken = null;
      state.refreshToken = null;
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      localStorage.clear();
    },
  },
});

export const { setUser,setCredentials,  logout, setActivationToken ,setNotificationData,setUserType,setMyDetails} =
  userSlice.actions;
export default userSlice;
