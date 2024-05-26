import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { cn } from "../../utils/cn";
import { LuCornerDownLeft } from "react-icons/lu";

type CommandPaletteItem = {
    icon: React.ReactElement;
    name: string;
    hint: string;
    command: () => void;
    keybind?: string[];
};

interface CommandPaletteProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    items: { [category: string]: CommandPaletteItem[] };
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ visible, setVisible, items }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(Object.keys(items)[0]);
    const [selectedCommand, setSelectedCommand] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const paletteRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(paletteRef, () => setVisible(false));

    const selectCommand = (categoryIndex: string, index: number) => {
        setSelectedCommand(index);
        setSelectedCategory(categoryIndex);
    };

    const useCommand = () => {
        setVisible(false);
        items[selectedCategory][selectedCommand].command();
    };

    return (
        <>
            {visible &&
                <div className="size-full flex items-center justify-center bg-black fixed top-0 left-0 bg-opacity-10 z-40">
                    <div ref={paletteRef} className="w-[650px] h-[500px] flex flex-col items-center justify-between bg-background2 border border-app-border shadow-2xl rounded-xl">
                        <div className="w-full h-14">
                            <input type="text" content={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="size-full text-neutral-300 bg-transparent text-[14px] px-4 outline-none" />
                        </div>

                        <div className="size-full border-y border-app-border p-2 z-50">
                            {Object.keys(items).map((category) => {
                                let filtered = items[category].filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

                                return (
                                    <>
                                        {filtered.length > 0 &&
                                            filtered.map((item, index) => {
                                                const selected = selectedCategory == category && selectedCommand == index;
                                                
                                                return (
                                                    <button onClick={useCommand} onMouseEnter={() => selectCommand(category, index)} className={cn("w-full h-10 px-2 flex items-center justify-between rounded-md", selected ? "bg-nav-button-hover" : "")}>
                                                        <div className="h-full gap-3 flex items-center justify-center">
                                                            <div className={cn("rounded-md p-1", selected ? "bg-background2" : "bg-nav-button-hover")}>
                                                                {React.cloneElement(item.icon, { className: cn("text-[14px]", selected ? "text-white" : "text-neutral-400") })}
                                                            </div>

                                                            <p className={cn("text-[14px]", selected ? "text-white" : "text-neutral-400")}>{item.name}</p>
                                                        </div>

                                                        <div className="h-full flex items-center justify-center gap-1">
                                                            {item.keybind &&
                                                                item.keybind.map((key) => (
                                                                    <div className="h-6 bg-background flex items-center justify-center px-1 border border-app-border rounded-[4px]">
                                                                        <p className="text-neutral-300 text-[12px]">{key}</p>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </button>
                                                );
                                            })
                                        }
                                    </>
                                );
                            })}
                        </div>

                        <div className="w-full h-16 px-4 flex items-center justify-between">
                            <p className="text-[12px] font-mono text-neutral-300">{items[selectedCategory][selectedCommand].hint}</p>

                            <div className="flex items-center justify-center gap-2">
                                <p className="text-[12px] font-semi text-neutral-500">Run</p>

                                <div className="bg-background rounded-md p-2">
                                    <LuCornerDownLeft className="text-[12px] text-neutral-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CommandPalette;
