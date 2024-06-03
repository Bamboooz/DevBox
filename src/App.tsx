import React, { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./app/Header";
import Navigation from "./app/Navigation";
import CurrentTabContent from "./app/CurrentTabContent";
import { cn } from "./utils/cn";

const App: React.FC = () => {
	const [navigationExpanded, setNavigationExpanded] = useState<boolean>(true);
	const theme = useSelector((state: any) => state.theme.theme);

	return (
        <>
            <div className={cn("w-full h-full flex flex-col items-between justify-center", `theme-${theme}`)}>
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
