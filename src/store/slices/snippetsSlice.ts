import { createSlice } from "@reduxjs/toolkit";

import { Snippet } from "../../types/snippet";

const snippetsSlice = createSlice({
    name: "snippets",
    initialState: {
        snippets: [] as Snippet[]
    },
    reducers: {
        addSnippet: (state, action: { payload: Snippet }) => {
            state.snippets.push(action.payload);
        },
        removeSnippet: (state, action) => {
            state.snippets = state.snippets.filter(snippet => snippet !== action.payload);
        }
    }
});

export const { addSnippet, removeSnippet } = snippetsSlice.actions;
export { snippetsSlice };
