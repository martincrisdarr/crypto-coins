import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}
export const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    setAddCrypto: (state,action) => {
      state.value.push(action.payload)
    }
  },
})

export const { setAddCrypto } = cryptosSlice.actions

export default cryptosSlice.reducer