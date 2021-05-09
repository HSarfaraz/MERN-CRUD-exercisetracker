const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const dbConfig = require('./database/db')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// For online Atlas
//const uri = process.env.ATLAS_URI;

// For local DB
const uri = dbConfig.db

mongoose.connect(uri,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Mongodb database connection established successfully")
})

const exercisesRouter = require('./routes/exercises');
const usersRouter     = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, ()=> {
  console.log(`Server is running on port: ${port}`)
})