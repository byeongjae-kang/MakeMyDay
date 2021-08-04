DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL
);


-- ********not used so commented out*************

-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE user_task (
--   user_id SERIAL PRIMARY KEY,
-- )


