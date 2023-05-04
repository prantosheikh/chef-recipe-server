const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

const chefData = require("./chef-data.json");
const chefs = require("./chef-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedId = chefs.find((chef) => chef.id == id);
  res.send(selectedId);
});

// app.get("/", (req, res) => {
//   res.send("Hello World 2");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
