//Basic Boilerplate for establishing server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.REACT_APP_ATLAS_URI;

//Middleware
app.use(cors);
app.use(express.json());

//Connecting to DB
mongoose.connect("mongodb+srv://m001-student:6Z3B14xyfGa8b1Yn@sandbox.akxqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true }
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

//CORS EVERYWHERE to resolve issue with Heroku
