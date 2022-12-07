from PIL import Image
import os
def thumbnail(img, size):
    path = os.path.join('.', 'media', img.name)
    obj = Image.open(path)
    obj.thumbnail(size)
    obj.save(path)
    return obj