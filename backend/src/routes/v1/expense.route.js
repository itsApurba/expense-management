const express = require("express");
const validate = require("../../middlewares/validate");
const expenseValidation = require("../../validations/expense.validation");
const expenseController = require("../../controllers/expense.controller");
const router = express.Router();

router
  .route("/")
  .post(validate(expenseValidation.createExpense), expenseController.createExpense)
  .get((req, res) => {
    res.send("Expense route");
  });

router.route("/approve").patch(validate(expenseValidation.approveStatus), expenseController.approveStatus);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Expenses
 *   description: Expense management and retrieval
 */


/**
 * @swagger
 * /expense:
 *   post:
 *     summary: Create an expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 required: true
 *                 description: user id
 *               name:
 *                 type: string
 *                 required: true
 *                 description: name of the expense
 *               amount:
 *                 type: number
 *                 required: true
 *                 description: amount of the expense
 *               date:
 *                 type: date
 *                 required: true
 *                 description: date of the expense
 *               description:
 *                 type: string
 *                 required: true
 *                 description: description of the expense
 *             example:
 *               userId: 65eb6149f13fc7046c9faf59
 *               name: Expense1
 *               amount: 100
 *               date: 2022-01-01
 *               description: description of the expense
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expense'
 */
