
import os
import glob
from PIL import Image

# Configuration
HERO_MAX_WIDTH = 1600
SECTION_MAX_WIDTH = 800
CARD_MAX_WIDTH = 500
PUBLIC_DIR = "public"
SRC_DIR = "src"

# Files to exclude (relative to public/)
EXCLUDED_FILES = {
    "favicon.ico",
    "apple-icon.png", # usually kept as PNG
    "og-image.png", # often needs to be PNG/JPG for social media
    "logo-icon.png", # used in manifest and layout
    "apix-logo.png", # used in navbar/footer, keep consistent
    "vercel.svg",
    "next.svg"
}

def optimize_image(filepath):
    filename = os.path.basename(filepath)
    rel_path = os.path.relpath(filepath, PUBLIC_DIR)
    
    if rel_path in EXCLUDED_FILES or filename.startswith('.'):
        print(f"Skipping excluded file: {rel_path}")
        return

    try:
        with Image.open(filepath) as img:
            original_format = img.format
            width, height = img.size
            
            # Determine target width
            if "hero" in filepath:
                target_width = HERO_MAX_WIDTH
            elif "card" in filepath or "project" in filepath: # heuristic
                target_width = CARD_MAX_WIDTH
            else:
                target_width = SECTION_MAX_WIDTH
            
            # Resize if needed
            if width > target_width:
                aspect_ratio = height / width
                new_height = int(target_width * aspect_ratio)
                img = img.resize((target_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {rel_path} from {width}x{height} to {target_width}x{new_height}")

            # Convert to WebP
            webp_path = os.path.splitext(filepath)[0] + ".webp"
            img.save(webp_path, "WEBP", quality=85)
            print(f"Converted {rel_path} to WebP")
            
            # Update source code references
            old_rel_path = "/" + rel_path # e.g. /hero/hero-1.jpg
            new_rel_path = "/" + os.path.splitext(rel_path)[0] + ".webp" # e.g. /hero/hero-1.webp
            
            replace_in_source_code(old_rel_path, new_rel_path)

            # Remove original file (if not replaced by itself)
            if filepath != webp_path:
                os.remove(filepath)

    except Exception as e:
        print(f"Error processing {filepath}: {e}")

def replace_in_source_code(old_str, new_str):
    for root, dirs, files in os.walk(SRC_DIR):
        for file in files:
            if file.endswith((".tsx", ".ts", ".js", ".jsx", ".css", ".scss")):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if old_str in content:
                        new_content = content.replace(old_str, new_str)
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated reference in {filepath}: {old_str} -> {new_str}")
                except Exception as e:
                    print(f"Error updating file {filepath}: {e}")

def main():
    image_extensions = ["*.jpg", "*.jpeg", "*.png"]
    files = []
    for ext in image_extensions:
        files.extend(glob.glob(os.path.join(PUBLIC_DIR, "**", ext), recursive=True))

    print(f"Found {len(files)} images to process...")
    
    for filepath in files:
        optimize_image(filepath)

if __name__ == "__main__":
    main()
