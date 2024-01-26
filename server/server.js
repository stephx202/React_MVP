import express from "express";
const app = express();
import pkg from "pg";
const { Pool } = pkg;

// dotenv.config(); //IF BEING ADDED, NEED TO ADD BACK TO THE VITE.CONFIG.JS
// const { PORT, DATABASE_URL } = process.env;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "ToDoList",
    user: "stephx202",
    password: '2024'
});

app.use(express.json());
//ANOTHER WAY TO MAKE A GET REQUEST
//need to add /api/ToDoList to view on postman
// app.get("/api/ToDoList", async (req, res) => {
//   try {
//   const result = await pool.query("SELECT * FROM ToDoList")
//   res.status(200).send(result.rows);
//     } catch (error) {
//       console.error("Error executing query:", error);
//       res.status(500).send("Internal Server Error");
//     }
// });
//THIS WORKS
app.get("/api/ToDoList", (req, res) => {
  pool.query("SELECT * FROM ToDoList").then((result) => {
    res.send(result.rows);

  });
});


app.listen(8000, () => {
  console.log(`Listening on port 8000`);
});
