const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const pick = require("../utils/pick");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "manager"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const deleteUser = catchAsync(async (req, res) => {
  // console.log(req.body)
  // console.log(req.params)
  const user = await userService.deleteUserById(req);
  res.status(httpStatus.NO_CONTENT).send(user);
})

module.exports = {
  createUser,
  getUsers,
  deleteUser
};
