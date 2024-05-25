import React, { useState } from "react";

import { TabTypes } from "../../types/tab";
import Button from "../../components/Button";
import { cn } from "../../utils/cn";
import { LuChevronDown } from "react-icons/lu";

interface NavigationPageDropdownProps {
    title: string;
    icon: React.ReactElement;
    navigationExpanded: boolean;
    tab: TabTypes;
    setTab: React.Dispatch<React.SetStateAction<TabTypes>>;
    targetTab: TabTypes;
}

const NavigationPageDropdown: React.FC<NavigationPageDropdownProps> = ({ navigationExpanded, icon, title, tab, setTab, targetTab }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    
    const onClick = () => {
        setTab(targetTab);
        setExpanded(!expanded);
    };

    return (
        <>
            <Button variant="navigation" onClick={onClick} className={cn("!justify-between", tab == targetTab ? "!bg-nav-button-hover" : "")}>
                <div className="flex items-center justify-start gap-[11px]">
                    {React.cloneElement(icon, { className: "text-neutral-300 text-[18px]" })}

                    {navigationExpanded &&
                        <p className="text-neutral-300 text-[14px]">{title}</p>
                    }
                </div>

                {navigationExpanded &&
                    <LuChevronDown className={cn("text-neutral-300 text-[18px] transition-all", expanded ? "rotate-180" : "")} />
                }
            </Button>
        </>
    );
};

export default NavigationPageDropdown;
