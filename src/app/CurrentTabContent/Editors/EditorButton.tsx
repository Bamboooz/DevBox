import React from "react";

import { Editor } from "../../../types/editor";

interface EditorButtonProps {
    editor: Editor;
}

const EditorButton: React.FC<EditorButtonProps> = ({ editor }) => {
    return (
        <>
            <button onClick={editor.open_editor} className="h-[150px] w-[150px] flex flex-col items-center justify-center gap-3 bg-page-item rounded-md border border-app-border hover:shadow-xl hover:active:bg-nav-button-hover">
                <img src={editor.icon_path} className="h-[40%] w-[40%]" />

                <p className="text-neutral-300 text-[14px] max-w-[80%] text-center">{editor.name}</p>
            </button>
        </>
    );
};

export default EditorButton;
