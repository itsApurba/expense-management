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
  const expense = await Expense.findById(body.expenseId);
  if (!expense) {
    throw new ApiError(httpStatus.NOT_FOUND, "Expense not found");
  }
  const manager = await User.findById(body.manager);
  if (!manager) {
    throw new ApiError(httpStatus.NOT_FOUND, "Manager not found");
  }
  const user = await User.findById(body.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  // Only the manager can update the approval status
  if (user.manager.toString() !== manager._id.toString()) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
  }

  expense.status = body.status;
  expense.approvedBy = manager._id;
  return expense.save();
};

module.exports = {
  approveStatus,
  createExpense,
};
