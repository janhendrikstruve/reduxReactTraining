export interface CharacterType {
  id: number,
  name: string
  status: string
  species: string
  image: string
}

export interface fetchedDataType {
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

export interface fetchedCharacterType {
      id: number,
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
}