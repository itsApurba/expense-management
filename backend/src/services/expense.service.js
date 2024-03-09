const httpStatus = require("http-status");
const { Expense, User } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a expense
 * @param {Object} expenseBody
 * @returns {Promise<Expense>}
 */
const createExpense = async (expenseBody) => {
  return Expense.create(expenseBody);
};

const approveStatus = async (body) => {
  const expense = await Expense.findOne({ _id: body.expenseId });
  if (!expense) {
    throw new ApiError(httpStatus.NOT_FOUND, "Expense not found");
  }
  const manager = await User.findOne({ _id: body.manager });
  if (!manager) {
    throw new ApiError(httpStatus.NOT_FOUND, "Manager not found");
  }
  expense.approvedBy = manager;
  // Only the manager can update the approval status

  const user = await User.findOne({ _id: body.userId });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.manager.includes(manager._id)) {
    expense.status = body.status;
  } else {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
  }
  return expense.save();
};

module.exports = {
  approveStatus,
  createExpense,
};
