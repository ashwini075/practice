const express = require("express");
const app =express();
app.get("/", (req,res) => {
    const id = req.query.id;
    const username = req.query.username;

    const json ={ id:2 ,title:"Ashwini Gaikar"};
    res.json(json);

app.get("/search", (req, res) => {
  const json = { id: 100, title: "I am Search API!!" };
  res.json(json);
});


});
app.listen(3001);