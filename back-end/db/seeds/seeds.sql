INSERT INTO users (user_name, email, password, avatar) 
VALUES
  ('user1', 'user1@gmail.com', '123', ''),			
  ('user2', 'user2@gmail.com', '123', ''),			
  ('user3', 'user3@gmail.com', '123', ''),			
  ('user4', 'user4@gmail.com', '123', ''),			
  ('user5', 'user5@gmail.com', '123', ''),			
  ('user6', 'user6@gmail.com', '123', ''),			
  ('user7', 'user7@gmail.com', '123', ''),			
  ('user8', 'user8@gmail.com', '123', ''),			
  ('user9', 'user9@gmail.com', '123', ''),			
  ('user10', 'user10@gmail.com', '123', ''),			
  ('user11', 'user11@gmail.com', '123', ''),			
  ('user12', 'user12@gmail.com', '123', ''),			
  ('user13', 'user13@gmail.com', '123', ''),			
  ('user14', 'user14@gmail.com', '123', ''),			
  ('user15', 'user15@gmail.com', '123', ''),			
  ('user16', 'user16@gmail.com', '123', ''),			
  ('user17', 'user17@gmail.com', '123', ''),			
  ('user18', 'user18@gmail.com', '123', ''),			
  ('user19', 'user19@gmail.com', '123', ''),			
  ('user20', 'user20@gmail.com', '123', ''),			
  ('user21', 'user21@gmail.com', '123', ''),			
  ('user22', 'user22@gmail.com', '123', ''),			
  ('user23', 'user23@gmail.com', '123', ''),			
  ('user24', 'user24@gmail.com', '123', '');

INSERT INTO projects (name, description, due_date)
VALUES

('ALLY','A mood boosting app with a textless UI providing users with a space to let go of their thoughts.','2021-08-12'),
('easely','App where users can request specific commission pieces from artists. Provides a space for artists and prospective clients to interact.','2021-08-12'),
('Diagnose It','Symptom diagnosis app with percentage chance of a particular diagnosis, users can then book an appointment with appropriate specialist','2021-08-12'),
('SoundTree','Music discovery app for users to find genres related to their favorite genres and communicate via a forum','2021-08-12'),
('LawyerUp','An app where client users could find suitable lawyers for their legal cases, and lawyer users could find cases they`re interested in.','2021-08-12'),
('Employin','A tinder like service for employers to find the perfect candidate for their job posting','2021-08-12'),
('BucketUp','A budgeting template enginge with social features, and 3D components','2021-08-12'),
('Make My Day','A group of friends working together to create a minimum viable demo','2021-08-12');

INSERT INTO user_projects (project_id, user_id)
VALUES

(8,	1),
(8,	2),
(8,	3),
(7,	4),
(7,	5),
(7,	6),
(6,	7),
(6,	8),
(6,	9),
(5,	10),
(5,	11),
(5,	12),
(4,	13),
(4,	14),
(4,	15),
(3,	16),
(3,	17),
(3,	18),
(2,	19),
(2,	20),
(2,	21),
(1,	22),
(1,	23),
(1,	24);

INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('research Mongodb', 'On Hold', 3, 8, 3,'2021-07-16', '2021-07-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('discuss project idea with group', 'In Progress', 1, 8, 3,'2021-07-17', '2021-07-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('team meeting with mentor', 'Backlog', 1, 8, 1,'2021-08-05', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('look for initial investors', 'In Progress' , 1, 8, 2,'2021-07-30', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement chat feature', 'Completed' , 1, 8, 3,'2021-06-26', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('create routes on backend', 'Completed', 2, 8, 2,'2021-07-02', '2021-08-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('update dashboard view', 'Backlog' , 2, 8, 3,'2021-06-01', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bug in drag and drop', 'Completed', 2, 8, 2,'2021-06-04', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement responsive web design on task level', 'On Hold' , 2, 8, 1,'2021-06-23', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('start testing with storybook', 'On Hold', 3, 8, 2,'2021-05-28', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with more fake data', 'On Hold', 3, 8, 1,'2021-07-27', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('finish all stretch exercises on compass', 'Completed' , 1, 8, 2,'2021-05-26', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement file sharing feature', 'Backlog' , 3, 8, 2,'2021-07-12', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main', 'On Hold' , 4, 7, 1,'2021-06-10', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket', 'Backlog' , 4, 7, 1,'2021-05-27', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku', 'Completed', 4, 7, 2,'2021-05-27', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup', 'In Progress', 4, 7, 3,'2021-07-20', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'On Hold' , 5, 7, 2,'2021-05-25', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'In Progress', 5, 7, 3,'2021-07-28', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'On Hold' , 5, 7, 2,'2021-06-26', '2021-07-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'Completed', 5, 7, 3,'2021-06-29', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'Backlog', 6, 7, 3,'2021-07-13', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'On Hold' , 6, 7, 3,'2021-06-18', '2021-08-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'Backlog' , 6, 7, 1,'2021-06-15', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'Completed', 6, 7, 2,'2021-07-20', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main','In Progress', 7, 6, 3,'2021-07-28', '2021-08-02');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket','On Hold' , 7, 6, 1,'2021-06-06', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku','Backlog' , 7, 6, 3,'2021-07-07', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup','In Progress', 7, 6, 1,'2021-05-27', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'Completed', 8, 6, 3,'2021-07-19', '2021-07-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'In Progress', 8, 6, 1,'2021-05-31', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'Backlog', 8, 6, 3,'2021-07-01', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'On Hold' , 8, 6, 1,'2021-06-14', '2021-08-11');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'Completed', 9, 6, 3,'2021-06-05', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'Completed', 9, 6, 1,'2021-06-22', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'On Hold' , 9, 6, 3,'2021-07-13', '2021-08-10');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'Backlog' , 9, 6, 2,'2021-07-02', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main', 'In Progress', 10, 5,  2,'2021-07-01', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket', 'On Hold', 10, 5, 2,'2021-07-24', '2021-08-10');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku', 'Completed', 10, 5, 2,'2021-07-26', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup', 'Backlog', 10, 5, 2,'2021-07-17', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'In Progress', 11, 5, 2,'2021-05-26', '2021-08-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'On Hold', 11, 5, 3,'2021-07-05', '2021-08-11');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'Backlog', 11, 5, 3,'2021-06-06', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'Completed', 11, 5, 2,'2021-07-30', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'In Progress', 12, 5, 2,'2021-06-25', '2021-08-02');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'In Progress', 12, 5, 2,'2021-07-18', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'Completed', 12, 5, 3,'2021-06-25', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'Backlog', 12, 5, 2,'2021-06-09', '2021-07-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main', 'On Hold', 13, 4, 3,'2021-06-19', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket', 'In Progress', 13, 4, 1,'2021-07-01', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku', 'Backlog', 13, 4, 2,'2021-06-19', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup', 'Completed', 13, 4, 3,'2021-07-18', '2021-08-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'On Hold', 14, 4, 3,'2021-07-06', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'On Hold', 14, 4, 3,'2021-06-30', '2021-08-02');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'Backlog', 14, 4, 1,'2021-06-19', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'Completed', 14, 4, 1,'2021-07-09', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'In Progress', 15, 4, 1,'2021-06-26', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'On Hold', 15, 4, 3,'2021-06-01', '2021-08-11');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'Completed', 15, 4, 1,'2021-07-11', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'In Progress', 15, 4, 1,'2021-07-11', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main', 'Backlog', 16, 3, 2,'2021-07-25', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket', 'Completed', 16, 3, 1,'2021-05-27', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku', 'On Hold', 16, 3, 1,'2021-06-11', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup', 'Backlog', 16, 3, 3,'2021-07-27', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'In Progress', 17, 3, 2,'2021-05-27', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'Completed', 17, 3, 1,'2021-07-23', '2021-08-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'In Progress', 17, 3, 2, '2021-05-26', '2021-08-10');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'On Hold', 17, 3, 1,'2021-06-26', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'Backlog', 18, 3, 1,'2021-06-10', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'Backlog', 18, 3, 1,'2021-07-15', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'On Hold', 18, 3, 1,'2021-06-08', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'Completed', 18, 3, 2,'2021-07-08', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main', 'In Progress', 19, 2, 1, '2021-07-14', '2021-08-10');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket', 'On Hold', 19, 2, 2,'2021-06-15', '2021-08-02');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku', 'Completed', 19, 2, 3,'2021-07-03', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup', 'Backlog', 19, 2, 3,'2021-06-02', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'In Progress', 20, 2, 3,'2021-07-24', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'Completed', 20, 2, 3,'2021-06-15', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'Backlog', 20, 2, 3,'2021-06-22', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'On Hold', 20, 2, 1,'2021-07-18', '2021-08-07');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'In Progress', 21, 2, 1,'2021-06-02', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'Backlog', 21, 2, 2,'2021-06-27', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'On Hold', 21, 2, 2,'2021-06-09', '2021-08-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'Completed', 21, 2, 2,'2021-06-30', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('merge current branch to main','On Hold', 22, 1, 2,'2021-06-20', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('implement websocket', 'In Progress', 22, 1, 2,'2021-06-24', '2021-08-12');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('deploy on heroku', 'Backlog', 22, 1, 1,'2021-05-27', '2021-08-11');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('design mockup', 'Completed', 22, 1, 2,'2021-06-05', '2021-08-10');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('fix bugs on front-end', 'Backlog', 23, 1, 2,'2021-06-24', '2021-08-11');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('open a github account', 'On Hold', 23, 1, 2,'2021-06-25', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('connect routes with back-end', 'Completed', 23, 1, 3, '2021-07-18', '2021-08-06');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('work on styling', 'In Progress', 23, 1, 3,'2021-06-05', '2021-07-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('rehearse for demo day', 'In Progress', 24, 1, 2,'2021-06-13', '2021-08-08');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('add login page', 'Completed', 24, 1, 3,'2021-05-27', '2021-08-09');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('come up with a project idea', 'On Hold', 24, 1, 1,'2021-06-26', '2021-08-04');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('meet with group', 'Backlog', 24, 1, 2,'2021-07-13', '2021-08-05');

-- seeds by Korlan
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('research stack trends', 'On Hold', 1, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('research npm packages', 'On Hold', 1, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('google login feature', 'Completed', 1, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('gantt chart feature', 'Completed', 2, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('erd schema', 'Completed', 1, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('wireframe mocks', 'Completed', 3, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('components styling', 'Backlog', 3, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('landing page design', 'Completed', 3, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('drag and drop feature', 'Completed', 1, 8, 2,'2021-07-13', '2021-08-05');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('logo design', 'On Hold', 1, 8, 2,'2021-07-13', '2021-08-05');