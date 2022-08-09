import connectionDB from "../config/database";
import { DataTypes } from "sequelize";

export default connectionDB.define(
  "orderDetail",
  {
    id: {
      type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    itemId: {
      field: "item_id", type: DataTypes.INTEGER, allowNull: false,
    },
    itemName: {
      field: "item_name", type: DataTypes.STRING, allowNull: false,
    },
    category: {
      field: "category", type: DataTypes.STRING, allowNull: false,
    },
    quantity: {
      field: "quantity", type: DataTypes.INTEGER, allowNull: false,
    },
    price: {
      field: "price", type: DataTypes.INTEGER, allowNull: false,
    },
    merchantName: {
      field: "merchant_name", type: DataTypes.STRING, allowNull: false,
    },
  },
  {
    tableName: "order_detail",
    timestamps: false,
  },
);
