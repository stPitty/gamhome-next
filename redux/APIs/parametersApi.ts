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
        return getFormattedParams(baseQueryReturnValue).sort((a, b) => {
          if (a.type === "tag" && b.type === "tag") {
            return 10;
          }
          return b.name.localeCompare(a.name) - 10;
        });
      },
    }),
  }),
});

export const { useGetParametersByIdQuery } = parametersApi;
