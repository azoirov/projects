const fs = require("fs").promises;
const path = require("path");

async function DownloadImageController(request, response, url) {
  try {
    let imgUrl = path.join(__dirname, "..", "files", url);
    let img = await fs.readFile(imgUrl);
    await response.writeHead(200, {
      "Content-Type": "image/png",
    });
    await response.write(img);
    await response.end();
  } catch (e) {
    console.log(e + "");
  }
}

module.exports = DownloadImageController;
