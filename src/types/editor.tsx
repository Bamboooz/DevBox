import { invoke } from "@tauri-apps/api/tauri";

import EditorButton from "../app/CurrentTabContent/Editors/EditorButton";

class Editor {
    public name: string = "";
    public icon_path: string = "";

    constructor (public path: string) {
        this.set();
        this.open_editor = this.open_editor.bind(this);
    }

    private async set() {
        await invoke("get_editor_name", { path: this.path })
            .then((file_name) => {
                this.name = file_name as string;
            });

        await invoke("get_editor_icon", { path: this.path })
            .then((file_icon_path) => {
                this.icon_path = file_icon_path as string;
            });
    }

    public async open_editor() {
        await invoke("open_editor", { path: this.path });
    }

    public get_button(): React.ReactElement {
        return <EditorButton editor={this} />;
    }
}

export { Editor };
