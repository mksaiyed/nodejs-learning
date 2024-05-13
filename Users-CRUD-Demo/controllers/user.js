const User = require("../models/user");

async function getAllUsers(req, res) {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function createUser(req, res) {
    if (
        !req.body ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.email ||
        !req.body.jobTitle ||
        !req.body.gender
    )
        return res.status(404).json({ message: "All fields are required" });
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender,
    });

    return res.status(201).json({
        message: "User created successfully",
        id: newUser._id,
    });
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
}
async function updateUserById(req, res) {
    if (
        !req.body ||
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.email ||
        !req.body.jobTitle ||
        !req.body.gender
    )
        return res.status(404).json({ message: "All fields are required" });
    await User.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        gender: req.body.gender,
    });
    return res.status(200).json({ message: "User updated successfully" });
}
async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "User deleted successfully" });
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser,
};
