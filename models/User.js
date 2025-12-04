import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique:true,
        trim:true,
        lowercase:true
    },
    phoneNumber:{
        type:String,
        unique:true,
        trim:true
    },
    password: {
        type: String,
    }
})

const User = mongoose.model('users', userSchema);

export default User;
