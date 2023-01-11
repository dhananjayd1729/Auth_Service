const { response } = require("express");
const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully create a User.",
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Something went wrong.",
      err: error,
      success: false,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.email,
      req.body.password
    );
    return res.status(200).json({
      data: response,
      message: "Successfully signed in",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Something went wrong.",
      err: error,
      success: false,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      message: "Token is valid & successfully verified a user.",
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Something went wrong.",
      err: error,
      success: false,
    });
  }
};

const isAdmin = async (req, res) => {
  try {
    const response = await userService.isAdmin(req.body.id);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched whether a user is Admin or not.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Something went wrong.",
      err: error,
      success: false,
    });
  }
};

module.exports = {
  create,
  signIn,
  isAuthenticated,
  isAdmin,
};
