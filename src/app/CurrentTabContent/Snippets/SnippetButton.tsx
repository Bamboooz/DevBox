import React from "react";
import { SiCsharp } from "react-icons/si";

interface SnippetButtonProps {
    name: string;
}

const SnippetButton: React.FC<SnippetButtonProps> = ({ name }) => {
    return (
        <>
            <button className="h-[150px] w-[150px] flex flex-col items-center justify-center gap-3 bg-page-item rounded-md border border-app-border hover:shadow-xl hover:active:bg-nav-button-hover">
                <SiCsharp className="h-[30%] w-[30%] text-green-500" />

                <p className="text-neutral-300 text-[14px] max-w-[80%] text-center">{name}</p>
            </button>
        </>
    );
};

export default SnippetButton;
