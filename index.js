const mysql = require('mysql2');
const inquirer = require(inquirer);
const employees = require(./schema/schema.sql);

function start() {
  let question = "What would you like to do?";
  let options = [
      "View All Employees", 
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "View All Roles",
      "Add Role",
      "Remove Role",   
      "View All Departments",
      "Add Department",
      "Remove Department",
      "Exit"
  ];

inquirer
.prompt(
  {type: "list", 
  message: question, 
  name:"choice", 
  choices: options
 })

  .then((data) => {
    switch (data.action) {
        case "View All Employees":
            employee.printEmployees();
            start();
          
        case "View All Roles":
            role.printRoles();
            start();
            
        case "View All Departments":
            department.printDepartments();
            start();
          
        case "Add Employee":
            addEmployee();
           
        case "Add Role":
            addRole();
          
        case "Add Department":
            addDepartment();
          
        case "Update Employee Role":
            updateEmployeeRole();
       
        case "Update Employee Manager":
            updateEmployeeManager();
           
        case "Remove Employee":
            removeEmployee();
            
        case "Remove Role":
            removeRole();
           
        case "Remove Department":
            removeDepartment();
           
        case "Quit":
            console.log("You have left the program.");
            
        default:
            console.log(`Action (${data.action}) is not supported.`);
            start();
           
    }

})


       const db = mysql.createConnection(
           {
             host: 'localhost',
             user: 'root',    
             password: '12345vandy',
             database: 'companyOrganizer',
          },
           console.log('Connected to the company HR database.')
         );