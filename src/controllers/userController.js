import UserModel from "../models/userModel.js";

async function Register(req, res) {
    const { email, password } = req.body;

    const userExists = await UserModel.isUserExisting(email);

    if (userExists === true) {
        return res
            .status(409)
            .send({ error: "user has already been created." });
    }

    const user = await UserModel.createUser({ email, password });

    if (user) {
        return res.status(201).send({ message: "user created with success." });
    }
}

const UserController = {
    Register,
};

export default UserController;
