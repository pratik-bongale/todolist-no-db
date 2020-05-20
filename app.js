
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs")

var items = ["Buy food", "Cook food", "Eat food"]
var workItems = []

// HOME

app.get("/", function(req, res) {

  // Testing module import/export

  let today = date.getDate();
  // console.log(date.getDay());
  // let today = "someday";

  res.render("list", {
    listTitle : today,
    listItems : items
  })
})

app.post("/", function(req, res) {

  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

})

// WORK
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle : "Work List",
    listItems : workItems
  })
})

const port = process.env.PORT;
app.listen(port || "3000", function() {
  console.log("Server is listening on port 3000");
})


app.get("/about", function(req, res) {
  res.render("about", {})
})
