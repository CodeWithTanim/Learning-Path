import os
import re

# File to emoji mapping
EMOJI_MAPPING = {
    'dir': '📁',
    '.py': '🐍',
    '.php': '🐘',
    '.css': '🎨',
    '.sql': '💾',
    '.html': '🌐',
    '.htm': '🌐',
    '.mp4': '🎥',
    '.mp3': '🎵',
    '.jpg': '🖼️',
    '.jpeg': '🖼️',
    '.png': '🖼️',
    '.gif': '🖼️',
    '.ico': '🖼️',
    '.webp': '🖼️',
    '.md': '📖',
    '.txt': '📄',
    '.gitignore': '🙈',
    '.gitattributes': '⚙️',
    'LICENSE': '📜',
}

def get_emoji(name, is_dir):
    if is_dir:
        return EMOJI_MAPPING['dir']
    
    if name in EMOJI_MAPPING:
        return EMOJI_MAPPING[name]
    
    _, ext = os.path.splitext(name)
    ext = ext.lower()
    if ext in EMOJI_MAPPING:
        return EMOJI_MAPPING[ext]
        
    return '📄'

def generate_tree(dir_path, ignore_patterns):
    lines = []
    
    def walk(current_dir, prefix=""):
        try:
            items = os.listdir(current_dir)
        except OSError:
            return
            
        filtered_items = []
        for item in items:
            should_ignore = False
            for pattern in ignore_patterns:
                if re.match(pattern, item):
                    should_ignore = True
                    break
            if not should_ignore:
                filtered_items.append(item)
                
        def sort_key(name):
            full_path = os.path.join(current_dir, name)
            is_d = os.path.isdir(full_path)
            return (not is_d, name.lower())
            
        filtered_items.sort(key=sort_key)
        
        count = len(filtered_items)
        for i, item in enumerate(filtered_items):
            full_path = os.path.join(current_dir, item)
            is_d = os.path.isdir(full_path)
            is_last = (i == count - 1)
            
            connector = "└── " if is_last else "├── "
            emoji = get_emoji(item, is_d)
            
            display_name = item
            if is_d:
                display_name += "/"
                
            lines.append(f"{prefix}{connector}{emoji} {display_name}")
            
            if is_d:
                new_prefix = prefix + ("    " if is_last else "│   ")
                walk(full_path, new_prefix)
                
    walk(dir_path)
    return "\n".join(lines)

def update_readme_file(readme_path, tree_content, root_label):
    if not os.path.exists(readme_path):
        print(f"Warning: {readme_path} does not exist.")
        return
        
    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    pattern = r'(## 📂 Repository Structure\s*\n\s*```[^\n]*\n)(.*?)(```)'
    new_block_content = f"📦 {root_label}/\n{tree_content}\n"
    
    match = re.search(pattern, content, re.DOTALL)
    if match:
        start_idx = match.start(2)
        end_idx = match.end(2)
        updated_content = content[:start_idx] + new_block_content + content[end_idx:]
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(updated_content)
        print(f"Successfully updated {readme_path}")
    else:
        print(f"Error: Could not find '## 📂 Repository Structure' code block in {readme_path}")

def main():
    repo_root = os.path.dirname(os.path.abspath(__file__))
    
    # 1. Update root README.md
    print("Updating root README.md...")
    root_ignore = [
        r'^\.git$',
        r'^update_readme\.py$',
        r'^__pycache__$',
        r'^\.venv$',
        r'^venv$',
        r'^env$',
        r'\.pyc$',
    ]
    root_tree = generate_tree(repo_root, root_ignore)
    update_readme_file(os.path.join(repo_root, "README.md"), root_tree, "learning-path")
    
    # 2. Update AI-Driven Full Stack Web Engineering/README.md
    ai_dir = os.path.join(repo_root, "AI-Driven Full Stack Web Engineering")
    if os.path.exists(ai_dir):
        print("Updating AI-Driven Full Stack Web Engineering README.md...")
        ai_ignore = [
            r'^\.git$',
            r'^README\.md$',
            r'^__pycache__$',
            r'\.pyc$',
        ]
        ai_tree = generate_tree(ai_dir, ai_ignore)
        update_readme_file(os.path.join(ai_dir, "README.md"), ai_tree, "AI-Driven Full Stack Web Engineering")

if __name__ == "__main__":
    main()
