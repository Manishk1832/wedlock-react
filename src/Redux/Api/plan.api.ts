
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


export const planApi = createApi({
    reducerPath: 'planApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/plan/`,
        credentials: 'include', 
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).userReducer.accessToken;
            if (accessToken) {
              headers.set('Authorization', accessToken);
            }
            return headers;
          },
    }),
    tagTypes: ['plan'],

    endpoints: (builder) => ({
        getPlans: builder.query<void, void> ({
            query: () => 'getAllPlans',
            providesTags: ['plan'],
        }),
    }),
})

export const { useGetPlansQuery } = planApi

