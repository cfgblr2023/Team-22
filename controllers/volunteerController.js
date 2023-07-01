const Volunteer = require('../models/volunteerModel')
const mongoose = require('mongoose')

// get all volunteers
const getVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find()
  res.status(200).json(volunteers)
}

// create new workout
const createVolunteer = async (req, res) => {
  const {area,course,avail,level,lang,live} = req.body

  let emptyFields = []

  if(!area) {
    emptyFields.push('area')
  }
  if(!course) {
    emptyFields.push('course')
  }
  if(!avail) {
    emptyFields.push('avail')
  }
  if(!level) {
    emptyFields.push('level')
  }
  if(!lang) {
    emptyFields.push('lang')
  }
  if(!live) {
    emptyFields.push('live')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const workout = await Volunteer.create({area,course,avail,level,lang,live})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = {
  createVolunteer,getVolunteers
}