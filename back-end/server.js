require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./db/db");

//App Config
const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());
app.use(cors());

//DB Config

//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("connection is made");
});

app.get("/api/users", (req, res) => {
  pool
    .query("SELECT * FROM users")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      res.status(500).send(err.message);
      pool.end();
    });
});

app.get("/api/projects", (req, res) => {
  const query = `
    SELECT
      Projects.id,
      Projects.name,
      Projects.description,
      Projects.status,
      Projects.start_date,
      Projects.due_date,
      Projects.modified_date,
      Projects.end_date,
      array_agg(DISTINCT user_projects.user_id) AS users
    FROM projects
    JOIN user_projects ON projects.id = project_id
    GROUP BY projects.id
  `;
  pool
    .query(query)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      res.status(500).send(err.message);
      pool.end();
    });
});

app.post(`/api/projects`, (req, res) => {
  const { name, description, status, users, start_date, due_Date } = req.body;
  const query = `
    INSERT INTO projects (name, description, status, start_date,  due_date)
    VALUES ($1, $2, $3, $4, $5) RETURNING *
  `;
  pool
    .query(query, [name, description, status, start_date, due_Date])
    .then((result) => {
      users.forEach((id) => {
        pool
          .query(
            `
          INSERT INTO user_projects (project_id, user_id)
          VALUES ($1, $2) RETURNING *
        `,
            [result.rows[0].id, id]
          )
          .then((result) => res.json(result.rows))
          .catch((err) => console.log("error2", err.message));
      });
    })
    .catch((err) => console.log("error", err.message));
});

app.delete(`/api/projects/:id`, (req, res) => {
  const projectId = req.params.id;
  pool
    .query(`DELETE FROM projects WHERE id = $1 RETURNING *`, [projectId])
    .then((result) => res.json(result.rows[0]))
    .catch((err) => console.log("could not delete", err.message));
});

app.post("/api/users", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES($1, $2, $3, $4)",
      [first_name, last_name, email, password]
    );
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const { name } = req.body;
    await pool.query(`INSERT INTO tasks (name) VALUES ($1)`, [name]);
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.json(tasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.json(tasks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  try {
    const { start, end, status } = req.body;
    const id = Number(req.params.id);

    if (!status) {
      await pool.query(`UPDATE tasks SET start = $1, "end"=$2 WHERE id = $3;`, [
        start,
        end,
        id
      ]);
    } else {
      await pool.query(`UPDATE tasks SET status=$1 WHERE id = $2;`, [
        status,
        id
      ]);
    }
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.json(tasks.rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
