const express = require('express')
const User = require('../Models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const jwtSecret = "HaHa"

router.post('/register', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    const email=req.body.email;
    let user = await User.findOne({ email });  //{email:email} === {email}
        if (user) {
            return res.status(400).json({ success, error: "Email Already Exists" });
        }


    if (!errors.isEmpty()) {
        return res.status(200).json({ success, errors: errors.array() })
    }
    // let user = await User.findOne({email:req.body.email})
    const salt = await bcrypt.genSalt(10)
    let securePass = await bcrypt.hash(req.body.password, salt);
    try {
        await User.create({
            name: req.body.name,
            // password: req.body.password,  first write this and then use bcryptjs
            password: securePass,
            role:req.body.role,
            age:req.body.age,
            email: req.body.email
        }).then(user => {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true
            res.json({ success, authToken })
        })
            .catch(err => {
                console.log(err);
                res.json({ error: "Please enter a unique value." })
            })
    } catch (error) {
        console.error(error.message)
    }
})


const deleteUser = async (userId) => {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        console.log('User not found');
        return;
      }
  
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


router.post('/update', [
    body('email').isEmail(),
    body('name').isLength({ min: 3 })
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ success, errors: errors.array() })
    }
    console.log(req.body.name)
    let user = await User.findOne({email:req.body.email})
    var user_id =user._id;
    console.log(user_id.type)
    try {
        await User.create({
            name: req.body.name,
            // password: req.body.password,  first write this and then use bcryptjs
            password: user.password,
            role:user.role,
            age:user.age,
            email: req.body.email,
            description:req.body.description,
            education:req.body.education,
            skills:req.body.skills
        }).then(user => {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true
            deleteUser(user_id);
            res.json({ success, authToken })
        })
            .catch(err => {
                console.log(err);
                res.json({ error: "Please enter a unique value." })
            })
    } catch (error) {
        console.error(error.message)
    }


    })


module.exports = router