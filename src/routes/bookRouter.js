import express from "express";
import PostController from "../controllers/postController.js";
import VerifyAuthorizationMiddleware from "../middlewares/verifyAuthorizationMiddleware.js";
import PostMiddleware from "../middlewares/postMiddleware.js";

const bookRouter = express.Router();

bookRouter.get("/", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.getPosts,
]);
bookRouter.get("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostMiddleware.verifyIdParam,
    PostController.findPost,
]);
bookRouter.post("/", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.createPost,
]);
bookRouter.put("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostMiddleware.verifyIdParam,
    PostController.updatePost,
]);
bookRouter.delete("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostMiddleware.verifyIdParam,
    PostController.deletePost,
]);

export default bookRouter;
