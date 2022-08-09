import { Sequelize } from "sequelize";
import * as lodash from "lodash";
import * as dotenv from "dotenv";

dotenv.config();

const db = {
  database: lodash.defaultTo(process.env.DB_DATABASE, "dev_timti"),
  username: lodash.defaultTo(process.env.DB_USERNAME, "postgres"),
  password: lodash.defaultTo(process.env.DB_PASSWORD, "qwerty456"),
  dialect: "postgres",
  host: lodash.defaultTo(process.env.DB_HOST, "127.0.0.1"),
  port: lodash.defaultTo(Number(process.env.DB_PORT), 5432),
  timezone: lodash.defaultTo(process.env.DB_TIMEZONE, "+07:00"),
  logging: false,
};

const connectionDB = new Sequelize(db.database, db.username, db.password, {
  dialect: "postgres",
  host: db.host,
  port: db.port,
  password: db.password,
  database: db.database,
  timezone: db.timezone,
  logging: false,
  pool: {
    max: 100,
    min: 0,
    acquire: 20000, // time require to reconnect
    idle: 20000, // get idle connection
    evict: 10000, // it actualy removes the idle connection
  },
});

export default connectionDB;
