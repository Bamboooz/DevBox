import React from "react";

import Tab from "../Tab";
import { LuPaintbrush } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../store/slices/themeSlice";

interface SettingsCategoryProps {
    name: string;
    children?: React.ReactNode;
}

const SettingsCategory: React.FC<SettingsCategoryProps> = ({ name, children }) => {
    return (
        <>
            <div className="w-full flex flex-col items-start justify-center gap-2">
                <p className="text-[14px] text-neutral-100">{name}</p>

                {children}
            </div>
        </>
    );
};

interface SettingsItemProps {
    children?: React.ReactNode;
}

const SettignsDropdown: React.FC<SettingsItemProps> = ({ children }) => {
    return (
        <>
            <div className="w-full h-auto bg-page-item rounded-md border border-app-border">
                {children}
            </div>
        </>
    );
};

const SettingsPage: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Tab>
                <div className="w-full h-full">
                    <div className="flex flex-col items-start justify-start p-[40px] gap-[20px]">
                        <h1 className="text-neutral-100 text-[20px]">Settings</h1>

                        <SettingsCategory name="General">
                            <SettignsDropdown>
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center justify-center gap-6">
                                        <LuPaintbrush className="text-neutral-300 text-[22px]" />

                                        <div className="flex flex-col items-start justify-center">
                                            <p className="text-[16px] text-neutral-300">App theme</p>
                                            <p className="text-[14px] text-neutral-400 -mt-1">Switch which app theme to display</p>
                                        </div>
                                    </div>

                                    <button onClick={() => dispatch(setTheme("default-dark"))} className="size-10 bg-white">

                                    </button>

                                    <button onClick={() => dispatch(setTheme("dark-smooth"))} className="size-10 bg-white">

                                    </button>

                                    <button onClick={() => dispatch(setTheme("light"))} className="size-10 bg-white">

                                    </button>
                                </div>
                            </SettignsDropdown>
                        </SettingsCategory>
                    </div>
                </div>
            </Tab>
        </>
    );
};

export default SettingsPage;
