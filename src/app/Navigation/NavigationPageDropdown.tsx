import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TabTypes } from "../../types/tab";
import Button from "../../components/Button";
import { cn } from "../../utils/cn";
import { LuChevronDown } from "react-icons/lu";
import { setTab } from "../../store/slices/tabSlice";

interface NavigationPageDropdownProps {
    title: string;
    icon: React.ReactElement;
    navigationExpanded: boolean;
    targetTab: TabTypes;
}

const NavigationPageDropdown: React.FC<NavigationPageDropdownProps> = ({ navigationExpanded, icon, title, targetTab }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const tab = useSelector((state: any) => state.tab.value);
    const dispatch = useDispatch();
    
    const onClick = () => {
        dispatch(setTab(targetTab));
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
