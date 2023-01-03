const express = require("express");
const { PORT } = require("../src/config/serverConfig");
const app = express();

const prepareAndStartServer = () => {
  app.listen(PORT, (req, res) => {
    console.log(`Server started on port : ${PORT}`);
  });
};

prepareAndStartServer();
