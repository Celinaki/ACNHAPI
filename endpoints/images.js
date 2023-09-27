const express = require("express");
const router = express.Router();
const fs = require("fs");
const music = require("../json/music.json");
const villagers = require("../json/villagers.json");
const art = require("../json/art.json");
const fish = require("../json/fish.json");
const bugs = require("../json/bugs.json");
const sea = require("../json/sea.json");
const fossils = require("../json/fossils.json");

router.get("/fish/:fishname", (req, res) => {
  let fishname = req.params.fishname;

  if (Object.keys(fish)[fishname - 1]) {
    res.sendFile(
      process.cwd() +
        "/images/fish/" +
        fish[Object.keys(fish)[fishname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (fish[fishname]) {
      res.sendFile(
        process.cwd() + "/images/fish/" + fish[fishname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Image not found");
});

router.get("/sea/:seaname", (req, res) => {
  let seaname = req.params.seaname;

  if (Object.keys(sea)[seaname - 1]) {
    res.sendFile(
      process.cwd() +
        "/images/sea/" +
        sea[Object.keys(sea)[seaname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (sea[seaname]) {
      res.sendFile(
        process.cwd() + "/images/sea/" + sea[seaname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Image not found");
});

router.get("/art/:artname", (req, res) => {
  let artname = req.params.artname;

  if (Object.keys(art)[artname - 1]) {
    res.sendFile(
      process.cwd() +
        "/images/art/" +
        art[Object.keys(art)[artname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (art[artname]) {
      res.sendFile(
        process.cwd() + "/images/art/" + art[artname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Image not found");
});

router.get("/bugs/:bugname", (req, res) => {
  let bugname = req.params.bugname;

  if (Object.keys(bugs)[bugname - 1]) {
    res.sendFile(
      process.cwd() +
        "/images/bugs/" +
        bugs[Object.keys(bugs)[bugname - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (bugs[bugname]) {
      res.sendFile(
        process.cwd() + "/images/bugs/" + bugs[bugname]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Image not found");
});

router.get("/villagers/:villagerid", (req, res) => {
  let villagerid = req.params.villagerid;

  if (Object.keys(villagers)[villagerid - 1]) {
    res.sendFile(
      process.cwd() +
        "/images/villagers/" +
        villagers[Object.keys(villagers)[villagerid - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (villagers[villagerid]) {
      res.sendFile(
        process.cwd() +
          "/images/villagers/" +
          villagers[villagerid]["file-name"] +
          ".png",
      );
      return;
    }
  }
  res.status(404).send("Image not found");
});

router.get("/fossils/:fossilname", (req, res) => {
  let fossilname = req.params.fossilname;
  if (fossils[fossilname]) {
    res.sendFile(
      process.cwd() +
        "/images/fossils/" +
        fossils[fossilname]["file-name"] +
        ".png",
    );
    return;
  }
  res.status(404).send("Image not found");
});

router.get("/songs/:musicID", (req, res) => {
  let musicID = req.params.musicID;

  if (Object.keys(music)[musicID - 1]) {
    res.sendFile(
      process.cwd() +
        "/images/music/" +
        music[Object.keys(music)[musicID - 1]]["file-name"] +
        ".png",
    );
    return;
  } else {
    if (music[musicID]) {
      res.sendFile(
        process.cwd() + "/images/music/" + music[musicID]["file-name"] + ".png",
      );
      return;
    }
  }
  res.status(404).send("Song not found");
});

router.get("/furniture/:furnitureid", (req, res) => {
  let furnitureid = req.params.furnitureid;
  if (
    fs.existsSync(process.cwd() + "/images/furniture/" + furnitureid + ".png")
  ) {
    res.sendFile(process.cwd() + "/images/furniture/" + furnitureid + ".png");
    return;
  }
  res.status(404).send("Furniture not found");
});

module.exports = router;
