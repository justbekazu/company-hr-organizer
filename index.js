const mysql = require('mysql2');
const inquirer = require(inquirer);


       //Connect to database
       const db = mysql.createConnection(
           {
             host: 'localhost',
             // Your MySQL username,
             user: 'root',
             // Your MySQL password
             password: 'alexander0718',
             database: 'company-hr-organizer',
          },
           console.log('Connected to the company HR database.')
         );