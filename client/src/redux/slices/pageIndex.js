import { createSlice } from "@reduxjs/toolkit"

export const pageIndexSlice = createSlice({
    name: 'activePage',
    initialState: {
        index: 0
    },
    reducers: {
        nextPageIndex: (state) => {
            state.index = state.index + 1
        },
        previousPageIndex: (state) => {
            state.index = state.index - 1
        }
    }
})

export const { nextPageIndex, previousPageIndex} = pageIndexSlice.actions;
export default pageIndexSlice.reducer;