const express = require("express");
const router = express.Router();
const houseware = require("../json/misc.json");

router.get("/", (_, res) => {
  res.json(houseware);
});

router.get("/:housewarename", (req, res) => {
  let housewarename = req.params.housewarename;

  if (houseware[housewarename]) {
    res.json(houseware[housewarename]);
    return;
  }
  res.status(404).send("Furniture not found");
});

module.exports = router;
