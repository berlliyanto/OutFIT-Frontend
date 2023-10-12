import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: (): boolean => {
        const localDarkMode = localStorage.getItem('darkMode');
        return localDarkMode === 'true' ? true : false || false;
    },
    reducers: {
        toggleDarkMode: (state: boolean): boolean => {
            localStorage.setItem('darkMode', String(!state));
            return !state;
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;