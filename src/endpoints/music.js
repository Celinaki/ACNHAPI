const express = require("express");
const router = express.Router();
const music = require("../json/music.json");

router.get("/:musicID", (req, res) => {
  let musicID = req.params.musicID;

  if (Object.keys(music)[musicID - 1]) {
    res.sendFile(
      process.cwd() +
        "/music/kk/" +
        music[Object.keys(music)[musicID - 1]]["file-name"] +
        ".mp3",
    );
    return;
  } else {
    if (music[musicID]) {
      res.sendFile(
        process.cwd() + "/music/kk/" + music[musicID]["file-name"] + ".mp3",
      );
      return;
    }
  }
  res.status(404).send("Song not found");
});

module.exports = router;
