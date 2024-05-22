import React from "react";

import { cn } from "../../utils/tw";
import { customTitleBarEnabled } from "../../appstate";

const Page: React.FC = () => {
    return (
        <>
            <div className={cn("w-full h-full bg-background border-l border-t border-page-border", customTitleBarEnabled ? "rounded-tl-md" : "")}>

            </div>
        </>
    );
};

export default Page;
