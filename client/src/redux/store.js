import { configureStore } from '@reduxjs/toolkit'
import pageIndexReducer from './slices/pageIndex'
import loginOptionReducer from './slices/loginOption'

export const store = configureStore({
    reducer: {
        activePage: pageIndexReducer,
        loginOption: loginOptionReducer,
    }
})