import React, { useState, useEffect, useCallback } from "react";

import { appWindow } from "@tauri-apps/api/window";
import { VscChromeClose, VscChromeMaximize, VscChromeRestore, VscChromeMinimize } from "react-icons/vsc";
import { LuAlignJustify } from "react-icons/lu";
import { customTitleBarEnabled } from "../../appstate";

const TitleBar: React.FC = () => {
    const [isWindowMaximized, setIsWindowMaximized] = useState<boolean | null>(null);

    const updateIsWindowMaximized = useCallback(async () => {
        setIsWindowMaximized(await appWindow.isMaximized());
    }, []);

    useEffect(() => {
        updateIsWindowMaximized();

        const listen = async () => {
            const unlisten = await appWindow.onResized(updateIsWindowMaximized);
            return unlisten;
        };

        const cleanup = async () => (await listen())();
        cleanup();
    }, [updateIsWindowMaximized]);

    const minimizeBehaviour = () => appWindow.minimize();
    const maximizeBehaviour = () => {
        if (!isWindowMaximized) {
            appWindow.maximize()
        } else {
            appWindow.unmaximize()
        }
    };
    const closeBehaviour = () => appWindow.close();

    return (
        <>
        <div data-tauri-drag-region className="w-full h-[48px] bg-background2 flex justify-between">
                <div className="h-full px-[4px] py-[6px]">
                    {customTitleBarEnabled &&
                        <button className="w-[40px] h-[36px] flex items-center justify-center rounded-[0.25rem] hover:bg-nav-button-hover">
                            <LuAlignJustify className="text-neutral-300 text-[18px]" />
                        </button>
                    }
                </div>

                <div className="h-full flex justify-end items-start -mr-[1px] -mt-[1px]">
                    <button onClick={minimizeBehaviour} className="w-[46px] h-[32px] flex items-center justify-center hover:bg-app-min-max-hover hover:active:bg-app-min-max-active">
                        <VscChromeMinimize className="text-neutral-300 text-[14px]" />
                    </button>

                    <button onClick={maximizeBehaviour} className="w-[46px] h-[32px] flex items-center justify-center hover:bg-app-min-max-hover hover:active:bg-app-min-max-active">
                        {isWindowMaximized ? <VscChromeRestore className="text-neutral-300 text-[14px]" /> : <VscChromeMaximize className="text-neutral-300 text-[14px]" />}
                    </button>

                    <button onClick={closeBehaviour} className="w-[46px] h-[32px] flex items-center justify-center hover:bg-app-close-hover hover:active:bg-app-close-active">
                        <VscChromeClose className="text-neutral-300 text-[14px]" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default TitleBar;
