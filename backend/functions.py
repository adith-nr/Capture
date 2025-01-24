import numpy as np
import os
import cv2
from scipy.ndimage import gaussian_filter
import tensorflow as tf

model = tf.keras.models.load_model('model_2.keras')

characters = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

def enhance(image):
    if (np.mean(image) < 127):
        image = cv2.bitwise_not(image)

    _, thresh = cv2.threshold(image, 0, 255,  cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return thresh


def draw_lines(image):
    length = image.shape[0]
    temp_img = image.copy()  # Create a copy to avoid modifying the original image
    line_color = (0, 0, 255)  # Red in BGR
    line_thickness = 1

    image_width = image.shape[1]
    num_sections = 5
    line_positions = [int(i * (image_width / num_sections)) for i in range(1, num_sections)]

    for x in line_positions:
        start_point = (x, 0)  # Top of the image
        end_point = (x, length)  # Bottom of the image
        cv2.line(temp_img, start_point, end_point, line_color, line_thickness)

    return temp_img

def crop_image(original_image):
    batch_size = 7
    threshold = 200
    length = original_image.shape[0]
    width = original_image.shape[1]

    num_batches = width // batch_size
    batch_averages = [
        np.mean(original_image[:, i * batch_size:(i + 1) * batch_size])
        for i in range(num_batches)
    ]

    if original_image.shape[1] % batch_size != 0:
        remaining_avg = np.mean(original_image[:, num_batches * batch_size:])
        batch_averages.append(remaining_avg)

    start_batch = np.argmax(np.array(batch_averages) < threshold)
    end_batch = len(batch_averages) - np.argmax(np.array(batch_averages[::-1]) < threshold) - 1

    start_col = start_batch * batch_size
    end_col = min((end_batch + 1) * batch_size, original_image.shape[1]) - 1

    if start_col >= end_col:
        print("Invalid cropping range detected, returning empty image.")
        return None

    final_cropped_image = original_image[:, start_col:end_col + 1]

    if final_cropped_image.size == 0:
        print("Cropped image is empty.")
        return None

    try:
        resized_image = cv2.resize(final_cropped_image, (width, length))
    except cv2.error as e:
        print(f"Error during resizing: {e}")
        return None

    return resized_image

def resize_image(source_dir, size):

  chars = os.listdir(source_dir)


  for char in chars:
      char_dir = os.path.join(source_dir, char)


      images = os.listdir(char_dir)

      for img in (images):
          img_path = os.path.join(char_dir, img)

          image = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)

          if image is None:
              print(f"Skipping invalid image: {img_path}")
              continue

          resized = cv2.resize(image, size)  # Resize the image
          cv2.imwrite(img_path, resized)  # Overwrite the original image

def characters_splitting(image):

      if image is None:
          print(f"Error: Failed to load image")
          return None

      # Process the image: enhance, draw lines, crop, clarity
      final = process_image(image)

      # Split the image into characters (assuming 5 characters per captcha)
      destination_list = [cv2.resize(final[:, i:i+30], (32,32)) for i in range(0, 130, 30)]

      # Loop through each character slice and save it

      return destination_list

def preprocess_image(image, target_size=(32,32)):
    # Convert to grayscale if not already
    if len(image.shape) == 3:  # Check if it's RGB
        image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # Resize to target size
    image = cv2.resize(image, target_size)
    # Normalize pixel values (if required)
    image = image / 255.0
    # Add a batch dimension (1, height, width, channels)
    image = np.expand_dims(image, axis=-1)
    return np.expand_dims(image, axis=0)  # Add batch dimension

# Predict a single character
def predict_character(image):
    preprocessed_image = preprocess_image(image)
    prediction = model.predict(preprocessed_image)
    predicted_class = np.argmax(prediction)
    return predicted_class

def predict_test_image(test_img_path, num_characters=5):
    # Split the test image into individual characters

    image = cv2.imread(test_img_path, cv2.IMREAD_GRAYSCALE)
    
    final = process_image(image)

    char_images = characters_splitting(final)

    predictions = []
    for i, char_image in enumerate(char_images):
        predicted_class = predict_character(char_image)
        predictions.append(predicted_class)
        print(f"Character {i + 1}: Predicted as {predicted_class}")

    return predictions


def clarity(image):
    sharpening_kernel = np.array([[0, -1, 0],
                                  [-1, 5, -1],
                                  [0, -1, 0]])
    sharpened = cv2.filter2D(image, -1, sharpening_kernel)
    return sharpened

def process_image(image):
    return enhance(clarity(crop_image(crop_image(enhance(image)))))
 