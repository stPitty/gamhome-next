import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const checkApi = createApi({
  reducerPath: "checkApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/check" }),
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
    checkDocs: builder.query({
      query: (body) => ({
        url: "docs",
        method: "POST",
        body,
      }),
    }),
    freeDocs: builder.query({
      query: (body) => ({
        url: "freeDocs",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLazyCheckSubjectQuery,
  useLazyCheckPropertyQuery,
  useLazyConfirmQuery,
  useLazyCheckDocsQuery,
  useLazyFreeDocsQuery,
} = checkApi;
