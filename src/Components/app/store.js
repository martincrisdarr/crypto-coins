import { configureStore } from '@reduxjs/toolkit'
import cryptosReducer from '../features/counter/cryptosSlice'
export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer
  },
})