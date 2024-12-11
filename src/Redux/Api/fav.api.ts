import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const favApi = createApi({
    reducerPath: 'favApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/profile/favorite/`,
        credentials: 'include',  // send cookies with request
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).userReducer.accessToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }

    }),
    
    tagTypes: ['fav'],


    endpoints: (builder) => ({
        toggleFav: builder.mutation({
            query: (favoritedUserId) => ({
                url: '/toggleFav',
                method: 'POST',
                body: { favoritedUserId: favoritedUserId }
            }),
            invalidatesTags: ['fav']
        }),

       getFav: builder.query({
            query: () => ({
                url: '/getFavProfile',
                method: 'GET'
            }),
            providesTags: ['fav']
        }),
      
    }),


})


export const { useToggleFavMutation,useGetFavQuery } = favApi