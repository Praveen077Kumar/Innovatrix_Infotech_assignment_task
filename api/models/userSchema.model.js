import Mongoose from "mongoose";

const schemaUser = new Mongoose.Schema({

    username:{
        type:'string',
        required: true,
        unique: true
    },
    email:{
        type:'string',
        unique: true,
    },
    password:{
        type:'string',
        required: true,
    }
},{timestamps:true})

const User = Mongoose.model('User', schemaUser);

export default User;