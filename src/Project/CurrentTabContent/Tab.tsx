import React from "react";

interface TabProps {
    children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
    return (
        <div className="w-full h-full bg-background border-l border-t border-page-border rounded-tl-md">
            {children}
        </div>
    );
};

export default Tab;
