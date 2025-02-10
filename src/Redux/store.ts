import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/user.reducer";
import connectionSlice from "./Reducers/connection.reducer";
import { apiSlice } from "./Api/apiSlice";
import { notificationReducer } from "./Reducers/notification.reducers";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userReducer: userReducer.reducer,
    connectionReducer: connectionSlice.reducer,
    notificationReducer: notificationReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
