const httpStatus = require("http-status");
const { Expense } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a expense
 * @param {Object} expenseBody
 * @returns {Promise<Expense>}
 */
const createExpense = async (expenseBody) => {
  return Expense.create(expenseBody);
};

module.exports = {
  createExpense,
}