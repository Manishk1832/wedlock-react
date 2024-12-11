import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


export const checkoutApi = createApi({
    reducerPath: 'checkoutApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/subscription/`,
        credentials: 'include', 
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).userReducer.accessToken;
            if (accessToken) {
              headers.set('Authorization', accessToken);
            }
            return headers;
          },
    }),
    tagTypes: ['checkout'],
    endpoints: (builder) => ({
        createCheckoutSession: builder.mutation({
            query: (planId: string) => ({
                url: 'createCheckoutSession',
                method: 'POST',
                body: { planId },
            }),
        }),

        paymentSuccess:builder.query({
            query: (session_id: string) => ({
                url: `payment-success/${session_id}`,
                method: 'GET',
            }),
        }),

        getSubscriptionHistory: builder.query<void, void>({
            query: () => ({
                url: 'getSubscriptionHistory',
                method: 'GET',
            }),
        })

    
    }),
})


export const { useCreateCheckoutSessionMutation ,usePaymentSuccessQuery,useGetSubscriptionHistoryQuery} = checkoutApi