
import mongoose from './index.js'



const EPESchema = new mongoose.Schema({
  FirstName: {
    type: String,
    require: true
  },
  LastName: {
    type: String,
    require: true
  },
  Address: {
    type: String,
    require: true
  },
  PhoneNumber: {
    type: String,
    require: true
  },
  Email_id: {
    type: String,
    require: true
  },
  Date_of_Birth: {
    type: String,
    require: true
  },

  Photo: {
    type: String,
    require: true
  }
},{collection:"Employ_Master"})

const Employeedetails = new mongoose.model("Employ_Master", EPESchema, "Employ_Master")

export default Employeedetails