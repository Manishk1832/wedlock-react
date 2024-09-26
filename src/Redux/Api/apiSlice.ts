import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/user/`,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        refreshToken : builder.query({
            query : () => ({
                url : "refresh",
                method : "GET"
            })
        })
    }),
});

export const {useRefreshTokenQuery} = apiSlice