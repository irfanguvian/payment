import connectionDB from "../config/database";
import { DataTypes } from "sequelize";

export default connectionDB.define(
  "log",
  {
    id: {
      type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    refId: {
      field: "ref_id", type: DataTypes.STRING, allowNull: false,
    },
    refType: {
      field: "ref_type", type: DataTypes.STRING, allowNull: false,
    },
    event: {
      field: "event", type: DataTypes.STRING, allowNull: false,
    },
  },
  {
    tableName: "log",
  },
);
