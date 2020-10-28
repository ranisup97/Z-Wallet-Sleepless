const userRoutes = require("express").Router();
const { checkToken } = require("../helper/middleware");

const userController = require("../controller/User");

userRoutes.get("/search", checkToken, userController.search);
userRoutes.patch("/change_password", checkToken, userController.changePassword);
userRoutes.get("/home", userController.home);

module.exports = userRoutes;
