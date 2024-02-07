import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchSlice = createAsyncThunk('users/getAllUsers', async (thunkApi) => {
//     const response = await fetch('url')
//     const data = await response.json();
//     return data;
// })
// + extraReducers ( builder ) addcase fulfiled pending canceled

const initialState = {
  isVisible: false,
};


const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        changeVisible: (state) => {
            state.isVisible = !state.isVisible
        }
    },
})


export const {changeVisible} = interfaceSlice.actions;
export default interfaceSlice.reducer;