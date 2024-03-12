const mongoose = require("mongoose");
const { paginate, toJSON } = require("./plugins");

/**
 * @type {mongoose.SchemaDefinitionProperty}
 * */

const expenseSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["APPROVED", "REJECTED", "PENDING"],
      default: "PENDING",
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

expenseSchema.plugin(toJSON);
expenseSchema.plugin(paginate);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;