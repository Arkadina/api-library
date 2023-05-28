import express from "express";
const app = express();

import authRouter from "./src/routes/authRouter.js";
import postRouter from "./src/routes/postRouter.js";
// import cors from "cors";

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRouter);
app.use("/post", postRouter);

app.listen(3000, () => {
    console.log("[Server] Running on port 3000");
});
