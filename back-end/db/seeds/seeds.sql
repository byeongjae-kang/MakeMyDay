INSERT INTO users (user_name, email, password, avatar)
VALUES
  ('Sylvia Palmer', 's.palmer@gmail.com', '123', 'https://i.imgur.com/LpaY82x.png'),
  ('Tori Malcolm', 'm.tori@gmail.com', '123', 'https://i.imgur.com/Nmx0Qxo.png'),
  ('Mildred Nazir', 'n.mildred@gmail.com', '123', 'https://i.imgur.com/T2WwVfS.png');

INSERT INTO projects (name, description, due_date)
VALUES
  ('Make My Day', 'final projects: working in a gourp of three and focus on MVD.', '2021-08-15 10:23:54'),
  ('Jungle', 'A mini e-commerce application built with Rails 4.2 for purposes of learning Rails.', '2021-09-15 10:23:54'),
  ('Scheduler', 'This scheduler is a singe-page app built with react.', '2021-08-20 10:23:54'),
  ('Tweeter', 'Tweeter is a simple, single-page Twitter clone. It is to practice HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.', '2021-08-15 10:23:54');

INSERT INTO user_projects (project_id, user_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 2),
  (3, 3),
  (3, 1),
  (4, 1),
  (4, 2),
  (4, 3);


INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('make template for pages', 'In Progress', 1, 1, 1, 'Aug 05 2021', 'Aug 15 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create components', 'Backlog', 2, 2, 2, 'Aug 01 2021', 'Aug 03 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes for front end', 'On Hold', 3, 3, 3,'Aug 15 2021', 'Aug 25 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes for back end', 'Completed', 1, 1, 1, 'Aug 04 2021', 'Aug 08 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('search for articles api', 'In Progress', 2, 2, 2, 'Aug 02 2021', 'Aug 10 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect websocket', 'Backlog', 3, 3, 3, 'Aug 25 2021', 'Aug 30 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create chat feature', 'In Progress',1, 4, 3, 'Aug 05 2021', 'Aug 15 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('make template for pages', 'In Progress', 2, 1, 1, 'Aug 05 2021', 'Aug 15 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create components', 'Backlog', 3, 2, 2, 'Aug 01 2021', 'Aug 03 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes for front end', 'On Hold', 1, 3, 3, 'Aug 15 2021', 'Aug 25 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes for back end', 'Completed', 2, 1, 1, 'Aug 04 2021', 'Aug 08 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('search for articles api', 'In Progress', 3, 2, 2, 'Aug 02 2021', 'Aug 10 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect websocket', 'Backlog', 1, 3, 3,  'Aug 25 2021', 'Aug 30 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create chat feature', 'In Progress',2, 4, 1, 'Aug 05 2021', 'Aug 15 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes for front end', 'On Hold', 3, 3, 3, 'Aug 15 2021', 'Aug 25 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes for back end', 'Completed', 1, 1, 1, 'Aug 04 2021', 'Aug 08 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('search for articles api', 'In Progress', 2, 2, 2, 'Aug 02 2021', 'Aug 10 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect websocket', 'Backlog', 3, 3, 3, 'Aug 25 2021', 'Aug 30 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create chat feature', 'In Progress', 1, 4, 2, 'Aug 05 2021', 'Aug 15 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect websocket', 'Backlog', 2, 3, 3, 'Aug 25 2021', 'Aug 30 2021');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create chat feature', 'In Progress', 3, 4, 1, 'Aug 05 2021', 'Aug 15 2021');
