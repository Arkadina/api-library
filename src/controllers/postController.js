import PostModel from "../models/postModel.js";

async function getPosts(req, res) {
    const users = await PostModel.getPosts();
    return res.status(200).send(users);
}

async function findPost(req, res) {
    const { id } = req.params;

    const post = await PostModel.findPost(id);
    if (post !== null) {
        return res.status(200).send(post);
    }

    return res.sendStatus(404);
}

async function createPost(req, res) {
    const { _id } = req.jwt;
    const { title, content } = req.body;

    const post = await PostModel.createPost({ title, content, authorId: _id });
    return res.status(200).send(post);
}

async function updatePost(req, res) {
    const { id } = req.params;

    const post = await PostModel.updatePost(id, req.body);
    if (post !== null) {
        return res.status(200).send(post);
    }
    
    return res.sendStatus(404);
}

async function deletePost(req, res) {
    const { id } = req.params;

    const post = await PostModel.deletePost(id);
    if (post !== null) {
        return res.status(200).send(post);
    }

    return res.sendStatus(404);
}

const PostController = {
    getPosts,
    findPost,
    createPost,
    updatePost,
    deletePost,
};

export default PostController;
