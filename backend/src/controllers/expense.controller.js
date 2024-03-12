const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { expenseService } = require("../services");

const createExpense = catchAsync(async (req, res) => {
  // console.log(req.body)
  const expense = await expenseService.createExpense(req.body);
  res.status(httpStatus.CREATED).send(expense);
});

const approveStatus = catchAsync(async (req, res) => {
  // console.log(req.body);
  const {userId, expenseId, managerId, status} = req.body;
  const expense = await expenseService.approveStatus({userId, expenseId, managerId, status});
  res.status(httpStatus.OK).send(expense);
})

module.exports = {
  approveStatus,
  createExpense,
};
