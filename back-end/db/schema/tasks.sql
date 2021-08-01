DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  priority numeric DEFAULT 9.99,
  status VARCHAR(255) DEFAULT 'In Progress',
  start_date DATE DEFAULT CURRENT_DATE,
  due_date DATE);