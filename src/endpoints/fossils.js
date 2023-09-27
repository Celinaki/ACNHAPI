const express = require("express");
const router = express.Router();
const fossils = require("../json/fossils.json");

router.get("/", (_, res) => {
  res.json(fossils);
});

router.get("/:fossilname", (req, res) => {
  let fossilname = req.params.fossilname;

  if (fossils[fossilname]) {
    res.json(fossils[fossilname]);
    return;
  }
  res.status(404).send("Fossil not found");
});

module.exports = router;
