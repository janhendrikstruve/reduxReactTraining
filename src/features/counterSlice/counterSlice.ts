// DUCKS Pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

// intialer State
const initialState: CounterState = {
  value: 0
}

// slice => erstellt actions und reducer
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (count) => {
      count.value++
    },
    decremented: (count) => {
      count.value--
    },
    incrementedByAmount: (count, action: PayloadAction<number>) => {
      count.value += action.payload
    }
  }
}) 

// actions werden exportet
export const { incremented, decremented, incrementedByAmount } = counterSlice.actions

// reducer wird default exportet
export default counterSlice.reducer

