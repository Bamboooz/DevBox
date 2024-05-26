import React, { useState } from "react";
import { LuCommand, LuPaintbrush, LuSettings } from "react-icons/lu";

import CommandPalette from "../../components/CommandPalette";

const Actions: React.FC = () => {
    const [actionsVisible, setActionsVisible] = useState<boolean>(false);

    return (
        <>
            <button onClick={() => setActionsVisible(true)} className="group flex items-center justify-center gap-1 p-1 rounded-md hover:bg-nav-button-hover hover:active:bg-nav-button-active">
                <LuCommand className="text-[14px] text-neutral-500 group-hover:text-neutral-100" />

                <p className="text-[11px] mt-[1px] text-neutral-500 group-hover:text-neutral-100">Actions</p>
                <p className="text-[11px] mt-[1px] text-neutral-600 group-hover:text-neutral-400">Ctrk K</p>
            </button>
            
            <CommandPalette visible={actionsVisible} setVisible={setActionsVisible} items={{"General": [
                { icon: <LuSettings />, name: "Open settings", hint: "Open settings", keybind: ["Alt", "A"], command: () => {} },
                { icon: <LuPaintbrush />, name: "Change theme: Default dark", hint: "Switch theme to default dark", command: () => {} },
                { icon: <LuPaintbrush />, name: "Change theme: Dark smooth", hint: "Switch theme to dark smooth", command: () => {} },
                { icon: <LuPaintbrush />, name: "Change theme: Light", hint: "Switch theme to light", command: () => {} },
            ]}} />
        </>
    );
};

export default Actions;
