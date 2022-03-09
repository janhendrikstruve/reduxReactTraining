// wie createStore (nimmt reducer und erstellt store), uebernimmt aber auch 
// die implementation von Redux Dev-Tools, Thunk und mehr
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice/apiSlice'
import counterReducer from './features/counterSlice/counterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  )
})

// export wichtiger types vom dispatch und vom State
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
