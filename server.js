const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve files from the project root
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`KoreDevelopments running at http://localhost:${PORT}`);
});