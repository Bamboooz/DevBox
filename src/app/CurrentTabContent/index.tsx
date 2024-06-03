import React from "react";
import { useSelector } from "react-redux";

import { TabTypes } from "../../types/tab";
import HomePage from "./Home";
import ProjectsPage from "./Projects";
import SettingsPage from "./Settings";
import EditorsPage from "./Editors";
import SnippetsPage from "./Snippets";

const CurrentTabContent: React.FC = () => {
    const tab = useSelector((state: any) => state.tab.tab);

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
