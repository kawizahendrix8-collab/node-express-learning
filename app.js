const express = require("express");
const app = express();

app.get("/",(req,res) =>{
  res.send("Book API is running");
});

app.get("/books",(req,res) =>{
  res.json([
     {"id":1,"title":"Atomic Habits"},
     {"id":2,"title":"Deep Work"},
     {"id":3,"title":"Clean Code"}
  ]);
});

app.get("/books/:id",(req,res) =>{
 res.send("You requested book " + req.params.id);
});

app.get("/search",(req,res) =>{
  res.send("Searching for " + req.query.title);
});

app.listen(3000,() =>{
  console.log("server is running on port 3000");
});
