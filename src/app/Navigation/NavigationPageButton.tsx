import React from "react";

import { TabTypes } from "../../types/tab";
import Button from "../../components/Button";
import { cn } from "../../utils/cn";

interface NavigationPageButtonProps {
    title: string;
    icon: React.ReactElement;
    navigationExpanded: boolean;
    tab: TabTypes;
    setTab: React.Dispatch<React.SetStateAction<TabTypes>>;
    targetTab: TabTypes;
}

const NavigationPageButton: React.FC<NavigationPageButtonProps> = ({ navigationExpanded, icon, title, tab, setTab, targetTab }) => {
    return (
        <>
            <Button variant="navigation" onClick={() => setTab(targetTab)} className={cn("!justify-between", tab == targetTab ? "!bg-nav-button-hover" : "")}>
                <div className="flex items-center justify-start gap-[11px]">
                    {React.cloneElement(icon, { className: "text-neutral-300 text-[18px]" })}

                    {navigationExpanded &&
                        <p className="text-neutral-300 text-[14px]">{title}</p>
                    }
                </div>
            </Button>
        </>
    );
};

export default NavigationPageButton;
