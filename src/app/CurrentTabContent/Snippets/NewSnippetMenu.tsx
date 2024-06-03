import React, { useRef } from "react";
import { LuFile, LuGithub } from "react-icons/lu";

import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

interface NewSnippetMenuProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewSnippetMenu: React.FC<NewSnippetMenuProps> = ({ visible, setVisible }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(menuRef, () => setVisible(false));

    return (
        <>
            {visible &&
                <div className="size-full flex items-center justify-center bg-black fixed top-0 left-0 bg-opacity-10 z-40">
                    <div ref={menuRef} className="w-[520px] h-[280px] px-[40px] flex items-center justify-between bg-background2 border border-app-border shadow-2xl rounded-xl">
                        <div className="size-[200px] flex items-center justify-center bg-background border border-app-border rounded-md hover:shadow-2xl">
                            <LuFile className="size-[40%] text-neutral-300" />
                        </div>

                        <div className="size-[200px] flex items-center justify-center bg-background border border-app-border rounded-md hover:shadow-2xl">
                            <LuGithub className="size-[40%] text-neutral-300" />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default NewSnippetMenu;
