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
  salary  DECIMAL,
  departments_id INTEGER,
  CONSTRAINT fk_departments
    FOREIGN KEY (departments_id)
    REFERENCES departments(id)
);
CREATE TABLE employees (
  employees_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INTEGER,
  manager_id INTEGER DEFAULT NULL
);


-- ALTER TABLE employee
-- ADD CONSTRAINT roles_id
--     FOREIGN KEY (roles_id)
--         REFERENCES roles (id)
--         ON DELETE NO ACTION
--         ON UPDATE NO ACTION,

-- ADD CONSTRAINT manager_id    
--     FOREIGN KEY (manager_id)
--         REFERENCES employee (id)
--         ON DELETE NO ACTION
--         ON UPDATE NO ACTION;

-- ALTER TABLE role
-- ADD CONSTRAINT departments_id
--     FOREIGN KEY (departments_id)
--         REFERENCES departments (id)
--         ON DELETE NO ACTION
--         ON UPDATE NO ACTION;


