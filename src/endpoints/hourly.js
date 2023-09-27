const express = require("express");
const router = express.Router();
const hourly = require("../json/hourly.json");

router.get("/", (_, res) => {
  res.json(hourly);
});

router.get("/:musicid", (req, res) => {
  let musicID = req.params.musicID;

  if (Object.keys(hourly)[musicID - 1]) {
    res.json(hourly[Object.keys(hourly)[musicID - 1]]);
    return;
  } else {
    if (hourly[musicID]) {
      res.json(hourly[musicID]);
      return;
    }
  }
  res.status(404).send("Music not found");
});

module.exports = router;
