const express = require("express");
const router = express.Router();
const fish = require("../json/fish.json");

router.get("/", (_, res) => {
  res.json(fish);
});

router.get("/:fishname", (req, res) => {
  let fishname = req.params.fishname;

  if (Object.keys(fish)[fishname - 1]) {
    res.json(fish[Object.keys(fish)[fishname - 1]]);
    return;
  } else {
    if (fish[fishname]) {
      res.json(fish[fishname]);
      return;
    }
  }
  res.status(404).send("Fish not found");
});

module.exports = router;
