import express from "express";
import PostController from "../controllers/postController.js";

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
    res.send("/book page");
});

bookRouter.get("/:id", (req, res) => {
    res.send("/book page");
});

bookRouter.post("/", PostController.createPost);

bookRouter.put("/:id", (req, res) => {
    res.send("/book page");
});

bookRouter.delete("/:id", (req, res) => {
    res.send("/book page");
});

export default bookRouter;
