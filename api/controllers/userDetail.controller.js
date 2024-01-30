import UserData from '../models/userDataSchema.model.js'
import errorHandling from '../utils/errorHandling.js';


export const createData= async(req,res,next)=>{
    try {
        const userData = await UserData.create(req.body);
        return res.status(201,'User Dataa Created').json(userData); 
    } catch (error) {
        next(error);
    }
}


export const getUserData = async( req, res, next ) => {
    if(req.user.id === req.params.id){
        try {
            const userData = await UserData.find({ userRef:req.params.id})
            res.status(200).json(userData);
        } catch (error) {
            console.log(error);
        }
    }else{
        return next(errorHandling(401, 'No data available!'));
    }
}