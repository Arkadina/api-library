import mongoose from "mongoose";
let count = 0;

function connectWithRetry() {
    mongoose
        .connect(
            `mongodb+srv://imastucia1990:QRnZzT4JVUfKWRuq@cluster0.npvvkfl.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => {
            console.log("MongoDB is connected.");
        })
        .catch((err) => {
            console.log(
                "MongoDB connection unsuccessful, retry after 5 seconds."
            );
            console.log(`Error: ${err}`);
            count++;

            setTimeout(connectWithRetry, 5000);
        });
}

connectWithRetry();

export default mongoose;
