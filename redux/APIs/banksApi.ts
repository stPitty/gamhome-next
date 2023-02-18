import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const banksApi = createApi({
  reducerPath: "banksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://m2.ru/api/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
      );
      headers.set("Access-Control-Allow-Credentials", "true");
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getBanks: builder.mutation({
      query: (body) => ({
        url: "mortgage-calculator-api/v2/list-minimal-banks-offers-by-params",
        method: "POST",
        body,
      }),
    }),
    getRegions: builder.query({
      query: () => "mortgage/v2/regions",
    }),
  }),
});

export const { useGetBanksMutation, useGetRegionsQuery } = banksApi;
