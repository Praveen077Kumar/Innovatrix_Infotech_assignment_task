import express from 'express';
import { userSignup } from '../controllers/authenticate.controller.js'

const router = new express.Router();
router.post('/signup', userSignup)

export default router;
