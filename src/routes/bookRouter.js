import express from "express";
import PostController from "../controllers/postController.js";
import VerifyAuthorizationMiddleware from "../middlewares/verifyAuthorization.js";

const bookRouter = express.Router();

bookRouter.get("/", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.getPosts,
]);
bookRouter.get("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.findPost,
]);
bookRouter.post("/", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.createPost,
]);
bookRouter.put("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.updatePost,
]);
bookRouter.delete("/:id", [
    VerifyAuthorizationMiddleware.validJWTNeeded,
    PostController.deletePost,
]);

export default bookRouter;
