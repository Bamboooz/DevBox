import React from "react";

import TitleBar from "./components/TitleBar";
import NavigationBar from "./components/NavigationBar";
import Page from "./components/Pages/Page";

import { customTitleBarEnabled } from "./appstate";
import { cn } from "./utils/tw";

const App: React.FC = () => {
	return (
        <>
            <div className={cn("w-full h-full flex flex-col items-between justify-center border-app-border", customTitleBarEnabled ? "border" : "border-b border-r border-l")}>
				{customTitleBarEnabled &&
					<TitleBar />
				}

				<div className="w-full h-full bg-background2 flex items-between justify-between">
					<NavigationBar />
					
					<Page />
				</div>
            </div>
        </>
    );
};

export default App;
