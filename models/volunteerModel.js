const mongoose = require('mongoose')

const Schema = mongoose.Schema

const volunteerSchema = new Schema({
  area: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  avail: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  live: {
    type: Boolean,
    require: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Volunteer', volunteerSchema)