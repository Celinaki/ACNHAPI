const express = require("express");
const router = express.Router();
const villagers = require("../json/villagers.json");
const villagersArr = require("../json/villagersArr.json");

router.get("/", (_, res) => {
  res.json(villagersArr);
});

router.get("/:villagerid", (req, res) => {
  let villagerid = req.params.villagerid;

  if (Object.keys(villagers)[villagerid - 1]) {
    res.json(villagers[Object.keys(villagers)[villagerid - 1]]);
    return;
  } else {
    if (villagers[villagerid]) {
      res.json(villagers[villagerid]);
      return;
    }
  }
  res.status(404).send("Villager not found");
});

module.exports = router;
