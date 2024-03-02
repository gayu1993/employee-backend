import express from 'express'
import employeeController from '../controller/employee.js'
const router = express.Router()

router.get('/getemployee', employeeController.getemployee_profile)
router.get('/getemployeebyemail', employeeController.getEmployeeByEmailID)
router.get('/getemployeeFirstName', employeeController.getUserByname)
export default router