use companyOrganizer;

INSERT INTO employees (first_name, last_name)
VALUES
  ('Ronald', 'Firbank'),
  ('Virginia', 'Woolf'),
  ('Piers', 'Gaveston'),
  ('Charles', 'LeRoi'),
  ('Katherine', 'Mansfield'),
  ('Dora', 'Carrington'),
  ('Edward', 'Bellamy'),
  ('Montague', 'Summers'),
  ('Octavia', 'Butler'),
  ('Unica', 'Zurn');

  INSERT INTO departments (department)
VALUES
("FOH management"),
("BOH management"),
("FOH staff"),
("BOHstaff");

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