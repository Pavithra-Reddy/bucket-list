const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB Server is running`);
});

const bucketlistOperations = require('./operations/bucketlist');
const userOperations = require('./operations/user');

app.use('/bucketlist', bucketlistOperations);
app.use('/user', userOperations);

app.listen(port, () => {
    console.log(`Server is running at the port: ${port}`);
});