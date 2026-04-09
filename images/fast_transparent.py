import sys
from PIL import Image

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    # Remplacer les pixels blancs par des pixels transparents
    for item in datas:
        # Seuil à 240 pour attraper le blanc presque pur (compressions JPEG/artefacts)
        if item[0] >= 235 and item[1] >= 235 and item[2] >= 235:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    make_transparent("porc_epic_v4.png", "porc_epic_v4_t.png")
