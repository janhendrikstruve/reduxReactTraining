// wie createStore (nimmt reducer und erstellt store), uebernimmt aber auch 
// die implementation von Redux Dev-Tools, Thunk und mehr
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice/apiSlice'
import favoritesReducer from './features/favoritesSlice/favoritesSlice'
import changePageReducer from './features/changePageSlice/changePageSlice'
import detailCardSlice from './features/detailCardSlice/detailCardSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    changePage: changePageReducer,
    detailCard: detailCardSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  )
})

// export wichtiger types vom dispatch und vom State
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


