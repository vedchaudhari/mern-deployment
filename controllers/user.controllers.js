import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, phoneNumber } = req.body;
        const user = await User.create({ name, email, phoneNumber });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ error: `Internal server error ${error.message}` });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: `Internal server error ${error.message}` });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: `Internal server error ${error.message}` });
    }
}
