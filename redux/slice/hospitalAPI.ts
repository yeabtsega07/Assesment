import { ApiResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hospitalsAPI = createApi({
  reducerPath: "hospitalsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app" }),
  endpoints: (builder) => ({
    fetchHospitals: builder.query<ApiResponse, void>({
      query: () => ({
        url: '/api/v1/search?institutions=true&articles=false&doctors=false',
        method: 'POST'
      }),
    }),
    fetchHospitalsWithPagination: builder.query<ApiResponse, { from: number; size: number }>({
      query: ({ from, size }) => ({
        url: `/api/v1/search?institutions=true&articles=false&doctors=false&from=${from}&size=${size}`,
        method: 'POST'
      }),
    }),
    searchHospitals: builder.query<ApiResponse, string>({
      query: (keyword) => ({
        url: `/api/v1/search?keyword=${keyword}&institutions=true&articles=false&doctors=false`,
        method: 'POST'
      }),
    }),
  }),
});

export const { useFetchHospitalsQuery, useFetchHospitalsWithPaginationQuery, useSearchHospitalsQuery } = hospitalsAPI;
