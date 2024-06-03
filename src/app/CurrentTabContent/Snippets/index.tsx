import React from "react";

import Tab from "../Tab";
import NewSnippetButton from "./NewSnippetButton";
import SnippetButton from "./SnippetButton";

const SnippetsPage: React.FC = () => {
    return (
        <>
            <Tab>
                <div className="flex flex-wrap items-start justify-start p-[40px] gap-[40px]">
                    <SnippetButton name="react dropdown" />

                    <NewSnippetButton />
                </div>
            </Tab>
        </>
    );
};

export default SnippetsPage;
