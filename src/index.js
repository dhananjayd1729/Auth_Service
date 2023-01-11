const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");
const db = require("./models/index");

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
  });
};

prepareAndStartServer();
