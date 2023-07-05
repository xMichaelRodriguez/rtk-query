/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResultApi } from "../interfaces";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    characters: builder.query<IResultApi,string>({
      query: () => "/character",
    }),
    locations: builder.query<IResultApi,string>({
      query: () => "/location",
    }),
    episodes: builder.query<IResultApi,string>({
      query: () => "/episode",
    }),
  }),
});

export const { useCharactersQuery, useLocationsQuery, useEpisodesQuery } =
  rickAndMortyApi;
