import { configureStore } from "@reduxjs/toolkit";

const headerReducer = () => { };
const stocksReducer = () => { }
const graphsReducer = () => { }
export const store = configureStore({
  reducer: {
    header: headerReducer,
    stocks: stocksReducer,
    graphs: graphsReducer
  }
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
