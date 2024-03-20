import { createSlice } from "@reduxjs/toolkit"

export const loginOptionSlice = createSlice({
    name: 'loginOption',
    initialState: {
        type: 'newUser'
    },
    reducers: {
        setLoginType: (state, action) => {
            state.type = action.payload;
        }
    }
})

export const { setLoginType } = loginOptionSlice.actions;
export default loginOptionSlice.reducer;