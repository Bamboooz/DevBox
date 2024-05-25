import React, { useRef, useState } from "react";
import { LuHome, LuSettings, LuAppWindow, LuPackage, LuCode2, LuSearch } from "react-icons/lu";

import { cn } from "../../utils/cn";
import Button from "../../components/Button";
import { TabTypes } from "../../types/tab";
import NavigationPageButton from "./NavigationPageButton";
import NavigationPageDropdown from "./NavigationPageDropdown";

interface NavigationProps {
    tab: TabTypes;
    setTab: React.Dispatch<React.SetStateAction<TabTypes>>;
    navigationExpanded: boolean;
    setNavigationExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ tab, setTab, navigationExpanded, setNavigationExpanded }) => {
    const [focused, setFocused] = useState<boolean>(false);
    const searchBarRef = useRef<HTMLInputElement>(null);

    const openSearch = () => {
        setNavigationExpanded(true);
        searchBarRef.current?.focus();
        setFocused(true);
    };

    return (
        <>
            <div className={cn("h-full bg-background2 flex flex-col items-center justify-between pb-[6px] navigation-transiton", navigationExpanded ? "w-[320px]" : "w-[48px]")}>
                <div className="w-full flex flex-col items-start justify-start">
                    <div className="w-full flex flex-col items-start justify-start px-[4px] gap-[12px]">
                        {navigationExpanded ?
                            <div className="w-full px-[11px]">
                                <div onClick={openSearch} onBlur={() => setFocused(false)} className={cn("w-full h-[36px] pr-[11px] cursor-text flex items-center justify-between bg-background rounded-[0.25rem] text-neutral-300 text-[14px] border border-app-border", focused ? "border-b-outline" : "")}>
                                    <input ref={searchBarRef} type="text" autoFocus={focused} placeholder="Search..." className="w-full h-full px-[11px] bg-transparent outline-none" />
                            
                                    <LuSearch className="text-neutral-300 text-[18px]" />
                                </div>
                            </div> :
                            <Button variant="navigation" onClick={openSearch}>
                                <LuSearch className="text-neutral-300 text-[18px]" />
                            </Button>
                        }

                        <NavigationPageButton title="Home" icon={<LuHome />} targetTab={TabTypes.HOME} navigationExpanded={navigationExpanded} tab={tab} setTab={setTab} />
                    </div>

                    <div className="w-full h-[1px] bg-app-border my-[6px]" />

                    <div className="w-full flex flex-col items-start justify-start px-[4px] gap-[3px]">
                        <NavigationPageDropdown title="Projects" icon={<LuPackage />} targetTab={TabTypes.PROJECTS} navigationExpanded={navigationExpanded} tab={tab} setTab={setTab} />
                        <NavigationPageDropdown title="Snippets" icon={<LuCode2 />} targetTab={TabTypes.SNIPPETS} navigationExpanded={navigationExpanded} tab={tab} setTab={setTab} />
                        <NavigationPageDropdown title="Editors" icon={<LuAppWindow />} targetTab={TabTypes.EDITORS} navigationExpanded={navigationExpanded} tab={tab} setTab={setTab} />
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start px-[4px]">
                    <NavigationPageButton title="Settings" icon={<LuSettings />} targetTab={TabTypes.SETTINGS} navigationExpanded={navigationExpanded} tab={tab} setTab={setTab} />
                </div>
            </div>
        </>
    );
};

export default Navigation;
