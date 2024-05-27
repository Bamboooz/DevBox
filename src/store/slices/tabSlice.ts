import { createSlice } from "@reduxjs/toolkit";

import { TabTypes } from "../../types/tab";

const tabSlice = createSlice({
    name: "tab",
    initialState: {
        tab: TabTypes.HOME
    },
    reducers: {
        setTab: (state, action: { payload: TabTypes }) => {
            state.tab = action.payload;
        }
    }
});

export const { setTab } = tabSlice.actions;
export { tabSlice };
