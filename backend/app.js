const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let db;

// ✅ Retry DB connection (FIXED)
function connectDB() {
  const connection = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root123",
    database: "taskdb"
  });

  connection.connect(err => {
    if (err) {
      console.log("DB not ready... retrying");
      setTimeout(connectDB, 3000);
    } else {
      console.log("Connected to MySQL ✅");

      db = connection;

      db.query(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(100),
          description TEXT,
          status VARCHAR(50)
        )
      `);
    }
  });
}

connectDB();

// ✅ HEALTHCHECK (FIXED)
app.get("/health", (req, res) => {
  if (!db) {
    return res.status(500).send("DB NOT READY");
  }

  db.query("SELECT 1", (err) => {
    if (err) {
      return res.status(500).send("DB NOT READY");
    }
    res.status(200).send("OK");
  });
});

// APIs

app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    res.json(result);
  });
});

app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  db.query(
    "INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)",
    [title, description, status],
    () => res.send("Task Added")
  );
});

app.delete("/tasks/:id", (req, res) => {
  db.query("DELETE FROM tasks WHERE id=?", [req.params.id],
    () => res.send("Deleted")
  );
});

app.listen(3000, () => console.log("Backend running"));
