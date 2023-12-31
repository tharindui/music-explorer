
# Music Explorer App

Music Explorer App is a web application built using Next.js, Material-UI, and Redux. It allows users to search for artists, albums, and songs by fetching data from an external API.

## Demo

You can try the live demo of this application here: [Demo](https://main--taupe-pika-43f84d.netlify.app/)

## Table of Contents
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Features](#features)
- [Tech Stack](#tech-stack)

## Getting Started

Before running the application, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/tharindui/music-explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd music-explorer
   ```

3. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

## Running the Application

1. Start the development server:

   ```bash
   yarn dev
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the React application.

   Note: Since the external API may not work with CORS enabled, you can either run the app in Chrome with web security disabled or use a proxy server to handle API calls.

3. Start your Node.js server on port 3001 for API proxying:

   ```bash
   node server.js
   ```

   Now, your Node.js server is running on port 3001 and acts as a proxy for API requests.

## Testing

To run the unit tests, use the following command:

```bash
yarn test
```

## Features

- Search for artists, albums, and songs.
- Paginated results (10 items per page) that update as you scroll down.
- Notification for no search results.
- Responsive Material-UI design.
- Unit tests using Jest and @testing-library/react.

## Tech Stack

- React
- TypeScript
- Next.js
- Redux
- axios
- Redux Thunk
- Node.js + Express (static serving of pages and API proxy)
- Material-UI
- Jest + @testing-library/react (for testing)
```
![image](https://github.com/tharindui/music-explorer/assets/47268302/deac99d5-2ea7-4643-9756-f1ecb1923396)
