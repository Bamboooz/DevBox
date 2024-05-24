import React from "react";

import { TabTypes } from "../../types/general";
import HomePage from "./Home";
import ProjectsPage from "./Projects";
import SettingsPage from "./Settings";
import EditorsPage from "./Editors";
import SnippetsPage from "./Snippets";

interface CurrentTabContentProps {
    tab: TabTypes;
}

const CurrentTabContent: React.FC<CurrentTabContentProps> = ({ tab }) => {
    return (
        <>
            {tab == TabTypes.HOME &&
                <HomePage />
            }

            {tab == TabTypes.PROJECTS &&
                <ProjectsPage />
            }

            {tab == TabTypes.SNIPPETS &&
                <SnippetsPage />
            }

            {tab == TabTypes.EDITORS &&
                <EditorsPage />
            }

            {tab == TabTypes.SETTINGS &&
                <SettingsPage />
            }
        </>
    );
};

export default CurrentTabContent;
