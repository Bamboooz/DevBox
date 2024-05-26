import React, { useState } from "react";
import { LuCommand, LuSigma } from "react-icons/lu";

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
            
            <CommandPalette visible={actionsVisible} setVisible={setActionsVisible} items={{"General": [{ icon: <LuSigma />, name: "sigma", hint: "u u u" }]}} />
        </>
    );
};

export default Actions;
