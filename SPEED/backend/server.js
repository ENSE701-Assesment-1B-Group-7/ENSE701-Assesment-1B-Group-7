const express = require('express');
const connectDB = require('./config/db');

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

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));