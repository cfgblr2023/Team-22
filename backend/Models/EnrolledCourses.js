const mongoose= require('mongoose')

const {Schema}=mongoose;
const EnrolledCourse= new Schema({
    email:{
        type:String,
        required:true    
    },
    area:{
        type: String,
        required: true
    },
    course:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        default:""
    },
    teacher:{
        type:String,
        required:true
    },
    skill:
    {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('enrolledcourse',EnrolledCourse);