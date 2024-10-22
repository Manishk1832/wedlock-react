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
                body: receiverId
            }),
            invalidatesTags: ['Connection'],
        }),

        cancelConnection: builder.mutation({
            query: ( connectionId ) => ({
                url: '/cancelConnection',
                method: 'POST',
                body: connectionId
            }),
            invalidatesTags: ['Connection'],
        }),
        removeConnection: builder.mutation({
            query: ( receiverId ) => ({
                url: '/removeConnection',
                method: 'POST',
                body: receiverId
            }),
            invalidatesTags: ['Connection'],
        }),

        acceptConnection: builder.mutation({
            query: ( receiverId ) => ({
                url: '/acceptConnection',
                method: 'POST',
                body: receiverId
            }),
            invalidatesTags: ['Connection'],
        }),

        rejectConnection: builder.mutation({
            query: ( receiverId ) => ({
                url: '/rejectConnection',
                method: 'POST',
                body: receiverId
            }),
            invalidatesTags: ['Connection'],
        })



    }),
})

export const { useCreateConnectionMutation, useCancelConnectionMutation,useAcceptConnectionMutation,useRejectConnectionMutation,useRemoveConnectionMutation } = connectionApi