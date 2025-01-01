# Unsplash Image Getter

The **Unsplash Image Getter** is a simple web application built with **React** that allows users to search for images and set them as the website's background. This application fetches images dynamically from the **Unsplash API** based on the user's search query.

## Features
- Search for any image using keywords.
- Dynamically set the image as the background of the website.
- Built with React for a smooth and interactive experience.
- Easy-to-use interface with a minimalistic design.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Unsplash API**: A powerful API to fetch high-quality images.
- **CSS**: For styling and making the interface visually appealing.

## Installation

To get started with the project, follow these steps:

### 1. Clone the repository
Open your terminal and run the following command to clone the repository to your local machine:
```bash
git clone https://github.com/mouleshleo/unsplash-image-getter.git
cd unsplash-image-getter
```
### 2. Install Dependencies
This command will install the dependencies required for the project to run.
```bash
npm install
```
### 3. Set Your Access Token
Sign up at [Unsplash Developers](https://unsplash.com/developers) to get your API key.
Replace the YOUR_API_KEY placeholder in the App.js file with your actual API key.
```js
const apiKey = 'YOUR_API_KEY'; // Replace with your Unsplash API key
```

### 4. Start the development server
```bash
npm start
```
The app will run on http://localhost:3000.

## Directory Structure
```
└── unsplash-image-getter/
    ├── public/
    │   ├── manifest.json
    │   ├── index.html
    │   └── robots.txt
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── src/
        ├── setupTests.js
        ├── index.css
        ├── App.js
        ├── reportWebVitals.js
        ├── App.css
        ├── App.test.js
        └── index.js
```

