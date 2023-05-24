import PostModel from "../models/postModel.js";

async function getPosts(req, res) {}

async function findPost(req, res) {}

async function createPost(req, res) {
    const { title, content, authorId } = req.body;

    const post = await PostModel.createPost({ title, content, authorId });
    res.status(200).send(post);
}

async function updatePost(req, res) {}

async function deletePost(req, res) {}

const PostController = {
    getPosts,
    findPost,
    createPost,
    updatePost,
    deletePost,
};

export default PostController;
