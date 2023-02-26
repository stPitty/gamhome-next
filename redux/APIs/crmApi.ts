import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const crmApi = createApi({
  reducerPath: "crmApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    sendContactData: builder.query({
      query: (body) => ({
        url: "crm/deal",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLazySendContactDataQuery } = crmApi;
