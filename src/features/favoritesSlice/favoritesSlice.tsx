import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritesState {
  value: number[]
}

const initialState:FavoritesState = {value: []}

export const counterSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggledFavorites: (favorites, action: PayloadAction<number>) => {
      if (favorites.value.includes(action.payload)) favorites.value = favorites.value.filter((favorite) => favorite !== action.payload)
      else favorites.value.push(action.payload)
    }
  }
})

export const { toggledFavorites } = counterSlice.actions
export default counterSlice.reducer

