
<div align="center">
<h1> AlignShare </h1>
  </div>
<p >
    AlignShare is a platform designed to automate the content sharing process for companies by instantly fetching their updates, generating engaging content in the form of images, and sharing it directly across social media platforms.
</p>


## Project Description

*Tech Stack: NextJS, FastAPI, Python, Vercel*  
AlignShare aims to streamline the content sharing process for companies by automating the generation and posting of updates across social media platforms. By leveraging real-time fetching of updates from company websites, an AI-powered content generator, and direct social media integration, AlignShare ensures that companies can effortlessly keep their audience informed and engaged with the latest news and announcements.

## Features

- Fetch the latest updates about your company directly in AlignShare. Stay informed about important news, announcements, and events happening in your organization.
- Create engaging content for your social media platforms with our AI-powered content generator using the latest updates fetched.
- Post the generated content directly to your social media platforms from AlignShare. Save time and effort by posting directly from our platform.
- AI-generated content is designed to be visually appealing and engaging, increasing the likelihood of interaction and shares on social media, thus boosting overall visibility and engagement.
- AlignShare offers an intuitive and easy-to-use interface, making it accessible for users of all technical levels to manage their content and social media posts efficiently.

## Local Environment Setup
- Node.js and npm installed for the client
- Python and virtualenv installed for the server

### Running the Client

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Running the Server

1. Set up a virtual environment:
   ```bash
   virtualenv venv
   ```

2. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the server:
   ```bash
   uvicorn app:app --host 0.0.0.0 --port 8000
   ```

#### Notes
- Ensure both client and server are running concurrently for full functionality.
- The client will typically run on `localhost:3000` and the server on `localhost:8000` unless specified otherwise.

## Usage

1. AlignShare will automatically fetch the latest updates from your company.
2. Use the AI-powered content generator to create engaging content based on the updates fetched.
3. Share the generated content directly to your social media platforms from AlignShare.

## Configuration

To configure AlignShare, you will need to set up your social media API keys. Create a `.env` file in the root directory and add the following:  
HF_TOKEN=""  
NEWS_API_KEY=""

