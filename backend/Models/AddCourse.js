const mongoose= require('mongoose')

const {Schema}=mongoose;
const AddCourse= new Schema({
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
    live:{
        type:String,
        required:true
    },
    skill:{
        type:Number,
        required: true
    },
    language:{
        type:String,
        required:true
    },
    offline:{
        type: Boolean,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    }
    
})

module.exports = mongoose.model('addcourse',AddCourse);