import express from "express";

import UserController from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.get("/login", UserController.Login);
authRouter.post("/register", UserController.Register);

export default authRouter;
