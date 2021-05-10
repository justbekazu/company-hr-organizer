use companyOrganizer;

INSERT INTO employees (first_name, last_name, roles_id)
VALUES
  ('Ronald', 'Firbank', 2),
  ('Virginia', 'Woolf', 1),
  ('Piers', 'Gaveston', 3),
  ('Charles', 'LeRoi', 5),
  ('Katherine', 'Mansfield', 6),
  ('Dora', 'Carrington', 2),
  ('Edward', 'Bellamy', 9),
  ('Montague', 'Summers', 4),
  ('Octavia', 'Butler', 7),
  ('Unica', 'Zurn', 8),
  ('bobo', 'fet', 10);

  INSERT INTO departments (department)
VALUES
("FOH management"),
("BOH management"),
("FOH staff"),
("BOH staff");

  INSERT INTO roles (job_title, salary)
VALUES
("FOH server", "10"),
("FOH bartender", "5"),
("FOH host", "15"),
("FOH expo", "15"),
("FOH manager", "24"),
("BOH cook", "18"),
("BOH prep", "13"),
("BOH dish", "12"),
("BOH custodial", "12"),
("BOH manager/chef", "28");