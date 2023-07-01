const express = require('express')
const {
  createVolunteer,getVolunteers
} = require('../controllers/volunteerController')

const router = express.Router()

// POST a new workout
router.post('/', createVolunteer)

//GET all workouts
router.get('/',getVolunteers)


module.exports = router