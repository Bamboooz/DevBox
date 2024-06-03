import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import NewSnippetMenu from "./NewSnippetMenu";

const NewSnippetButton: React.FC = () => {
    const [snippetMenuVisible, setSnippetMenuVisible] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setSnippetMenuVisible(true)} className="h-[150px] w-[150px] flex flex-col items-center justify-center gap-3 bg-page-item rounded-md border border-app-border hover:shadow-xl hover:active:bg-nav-button-hover">
                <LuPlus className="h-[30%] w-[30%] text-neutral-400" />
            </button>

            <NewSnippetMenu visible={snippetMenuVisible} setVisible={setSnippetMenuVisible} />
        </>
    );
};

export default NewSnippetButton;
