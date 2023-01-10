const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");

// const UserRepository = require("./repository/user-repository");

const apiRoutes = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const prepareAndStartServer = () => {
  app.listen(PORT, async () => {
    console.log(`Server started on port : ${PORT}`);

    // const repo = new UserRepository();
    // const response = await repo.getById(1);
    // console.log(response);
  });
};

prepareAndStartServer();
