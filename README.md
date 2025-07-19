# Text-to-Image Generator

Welcome to our Text-to-Image Generator project! This application utilizes cutting-edge AI models to generate images based on text prompts. Users can create and share their generated images with the community. The project is built using the MERN stack along with the Hugging Face `stabilityai/stable-diffusion-xl-base-1.0` model and Cloudinary for image storage.

## Features

- **Text-to-Image Generation:** Utilizes the `stabilityai/stable-diffusion-xl-base-1.0` model to generate images from text prompts.
- **Community Sharing:** Users can share their generated images with the community.
- **Search Functionality:** Users can search for specific images and prompts.
- **Download:** Users can download shared posts.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Model:** `stabilityai/stable-diffusion-xl-base-1.0`
- **Image Storage:** Cloudinary

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/nikhildixit27/AI-Image-Generator
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install dependencies for the client:

    ```bash
    cd client
    npm install
    ```

4. Run the client:

    ```bash
    npm run dev
    ```

5. Open a new terminal window, navigate to the project directory, and install dependencies for the server:

    ```bash
    cd ../server
    npm install
    ```

6. Run the server:

    ```bash
    npm run start 
    ```

7. Create a `.env` file in the `server` directory and add the following environment variables:

    - **STABILITY_AI_TOKEN:** API token for the Hugging Face stabilityai/stable-diffusion-xl-base-1.0 model.
    - **MONGODB_URL:** MongoDB connection URL.
    - **CLOUDINARY_CLOUD_NAME:** Cloudinary cloud name.
    - **CLOUDINARY_API_KEY:** Cloudinary API key.
    - **CLOUDINARY_API_SECRET:** Cloudinary API secret.

    Make sure to replace the placeholder values with your actual API tokens, MongoDB URL, Cloudinary cloud name, API key, and API secret.

8. Access the application at `http://localhost:3000`.

## Live Project

You can access the live project [here](https://texttoimg.vercel.app/).

## API Endpoints

### `/api/v1/post`

- **GET:** Fetch shared posts.
- **POST:** Share a generated image with the community.

### `/api/v1/imgGenerate`

- **POST:** Generate an image based on a text prompt.

## Contributing

We welcome contributions from the community! Feel free to open issues, submit pull requests, or suggest new features.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact Information

For any inquiries or feedback, please contact:

- **Name:** hari bhai
- **Email:** harshits379817@gmail.com
- **LinkedIn:** [nikhildixit27](https://www.linkedin.com/in/nikhildixit27/)
