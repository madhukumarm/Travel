const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Config = require('./config');

const users = require('./routes/userRoutes');

const app = new express();

//Json Body-parser middleware
app.use(bodyParser.json());

//DB config
const db = Config.dbConfig.mongoURI;

//Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser:true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//User Routes
app.use('/api/user', users);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));