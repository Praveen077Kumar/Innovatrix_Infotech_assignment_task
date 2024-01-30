import express from 'express';
import {varifyAccessToken} from '../utils/userVarify.js'
import {createData,getUserData} from '../controllers/userDetail.controller.js'

const router = express.Router();

router.post('/create',varifyAccessToken,createData);
router.get('/data/:id',varifyAccessToken,getUserData)


export default router;