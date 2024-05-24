import React, { useState } from "react";

import Header from "./Project/Header";
import Navigation from "./Project/Navigation";

import { theme } from "./ProjectSettings/appstate";
import CurrentTabContent from "./Project/CurrentTabContent";
import { TabTypes } from "./types/general";

const App: React.FC = () => {
	const [tab, setTab] = useState<TabTypes>(TabTypes.HOME);
	const [navigationExpanded, setNavigationExpanded] = useState<boolean>(true);

	return (
        <>
            <div className={`w-full h-full flex flex-col theme-${theme} items-between justify-center border-app-border`}>
				<Header navigationExpanded={navigationExpanded} setNavigationExpanded={setNavigationExpanded} />

				<div className="w-full h-full bg-background2 flex items-between justify-between">
					<Navigation tab={tab} setTab={setTab} navigationExpanded={navigationExpanded} setNavigationExpanded={setNavigationExpanded} />
					
					<CurrentTabContent tab={tab} />
				</div>
            </div>
        </>
    );
};

export default App;
