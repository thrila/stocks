import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface HeaderState {
  toggle: boolean
}

const initialState: HeaderState = ({
  toggle: false
})

export const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    openHeader: (state) => {
      state.toggle = true
    },
    closeHeader: (state) => {
      state.toggle = false
    }
  }
})

const { openHeader, closeHeader } = HeaderSlice.actions



export default HeaderSlice.reducer
