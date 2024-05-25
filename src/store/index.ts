import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { editorsSlice } from "./slices/editorsSlice";
import { themeSlice } from "./slices/themeSlice";

const rootReducer = combineReducers({
    editors: editorsSlice.reducer,
    theme: themeSlice,
});

const store = configureStore({
    reducer: rootReducer
});

export { store };
