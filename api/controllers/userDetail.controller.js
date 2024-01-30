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


export const updateUserData = async(req,res,next)=>{
  
    const dataItem = await UserData.findById(req.params.id);
    if(!dataItem){
        return next(errorHandling(401, 'No data available!'));
    } 

    if(req.user.id !==  dataItem.userRef){
        return next(errorHandling(401,"you can only update your own data"));
    }

    try {
        const updatedItem = await UserData.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        );
        res.status(200).json(updatedItem);

    } catch (error) {
        next(error)
    }
}



export const deleteUserData = async(req,res,next) => {
    const userItem = await UserData.findById(req.params.id);
    if(!userItem){
        return next(errorHandling(401, 'No data available!'));
    } 

    if(req.user.id !==  userItem.userRef){
        return next(errorHandling(401,"you can only update your own data"));
    }
    try{
        await UserData.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Has Been Deleted! ')
    }
    catch(error){
        next(error);
    }
}