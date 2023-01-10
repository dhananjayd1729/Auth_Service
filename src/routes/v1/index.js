const express = require("express");
const UserController = require("../../controllers/user-controller");

const { AuthRequestValidatiors } = require("../../middlewares/index");

const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidatiors.validateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidatiors.validateUserAuth,
  UserController.signIn
);

router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;
