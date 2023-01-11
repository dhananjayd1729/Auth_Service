const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: "Email or password missing in the request.",
    });
  }

  next();
};

const isAdminValidationRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: "UserId is not given",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  isAdminValidationRequest,
};
