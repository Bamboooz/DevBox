#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod editors;

use editors::{open_editor, get_editor_name, get_editor_icon};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            open_editor,
            get_editor_name,
            get_editor_icon,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
