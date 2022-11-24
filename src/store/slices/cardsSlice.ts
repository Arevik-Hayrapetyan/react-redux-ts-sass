import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import jsonData from "../../fakeData.json"

interface CartState {
  id: number; name: string; category: string, lessonsCount:number, duration:number
}

interface CartItemsState extends Array<CartState>{}

 interface FilteredCardsState{
  cards:CartItemsState,
  filteredCards:CartItemsState
 }

const initialState: FilteredCardsState ={ cards:[...jsonData], filteredCards:[]}


export const cardsSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    filterData: (state, action: PayloadAction<string>) => {
      const filteredData = state.cards.filter(item => item.category === action.payload)
      state.filteredCards = filteredData
    },
   
  },
 
 
});

export const { filterData } = cardsSlice.actions;


export const selectFilteredData = (state: RootState) => state.cards.filteredCards


export default cardsSlice.reducer;
