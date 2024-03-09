const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { expenseService } = require("../services");

const createExpense = catchAsync(async (req, res) => {
  const expense = await expenseService.createExpense(req.body);
  res.status(httpStatus.CREATED).send(expense);
});

const approveStatus = catchAsync(async (req, res) => {
  const expense = await expenseService.approveStatus(req.body);
  res.status(httpStatus.CREATED).send(expense);
})

module.exports = {
  approveStatus,
  createExpense,
};
