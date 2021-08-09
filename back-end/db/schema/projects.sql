DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(255) DEFAULT 'In Progress',
  start_date TIMESTAMP DEFAULT now(),
  due_date TIMESTAMP NOT NULL,
  modified_date TIMESTAMP,
  end_date TIMESTAMP
);

DROP TABLE IF EXISTS user_projects CASCADE;

CREATE TABLE user_projects (
  project_id INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);
