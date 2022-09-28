import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllQuery } from '../../api/cryptos.api';
export const getAllCryptos = createAsyncThunk('cryptos/getCoins',  async (criteria, { rejectWithValue }) => {
    try {
      const query = await getAllQuery();
      return query.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
)

export const cryptos = createSlice({
  name: 'cryptos',
  initialState: {
    cryptos: [],
    cryptoSelected: null,
    status: 'idle',
    isFetching: false,
  },
  reducers:{ 
    filterCryptos(state, {payload}) {
      return {
        ...state,
        cryptos: payload
      }
    },
    selectCrypto(state, {payload}){
      const index = state.cryptos.findIndex((elem) => elem.id == payload)
      return {
        ...state,
        cryptoSelected: state.cryptos[index]
      }
    }
  },
  extraReducers: {
   [getAllCryptos.pending](state, action) {
     state.status = 'pending'
     state.isFetching = true
    },
    [getAllCryptos.fulfilled](state, action){
       state.status = 'completed'
      state.isFetching = false
      state.cryptos = action.payload
    },
    [getAllCryptos.rejected](state, action) {
    state.status = 'rejected'
    state.isFetching = false
   }
  }
})

export const { filterCryptos, selectCrypto } = cryptos.actions
export default cryptos.reducer