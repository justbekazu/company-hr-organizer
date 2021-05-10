DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS  departments;
DROP TABLE IF EXISTS roles;

USE companyOrganizer;
CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
-- FOREIGN KEY (roles_id)
-- REFERENCES roles(id)
-- ON DELETE SET NULL,
-- created_at DATETIME DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary  NOT NULL
);
