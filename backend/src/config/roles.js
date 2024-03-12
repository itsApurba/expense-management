const allRoles = {
  user: ["getUsers", "manageUsers", "createExpense", "getExpenses"],
  
  admin: ["getUsers", "manageUsers", "manageRoles", "createExpense", "manageExpenses", "getExpenses"],
};
const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
