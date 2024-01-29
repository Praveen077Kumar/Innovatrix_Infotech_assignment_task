import express from "express";
import {
  userSignup,
  userSignin,
} from "../controllers/authenticate.controller.js";

const router = new express.Router();
router.post("/signup", userSignup);
router.post("/signin", userSignin);

export default router;
