import { createSlice } from "@reduxjs/toolkit";

const autoFillEmail = createSlice({
    name: 'fillEmail',
    initialState: localStorage.getItem('email') || "",
    reducers : {
        saveEmail: (state, action) => {
            localStorage.setItem('email', action.payload);
            state = action.payload;
            return state;
        }
    }
});

export const { saveEmail } = autoFillEmail.actions;
export default autoFillEmail.reducer;