# Capture

🧠 Project Title: Capture – Text Extraction from Image Captchas
📌 Overview:
"Capture" is a web application designed to extract text from image-based captchas using deep learning. The application allows users to upload captcha-style images, and it responds with the detected text. It's a demonstration of integrating deep learning with web development for real-time image processing.

💻 Tech Stack:
🔹 Frontend (React.js):

Built with React for a dynamic, responsive interface.
Four key sections:
Home: Hero section with a catchy heading and illustrative image.
About: Overview of the project’s purpose and usage.
Model Specs: Description of the ML/DL model used for text extraction.
Capture: Main interface to upload captcha images and display the predicted text.
🔹 Backend (Flask):

Handles API endpoints for image uploads and returns predictions.
Integrates the trained deep learning model for text recognition.
🔹 Deep Learning (Python):

Model trained to recognize alphanumeric captcha characters.
Likely using CNN-based architecture (e.g., LeNet, or a custom CNN).
Possibly trained on a synthetic dataset of captchas or a publicly available one like the CaptchaMNIST.
