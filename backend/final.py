
import os
import json
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

from functions import *                  
model = tf.keras.models.load_model('model_2.keras')
Classes = {0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6', 6: '7', 7: '8', 8: '9', 9: 'A', 10: 'B', 11: 'C', 12: 'D', 13: 'E', 14: 'F', 15: 'G', 16: 'H', 17: 'I', 18: 'J', 19: 'K', 20: 'L', 21: 'M', 22: 'N', 23: 'O', 24: 'P', 25: 'Q', 26: 'R', 27: 'S', 28: 'T', 29: 'U', 30: 'V', 31: 'W', 32: 'X', 33: 'Y', 34: 'Z', 35: 'a', 36: 'b', 37: 'c', 38: 'd', 39: 'e', 40: 'f', 41: 'g', 42: 'h', 43: 'i', 44: 'j', 45: 'k', 46: 'l', 47: 'm', 48: 'n', 49: 'o', 50: 'p', 51: 'q', 52: 'r', 53: 's', 54: 't', 55: 'u', 56: 'v', 57: 'w', 58: 'x', 59: 'y', 60: 'z'}

img_paths = os.listdir(r"C:\Users\Azeem\Downloads\DataBlitz\test")




i_path = ""

working_dir = r"C:\Users\Azeem\Desktop\Capture\data"
filepath = os.path.join(working_dir, "records.json")


with open(filepath, "r") as file:
  record = json.loads(file.read())
  i_path = "1.jpg"#record[0]['filename']


img_path = os.path.join(r"C:\Users\Azeem\Desktop\Capture\backend", "test", i_path)
predicted_classes = predict_test_image(img_path, num_characters=5)
captcha = "".join([characters[i] for i in predicted_classes])

record = [
  {"filename" : i_path,
   "captcha" : captcha
           }
           ]

with open(filepath, "w") as file: 
  json.dump(record, file)
  




