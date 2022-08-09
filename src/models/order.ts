
import connectionDB from "../config/database";
import { DataTypes } from "sequelize";

export type orderType = {
  id: number
  userId: number,
  orderNumber: string,
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  type: string
  orderStatus: number
  paymentType: number
  expiredDate: string
  paidDate: string
  amount: number
  discountPercentage: number
  discountAmount: number
  transactionFee: number
  finalAmount: number
  detail: any
}

export default connectionDB.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true,
    },
    userId: {
      field: "user_id", type: DataTypes.INTEGER, allowNull: false,
    },
    orderNumber: {
      field: "order_number", type: DataTypes.STRING, allowNull: false,
    },
    firstName: {
      field: "first_name", type: DataTypes.STRING, allowNull: false,
    },
    lastName: {
      field: "last_name", type: DataTypes.STRING, allowNull: false,
    },
    email: {
      field: "email", type: DataTypes.STRING, allowNull: false,
    },
    phone: {
      field: "phone", type: DataTypes.STRING, allowNull: false,
    },
    address: {
      field: "address", type: DataTypes.STRING, allowNull: false,
    },
    type: {
      field: "type", type: DataTypes.STRING, allowNull: false, // ECOMMERCE, AUCTION, PPOB, SERVICE(SERVICE A, B, C, D)
    },
    orderStatus: {
      field: "status", type: DataTypes.INTEGER, allowNull: false, // reference note order
    },
    paymentType: {
      field: "payment_type", type: DataTypes.INTEGER, // credit_card, bank_payment, gopay, dll sesuai midtrans, bikin tabel, cek midtrans
    },
    expiredDate: {
      field: "expired_time", type: DataTypes.STRING, allowNull: false, // expired
    },
    paidDate: {
      field: "paid_time", type: DataTypes.STRING, allowNull: false,
    },
    amount: {
      field: "amount", type: DataTypes.INTEGER, allowNull: false,
    },
    discountPercentage: {
      field: "discount_percentage", type: DataTypes.INTEGER, allowNull: false,
    },
    discountAmount: {
      field: "discount_amount", type: DataTypes.INTEGER, allowNull: false,
    },
    transactionFee: {
      field: "transaction_fee", type: DataTypes.INTEGER, allowNull: false,
    },
    finalAmount: {
      field: "finalAmount", type: DataTypes.INTEGER, allowNull: false,
    },
    paymentCallback: {
      field: "payment_callback", type: DataTypes.STRING, allowNull: false,
    },
  },
  {
    tableName: "order",
  },
);
