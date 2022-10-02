const express = require('express');
const connectDB = require('./config/db');
const port = process.env.PORT || 8082;

const path = require('path');

// routes
const articles = require('./routes/api/articles');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/articles', articles);

// Set-up for frontend + backend on heroku
if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV);
    console.log("In production");
    console.log(path.join(__dirname,'/../frontend/build'));
    app.use(express.static(path.join(__dirname,'/../frontend/build')));
    console.log(path.join(__dirname, '/../frontend/build', 'index.html'));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '/../frontend/build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => res.send(`API running on port ${port}`));
}

app.listen(port, () => console.log(`Server running on port ${port}`));