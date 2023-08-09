# YouTube Embed App

This is a React TypeScript application that allows users to search for videos using the YouTube Data API and embed selected videos.

## Task Description

The app uses an API source (YouTube) to perform keyword searches for videos, lets users select one, and embeds the selected video. It is built with extensibility in mind, allowing for the addition of new "sources" that can support searching via different APIs.

## How to Run

1. Clone this repository using:

```
git clone https://github.com/your-username/source-view.git
```

2. Navigate to the project directory:

```
cd source-view
```

3. Install the dependencies:

```
npm i
```

4. Create a `.env` file in the root directory and add your YouTube Data API key:

```
REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE
```

5. Start the development server:

```
npm start
```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app.

## Setting Up Environment Variable

To set up the required environment variable for the YouTube Data API key:

1. Obtain a YouTube Data API key from the [Google Cloud Console](https://console.cloud.google.com/).

2. Create a `.env` file in the root directory of the project.

3. Add your YouTube Data API key to the `.env` file. Replace `YOUR_API_KEY_HERE` with your actual API key.

4. Make sure to restart the development server after adding the API key.

## Extensibility

The app is designed for extensibility by allowing the addition of new "sources." To add a new source, you can create a new implementation of the `Source` interface in the `src/sources` directory, following the existing structure.

Feel free to modify and expand upon the app to suit your requirements.
