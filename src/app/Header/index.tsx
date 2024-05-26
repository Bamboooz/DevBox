import React, { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";

import Button from "../../components/Button";
import ProfilePicture from "../../components/ProfilePicture";
import Actions from "./Actions";
import ProfileDropdown from "./ProfileDropdown";
import Breadcrumb from "../../components/Breadcrumb";
import { cn } from "../../utils/cn";

interface HeaderProps {
    navigationExpanded: boolean;
    setNavigationExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ navigationExpanded, setNavigationExpanded }) => {
    const [profileDropdownVisible, setProfileDropdownVisible] = useState<boolean>(false);

    return (
        <>
            <div data-tauri-drag-region className="h-[48px] bg-background2 flex justify-between">
                <div className="flex items-center justify-between gap-3">
                    <div className={cn("h-full px-[4px] py-[6px]", navigationExpanded ? "" : "")}>
                        <Button variant="expand" onClick={() => setNavigationExpanded(!navigationExpanded)}>
                            <LuAlignJustify className="text-neutral-300 text-[18px]" />
                        </Button>
                    </div>

                    <Breadcrumb relativePath="src/app/Header/index.tsx" />
                </div>

                <div className="h-full flex justify-between items-center px-[11px] gap-[11px]">
                    <div className="w-[1px] h-full bg-app-border" />

                    <Actions />

                    <button onClick={() => setProfileDropdownVisible(!profileDropdownVisible)} className="relative h-[28px] w-[28px] rounded-full hover:shadow-2xl">
                        <ProfilePicture url="src/assets/icons/pfp.png" />

                        <ProfileDropdown visible={profileDropdownVisible} setVisible={setProfileDropdownVisible} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
