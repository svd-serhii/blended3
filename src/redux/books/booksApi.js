import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.apilayer.com/exchangerates_data",
  }),
  tagTypes: ["Exchange"],
  endpoints: (builder) => ({
    getExchange: builder.query({
      query: (base = "UAH") => {
        return {
          url: `/latest?symbols=UAH%2CUSD%2CEUR&base=${base}`,
          headers: { apikey: "zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y" },
        };
      },
    }),
  }),
});

export const { useGetExchangeQuery } = exchangeApi;

export default exchangeApi;

//   prepareHeaders: {  },
