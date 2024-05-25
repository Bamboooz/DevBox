use std::process::Command;
use std::path::Path;

#[tauri::command]
pub fn open_editor(path: &str) -> Result<bool, ()> {
    match Command::new(path).spawn() {
        Ok(_) => Ok(true),
        Err(_) => Ok(false),
    }
}

#[tauri::command]
pub fn get_editor_name(path: &str) -> Result<&str, ()> {
    let file_path = Path::new(path);

    match file_path.file_stem().and_then(|stem| stem.to_str()) {
        Some(stem) => Ok(stem),
        None => Err(()),
    }
}
