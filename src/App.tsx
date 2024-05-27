import React, { useState } from "react";

import Header from "./app/Header";
import Navigation from "./app/Navigation";
import { theme } from "./appstate";
import CurrentTabContent from "./app/CurrentTabContent";

const App: React.FC = () => {
	const [navigationExpanded, setNavigationExpanded] = useState<boolean>(true);

	return (
        <>
            <div className={`w-full h-full flex flex-col theme-${theme} items-between justify-center`}>
				<Header navigationExpanded={navigationExpanded} setNavigationExpanded={setNavigationExpanded} />

				<div className="w-full h-full bg-background2 flex items-between justify-between overflow-hidden">
					<Navigation navigationExpanded={navigationExpanded} setNavigationExpanded={setNavigationExpanded} />
					
					<div className="size-full overflow-auto">
						<CurrentTabContent />
					</div>
				</div>
            </div>
        </>
    );
};

export default App;
