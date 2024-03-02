import Employeedetails from '../models/employee.js'
import dotenv from 'dotenv'
dotenv.config()

const getemployee_profile = async (req, res) => {
  try {
    let users = await Employeedetails.find()
    res.status(200).send({
      message: "tsghgfh",
      users
    })
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    })
  }
}

const getEmployeeByEmailID = async (req, res) => {
  try {
    let user = await Employeedetails.find({ Email_id: req.query.Email_id })
    res.status(200).send({
      message: "Success",
      user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Error"
    })
  }
}

const getUserByname = async (req, res) => {
  try {

    let user = await Employeedetails.find({ FirstName: req.query.FirstName })
    res.status(200).send({
      message: "firstname fetch successfully",
      user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Server Error"
    })
  }

}
export default {
  getemployee_profile, getEmployeeByEmailID, getUserByname
}