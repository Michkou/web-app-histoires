from PIL import Image, ImageDraw, ImageOps
import sys

def floodfill_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Expand by 1px so floodfill can wrap around the image borders
    img = ImageOps.expand(img, border=2, fill=(255, 255, 255, 255))
    
    # Floodfill from the top-left corner (0, 0)
    ImageDraw.floodfill(img, (0, 0), (255, 255, 255, 0), thresh=20)
    
    # Crop back the 2px border
    width, height = img.size
    img = img.crop((2, 2, width-2, height-2))
    
    # Save the result
    img.save(output_path, "PNG")

files = ["helmouth.png", "picpic.png", "parents.png", "mammoutheaux.png", "porc_epic.png", "ecureuil.png", "singe.png"]
for f in files:
    try:
        floodfill_bg(f, f.replace(".png", "_t.png"))
        print(f"Processed {f}")
    except Exception as e:
        print(f"Error on {f}: {e}")
