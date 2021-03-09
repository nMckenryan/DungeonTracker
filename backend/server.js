//Basic Boilerplate

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connecting to DB
//const uri = process.env.ATLAS_URI; //previous uri
const uri = process.env.MONGODB_URI; //uri for heroku
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Initialising Routes
const sessionRouter = require('./routes/session');
const campaignRouter = require('./routes/campaign');

app.use('/sessions', sessionRouter);
app.use('/campaigns', campaignRouter);

//Initialising Port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
