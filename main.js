const fs = require("fs").promises;
const fsE = require("fs");
const http = require("http");
const path = require("path");
const EventEmitter = require("events");

const event = new EventEmitter();

// Controllers
const PageNotFoundController = require("./controllers/PageNotFoundController");
const DownloadImageController = require("./controllers/DownloadImageController");
const OpenHomeController = require("./controllers/OpenHomeController");

// new server
const server = http.createServer(serverListener);

// building server
async function serverListener(req, res) {
  if (req.url === "/") {
    await OpenHomeController(req, res);
  } else if (req.url !== "/favicon.ico") {
    let url = req.url.split("/");
    url = url[1];
    let imgPath = path.join(__dirname, "files", url);
    if (fsE.existsSync(imgPath)) {
      await DownloadImageController(req, res, url);
    } else {
      await PageNotFoundController(req, res);
    }
  }
}

server.listen(3030);
