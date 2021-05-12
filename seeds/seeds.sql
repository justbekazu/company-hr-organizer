use companyOrganizer;


  INSERT INTO departments (department)
VALUES
("FOH management"),
("BOH management"),
("FOH staff"),
("BOH staff");


  INSERT INTO roles (job_title, salary, departments_id)
VALUES
("FOH server", "10",3),
("FOH bartender", "5",3),
("FOH host", "15",3),
("FOH expo", "15",3),
("FOH manager", "24",1),
("BOH cook", "18", 4),
("BOH prep", "13", 4),
("BOH dish", "12", 4),
("BOH custodial", "12", 4),
("BOH manager/chef", "28", 2);




INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 2, 5),
  ('Virginia', 'Woolf', 1, 5),
  ('Piers', 'Gaveston', 3, 5),
  ('Charles', 'LeRoi', 5, NULL),
  ('Katherine', 'Mansfield', 6, 10),
  ('Dora', 'Carrington', 2, 5),
  ('Edward', 'Bellamy', 9, 10),
  ('Montague', 'Summers', 4, 5),
  ('Octavia', 'Butler', 7, 10),
  ('Unica', 'Zurn', 8, 10),
  ('bobo', 'fet', 10, NULL);