import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "dark-default"
    },
    reducers: {
        setTheme: (state, action: { payload: string }) => {
            state.theme = action.payload;
        }
    }
});

export const { setTheme } = themeSlice.actions;
export { themeSlice };
