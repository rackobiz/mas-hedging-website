const express = require('express');
const path = require('path');
const app = express();

// Get port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'MAS Hedging website is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 MAS Hedging website is running on port ${PORT}`);
    console.log(`📱 Local: http://localhost:${PORT}`);
});
