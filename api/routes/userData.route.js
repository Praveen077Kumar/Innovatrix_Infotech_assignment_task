import express from 'express';
import {varifyAccessToken} from '../utils/userVarify.js'
import {createData,getUserData,updateUserData,deleteUserData} from '../controllers/userDetail.controller.js'

const router = express.Router();

router.post('/create',varifyAccessToken,createData);
router.get('/data/:id',varifyAccessToken,getUserData)
router.post('/update/:id',varifyAccessToken,updateUserData)
router.delete('/delete/:id',varifyAccessToken,deleteUserData)


export default router;