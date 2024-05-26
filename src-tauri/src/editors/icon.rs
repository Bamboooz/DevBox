#[tauri::command]
pub fn get_editor_icon(path: &str) -> Result<&str, ()> {
    let _ = save_editor_icon(path, "");
    Ok(path)
}

fn save_editor_icon(path: &str, dir: &str) -> Result<bool, ()> {
    Ok(path == dir)
}
