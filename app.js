const express = require("express");
const cors = require("cors");
const compression = require("compression");
const app = express();
const http = require("http");
const https = require("https");

const bugsEndpoint = require("./endpoints/bugs");
const fishEndpoint = require("./endpoints/fish");
const seaEndpoint = require("./endpoints/sea");
const artEndpoint = require("./endpoints/art");
const fossilsEndpoint = require("./endpoints/fossils");
const villagersEndpoint = require("./endpoints/villagers");
const songsEndpoint = require("./endpoints/songs");
const hourlyEndpoint = require("./endpoints/hourly");
const imagesEndpoint = require("./endpoints/images");
const iconsEndpoint = require("./endpoints/icons");
const musicEndpoint = require("./endpoints/music");
const bgmEndpoint = require("./endpoints/bgm");
const housewareEndpoint = require("./endpoints/houseware");
const miscEndpoint = require("./endpoints/misc");
const wallmountedEndpoint = require("./endpoints/wallmounted");

const bugsArrEndpoint = require("./endpoints/bugsArr");
const fishArrEndpoint = require("./endpoints/fishArr");
const seaArrEndpoint = require("./endpoints/seaArr");
const artArrEndpoint = require("./endpoints/artArr");
const fossilsArrEndpoint = require("./endpoints/fossilsArr");
const villagersArrEndpoint = require("./endpoints/villagersArr");
const songsArrEndpoint = require("./endpoints/songsArr");
const hourlyArrEndpoint = require("./endpoints/hourlyArr");
const housewareArrEndpoint = require("./endpoints/housewareArr");
const miscArrEndpoint = require("./endpoints/miscArr");
const wallmountedArrEndpoint = require("./endpoints/wallmountedArr");

// const httpServer = http.createServer(app);
const httpServer = http.createServer(app);

//Allow CORS
app.use(cors());

//Send data as gzip
app.use(compression());

httpServer.listen(80, () => {
  console.log(`Server HTTP running on port 80`);
});

/* Replace with your own for HTTPS
const privateKey = fs.readFileSync('/etc/letsencrypt/live/acnhapi.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/acnhapi.com/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
    console.log(`Server HTTPS running on port 443`);
});
*/

app.use(express.static("html", { maxAge: 300000 }));

app.get("/doc", (req, res) => {
  res.sendFile(__dirname + "/html/doc.html");
});

app.get("/acnhapilogs/ip", (req, res) => {
  res.json(ipLog);
});
app.get("/acnhapilogs/ua", (req, res) => {
  res.json(uaLog);
});
app.get("/acnhapilogs/referer", (req, res) => {
  res.json(refererLog);
});
app.get("/acnhapilogs/endpoint", (req, res) => {
  res.json(pageLog);
});

//Endpoints
app.use("/v1/bugs", bugsEndpoint);
app.use("/v1/fish", fishEndpoint);
app.use("/v1/sea", seaEndpoint);
app.use("/v1/art", artEndpoint);
app.use("/v1/fossils", fossilsEndpoint);
app.use("/v1/villagers", villagersEndpoint);
app.use("/v1/songs", songsEndpoint);
app.use("/v1/backgroundmusic", hourlyEndpoint);
app.use("/v1/images", imagesEndpoint);
app.use("/v1/icons", iconsEndpoint);
app.use("/v1/music", musicEndpoint);
app.use("/v1/hourly", bgmEndpoint);
app.use("/v1/houseware", housewareEndpoint);
app.use("/v1/misc", miscEndpoint);
app.use("/v1/wallmounted", wallmountedEndpoint);

app.use("/v1a/bugs", bugsArrEndpoint);
app.use("/v1a/fish", fishArrEndpoint);
app.use("/v1a/sea", seaArrEndpoint);
app.use("/v1a/art", artArrEndpoint);
app.use("/v1a/fossils", fossilsArrEndpoint);
app.use("/v1a/villagers", villagersArrEndpoint);
app.use("/v1a/songs", songsArrEndpoint);
app.use("/v1a/backgroundmusic", hourlyArrEndpoint);
app.use("/v1a/houseware", housewareArrEndpoint);
app.use("/v1a/misc", miscArrEndpoint);
app.use("/v1a/wallmounted", wallmountedArrEndpoint);
app.use("/v1a/images", imagesEndpoint);
app.use("/v1a/icons", iconsEndpoint);
app.use("/v1a/music", musicEndpoint);
app.use("/v1a/hourly", bgmEndpoint);
