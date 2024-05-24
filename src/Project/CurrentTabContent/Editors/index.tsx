import React from "react";

import Tab from "../Tab";

interface EditorButtonProps {
    name: string;
    icon: React.ReactElement;
}

const EditorButton: React.FC<EditorButtonProps> = ({ name, icon }) => {
    return (
        <>
            <div className="h-[150px] w-[150px] flex flex-col items-center justify-center gap-3 bg-page-item rounded-md border border-app-border hover:shadow-xl">
                {React.cloneElement(icon, { className: "h-[40%] w-[40%]" })}

                <p className="text-neutral-300 text-[14px] max-w-[80%] text-center">{name}</p>
            </div>
        </>
    );
};

const EditorsPage: React.FC = () => {
    return (
        <>
            <Tab>
                <div className="flex flex-wrap items-start justify-start p-[40px] gap-[40px]">
                    <EditorButton name="Visual Studio Code" icon={<img src="src/vscode.svg" />} />
                    <EditorButton name="IntelIJ Idea Proffesional" icon={<img src="src/ij.png" />} />
                    <EditorButton name="PyCharm Proffesional" icon={<img src="src/py.png" />} />
                </div>
            </Tab>
        </>
    );
};

export default EditorsPage;
