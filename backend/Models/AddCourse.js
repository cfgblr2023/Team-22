const mongoose= require('mongoose')

const {Schema}=mongoose;
const AddCourse= new Schema({
    interest:{
        type: String,
        required: true
    },
    coursename:{
        type:String,
        required:true
    },
    live:{
        type:String,
        required:true
    },
    skill:{
        type:Number,
        required: true
    },
    lnaguage:{
        type:String,
        required:true
    },
    offline:{
        type: Boolean,
        required:true
    }

    
})

module.exports = mongoose.model('addcourse',AddCourse);