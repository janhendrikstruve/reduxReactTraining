import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetchedDataType } from '../../types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: builder => ({
      getCharacters: builder.query<fetchedDataType, number>({
      query: (page: number) => `/character/?page=${page}` 
    }),
  })
})

export const { useGetCharactersQuery } = apiSlice

