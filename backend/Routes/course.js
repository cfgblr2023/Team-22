const express = require('express')
const addcourse = require('../Models/AddCourse')
const router = express.Router()

router.post('/course', async (req, res) => {
    try {
        let course = await addcourse.find({});  //{email:email} === {email} 
        global.Courses=course;
        success = true; 
        res.send([global.Courses])


    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})


module.exports = router