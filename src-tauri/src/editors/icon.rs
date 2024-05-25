#[tauri::command]
pub fn get_editor_icon(path: &str) -> Result<&str, ()> {
    Ok("")
}

fn save_editor_icon(path: &str, dir: &str) -> Result<bool, ()> {
    Ok(true)
}
