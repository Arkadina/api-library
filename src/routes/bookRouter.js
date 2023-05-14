import express from "express";

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
    res.send("/book page");
});

bookRouter.get("/:id", (req, res) => {
    res.send("/book page");
});

bookRouter.post("/", (req, res) => {
    res.send("/book page");
});

bookRouter.put("/:id", (req, res) => {
    res.send("/book page");
});

bookRouter.delete("/:id", (req, res) => {
    res.send("/book page");
});

export default bookRouter;
