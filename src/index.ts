import dotenv from "dotenv";
import appServer from "./server";

dotenv.config();

process.env.APP_VERSION = require("../package.json").version;

const appPort = (process.env.PORT || 8080);

process.once("uncaughtException", (err) => {
  console.error(err);
});

appServer.listen(appPort, function startApp() {
  console.log(`APP_ENV ${process.env.APP_ENV}`);
  console.log(`v${process.env.APP_VERSION}`);
});

