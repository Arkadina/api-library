import express from "express";
import PostController from "../controllers/postController.js";
import VerifyAuthorizationMiddleware from "../middlewares/verifyAuthorizationMiddleware.js";
import PostMiddleware from "../middlewares/postMiddleware.js";

const postRouter = express.Router();

postRouter.get("/", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.getPosts,
]);
postRouter.get("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostMiddleware.verifyIdParam,
    PostController.findPost,
]);
postRouter.post("/", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.createPost,
]);
postRouter.put("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostMiddleware.verifyIdParam,
    PostController.updatePost,
]);
postRouter.delete("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostMiddleware.verifyIdParam,
    PostController.deletePost,
]);

export default postRouter;
