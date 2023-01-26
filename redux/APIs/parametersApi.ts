import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FormattedParametersData, ParametersData } from "./types";
import { getFormattedParams } from "./helpers";

export const parametersApi = createApi({
  reducerPath: "parametersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/adv/" }),
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getParametersById: builder.query<
      ParametersData,
      2 | 3 | 4 | null | undefined
    >({
      query: (id) => `parameters/${id}`,
      transformResponse: (
        baseQueryReturnValue: ParametersData
      ): FormattedParametersData => {
        let i = 1;
        return getFormattedParams(baseQueryReturnValue).sort(
          (a, b) => a.index - b.index
        );
      },
    }),
  }),
});

export const { useGetParametersByIdQuery } = parametersApi;
