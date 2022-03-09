import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Character {
    "info": {
      "count": number,
      "pages": number,
      "next": null | string,
      "prev": null | string
    },
    "results":
      {
        "id": number,
        "name": string,
        "status": string,
        "species": string,
        "type": string,
        "gender": string,
        "origin": {
          "name": string,
          "url": string
        },
        "location": {
          "name": string,
          "url": string
        },
        "image": string,
        "episode": string[],
        "url": string,
        "created": string
      }[]
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: builder => ({
      getCharacters: builder.query<Character, void>({
      query: () => '/character' 
    })
  })
})

export const { useGetCharactersQuery } = apiSlice
