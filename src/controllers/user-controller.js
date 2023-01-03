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

module.exports = {
  create,
};
