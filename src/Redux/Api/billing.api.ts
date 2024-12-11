import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const billingApi = createApi({   
    reducerPath: 'billingApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/billing/`,
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).userReducer.accessToken;
            if (accessToken) {
              headers.set('Authorization', accessToken);
            }
            return headers;
          }, 
    }), 
    
    
    tagTypes: ['billing'],
    endpoints: (builder) => ({
        getBillingInfo: builder.query<void, void>({
            query: () => ({
                url: 'getBillingInfo',
                method: 'GET',
            }),
            providesTags: ['billing'],
        })
    })


})


export const { useGetBillingInfoQuery } = billingApi