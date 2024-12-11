import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export interface ProfilePercentage {
  percentage: number;
}


 export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/profile/`,
    credentials: 'include', // send cookies with request
    
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).userReducer.accessToken;
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
      return headers;
    },
  }),
  tagTypes: ['profile'],
  endpoints: (builder) => ({
    myDetails: builder.query<void, void>({
      query: () => ({
        url: 'mydetails',
      }),
      providesTags: ['profile'],
    }),

    updatePersonalDetails: builder.mutation({
      query: (data) => ({
        url: 'updatePersonalDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updateFamilyDetails: builder.mutation({
      query: (data) => ({
        url: 'updateFamilyDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updatePersonalBackground: builder.mutation({
      query: (data) => ({
        url: 'updatePersonalBackground',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),
    
    updateReligiousBackground: builder.mutation({
      query: (data) => ({
        url: 'updateReligiousBackground',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updateLocationDetails: builder.mutation({
      query: (data) => ({
        url: 'updateLocationDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    updateEducationAndFinancialDetails: builder.mutation({
      query: (data) => ({
        url: 'updateEducationAndFinancialDetails',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    getProfiles : builder.query({
      query: () => ({
        url: 'getProfiles',
      }),
      providesTags: ['profile'],
    }),

    userByid: builder.mutation({
      query: (userId) => ({
        url: '/getUserDetails',
        method: 'POST',
        body: { userId },
      }),
      invalidatesTags: ['profile'],
      
    }),

    filterProfles: builder.mutation({
      query: (data) => ({
        url: 'filterProfiles',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['profile'],
    }),

    filterFieldCount: builder.query({
      query: (data) => ({
        url: 'filterFieldCount',
        method: 'POST',
        body: data,
      }),
      providesTags: ['profile'],
    }),
    getUserImage:builder.query<void, void>({
      query:()=> ({
        url:'/getuserImage',
        method:'GET',

      }),
      providesTags: ['profile'],
    }),
    
  getProfilePercentage:builder.query<ProfilePercentage, void>({
    query:()=> ({
      url:'/getProfilePercentage',
      method:'GET',
    })
    
  })


  }),
 
});

 export const { useMyDetailsQuery,useUpdateEducationAndFinancialDetailsMutation,useUpdateFamilyDetailsMutation,useUpdateLocationDetailsMutation,useUpdatePersonalBackgroundMutation,useUpdatePersonalDetailsMutation,useUpdateReligiousBackgroundMutation,useGetProfilesQuery,useUserByidMutation ,useFilterProflesMutation,useFilterFieldCountQuery,useGetUserImageQuery,useGetProfilePercentageQuery} = profileApi;

