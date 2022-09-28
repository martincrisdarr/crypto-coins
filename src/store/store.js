import { configureStore } from '@reduxjs/toolkit'
import cryptos from './features/cryptos/cryptosSlice'
export const store = configureStore({
  reducer: {
    cryptos
  },
})