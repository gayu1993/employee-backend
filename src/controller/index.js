const homePage = (req, res) => {
    res.status(200).send(`<h1>Welcome to Express</h1>`)
}
const employeedetails = (req, res) => {
    res.status(200).send(`<h1>refesh for employeedetails</h1>`)
}
const employeeFirstName = (req, res) => {
    res.status(200).send(`<h1>refesh for employeeFirstName</h1>`)
}
export default {
    homePage, employeedetails, employeeFirstName,
}