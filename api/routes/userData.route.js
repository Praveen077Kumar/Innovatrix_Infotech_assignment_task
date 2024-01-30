import express from 'express';
import {varifyAccessToken} from '../utils/userVarify.js'
import {createData} from '../controllers/userDetail.controller.js'

const router = express.Router();

router.post('/create',varifyAccessToken,createData);


export default router;