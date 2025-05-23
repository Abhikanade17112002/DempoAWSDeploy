const express = require('express');
const path = require('path');
const app = express();

// Serve API
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Serve frontend in production
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
