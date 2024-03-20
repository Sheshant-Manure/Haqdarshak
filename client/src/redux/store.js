import { configureStore } from '@reduxjs/toolkit'
import pageIndexReducer from './slices/pageIndex'

export const store = configureStore({
    reducer: {
        activePage: pageIndexReducer
    }
})