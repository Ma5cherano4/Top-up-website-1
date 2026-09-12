const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static assets directly from root directory
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

// API Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', site: 'J4X SHOPS' });
});

// Explicit root route serving index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Wildcard fallback route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`J4X SHOPS server running on port ${PORT}`);
});
