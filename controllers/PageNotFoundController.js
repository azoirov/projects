const fs = require("fs").promises;
const path = require("path");

async function PageNotFoundController(request, response) {
  try {
    let ErrorPath = path.join(__dirname, "..", "views", "404.html");
    let ErrorFile = await fs.readFile(ErrorPath, {
      encoding: "utf-8",
    });
    await response.write(ErrorFile);
    await response.end();
  } catch (e) {
    console.log(e + "");
  }
}

module.exports = PageNotFoundController;
