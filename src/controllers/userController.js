import jwt from "jsonwebtoken";
import config from "../config/config.js";
import UserModel from "../models/userModel.js";

async function Register(req, res) {
    const { email, password } = req.body;
    let permissionLevel = 1;

    const userExists = await UserModel.isUserExisting(email);

    if (userExists === true) {
        return res
            .status(409)
            .send({ error: "user has already been created." });
    }

    const user = await UserModel.createUser({
        email,
        password,
        permissionLevel,
    });

    if (user) {
        return res.status(201).send({ message: "user created with success." });
    }
}

async function Login(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findByEmail(email);

    if (user && user.password == password) {
        const { _id, email, permissionLevel } = user;
        const payload = { _id, email, permissionLevel };
        const token = jwt.sign(payload, config.secret_key);

        return res.status(200).send({ token });
    }

    return res.status(400).send({ error: "email or password do not match." });
}

const UserController = {
    Register,
    Login,
};

export default UserController;
