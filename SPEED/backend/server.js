const express = require('express');
const connectDB = require('./config/db');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
console.log(process.env.PORT)
app.listen(port, () => console.log(`Server running on port ${port}`));