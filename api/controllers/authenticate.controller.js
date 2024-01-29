import bcryptjs from "bcryptjs";
import User from "../models/userSchema.model.js";
import errorHandling from "../utils/errorHandling.js";
import jsonwebtoken from "jsonwebtoken";

export const userSignup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({
      message: "user Created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const userSignin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const userExisted = await User.findOne({ email });
    if (!userExisted) {
      return errorHandling(404, "User not Found! please try again..");
    }

    const validatePassword = bcryptjs.compareSync(
      password,
      userExisted.password
    );

    if (!validatePassword) {
      return next(errorHandling(401, "Wrong Credentials!"));
    }
    const SECRET_KEY = "testingSecretKeyForJWT";
    const token = jsonwebtoken.sign({ id: userExisted._id }, SECRET_KEY);

    const { password: pass, ...restUserInfo } = userExisted._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(restUserInfo);
  } catch (error) {
    next(error);
  }
};
