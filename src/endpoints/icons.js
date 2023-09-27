const express = require("express");
const router = express.Router();
const fish = require("../json/fish.json");
const bugs = require("../json/bugs.json");
const sea = require("../json/sea.json");
const villagers = require("../json/villagers.json");

router.get("/fish/:fishname", (req, res) => {
  let fishname = req.params.fishname;

  if (Object.keys(fish)[fishname - 1]) {
    res.sendFile(
      process.cwd() +
        "/icons/fish/" +
        fish[Object.keys(fish)[fishname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (fish[fishname]) {
      res.sendFile(
        process.cwd() + "/icons/fish/" + fish[fishname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Icon not found");
});

router.get("/sea/:seaname", (req, res) => {
  let seaname = req.params.seaname;

  if (Object.keys(sea)[seaname - 1]) {
    res.sendFile(
      process.cwd() +
        "/icons/sea/" +
        sea[Object.keys(sea)[seaname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (sea[seaname]) {
      res.sendFile(
        process.cwd() + "/icons/sea/" + sea[seaname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Icon not found");
});

router.get("/bugs/:bugname", (req, res) => {
  let bugname = req.params.bugname;

  if (Object.keys(bugs)[bugname - 1]) {
    res.sendFile(
      process.cwd() +
        "/icons/bugs/" +
        bugs[Object.keys(bugs)[bugname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (bugs[bugname]) {
      res.sendFile(
        process.cwd() + "/icons/bugs/" + bugs[bugname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Icon not found");
});

router.get("/villagers/:villagerid", (req, res) => {
  let villagerid = req.params.villagerid;

  if (Object.keys(villagers)[villagerid - 1]) {
    res.sendFile(
      process.cwd() +
        "/icons/villagers/" +
        villagers[Object.keys(villagers)[villagerid - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (villagers[villagerid]) {
      res.sendFile(
        process.cwd() +
          "/icons/villagers/" +
          villagers[villagerid]["file-name"] +
          ".png",
      );
      return;
    }
  }
  res.status(404).send("Icon not found");
});

module.exports = router;
