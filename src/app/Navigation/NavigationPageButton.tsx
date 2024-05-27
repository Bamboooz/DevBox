import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TabTypes } from "../../types/tab";
import Button from "../../components/Button";
import { cn } from "../../utils/cn";
import { setTab } from "../../store/slices/tabSlice";

interface NavigationPageButtonProps {
    title: string;
    icon: React.ReactElement;
    navigationExpanded: boolean;
    targetTab: TabTypes;
}

const NavigationPageButton: React.FC<NavigationPageButtonProps> = ({ navigationExpanded, icon, title, targetTab }) => {
    const tab = useSelector((state: any) => state.tab.value);
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="navigation" onClick={() => dispatch(setTab(targetTab))} className={cn("!justify-between", tab == targetTab ? "!bg-nav-button-hover" : "")}>
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
