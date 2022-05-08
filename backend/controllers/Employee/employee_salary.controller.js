//Employee CRUD functionalities

//import Employee model
const salary = require('../../models/Employee/employee_salary_table.model')

//add Employee
const addEmpSalary = (req, res) => {
  const { eid, basicSalary, OverTime, Total } = req.body

  //create a object

  const newEmpSalary = new salary({
    eid,
    basicSalary,
    OverTime,
    Total,
  })

  newEmpSalary
    .save()
    .then((salary) => {
      res.json(salary)
    })
    .catch((err) => {
      res.json(err)
    })
}

const getOneSalarySheet = (req, res) => {
  let eid = req.params.id

  salary
    .findOne({ eid: eid })
    .then((salary) => {
      res.json(salary)
    })
    .catch((err) => {
      res.json(err)
    })
}

const updateSalarySheetByeid = (req, res) => {
  eid = req.params.id
  const { OverTime, Total } = req.body
  const dataSet = { OverTime, Total }
  salary
    .findOneAndUpdate({ eid: eid }, dataSet)
    .then((dataSet) => {
      res.json(dataSet)
    })
    .catch((err) => {
      res.json(err)
    })
}

module.exports = { addEmpSalary, getOneSalarySheet, updateSalarySheetByeid }
