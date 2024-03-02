import express from 'express'
import IndexController from '../controller/index.js'
import UserRoutes from './user.js'
import employeedetails from './employee.js'
import employeeFirstName from'./employee.js'
const router = express.Router()
//for home page
router.get('/', IndexController.homePage)
router.get('/employeedetails',IndexController.employeedetails)
router.get('/employeeFirstName',IndexController.employeeFirstName)
//other routes
// router.use('/user',UserRoutes)
router.use('/employee',employeedetails)
router.use('/employee',employeeFirstName)
export default router