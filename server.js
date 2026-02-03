const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from project root
app.use(express.static(path.join(__dirname, '.')));

// Fallback to index.html for any non-file request
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
