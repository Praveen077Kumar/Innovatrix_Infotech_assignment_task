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