import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { editorsSlice } from "./slices/editorsSlice";
import { themeSlice } from "./slices/themeSlice";
import { tabSlice } from "./slices/tabSlice";

const rootReducer = combineReducers({
    tab: tabSlice.reducer,
    editors: editorsSlice.reducer,
    theme: themeSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer
});

export { store };
