import React from "react";

import Tab from "../Tab";

interface SettingsCategoryProps {
    name: string;
    children?: React.ReactNode;
}

const SettingsCategory: React.FC<SettingsCategoryProps> = ({ name, children }) => {
    return (
        <>
            <div className="w-full flex flex-col items-start justify-center gap-2">
                <p className="text-[14px] text-neutral-100 font-semiboldl">{name}</p>

                {children}
            </div>
        </>
    );
};

interface SettingsItemProps {
    children?: React.ReactNode;
}

const SettignsDropdowm: React.FC<SettingsItemProps> = ({ children }) => {
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
                <div className="w-full h-full">
                    <div className="flex flex-col items-start justify-start p-[40px] gap-[20px]">
                        <h1 className="text-neutral-100 text-[20px]">Settings</h1>

                        <SettingsCategory name="General">
                            <SettignsDropdowm>
                                <div className="h-32">
                                
                                </div>
                            </SettignsDropdowm>

                            <SettignsDropdowm>
                                <div className="h-32">
                                
                                </div>
                            </SettignsDropdowm>
                        </SettingsCategory>
                    </div>
                </div>
            </Tab>
        </>
    );
};

export default SettingsPage;
