import { open } from "@tauri-apps/api/shell";

const openInBrowser = (url: string) => open(url);

export { openInBrowser };
