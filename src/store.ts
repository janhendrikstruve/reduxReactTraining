// wie createStore (nimmt reducer und erstellt store), uebernimmt aber auch 
// die implementation von Redux Dev-Tools, Thunk und mehr
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { buildSlice } from '@reduxjs/toolkit/dist/query/core/buildSlice'
import { apiSlice } from './features/apiSlice/apiSlice'
import favoritesReducer from './features/favoritesSlice/favoritesSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  )
})

// export wichtiger types vom dispatch und vom State
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


