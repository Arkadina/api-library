import express from "express";
import PostController from "../controllers/postController.js";

const bookRouter = express.Router();

bookRouter.get("/", PostController.getPosts);
bookRouter.get("/:id", PostController.findPost);
bookRouter.post("/", PostController.createPost);
bookRouter.put("/:id", PostController.updatePost);
bookRouter.delete("/:id", PostController.deletePost);

export default bookRouter;
