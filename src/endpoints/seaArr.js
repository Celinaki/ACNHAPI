const express = require("express");
const router = express.Router();
const sea = require("../json/sea.json");
const seaArr = require("../json/seaArr.json");

router.get("/", (_, res) => {
  res.json(seaArr);
});

router.get("/:seaname", (req, res) => {
  let seaname = req.params.seaname;

  if (Object.keys(sea)[seaname - 1]) {
    res.json(sea[Object.keys(sea)[seaname - 1]]);
    return;
  } else {
    if (sea[seaname]) {
      res.json(sea[seaname]);
      return;
    }
  }
  res.status(404).send("Sea Creature not found");
});

module.exports = router;
