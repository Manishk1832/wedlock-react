import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({
        baseUrl:  `${import.meta.env.VITE_BASE_URL}/api/v1/form/`,
        credentials: 'include',   // send cookies with request
        prepareHeaders: (headers, { getState }) => {
          const accessToken = (getState() as RootState).userReducer.accessToken;
          if (accessToken) {
            headers.set('Authorization', accessToken);
          }
          return headers;
        }
 }),
    
    tagTypes: ['form'],

    endpoints: (build) => ({
      personalDetials: build.mutation({
        query: (data) => ({
          url: 'personalDetails',
          method: 'POST',
          body: data
        }),
      
      }),
      qualificationDetails: build.mutation({
        query: (data) => ({
          url: 'qualificationDetails',
          method: 'POST',
          body: data
        }),
      
        }),

        locationDetails: build.mutation({
          query: (data) => ({
            url: 'locationDetails',
            method: 'POST',
            body: data
          }),
          }),

        otherDetails: build.mutation({
          query: (data) => ({
            url: 'otherDetails',
            method: 'POST',
            body: data
          }),
          }),

          profileImageUpload: build.mutation({
            query: (data) => ({
              url: 'profileImageUpload',
              method: 'POST',
              body: data
            }),
            }),
    }),

});
export const { usePersonalDetialsMutation, useQualificationDetailsMutation, useLocationDetailsMutation, useOtherDetailsMutation, useProfileImageUploadMutation } = formApi;