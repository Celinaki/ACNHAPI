const express = require("express");
const router = express.Router();
const art = require("../json/art.json");

router.get("/", (_, res) => {
  res.json(art);
});

router.get("/:artname", (req, res) => {
  let artname = req.params.artname;

  if (Object.keys(art)[artname - 1]) {
    res.json(art[Object.keys(art)[artname - 1]]);
    return;
  } else {
    if (art[artname]) {
      res.json(art[artname]);
      return;
    }
  }
  res.status(404).send("Art not found");
});

module.exports = router;
