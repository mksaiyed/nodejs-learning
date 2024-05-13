const express = require("express");

const {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

router
    .route("/:id")
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router;
