import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'

export const getCoins = createAsyncThunk('cryptos/getCoins', async ()=>{
  return await (fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res=> res.json()))
})

export const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState: cryptosAdapter.getInitialState({loading: false}),
  reducers:{ 
    
  },
  extraReducers: {
   [getCoins.pending](state) {
    state.loading = true
   },
   [getCoins.fulfilled](state, {payload}){
    state.loading = false
    cryptosAdapter.setAll(state, payload)
   },
   [getCoins.rejected](state) {
    state.loading = false
   }
  }
})

export const { setSearch } = cryptosSlice.actions

export const cryptosSelectors = cryptosAdapter.getSelectors(state => state.cryptos)

export const  {
  selectIds,
  selectEntities,
  selectById,
  selectTotal,
  selectAll
} = cryptosSelectors

export default cryptosSlice.reducer