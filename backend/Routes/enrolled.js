const express = require('express')
const addcourse = require('../Models/EnrolledCourses')
const router = express.Router()
const User= require("../Models/User")

router.post('/encourse', async (req, res) => {
    try {
        let course = await addcourse.find({});  //{email:email} === {email}
        global.enrolled=course;
        success = true; 
        res.send([global.enrolled])


    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

router.post('/endata', async (req, res) => {
    let success = false
    try {
        await addcourse.create({
            area: req.body.area,
            skill:req.body.skill,
            email:req.body.email,
            course: req.body.course,
            live:req.body.live,
            useremail:req.body.useremail,
            language: req.body.language,
            offline:req.body.offline,
            teacher:req.body.teacher
        }).then(user => {
            const data = {
                user: {
                    id: user.id
                }
            }
            success = true
            res.json({ success})
        })
            .catch(err => {
                console.log(err);
                res.json({ error: "Something Wrong." })
            })
    } catch (error) {
        console.error(error.message)
    }
})


module.exports= router


module.exports = router