import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchSlice = createAsyncThunk('users/getAllUsers', async (thunkApi) => {
//     const response = await fetch('url')
//     const data = await response.json();
//     return data;
// })
// + extraReducers ( builder ) addcase fulfiled pending canceled



const initialState = {
  isVisible: false,

  currentlyChosenNav: 0 // 0 - nothing, 1 - file, 2 - search
};

export type interfaceSliceType = { 
    isVisible: false | true
    currentlyChosenNav: 0 | 1 | 2
}


const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        changeVisible: (state) => {
            state.isVisible = !state.isVisible
        },

        choseNav: (state, { payload } : {payload: interfaceSliceType['currentlyChosenNav'] }) => {
            console.log("Runinng")
            if (payload === state.currentlyChosenNav) state.currentlyChosenNav = 0;
            else state.currentlyChosenNav = payload;
        }
    },
})


export const {changeVisible, choseNav} = interfaceSlice.actions;
export default interfaceSlice.reducer;