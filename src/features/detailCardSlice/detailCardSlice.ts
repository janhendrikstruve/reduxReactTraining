import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CharacterType } from '../../types'

interface InitialState {
  showCharacter: boolean
  characterdata: {
  id: number, 
  name: string
  status: string
  species: string
  image: string
}
}

const initialState: InitialState = {
  showCharacter: false,
  characterdata: {
    id: 0,
    name: '',
    status: '',
    species: '',
    image: ''
  }
}

const detailCardSlice = createSlice({
  name: 'detailCard',
  initialState,
  reducers: {
    setDisplayedCharacter: (card, action: PayloadAction<CharacterType>) => {
      card.characterdata = action.payload
      card.showCharacter = true
    },
    unsetDisplayedCharacter: (card) => {
      card.showCharacter = false
      card.characterdata = {
        id: 0,
        name: '',
        status: '',
        species: '',
        image: ''
      }
    }
  }
});

export const { setDisplayedCharacter, unsetDisplayedCharacter } = detailCardSlice.actions
export default detailCardSlice.reducer