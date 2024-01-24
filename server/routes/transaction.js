const router = require('express').Router();
const { addExpense, getExpense, deleteExpense } = require('../controller/expense');
const { addIncome,getIncomes,deleteIncome } = require('../controller/income');


router.post('/add-income',addIncome)
      .get('/get-income',getIncomes)
      .delete('/delete-income/:id',deleteIncome)
      .post('/add-expense',addExpense)
      .get('/get-expense',getExpense)
      .delete('/delete-expense/:id',deleteExpense)

module.exports = router