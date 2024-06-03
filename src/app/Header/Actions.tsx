import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LuCommand, LuPaintbrush, LuSettings } from "react-icons/lu";

import CommandPalette from "../../components/CommandPalette";
import { setTheme } from "../../store/slices/themeSlice";

const Actions: React.FC = () => {
    const [actionsVisible, setActionsVisible] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => setActionsVisible(true)} className="group flex items-center justify-center gap-1 p-1 rounded-md hover:bg-nav-button-hover hover:active:bg-nav-button-active">
                <LuCommand className="text-[14px] text-neutral-500 group-hover:text-neutral-100" />

                <p className="text-[11px] mt-[1px] text-neutral-500 group-hover:text-neutral-100">Actions</p>
                <p className="text-[11px] mt-[1px] text-neutral-600 group-hover:text-neutral-400">Ctrk K</p>
            </button>
            
            <CommandPalette visible={actionsVisible} setVisible={setActionsVisible} items={{"General": [
                { icon: <LuSettings />, name: "Open settings", hint: "Open settings", keybind: ["Alt", "A"], command: () => {} },
                { icon: <LuPaintbrush />, name: "Change theme: Default dark", hint: "Switch theme to default dark", command: () => dispatch(setTheme("default-dark")) },
                { icon: <LuPaintbrush />, name: "Change theme: Dark smooth", hint: "Switch theme to dark smooth", command: () => dispatch(setTheme("dark-smooth")) },
                { icon: <LuPaintbrush />, name: "Change theme: Light", hint: "Switch theme to light", command: () => dispatch(setTheme("light")) },
            ]}} />
        </>
    );
};

export default Actions;
