import { apiSlice } from './apiSlice';


export const checkoutApi = apiSlice.injectEndpoints({
  
    endpoints: (builder) => ({
        createCheckoutSession: builder.mutation({
            query: (planId: string) => ({
                url: 'subscription/createCheckoutSession',
                method: 'POST',
                body: { planId },
            }),
        }),

        paymentSuccess:builder.query({
            query: (session_id: string) => ({
                url: `subscription/payment-success/${session_id}`,
                method: 'GET',
            }),
        }),

        getSubscriptionHistory: builder.query<void, void>({
            query: () => ({
                url: 'subscription/getSubscriptionHistory',
                method: 'GET',
            }),
        })

    
    }),
})


export const { useCreateCheckoutSessionMutation ,usePaymentSuccessQuery,useGetSubscriptionHistoryQuery} = checkoutApi