import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const checkApi = createApi({
  reducerPath: "checkApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/check" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    checkSubject: builder.query({
      query: (body) => ({
        url: "subject",
        method: "POST",
        body,
      }),
    }),
    checkProperty: builder.query({
      query: (body) => ({
        url: "property",
        method: "POST",
        body,
      }),
    }),
    confirm: builder.query({
      query: (token) => ({
        url: `confirm?token=${token}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLazyCheckSubjectQuery,
  useLazyCheckPropertyQuery,
  useLazyConfirmQuery,
} = checkApi;
