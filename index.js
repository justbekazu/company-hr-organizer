const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',    
    password: '12345vandy',
    database: 'companyOrganizer',
 },
  console.log('Connected to the company HR database.')
);

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
      "Quit"
  ]

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
            break;
        case "View All Roles":
            role.printRoles();
            start();
            break;
        case "View All Departments":
            department.printDepartments();
            start();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Add Role":
            addRole();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        case "Update Employee Manager":
            updateEmployeeManager();
            break;
        case "Remove Employee":
            removeEmployee();
            break;
        case "Remove Role":
            removeRole();
            break;
        case "Remove Department":
            removeDepartment();
            break;
        case "Quit":
            console.log("You have left the program.");
            break;
        default:
            console.log(`You cannot do (${data.action}).`);
            start();
            break;
    }

})
};

// This function will handle adding a role
function addDepartment() {
  let question = "What department would you like to add?";
  Inquirer.prompt(
      {
          name: "department",
          type: "input",
          message: question
      }
  ).then((data) => {
      department.insertDepartment(data.department);
      start();
  });
}

// This function will handle adding a role
function addRole() {
  let departments = ["No Department"];
  // First get the list of departments    
  DB.query("SELECT * FROM department",
      function (err, res) {
          if (err) console.log(err);
          for (let i = 0; i < res.length; i++) {
              if (res[i].name) {
                  departments.push(res[i].name);
              }
          }

          // Get the role details
          let questions = [
              "What is the role title you would like to add?",
              "What is the role salary?",
              "What is the role department?"];
          Inquirer.prompt([
              {
                  name: "title",
                  type: "input",
                  message: questions[0]
              },
              {
                  name: "salary",
                  type: "number",
                  message: questions[1]
              },
              {
                  name: "department",
                  type: "list",
                  message: questions[2],
                  choices: departments
              }
          ]).then((data) => {
              // get the department to tie to 
              let departmentId = null;
              for (let i = 0; i < res.length; i++) {
                  if (res[i].name === data.department) {
                      departmentId = res[i].id;
                      break;
                  }
              }
              role.insertRole(data.title, data.salary, departmentId);
              start();
          });

      }
  );
}

// This function will handle adding an employee
function addEmployee() {
  let roles = ["No Role"];
  let managers = ["No Manager"];
  // First get the list of roles    
  DB.query("SELECT * FROM role ",
      function (err, roleRes) {
          if (err) console.log(err);
          for (let i = 0; i < roleRes.length; i++) {
              if (roleRes[i].title) {
                  roles.push(roleRes[i].title);
              }
          }

          // Next get list of possible managers
          DB.query("SELECT * from employee ",
              function (err, empRes) {
                  if (err) console.log(err);
                  for (let i = 0; i < empRes.length; i++) {
                      if (empRes[i].first_name) {
                          managers.push(empRes[i].first_name + " " + empRes[i].last_name);
                      }
                  }

                  // Get the employee details
                  let questions = [
                      "What is the employee first name?",
                      "What is the employee last name?",
                      "What is the employee role?",
                      "Who is the employee manager?"];
                  Inquirer.prompt([
                      {
                          name: "firstName",
                          type: "input",
                          message: questions[0]
                      },
                      {
                          name: "lastName",
                          type: "input",
                          message: questions[1]
                      },
                      {
                          name: "role",
                          type: "list",
                          message: questions[2],
                          choices: roles
                      },
                      {
                          name: "manager",
                          type: "list",
                          message: questions[3],
                          choices: managers
                      }
                  ]).then((data) => {
                      // get the role to tie to 
                      let roleId = null;
                      for (let i = 0; i < roleRes.length; i++) {
                          if (roleRes[i].title === data.role) {
                              roleId = roleRes[i].id;
                              break;
                          }
                      }
                      // Get the manager to tie to
                      let managerId = null;
                      for (let i = 0; i < empRes.length; i++) {
                          if (empRes[i].first_name + " " + empRes[i].last_name === data.manager) {
                              managerId = empRes[i].id;
                              break;
                          }
                      }
                      employee.insertEmployee(data.firstName, data.lastName, roleId, managerId);
                      start();
                  });

              }
          );
      }
  );
}

