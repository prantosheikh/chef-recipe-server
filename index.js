const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const chefData = require("./chef-data.json");
const chefs = require("./chef-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedId = chefs.find((chef) => chef.id == id);

  res.send(selectedId);
});

app.listen(port, () => {
  console.log(`${port}`);
});
