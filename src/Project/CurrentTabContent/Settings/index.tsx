import React from "react";

import Tab from "../Tab";

interface SettingsItemProps {
    children?: React.ReactNode;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ children }) => {
    return (
        <>
            <div className="w-full h-auto bg-page-item rounded-md border border-app-border">
                {children}
            </div>
        </>
    );
};

const SettingsPage: React.FC = () => {
    return (
        <>
            <Tab>
                <div className="w-full h-full flex flex-col items-start justify-start p-[40px]">
                    <h1>Settings</h1>

                    <SettingsItem>
                        <div className="h-32">
                        
                        </div>
                    </SettingsItem>
                </div>
            </Tab>
        </>
    );
};

export default SettingsPage;