// This function will handle updating an employee role
function updateEmployeeRole() {
  let roles = ["No Role"];
  let employees = [];
  // First get the list of roles    
  DB.query("SELECT * FROM role ",
      function (err, roleRes) {
          if (err) console.log(err);
          for (let i = 0; i < roleRes.length; i++) {
              if (roleRes[i].title) {
                  roles.push(roleRes[i].title);
              }
          }

          // Next get list of possible managers
          DB.query("SELECT * from employee ",
              function (err, empRes) {
                  if (err) console.log(err);
                  for (let i = 0; i < empRes.length; i++) {
                      if (empRes[i].first_name) {
                          employees.push(empRes[i].first_name + " " + empRes[i].last_name);
                      }
                  }

                  // Get the employee details
                  let questions = [
                      "Who's role would you like to update?",
                      "What is their new role??"];
                  Inquirer.prompt([
                      {
                          name: "employee",
                          type: "list",
                          message: questions[0],
                          choices: employees
                      },
                      {
                          name: "role",
                          type: "list",
                          message: questions[1],
                          choices: roles
                      }
                  ]).then((data) => {
                      // get the role to tie to 
                      let roleId = null;
                      for (let i = 0; i < roleRes.length; i++) {
                          if (roleRes[i].title === data.role) {
                              roleId = roleRes[i].id;
                              break;
                          }
                      }
                      // Get the employee to update to
                      for (let i = 0; i < empRes.length; i++) {
                          if (empRes[i].first_name + " " + empRes[i].last_name === data.employee) {
                              employee.setProperties(empRes[i]);
                              employee.role_id = roleId;
                              employee.updateEmployee();
                              break;

                          }
                      }
                      start();
                  });

              }
          );
      }
  );
}

// This function will handle updating an employee role
function updateEmployeeManager() {
  let managers = ["No Manager"];
  let employees = [];
  // First get the list of roles    
  DB.query("SELECT * FROM employee ",
      function (err, res) {
          if (err) console.log(err);
          for (let i = 0; i < res.length; i++) {
              if (res[i].first_name) {
                  employees.push(res[i].first_name + " " + res[i].last_name);
                  managers.push(res[i].first_name + " " + res[i].last_name);
              }
          }

          // Get the employee details
          let questions = [
              "Who's manager would you like to update?",
              "Who is their new manager?"];
          Inquirer.prompt([
              {
                  name: "employee",
                  type: "list",
                  message: questions[0],
                  choices: employees
              },
              {
                  name: "manager",
                  type: "list",
                  message: questions[1],
                  choices: managers
              }
          ]).then((data) => {
              // get the manager to tie to 
              let managerId = null;
              for (let i = 0; i < res.length; i++) {
                  if (res[i].first_name + " " + res[i].last_name === data.manager) {
                      managerId = res[i].id;
                      break;
                  }
              }
              // Get the employee to update to
              for (let i = 0; i < res.length; i++) {
                  if (res[i].first_name + " " + res[i].last_name === data.employee) {
                      employee.setProperties(res[i]);
                      employee.manager_id = managerId;
                      employee.updateEmployee();
                      break;
                  }
              }
              start();
          });
      }
  );
}

// This function will handle adding a role
function removeEmployee() {
  let employees = ["No Employee"];
  // First get the list of roles    
  DB.query("SELECT * FROM employee",
      function (err, res) {
          if (err) console.log(err);
          for (let i = 0; i < res.length; i++) {
              if (res[i].first_name && res[i].last_name) {
                  employees.push(res[i].first_name + " " + res[i].last_name);
              }
          }

          // Get the employee details
          let question = "Select the employee to remove?";
          Inquirer.prompt([
              {
                  name: "employee",
                  type: "list",
                  message: question,
                  choices: employees
              }
          ]).then((data) => {
              // get the role to remove 
              for (let i = 0; i < res.length; i++) {
                  if (res[i].first_name + " " + res[i].last_name === data.employee) {
                      employee.setProperties(res[i]);
                      employee.deleteEmployee();
                      break;
                  }
              }
              start();
          });

      }
  );
}

// This function will handle adding a role
function removeRole() {
  let roles = ["No Role"];
  // First get the list of roles    
  DB.query("SELECT * FROM role",
      function (err, res) {
          if (err) console.log(err);
          for (let i = 0; i < res.length; i++) {
              if (res[i].title) {
                  roles.push(res[i].title);
              }
          }

          // Get the role details
          let question = "Select the role to remove?";
          Inquirer.prompt([
              {
                  name: "role",
                  type: "list",
                  message: question,
                  choices: roles
              }
          ]).then((data) => {
              // get the role to remove 
              for (let i = 0; i < res.length; i++) {
                  if (res[i].title === data.role) {
                      role.setProperties(res[i]);
                      role.deleteRole();
                      break;
                  }
              }
              start();
          });

      }
  );
}

// This function will handle adding a role
function removeDepartment() {
  let departments = ["No Department"];
  // First get the list of departments    
  DB.query("SELECT * FROM department",
      function (err, res) {
          if (err) console.log(err);
          for (let i = 0; i < res.length; i++) {
              if (res[i].name) {
                  departments.push(res[i].name);
              }
          }

          // Get the role details
          let question = "Select the department to remove?";
          Inquirer.prompt([
              {
                  name: "department",
                  type: "list",
                  message: question,
                  choices: departments
              }
          ]).then((data) => {
              // get the department to remove 
              for (let i = 0; i < res.length; i++) {
                  if (res[i].name === data.department) {
                      department.setProperties(res[i]);
                      department.deleteDepartment();
                      break;
                  }
              }
              start();
          });

      }
  );
}

start();


 