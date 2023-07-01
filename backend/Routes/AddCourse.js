const express = require('express')
const addcourse = require('../Models/AddCourse')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.post('/addcourse', async (req, res) => {
    let success = false
    try {
        await addcourse.create({
            area: req.body.area,
            email:req.body.email,
            course: req.body.course,
            live:req.body.live,
            skill:req.body.skill,
            language: req.body.language,
            offline:req.body.offline
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