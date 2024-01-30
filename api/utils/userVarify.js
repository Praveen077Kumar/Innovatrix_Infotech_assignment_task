import errorHandling from "./errorHandling.js";
import jwt from "jsonwebtoken";

export const varifyAccessToken = (req, res, next) => {
  const SECRET_KEY = "testingSecretKeyForJWT";
  const token = req.cookies.access_token;

  if (!token) return next(errorHandling(401, "Unauthorized User!"));

  jwt.verify(token, SECRET_KEY, (error, user) => {
    if (error) return errorHandling(403, " Forbidden !");
    req.user = user;
    next();
  });
};
