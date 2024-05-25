import { createSlice } from "@reduxjs/toolkit";

import { Editor } from "../../types/editor";

const editorsSlice = createSlice({
    name: "editors",
    initialState: {
        editors: [] as Editor[]
    },
    reducers: {
        addEditor: (state, action: { payload: Editor}) => {
            state.editors.push(action.payload);
        },
        removeEditor: (state, action) => {
            state.editors = state.editors.filter(editor => editor !== action.payload);
        }
    }
});

export const { addEditor, removeEditor } = editorsSlice.actions;
export { editorsSlice };
