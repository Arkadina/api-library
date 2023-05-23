import express from "express";
const app = express();

import authRouter from "./src/routes/authRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
// import cors from "cors";

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRouter);
app.use("/book", bookRouter);

app.listen(3000, () => {
    console.log("[Server] Running on port 3005");
});
