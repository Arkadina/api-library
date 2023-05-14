import express from "express";

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
    res.send("/login page");
});

authRouter.get("/register", (req, res) => {
    res.send("/register page");
});

export default authRouter;
