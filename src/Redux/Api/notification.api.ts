import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


export const notificationApi = createApi({

    reducerPath: 'notificationApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/notifications/`,
        credentials: 'include',  // send cookies with request
        prepareHeaders: (headers, {getState}) => {
            const accessToken = (getState() as RootState).userReducer.accessToken;

            if (accessToken) {
                headers.set('Authorization', accessToken);
              }
              return headers;
            
        },
    }),
    tagTypes: ['notification'],

    endpoints: (builder) => ({

        sendNotifcation: builder.mutation({
            query: (data) => ({
                url: 'sendNotification',
                method: 'POST',
                body: data 
            
            }),
            invalidatesTags: ['notification']
        }),
       

    }),
});

export const { useSendNotifcationMutation } = notificationApi;


