import express from 'express';
import { varifyAccessToken } from '../utils/userVarify';
import {createData} from '../controllers/userDetail.controller'

const router = express.Router();

router.post('/create',varifyAccessToken,createData);