const { Router } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const PizzasRouter = require("./routes/PizzasRouter")

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(PizzasRouter);



  
app.listen(3000, () =>
  console.log(`Servidor rodando na porta 3000`)
);

