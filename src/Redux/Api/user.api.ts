import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


interface LogoutResponse {

    success: boolean;
    message: string;
}

interface DeleteResponse {
  success: boolean;
  message: string;
}


console.log(import.meta.env.VITE_BASE_URL, 'url');



export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1/user/`,
    credentials: 'include',  
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).userReducer.accessToken;
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
   
      return headers;
    }, 
  }),
  tagTypes: ['User'],

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: 'registration',
        method: 'POST',
        body: user,
      }),

    }),

    verifyOtp:builder.mutation({
      query : (data)=> ({
        url:'activate-user',
        method:'POST',
        body: data
      })
    }),

    setPassword:builder.mutation({
      query : (data)=> ({
        url:'set-password',
        method:'POST',
        body: data
      })
    }),

     login: builder.mutation({
      query: (user) => ({
        url: 'login',
        method: 'POST',
        body: user, 
      }),
    }),

    forgotpassword:builder.mutation({
      query:(email)=>({
        url: 'forgot-password',
        method: 'POST',
        body: email
      })
    }),

    verify:builder.mutation({
      query:(data) => ({
        url: 'verify-otp',
        method: 'POST',
        body: data

      })
    }),

    resetpassword:builder.mutation({
      query:(data) =>({
        url: 'reset-password',
        method: 'POST',
        body: data

      })

    }),

    logoutUser: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: 'logout',
        method: 'GET',
      }),
    }),

    deleteUser: builder.mutation<DeleteResponse, void>({
      query:() => ({
        url: 'delete-user',
        method: 'DELETE',
        
      })
    }),

    updateFcmToken:builder.mutation({
      query:(data) => ({
        url: 'updateFcmToken',
        method: 'POST',
        body: data
      })
    }),

  }),

});

export const { useRegisterUserMutation,useVerifyOtpMutation,useSetPasswordMutation,useLoginMutation,useLogoutUserMutation,useForgotpasswordMutation,useVerifyMutation,useResetpasswordMutation,useDeleteUserMutation,useUpdateFcmTokenMutation} = userApi;
