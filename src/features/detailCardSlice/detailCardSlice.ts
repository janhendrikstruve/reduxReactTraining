import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  characterId: number,
  showCharacter: boolean
}

const initialState: InitialState = {
  characterId: 0,
  showCharacter: false
}

const detailCardSlice = createSlice({
  name: 'detailCard',
  initialState,
  reducers: {
    setDisplayedCharacter: (card, action: PayloadAction<number>) => {
      card.characterId = action.payload
    },
    isDisplayed: (card, action: PayloadAction<boolean>) => {
      card.showCharacter = action.payload
    }
  }
});

export const { setDisplayedCharacter, isDisplayed } = detailCardSlice.actions
export default detailCardSlice.reducer