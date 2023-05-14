import express from "express";

import UserController from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
    res.send("/login page");
});

authRouter.post("/register", UserController.Register);

export default authRouter;
