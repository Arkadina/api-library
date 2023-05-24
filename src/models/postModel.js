import mongoose from "../services/mongooseService.js";

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    viewCount: Number,
    published: Boolean,
    createdAt: Date,
    updatedAt: Date,
    authorId: String,
});

const Post = mongoose.model("Posts", postSchema);

async function getPosts() {
    const users = Post.find();
    return users;
}

async function createPost(userData) {
    const { title, content, authorId } = userData;
    const now = new Date();

    const post = new Post({
        title: title || "",
        content: content || "",
        viewCount: 0,
        published: false,
        createdAt: now,
        updatedAt: now,
        authorId: authorId,
    });
    return await post.save();
}

async function findPost(id) {
    const updatedPost = await Post.findByIdAndUpdate(
        id,
        {
            $inc: {
                viewCount: 1,
            },
        },
        { new: true }
    );

    return updatedPost;
}

async function deletePost(id) {
    const post = await Post.findByIdAndDelete(id);
    return post;
}

async function updatePost(id, newData) {
    const post = await Post.findByIdAndUpdate(
        id,
        {
            title: newData?.title,
        },
        { new: true }
    );
    return await post;
}

const PostModel = {
    createPost,
    findPost,
    getPosts,
    deletePost,
    updatePost,
};

export default PostModel;
