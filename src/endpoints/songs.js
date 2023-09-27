const express = require("express");
const router = express.Router();
const music = require("../json/music.json");

router.get("/", (_, res) => {
  res.json(music);
});

router.get("/:musicid", (req, res) => {
  let musicID = req.params.musicid;

  if (Object.keys(music)[musicID - 1]) {
    res.json(music[Object.keys(music)[musicID - 1]]);
    return;
  } else {
    if (music[musicID]) {
      res.json(music[musicID]);
      return;
    }
  }
  res.status(404).send("Music not found");
});

module.exports = router;
