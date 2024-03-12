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

/**
 * 
 * @param {object} expenseBody 
 * @returns {Promise<Expense>}
 */

const approveStatus = async ({ userId, expenseId, managerId, status }) => {
  const expense = await Expense.findById(expenseId);
  if (!expense) {
    throw new ApiError(httpStatus.NOT_FOUND, "Expense not found");
  }

  if(expense.userId.toString() !== userId.toString()) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  // Only the manager can update the approval status
  if (user.manager.toString() !== managerId.toString()) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
  }

  expense.status = status;
  expense.approvedBy = managerId;
  return expense.save();
};

module.exports = {
  approveStatus,
  createExpense,
};
