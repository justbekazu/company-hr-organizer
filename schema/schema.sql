DROP DATABASE IF EXISTS companyOrganizer;
CREATE DATABASE companyOrganizer;
USE companyOrganizer;

DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS  departments;
DROP TABLE IF EXISTS roles;

CREATE TABLE departments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(30) NOT NULL
);
CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary  INTEGER NOT NULL,
  departments_id INTEGER,
  CONSTRAINT fk_departments
    FOREIGN KEY (departments_id)
    REFERENCES departments(id)
);
CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INTEGER,
  manager_id INTEGER DEFAULT NULL,
  KEY manager_id (manager_id),
  CONSTRAINT fk_employees FOREIGN KEY (manager_id) REFERENCES employees (id),
    CONSTRAINT fk_roles
    FOREIGN KEY (roles_id)
    REFERENCES roles(id)
);


-- SELECT employee.id, employee.first_name, employee.last_name, 
--   CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager on manager.id = employee.manager_id

--   SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;