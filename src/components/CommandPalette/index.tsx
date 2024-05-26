import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

type CommandPaletteItem = {
    icon: React.ReactElement;
    name: string;
    hint: string;
    keybind?: string[];
};

interface CommandPaletteProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    items: { [category: string]: CommandPaletteItem[] };
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ visible, setVisible, items }) => {
    const paletteRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(paletteRef, () => setVisible(false));

    return (
        <>
            {visible &&
                <div className="size-full flex items-center justify-center bg-black fixed top-0 left-0 bg-opacity-10">
                    <div ref={paletteRef} className="w-[650px] h-[500px] flex flex-col items-center justify-between bg-background2 border border-app-border shadow-2xl rounded-xl">
                        <div className="w-full h-14">
                            <input type="text" placeholder="Search..." className="size-full text-neutral-300 bg-transparent text-[14px] px-4 outline-none" />
                        </div>

                        <div className="size-full border-y border-app-border">
                            {Object.keys(items).map((category) => (
                                <button className="w-full h-12 bg-red-500">

                                </button>
                            ))}
                        </div>

                        <div className="w-full h-16">

                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CommandPalette;
