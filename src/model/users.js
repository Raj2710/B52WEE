import mongoose from './index.js'

const emailValidation = (value)=>{
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(value)
}

const mobileVlidation = (value)=>{
    var re = /^\d{10}$/;
    return re.test(value)
}

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:emailValidation,
            message:props=>`${props.value} is not a valid email`
        }
    },
    mobile:{
        type:String,
        required:true,
        validate:{
            validator:mobileVlidation,
            message:props=>`${props.value} is not a valid mobile`
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:Boolean,
        default:true
    },
    books:{
        type:Array,
        default:[]
    }
},{
    versionKey:false,
    collection:'users'
})

const UserModel = mongoose.model('users',UserSchema)
export default UserModel