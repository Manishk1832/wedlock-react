import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


export const connectionApi = createApi({
    reducerPath: 'connectionApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/connection/`,
        credentials: 'include',  // send cookies with request
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).userReducer.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Connection'],
    endpoints: (builder) => ({
      createConnection: builder.mutation({
            query: ( receiverId ) => ({
                url: '/addConnection',
                method: 'POST',
                body: { receiverId: receiverId }    
            }),
            invalidatesTags: ['Connection'],
        }),

        cancelConnection: builder.mutation({
            query: ( receiverId ) => ({
                url: '/cancelConnection',
                method: 'POST',
                body: {receiverId: receiverId}
            }),
            invalidatesTags: ['Connection'],
        }),
        removeConnection: builder.mutation({
            query: ( receiverId ) => ({
                url: '/removeConnection',
                method: 'POST',
                body:  {receiverId: receiverId}
            }),
            invalidatesTags: ['Connection'],
        }),

        acceptConnection: builder.mutation({
            query: ( senderId ) => ({
                url: '/acceptConnection',
                method: 'POST',
                body: {senderId: senderId}
            }),
            invalidatesTags: ['Connection'],
        }),

        rejectConnection: builder.mutation({
            query: ( senderId ) => ({
                url: '/rejectConnection',
                method: 'POST',
                body: {senderId: senderId}
            }),
            invalidatesTags: ['Connection'],
        }),

        getConnectionStatus: builder.mutation({
            query: ( userId ) => ({
                url: '/getConnectionStatus',
                method: 'POST',
                body: {userId: userId}
            }),
            invalidatesTags: ['Connection'],
        }),

        



    }),
})

export const { useCreateConnectionMutation, useCancelConnectionMutation,useAcceptConnectionMutation,useRejectConnectionMutation,useRemoveConnectionMutation,useGetConnectionStatusMutation } = connectionApi