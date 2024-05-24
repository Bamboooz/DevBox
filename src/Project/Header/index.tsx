import React from "react";
import { LuAlignJustify, LuCommand } from "react-icons/lu";

import Button from "../../components/Button";
import { openInBrowser } from "../../utils/browser";

interface HeaderProps {
    navigationExpanded: boolean;
    setNavigationExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ navigationExpanded, setNavigationExpanded }) => {
    return (
        <div data-tauri-drag-region className="h-[48px] bg-background2 flex justify-between">
            <div className="h-full px-[4px] py-[6px]">
                <Button variant="expand" onClick={() => setNavigationExpanded(!navigationExpanded)}>
                    <LuAlignJustify className="text-neutral-300 text-[18px]" />
                </Button>
            </div>

            <div className="h-full flex justify-between items-center px-[11px] gap-[11px]">
                <div className="w-[1px] h-full bg-app-border" />

                <button className="group flex items-center justify-center gap-1 p-1 rounded-md hover:bg-nav-button-hover hover:active:bg-nav-button-active">
                    <LuCommand className="text-[14px] text-neutral-500 group-hover:text-neutral-100" />

                    <p className="text-[11px] mt-[1px] text-neutral-500 group-hover:text-neutral-100">Actions</p>

                    <p className="text-[11px] mt-[1px] text-neutral-600 group-hover:text-neutral-400">Ctrk + K</p>
                </button>

                <button onClick={() => openInBrowser("https://github.com/Bamboooz")} className="h-[28px] w-[28px] rounded-full border border-app-border hover:shadow-2xl">
                    <img src="src/pfp.png" className="w-full h-full rounded-full" />
                </button>
            </div>
        </div>
    );
};

export default Header;
