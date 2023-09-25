# Artist, Album, and Song Search App

This is a web application built using Next.js, Material-UI, and Redux that allows users to search for artists, albums, and songs. The application fetches data from an external API.

## Getting Started

Before running the application, ensure you have the following prerequisites installed:

- Node.js (https://nodejs.org/)
- Yarn (https://yarnpkg.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/artist-album-song-search-app.git
2.Navigate to the project directory:
  - cd music-explorer
  
3.Install dependencies using Yarn:
  - yarn install
    
### Running the Application

1. Start the development server:
   - yarn dev
     
2. Open your web browser and navigate to http://localhost:3000 to access the React application.
   Note: Since the external API may not work with CORS enabled, you can either run the app in Chrome with web security disabled or use a proxy server to handle API calls.
   
3.Start your Node.js server on port 3001 for API proxying:
  - node server.js
Now, your Node.js server is running on port 3001 and acts as a proxy for API requests.

### Testing

To run the unit tests, use the following command:
- yarn test

### Features
-Search for artists, albums, and songs.
-Paginated results (10 items per page) that update as you scroll down.
-Notification for no search results.
-Responsive Material-UI design.
-Unit tests using Jest and @testing-library/react.

### Tech Stack
-React
-TypeScript
-Next.js
-Redux
-axios
-Redux Thunk
-Node.js + Express (static serving of pages and API proxy)
-Material-UI
-Jest + @testing-library/react (for testing)

