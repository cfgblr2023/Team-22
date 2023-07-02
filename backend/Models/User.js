const mongoose= require('mongoose')

const {Schema}=mongoose;
const UserSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:""
    },
    skills:{
        type:String,
        default:""
    },
    education:{
        type:String,
        default:""
    },
    enrolledcourses:{
        type: Map,
        of: String,
        default:{}
    }

    
})

module.exports = mongoose.model('user',UserSchema);