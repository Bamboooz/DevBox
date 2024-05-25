import React from "react";
import { open } from "@tauri-apps/api/dialog";
import { LuPlus } from "react-icons/lu";

import { Editor } from "../../../types/editor";

interface NewEditorButtonProps {
    setEditors: React.Dispatch<React.SetStateAction<Editor[]>>;
}

const NewEditorButton: React.FC<NewEditorButtonProps> = ({ setEditors }) => {
    async function newEditor() {
        const selectedEditor = await open({
            multiple: false
        });

        if (selectedEditor) {
            setEditors(prevEditors => [...prevEditors, new Editor(selectedEditor as string)]);
        }
    }

    return (
        <>
            <button onClick={newEditor} className="h-[150px] w-[150px] flex flex-col items-center justify-center gap-3 bg-page-item rounded-md border border-app-border hover:shadow-xl hover:active:bg-nav-button-hover">
                <LuPlus className="h-[30%] w-[30%] text-neutral-400" />
            </button>
        </>
    );
};

export default NewEditorButton;
