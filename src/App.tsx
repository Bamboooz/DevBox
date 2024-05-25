import React, { useState } from "react";

import Header from "./app/Header";
import Navigation from "./app/Navigation";

import { theme } from "./appstate";
import CurrentTabContent from "./app/CurrentTabContent";
import { TabTypes } from "./types/tab";

const App: React.FC = () => {
	const [tab, setTab] = useState<TabTypes>(TabTypes.HOME);
	const [navigationExpanded, setNavigationExpanded] = useState<boolean>(true);

	return (
        <>
            <div className={`w-full h-full flex flex-col theme-${theme} items-between justify-center`}>
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
