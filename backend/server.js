const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");
const cors = require("cors");

//Function that connects express app to database
connectToDatabase();