import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/user.reducer";
import { userApi } from "./Api/user.api";
import { profileApi } from "./Api/profile.api";
import {formApi} from  "./Api/form.api";
import { apiSlice } from "./Api/apiSlice";
import { checkoutApi } from "./Api/checkout.api";
import { planApi } from "./Api/plan.api";
import { connectionApi } from "./Api/connection.api";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Create a persist configuration for the user reducer
const persistConfig = {
    key: 'user',
    storage, // Use localStorage to persist the user state
    whitelist: ['accessToken', 'refreshToken', 'user', 'isPersonalFormFilled', 'isQualificationFormFilled', 'isOtherFormFilled', 'isLocationFormFilled', 'isImageFormFilled'], 
};
        
// Create a persisted reducer for the user state
const persistedUserReducer = persistReducer(persistConfig, userReducer.reducer);

// Configure the Redux store
export const store = configureStore({
    reducer: { 
        [profileApi.reducerPath]: profileApi.reducer,
        userReducer: persistedUserReducer, 
        [userApi.reducerPath]: userApi.reducer,
        [formApi.reducerPath]: formApi.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [planApi.reducerPath]: planApi.reducer,
        [checkoutApi.reducerPath]: checkoutApi.reducer,
        [connectionApi.reducerPath]: connectionApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(userApi.middleware, profileApi.middleware, formApi.middleware,apiSlice.middleware, planApi.middleware, checkoutApi.middleware,connectionApi.middleware),
});

// Create a persistor to handle persisting the store
export const persistor = persistStore(store);

const initializeApp = async () => {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
};

initializeApp();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
