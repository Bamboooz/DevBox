import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { snippetsSlice } from "./slices/snippetsSlice";
import { themeSlice } from "./slices/themeSlice";
import { tabSlice } from "./slices/tabSlice";

const rootReducer = combineReducers({
    tab: tabSlice.reducer,
    snippets: snippetsSlice.reducer,
    theme: themeSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer
});

export { store };
