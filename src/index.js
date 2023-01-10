const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");
const db = require("./models/index");
// const UserService = require("./services/user-service");

const { User, Role } = require("./models/index");

const apiRoutes = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const prepareAndStartServer = () => {
  app.listen(PORT, async () => {
    console.log(`Server started on port : ${PORT}`);
    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }

    const u1 = await User.findByPk(2);
    const r1 = await Role.findByPk(1);
    // u1.addRole(r1);

    const response = await u1.hasRole(r1);
    console.log(response);
    // const service = new UserService();
    // const response = await service.createToken({
    //   email: "xyz@admin.com",
    //   id: 1,
    // });
    // console.log("new token is ", response);

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inh5ekBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjczMzU4MzU5LCJleHAiOjE2NzMzNTgzODl9.C_r-3IsoYszVtW9amAF9UD-R8eF_xCtTx8CUuUZTmzQ";
    // const response = service.verifyToken(token);
    // console.log(response);
  });
};

prepareAndStartServer();
