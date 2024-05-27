import React, { useRef } from "react";

import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { cn } from "../../utils/cn";

interface DropdownProps {
    children?: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    className: string;
}

const Dropdown: React.FC<DropdownProps> = ({ visible, setVisible, className, children }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(dropdownRef, () => setVisible(false));

    return (
        <>
            {visible &&
                <div ref={dropdownRef} onClick={(e) => e.stopPropagation()} className={cn("absolute shadow-2xl cursor-auto", className)}>
                    {children}
                </div>
            }
        </>
    );
};

export default Dropdown;
