import { configureStore } from '@reduxjs/toolkit'
import cryptosReducer from '../features/cryptos/cryptosSlice'
export const store = configureStore({
  reducer: {
    cryptos: cryptosReducer
  },
})