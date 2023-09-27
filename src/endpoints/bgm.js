const express = require("express");
const router = express.Router();
const hourly = require("../json/hourly.json");

router.get("/:musicID", (req, res) => {
  let musicID = req.params.musicID;

  if (Object.keys(hourly)[musicID - 1]) {
    res.sendFile(
      process.cwd() +
        "/music/hourly/" +
        hourly[Object.keys(hourly)[musicID - 1]]["file-name"] +
        ".mp3",
    );
    return;
  } else {
    if (hourly[musicID]) {
      res.sendFile(
        process.cwd() +
          "/music/hourly/" +
          hourly[musicID]["file-name"] +
          ".mp3",
      );
      return;
    }
  }
  res.status(404).send("Song not found");
});

module.exports = router;
