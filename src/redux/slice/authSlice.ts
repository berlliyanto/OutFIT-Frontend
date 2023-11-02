import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: localStorage.getItem('token') || "",
    reducers: {
        saveTokenAfterLoginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload);
            console.log(state);
            state = action.payload;
            return action.payload;
        },

        clearTokenAfterLogout: (state) => {
            localStorage.removeItem('token');
            console.log(state);
            state = "";
            return "";
        }
    }
});

export const { saveTokenAfterLoginSuccess, clearTokenAfterLogout } = authSlice.actions;
export default authSlice.reducer;