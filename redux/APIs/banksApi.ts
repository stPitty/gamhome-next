import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const banksApi = createApi({
  reducerPath: "banksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/banksApi/",
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
