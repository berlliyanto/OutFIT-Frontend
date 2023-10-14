import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './slice/darkModeSlice'
import authReducer from './slice/authSlice';
import autoFillEmailReducer from './slice/autoFillEmail'

const store = configureStore({
    reducer: {
        token: authReducer,
        darkMode: darkModeReducer,
        autoFillEmail: autoFillEmailReducer,
    },
})

const state = store.getState()
console.log('On Store' , state)

store.subscribe(() => {
    console.log('On Subscribe',store.getState())
})

export default store