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

const PostModel = {
    createPost,
};

export default PostModel;
