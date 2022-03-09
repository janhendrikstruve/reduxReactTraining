// wie createStore (nimmt reducer und erstellt store), uebernimmt aber auch 
// die implementation von Redux Dev-Tools, Thunk und mehr
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// export wichtiger types vom dispatch und vom State
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
