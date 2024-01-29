import express from  'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT= 3300;

dotenv.config();
mongoose.connect(process.env.MongoUri).then(()=>{
    console.log('MongoDb connected Successfully');
}).catch((err)=>{
    console.error(err);
});

//initialize the app
const app = express();    
app.use(express.json());




app.listen(PORT, () => {
   try {
        console.log(`listening on port ${PORT}`); 
   } catch (error) {
        console.error('Error listening on port ${PORT}', error);
   }
});






