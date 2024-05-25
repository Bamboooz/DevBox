import React, { useState } from "react";

import Tab from "../Tab";
import NewEditorButton from "./NewEditorButton";
import { Editor } from "../../../types/editor";

const EditorsPage: React.FC = () => {
    const [editors, setEditors] = useState<Editor[]>([]);

    return (
        <>
            <Tab>
                <div className="flex flex-wrap items-start justify-start p-[40px] gap-[40px]">
                    {editors.map((value) => 
                        value.get_button()
                    )}

                    <NewEditorButton setEditors={setEditors} />
                </div>
            </Tab>
        </>
    );
};

export default EditorsPage;
