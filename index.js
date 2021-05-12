const mysql = require('mysql2');
const inquirer = require(inquirer);
const express = require(express):


       //Connect to database
       const db = mysql.createConnection(
           {
             host: 'localhost',
             // Your MySQL username,
             user: 'root',
             // Your MySQL password
             password: '12345vandy',
             database: 'companyOrganizer',
          },
           console.log('Connected to the company HR database.')
         );