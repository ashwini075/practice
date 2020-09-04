
const express =require("express");
const app = express();
const dread = require("./db.read.user");
const dadd = require("./db.add.user");

app.get("/adduser", async (req, res) => {
    try {
      const input = req.query;
      await dbadd.addRecord(input);
  
      const json = { message: "Success" };
      res.json(json);
    } catch (err) {
      const json = { message: "Failure" };
      res.json(json);
    }
  });
  app.listen(3500);