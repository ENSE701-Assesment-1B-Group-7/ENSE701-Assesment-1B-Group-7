const express = require('express');
const connectDB = require('./config/db');
const port = process.env.PORT || 8082;

// routes
const articles = require('./routes/api/articles');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/articles', articles);

// Set-up for frontend + backend on heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'/../frontend/build')));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '/../frontend/build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => res.send(`API running on port ${port}`));
}

app.listen(port, () => console.log(`Server running on port ${port}`));