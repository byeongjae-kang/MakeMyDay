<<<<<<< HEAD
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

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log("helloalsdkjf;asdlkfja;sdlfkja;sdlfjka;fj", err);
      res.status(500).send(err.message);
      pool.end();
    });
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
    await pool.query("INSERT INTO tasks (name, priority, status) VALUES($1, $2, $3)", [name, 3, "In Progress"]);
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.json(tasks.rows);
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.json(tasks.rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).send(err)
  }
})

app.put("/api/tasks/:id", async (req, res) => {
  try {
    const status = req.body.status
    const id = Number(req.params.id)
    await pool.query("UPDATE tasks SET status = $1 WHERE id = $2;", [status, id]);
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.send(tasks.rows)
  } catch (err) {
     res.status(500).send(err)
  }
})

//Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
=======
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
    const { name, description, priority, status, start_date, due_date } =
      req.body;
    const newUser = await pool.query(
      "INSERT INTO tasks (name, description, priority, status, start_date, due_date) VALUES($1, $2, $3, $4, $5, $6)",
      [name, description, priority, "In Progress", start_date, due_date]
    );

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await pool.query("SELECT * FROM tasks;");
    res.json(tasks.rows);
  } catch (err) {
    ``;
    console.error(err.message);
    res.status(500).send(err);
  }
});

//Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
>>>>>>> backup
