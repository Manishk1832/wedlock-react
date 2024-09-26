import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const accessToken = Cookies.get("access_token") || null;
const refreshToken = Cookies.get("refresh_token") || null;

const activationToken = Cookies.get("activationToken") || null;
const token = Cookies.get("token") || null;

const initialState = {
  loading:true,
  user: null,
  accessToken: accessToken || null,
  refreshToken: refreshToken || null,
  activationToken: activationToken,
  token: token,
  isPersonalFormFilled: false,
  isQualificationFormFilled: false,
  isOtherFormFilled: false,
  isLocationFormFilled: false,
  isImageFormFilled: false,
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

    //   Cookies.set( "isLocationFormFilled",String(state.isLocationFormFilled ?? false));
    //   Cookies.set("isImageFormFilled",String(state.isImageFormFilled ?? false));
    //   Cookies.set( "isPersonalFormFilled", String(state.isPersonalFormFilled ?? false));
    //   Cookies.set("isQualificationFormFilled",String(state.isQualificationFormFilled ?? false) );
    //   Cookies.set("isOtherFormFilled",String(state.isOtherFormFilled ?? false));
    },

    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },

    logout: (state) => {
      state.user = initialState.user;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setUser, setRefreshToken, logout, setActivationToken } =
  userSlice.actions;
export default userSlice;
