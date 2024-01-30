import Mongoose from "mongoose";


const userSchema = new Mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    userRef:{
        type:String,
        required: true,
    }
});

const DataUser = Mongoose.model('DataUser',userSchema);

export default DataUser;