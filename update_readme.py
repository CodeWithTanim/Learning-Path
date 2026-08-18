import os
import re

# File to emoji mapping
EMOJI_MAPPING = {
    # =========================
    # DIRECTORIES
    # =========================
    'dir': '📁',

    # =========================
    # PYTHON
    # =========================
    '.py': '🐍',
    '.pyw': '🐍',
    '.pyx': '🐍',
    '.pxd': '🐍',
    '.pxi': '🐍',
    '.ipynb': '📓',

    # =========================
    # JAVASCRIPT / TYPESCRIPT
    # =========================
    '.js': '⚡',
    '.jsx': '⚛️',
    '.mjs': '⚡',
    '.cjs': '⚡',
    '.ts': '🔷',
    '.tsx': '⚛️',

    # =========================
    # WEB
    # =========================
    '.html': '🌐',
    '.htm': '🌐',
    '.xhtml': '🌐',
    '.css': '🎨',
    '.scss': '💅',
    '.sass': '💅',
    '.less': '💅',
    '.styl': '🎨',

    # =========================
    # PHP
    # =========================
    '.php': '🐘',
    '.php3': '🐘',
    '.php4': '🐘',
    '.php5': '🐘',
    '.phtml': '🐘',

    # =========================
    # JAVA
    # =========================
    '.java': '☕',
    '.jar': '📦',
    '.war': '📦',
    '.ear': '📦',

    # =========================
    # C / C++
    # =========================
    '.c': '🔵',
    '.h': '📘',
    '.cc': '🔷',
    '.cp': '🔷',
    '.cpp': '🔷',
    '.cxx': '🔷',
    '.hpp': '📘',
    '.hh': '📘',
    '.hxx': '📘',

    # =========================
    # C#
    # =========================
    '.cs': '💜',
    '.csx': '💜',

    # =========================
    # RUST
    # =========================
    '.rs': '🦀',

    # =========================
    # GO
    # =========================
    '.go': '🐹',
    '.mod': '📦',
    '.sum': '📦',

    # =========================
    # RUBY
    # =========================
    '.rb': '💎',
    '.rbw': '💎',
    '.rake': '💎',
    '.gemspec': '💎',

    # =========================
    # SWIFT
    # =========================
    '.swift': '🕊️',

    # =========================
    # KOTLIN
    # =========================
    '.kt': '🟣',
    '.kts': '🟣',

    # =========================
    # DART / FLUTTER
    # =========================
    '.dart': '🎯',

    # =========================
    # LUA
    # =========================
    '.lua': '🌙',

    # =========================
    # PERL
    # =========================
    '.pl': '🐪',
    '.pm': '🐪',
    '.pod': '📜',

    # =========================
    # R
    # =========================
    '.r': '📊',
    '.rmd': '📊',

    # =========================
    # HASKELL
    # =========================
    '.hs': '🔮',
    '.lhs': '🔮',

    # =========================
    # ELIXIR / ERLANG
    # =========================
    '.ex': '💧',
    '.exs': '💧',
    '.erl': '🐝',
    '.hrl': '🐝',

    # =========================
    # SCALA
    # =========================
    '.scala': '🔴',
    '.sc': '🔴',

    # =========================
    # GROOVY
    # =========================
    '.groovy': '🟢',
    '.gradle': '🐘',

    # =========================
    # SHELL / TERMINAL
    # =========================
    '.sh': '🐚',
    '.bash': '🐚',
    '.zsh': '🐚',
    '.fish': '🐟',
    '.csh': '🐚',
    '.ksh': '🐚',
    '.bat': '⚙️',
    '.cmd': '⚙️',
    '.ps1': '💠',
    '.psm1': '💠',
    '.psd1': '💠',

    # =========================
    # SQL / DATABASE
    # =========================
    '.sql': '💾',
    '.sqlite': '🗄️',
    '.sqlite3': '🗄️',
    '.db': '🗄️',
    '.db3': '🗄️',
    '.mdb': '🗄️',
    '.accdb': '🗄️',

    # =========================
    # DATA / CONFIG
    # =========================
    '.json': '🔶',
    '.json5': '🔶',
    '.jsonc': '🔶',
    '.xml': '🧬',
    '.yaml': '⚙️',
    '.yml': '⚙️',
    '.toml': '⚙️',
    '.ini': '⚙️',
    '.cfg': '⚙️',
    '.conf': '⚙️',

    # =========================
    # ENVIRONMENT / CONFIG
    # =========================
    '.env': '🔐',
    '.env.local': '🔐',
    '.env.development': '🔐',
    '.env.production': '🔐',
    '.env.test': '🔐',

    # =========================
    # MARKDOWN / DOCUMENTATION
    # =========================
    '.md': '📖',
    '.markdown': '📖',
    '.mdx': '📖',
    '.rst': '📚',
    '.adoc': '📚',
    '.txt': '📄',
    '.text': '📄',

    # =========================
    # LaTeX
    # =========================
    '.tex': '📐',
    '.latex': '📐',
    '.bib': '📚',

    # =========================
    # API / GRAPHQL
    # =========================
    '.graphql': '◈',
    '.gql': '◈',

    # =========================
    # PROTOCOL / SCHEMA
    # =========================
    '.proto': '🔌',
    '.thrift': '🔌',

    # =========================
    # DOCKER
    # =========================
    '.dockerfile': '🐳',

    # =========================
    # KUBERNETES
    # =========================
    '.k8s': '☸️',

    # =========================
    # TERRAFORM
    # =========================
    '.tf': '🏗️',
    '.tfvars': '🏗️',

    # =========================
    # ANSIBLE
    # =========================
    '.ansible': '🤖',

    # =========================
    # CI / CD
    # =========================
    '.jenkinsfile': '🤖',

    # =========================
    # FRONTEND FRAMEWORKS
    # =========================
    '.vue': '💚',
    '.svelte': '🧡',
    '.astro': '🚀',

    # =========================
    # TEMPLATE FILES
    # =========================
    '.ejs': '📄',
    '.hbs': '📄',
    '.handlebars': '📄',
    '.mustache': '📄',
    '.twig': '🌿',
    '.njk': '📄',
    '.pug': '🐶',
    '.jade': '🐶',

    # =========================
    # ASSEMBLY
    # =========================
    '.asm': '⚙️',
    '.s': '⚙️',
    '.S': '⚙️',

    # =========================
    # MATLAB
    # =========================
    '.m': '📐',
    '.mat': '📊',

    # =========================
    # SOLIDITY / BLOCKCHAIN
    # =========================
    '.sol': '⛓️',

    # =========================
    # WEBASSEMBLY
    # =========================
    '.wasm': '🕸️',
    '.wat': '🕸️',

    # =========================
    # OBJECTIVE-C
    # =========================
    '.m': '🍎',
    '.mm': '🍎',

    # =========================
    # VISUAL BASIC
    # =========================
    '.vb': '🟣',
    '.vbs': '🟣',

    # =========================
    # F#
    # =========================
    '.fs': '🔷',
    '.fsi': '🔷',
    '.fsx': '🔷',

    # =========================
    # FORTRAN
    # =========================
    '.f': '🔬',
    '.f90': '🔬',
    '.f95': '🔬',
    '.f03': '🔬',
    '.f08': '🔬',

    # =========================
    # COBOL
    # =========================
    '.cob': '🏦',
    '.cbl': '🏦',

    # =========================
    # JULIA
    # =========================
    '.jl': '🟣',

    # =========================
    # CRYSTAL
    # =========================
    '.cr': '💎',

    # =========================
    # CLOJURE
    # =========================
    '.clj': '🟢',
    '.cljs': '🟢',
    '.cljc': '🟢',

    # =========================
    # OCAML
    # =========================
    '.ml': '🐫',
    '.mli': '🐫',

    # =========================
    # VIM
    # =========================
    '.vim': '🟩',

    # =========================
    # GIT
    # =========================
    '.gitignore': '🙈',
    '.gitattributes': '⚙️',
    '.gitmodules': '🔀',

    # =========================
    # BUILD / PACKAGE MANAGERS
    # =========================
    '.lock': '🔒',
    '.make': '🔨',
    '.cmake': '🔨',

    # =========================
    # IMAGES
    # =========================
    '.jpg': '🖼️',
    '.jpeg': '🖼️',
    '.png': '🖼️',
    '.gif': '🖼️',
    '.bmp': '🖼️',
    '.webp': '🖼️',
    '.svg': '🎨',
    '.ico': '🖼️',
    '.tif': '🖼️',
    '.tiff': '🖼️',
    '.avif': '🖼️',
    '.heic': '🖼️',
    '.raw': '📷',
    '.psd': '🎨',
    '.ai': '🎨',
    '.eps': '🎨',

    # =========================
    # VIDEO
    # =========================
    '.mp4': '🎥',
    '.mkv': '🎥',
    '.avi': '🎥',
    '.mov': '🎥',
    '.wmv': '🎥',
    '.flv': '🎥',
    '.webm': '🎥',
    '.m4v': '🎥',

    # =========================
    # AUDIO
    # =========================
    '.mp3': '🎵',
    '.wav': '🎵',
    '.flac': '🎵',
    '.aac': '🎵',
    '.ogg': '🎵',
    '.m4a': '🎵',
    '.wma': '🎵',
    '.opus': '🎵',

    # =========================
    # FONTS
    # =========================
    '.ttf': '🔤',
    '.otf': '🔤',
    '.woff': '🔤',
    '.woff2': '🔤',
    '.eot': '🔤',

    # =========================
    # ARCHIVES
    # =========================
    '.zip': '📦',
    '.rar': '📦',
    '.7z': '📦',
    '.tar': '📦',
    '.gz': '📦',
    '.bz2': '📦',
    '.xz': '📦',
    '.tgz': '📦',

    # =========================
    # DOCUMENTS
    # =========================
    '.pdf': '📕',
    '.doc': '📘',
    '.docx': '📘',
    '.odt': '📘',
    '.rtf': '📄',
    '.xls': '📊',
    '.xlsx': '📊',
    '.csv': '📊',
    '.ods': '📊',
    '.ppt': '📙',
    '.pptx': '📙',
    '.odp': '📙',

    # =========================
    # 3D / CAD
    # =========================
    '.obj': '🧊',
    '.fbx': '🧊',
    '.blend': '🧊',
    '.stl': '🧊',
    '.3ds': '🧊',
    '.dae': '🧊',
    '.gltf': '🧊',
    '.glb': '🧊',

    # =========================
    # FAVICON / WEB ASSETS
    # =========================
    '.webmanifest': '🌐',
    '.manifest': '📋',
    '.map': '🗺️',

    # =========================
    # LICENSE / LEGAL
    # =========================
    'LICENSE': '📜',
    'LICENSE.md': '📜',
    'LICENSE.txt': '📜',
    'COPYING': '📜',

    # =========================
    # CHANGELOG / CONTRIBUTING
    # =========================
    'CHANGELOG': '📝',
    'CHANGELOG.md': '📝',
    'CONTRIBUTING.md': '🤝',
    'CODE_OF_CONDUCT.md': '📜',
    'SECURITY.md': '🔐',
    'README.md': '📚',

    # =========================
    # SPECIAL DEVELOPMENT FILES
    # =========================
    'Dockerfile': '🐳',
    'docker-compose.yml': '🐳',
    'docker-compose.yaml': '🐳',
    'Makefile': '🔨',
    'Procfile': '🚀',
    'Vagrantfile': '📦',
    'Gemfile': '💎',
    'Rakefile': '💎',
    'requirements.txt': '🐍',
    'package.json': '📦',
    'package-lock.json': '🔒',
    'pnpm-lock.yaml': '🔒',
    'yarn.lock': '🔒',
    'bun.lock': '🔒',
    'composer.json': '🐘',
    'composer.lock': '🔒',
    'Cargo.toml': '🦀',
    'Cargo.lock': '🔒',
    'go.mod': '🐹',
    'go.sum': '🔒',
    'pubspec.yaml': '🎯',
    'pubspec.lock': '🔒',

    # =========================
    # SECURITY
    # =========================
    '.pem': '🔑',
    '.key': '🔑',
    '.crt': '🔐',
    '.cer': '🔐',
    '.csr': '🔐',

    # =========================
    # LOGS
    # =========================
    '.log': '📋',

    # =========================
    # TEMP / CACHE
    # =========================
    '.tmp': '🗑️',
    '.temp': '🗑️',
    '.cache': '💨',
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
        r'^\.github$',
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
