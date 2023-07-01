const express = require('express')
const addcourse = require('../Models/AddCourse')
const router = express.Router()
const { body, validationResult } = require('express-validator');



module.exports= router