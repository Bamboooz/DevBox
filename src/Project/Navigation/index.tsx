import React from "react";
import { LuHome, LuSettings, LuChevronDown, LuAppWindow, LuPackage, LuCode2, LuSearch } from "react-icons/lu";

import { cn } from "../../utils/cn";
import Button from "../../components/Button";
import { TabTypes } from "../../types/general";

interface NavigationProps {
    tab: TabTypes;
    setTab: React.Dispatch<React.SetStateAction<TabTypes>>;
    navigationExpanded: boolean;
    setNavigationExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ tab, setTab, navigationExpanded, setNavigationExpanded }) => {
    let styles = cn("h-full bg-background2 flex flex-col items-center justify-between pb-[6px] navigation-transiton", navigationExpanded ? "w-[320px]" : "w-[48px]");

    return (
        <>
            <div className={styles}>
                <div className="w-full flex flex-col items-start justify-start">
                    <div className="w-full flex flex-col items-start justify-start px-[4px] gap-[12px]">
                        {navigationExpanded ?
                            <div className="w-full px-[11px]">
                                <div className="w-full h-[36px] pr-[11px] flex items-center justify-between bg-background rounded-[0.25rem] text-neutral-300 text-[14px] border border-app-border">
                                    <input type="text" placeholder="Search..." className="w-full h-full px-[11px] bg-transparent" />
                            
                                    <LuSearch className="text-neutral-300 text-[18px]" />
                                </div>
                            </div> :
                            <Button variant="navigation" onClick={() => setNavigationExpanded(true)}>
                                <LuSearch className="text-neutral-300 text-[18px]" />
                            </Button>
                        }

                        <Button variant="navigation" onClick={() => setTab(TabTypes.HOME)} className={tab == TabTypes.HOME ? "!bg-nav-button-hover" : ""}>
                            <LuHome className="text-neutral-300 text-[18px]" />

                            {navigationExpanded &&
                                <p className="text-neutral-300 text-[14px]">Home</p>
                            }
                        </Button>
                    </div>

                    <div className="w-full h-[1px] bg-app-border my-[6px]" />

                    <div className="w-full flex flex-col items-start justify-start px-[4px] gap-[3px]">
                        <Button variant="navigation" onClick={() => setTab(TabTypes.PROJECTS)} className={cn("!justify-between", tab == TabTypes.PROJECTS ? "!bg-nav-button-hover" : "")}>
                            <div className="flex items-center justify-start gap-[11px]">
                                <LuPackage className="text-neutral-300 text-[18px]" />

                                {navigationExpanded &&
                                    <p className="text-neutral-300 text-[14px]">Projects</p>
                                }
                            </div>

                            <LuChevronDown className="text-neutral-300 text-[18px]" />
                        </Button>

                        <Button variant="navigation" onClick={() => setTab(TabTypes.SNIPPETS)} className={cn("!justify-between", tab == TabTypes.SNIPPETS ? "!bg-nav-button-hover" : "")}>
                            <div className="flex items-center justify-start gap-[11px]">
                                <LuCode2 className="text-neutral-300 text-[18px]" />

                                {navigationExpanded &&
                                    <p className="text-neutral-300 text-[14px]">Snippets</p>
                                }
                            </div>

                            <LuChevronDown className="text-neutral-300 text-[18px]" />
                        </Button>

                        <Button variant="navigation" onClick={() => setTab(TabTypes.EDITORS)} className={cn("!justify-between", tab == TabTypes.EDITORS ? "!bg-nav-button-hover" : "")}>
                            <div className="flex items-center justify-start gap-[11px]">
                                <LuAppWindow className="text-neutral-300 text-[18px]" />

                                {navigationExpanded &&
                                    <p className="text-neutral-300 text-[14px]">Editors</p>
                                }
                            </div>

                            <LuChevronDown className="text-neutral-300 text-[18px]" />
                        </Button>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start px-[4px] gap-[3px]">
                    <Button variant="navigation" onClick={() => setTab(TabTypes.SETTINGS)} className={tab == TabTypes.SETTINGS ? "!bg-nav-button-hover" : ""}>
                        <LuSettings className="text-neutral-300 text-[18px]" />

                        {navigationExpanded &&
                            <p className="text-neutral-300 text-[14px]">Settings</p>
                        }
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Navigation;
