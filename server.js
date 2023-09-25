const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
// Serve static files from the 'build' directory
//app.use(express.static(path.join(__dirname, 'build')));

// Proxy API requests to iTunes API
app.get('/search', async (req, res) => {
  const { term, limit, media } = req.query;
  try {
    const response = await axios.get('https://itunes.apple.com/search', {
      params: {
        term,
        limit,
        media
        // Forward the 'limit' parameter to the iTunes API
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});


// Serve the React app for all other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
