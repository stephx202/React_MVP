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
//ANOTHER WAY TO MAKE A GET ROUTE
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
//GET REQUEST
app.get("/api/ToDoList", (req, res) => {
  pool.query("SELECT * FROM ToDoList").then((result) => {
    res.send(result.rows);

  });
});

//DELETE ROUTE BY ID
app.delete("/api/ToDoList/:id",(req, res)=>{
  const itemID = req.params.id;
  console.log("Received DELETE request for item with ID:", itemID)
  pool.query("DELETE FROM ToDoList WHERE id=$1", [itemID])
  .then((result)=>{
    res.status(204).send("item deleted");
  })
  .catch((error)=>{
    console.error(error);
    res.status(404).send("unable to delete the requested item. check server side")
  })

})


//POST ROUTE  
app.post("/api/ToDoList", (req, res) => {
  const {item} = req.body;
  pool.query("INSERT INTO ToDoList (item) VALUES ($1) RETURNING *", [item])
  .then((result) => {
    res.status(201).json(result.rows[0]);
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send("Error adding new item to list");
  })
})


app.listen(8000, () => {
  console.log(`Listening on port 8000`);
});
