INSERT INTO users (user_name, email, password, avatar)
VALUES
  ('Byeongjae K', 'bk123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/82554049?v=4'),			
  ('Korlan K', 'kk123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/81987244?v=4'),			
  ('Bernard Y', 'by123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/72034695?v=4'),			
  ('Brandon R', 'br123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/78626166?v=4'),			
  ('Casey W', 'cw123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/44916074?v=4'),			
  ('Mingfeng L', 'ml123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/81784218?v=4'),			
  ('John L', 'jl123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/79680769?v=4'),			
  ('Alex L', 'al123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/68450565?v=4'),			
  ('Leam M', 'lm123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/53125670?v=4'),			
  ('Yucen L', 'yl123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/72534921?v=4'),			
  ('Byeonghyeok J', 'bj123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/69543299?v=4'),			
  ('Henri W', 'hw123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/83308210?v=4'),			
  ('Adel I', 'al123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/80487497?v=4'),			
  ('Phil M', 'pm123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/52183389?v=4'),			
  ('Jojo L', 'jl123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/83560682?v=4'),			
  ('Matt T', 'mt123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/33907017?v=4'),			
  ('Lucas J', 'lj123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/47370272?v=4'),			
  ('Cam M', 'cm123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/42699224?v=4'),			
  ('Adam U', 'au123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/83253038?v=4'),			
  ('Senay A', 'sa123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/65801197?v=4'),			
  ('Lun J', 'lj123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/83457211?v=4'),			
  ('Megan V', 'mv123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/76022369?v=4'),			
  ('Rossanne C', 'rc123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/81119910?v=4'),			
  ('Cynthia C', 'cc123@gmail.com', '123', 'https://avatars.githubusercontent.com/u/51090676?v=4');			

INSERT INTO projects (name, description, due_date)
VALUES

('ALLY','A mood boosting app with a textless UI providing users with a space to let go of their thoughts.','2021-08-12'),
('easely','App where users can request specific commission pieces from artists. Provides a space for artists and prospective clients to interact.','2021-08-12'),
('Diagnose It','Symptom diagnosis app with percentage chance of a particular diagnosis, users can then book an appointment with appropriate specialist','2021-08-12'),
('SoundTree','Music discovery app for users to find genres related to their favorite genres and communicate via a forum','2021-08-12'),
('LawyerUp','An app where client users could find suitable lawyers for their legal cases, and lawyer users could find cases they`re interested in.','2021-08-12'),
('Employin','A tinder like service for employers to find the perfect candidate for their job posting','2021-08-12'),
('BucketUp','A budgeting template enginge with social features, and 3D components','2021-08-12'),
('Make My Day','Three friends with goal of creating a minimum viable demo','2021-08-12');

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
(8, 12),
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

INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 1, 8, 3,'2021-08-11','2021-08-20');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 1, 8, 1,'2021-08-07','2021-08-20');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 1, 8, 2,'2021-08-03','2021-08-28');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 1, 8, 3,'2021-08-02','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 2, 8, 2,'2021-08-07','2021-08-26');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 2, 8, 3,'2021-08-10','2021-08-19');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 2, 8, 2,'2021-07-30','2021-08-22');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 2, 8, 1,'2021-08-03','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 3, 8, 2,'2021-08-06','2021-09-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 3, 8, 1,'2021-08-12','2021-08-23');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed' , 3, 8, 2,'2021-08-12','2021-08-25');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 3, 8, 2,'2021-08-07','2021-08-24');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 4, 7, 1,'2021-08-02','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 4, 7, 1,'2021-07-31','2021-08-26');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 4, 7, 2,'2021-08-09','2021-08-13');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 4, 7, 3,'2021-08-04','2021-08-15');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 5, 7, 2,'2021-07-31','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 5, 7, 3,'2021-08-06','2021-08-21');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 5, 7, 2,'2021-08-10','2021-08-18');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 5, 7, 3,'2021-08-06','2021-09-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 6, 7, 3,'2021-08-08','2021-08-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 6, 7, 3,'2021-07-30','2021-08-27');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 6, 7, 1,'2021-08-09','2021-08-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 6, 7, 2,'2021-08-05','2021-09-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 7, 6, 3,'2021-07-31','2021-09-02');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 7, 6, 1,'2021-08-08','2021-08-16');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 7, 6, 3,'2021-08-01','2021-08-20');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 7, 6, 1,'2021-08-07','2021-08-22');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 8, 6, 3,'2021-08-04','2021-08-14');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 8, 6, 1,'2021-08-05','2021-08-26');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 8, 6, 3,'2021-08-09','2021-09-02');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 8, 6, 1,'2021-08-12','2021-08-23');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 9, 6, 3,'2021-08-04','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 9, 6, 1,'2021-08-11','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold' , 9, 6, 3,'2021-08-03','2021-08-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog' , 9, 6, 2,'2021-07-30','2021-08-22');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 10, 5, 2,'2021-08-07','2021-08-15');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 10, 5, 2,'2021-08-09','2021-08-21');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 10, 5, 2,'2021-08-09','2021-08-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 10, 5, 2,'2021-08-07','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 11, 5, 2,'2021-08-03','2021-08-27');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 11, 5, 3,'2021-08-06','2021-08-21');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 11, 5, 3,'2021-08-12','2021-08-23');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 11, 5, 2,'2021-08-06','2021-09-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 12, 5, 2,'2021-07-30','2021-09-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 12, 5, 2,'2021-08-02','2021-08-13');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 12, 5, 3,'2021-07-31','2021-08-19');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 12, 5, 2,'2021-08-01','2021-08-26');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 13, 4, 3,'2021-08-09','2021-08-14');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 13, 4, 1,'2021-07-31','2021-08-15');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 13, 4, 2,'2021-07-30','2021-08-27');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 13, 4, 3,'2021-08-05','2021-08-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 14, 4, 3,'2021-08-09','2021-08-26');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 14, 4, 3,'2021-08-09','2021-08-16');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 14, 4, 1,'2021-08-09','2021-08-16');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 14, 4, 1,'2021-08-04','2021-08-27');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 15, 4, 1,'2021-08-03','2021-08-13');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 15, 4, 3,'2021-08-02','2021-08-18');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 15, 4, 1,'2021-08-10','2021-08-25');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 15, 4, 1,'2021-08-04','2021-08-14');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 16, 3, 2,'2021-08-03','2021-08-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 16, 3, 1,'2021-08-05','2021-08-24');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 16, 3, 1,'2021-08-10','2021-08-24');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 16, 3, 3,'2021-08-09','2021-08-17');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 17, 3, 2,'2021-08-12','2021-08-23');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 17, 3, 1,'2021-08-10','2021-08-13');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 17, 3, 2,'2021-07-31','2021-08-22');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 17, 3, 1,'2021-07-30','2021-08-16');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 18, 3, 1,'2021-08-03','2021-09-01');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 18, 3, 1,'2021-08-04','2021-08-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 18, 3, 1,'2021-08-04','2021-08-29');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 18, 3, 2,'2021-08-12','2021-08-21');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 19, 2, 1,'2021-08-02','2021-08-22');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 19, 2, 2,'2021-08-01','2021-08-25');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 19, 2, 3,'2021-08-05','2021-08-19');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 19, 2, 3,'2021-07-30','2021-08-17');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 20, 2, 3,'2021-08-07','2021-08-15');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 20, 2, 3,'2021-07-31','2021-08-20');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 20, 2, 3,'2021-08-04','2021-08-26');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 20, 2, 1,'2021-08-01','2021-08-18');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 21, 2, 1,'2021-08-09','2021-08-25');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 21, 2, 2,'2021-08-06','2021-08-18');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 21, 2, 2,'2021-08-08','2021-08-31');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 21, 2, 2,'2021-08-07','2021-08-22');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 22, 1, 2,'2021-08-06','2021-08-19');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 22, 1, 2,'2021-08-10','2021-08-17');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 22, 1, 1,'2021-07-30','2021-08-19');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 22, 1, 2,'2021-08-01','2021-08-23');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 23, 1, 2,'2021-08-01','2021-08-19');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 23, 1, 2,'2021-07-30','2021-08-17');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 23, 1, 3,'2021-08-06','2021-09-03');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 23, 1, 3,'2021-07-30','2021-08-30');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'In Progress', 24, 1, 2,'2021-08-08','2021-08-15');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Completed', 24, 1, 3,'2021-08-07','2021-08-20');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'On Hold', 24, 1, 1,'2021-08-10','2021-08-21');
INSERT INTO tasks (name, status, user_id, project_id, priority, start, "end") VALUES('', 'Backlog', 24, 1, 2,'2021-08-01','2021-09-03');