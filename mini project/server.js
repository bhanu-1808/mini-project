// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Route for QR success page
app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/success.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
