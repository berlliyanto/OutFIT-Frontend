import { configureStore } from '@reduxjs/toolkit'
import darkModeSlice from './slice/darkModeSlice'
import authReducer from './slice/authSlice';
import autoFillEmailReducer from './slice/autoFillEmail'

const store = configureStore({
    reducer: {
        token: authReducer,
        darkMode: darkModeSlice,
        autoFillEmail: autoFillEmailReducer,
    },
})

const firstState = store.getState()
console.log('On Store' , firstState)

store.subscribe(() => {
    console.log('On Subscribe',store.getState())
})

export default store