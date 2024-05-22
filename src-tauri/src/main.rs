#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{App, Manager};

use window_shadows::set_shadow;

fn initialize(app: &mut App) -> Result<(), Box<dyn std::error::Error>> {
    let window = app.get_window("main").unwrap();

    set_shadow(&window, true).unwrap();

    Ok(())
}

fn main() {
    tauri::Builder::default()
        .setup(initialize)
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
