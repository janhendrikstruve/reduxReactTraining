import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  value: number
}

const initialState = {
  value: 1
}

const changePageSlice = createSlice({
  name: 'nextPage',
  initialState,
  reducers: {
    nextPage: (page) => {
      page.value++
    },
    previousPage: (page) => {
      page.value--
    }
  }
});

export const { previousPage, nextPage } = changePageSlice.actions
export default changePageSlice.reducer