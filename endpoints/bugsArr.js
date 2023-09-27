const express = require("express");
const router = express.Router();
const bugs = require("../json/bugs.json");
const bugsArr = require("../json/bugsArr.json");

router.get("/", (_, res) => {
  res.json(bugsArr);
});

router.get("/:bugname", (req, res) => {
  let bugname = req.params.bugname;

  if (Object.keys(bugs)[bugname - 1]) {
    res.json(bugs[Object.keys(bugs)[bugname - 1]]);
    return;
  } else {
    if (bugs[bugname]) {
      res.json(bugs[bugname]);
      return;
    }
  }
  res.status(404).send("Bug not found");
});

module.exports = router;
