const fs = require("fs").promises;
const path = require("path");

async function OpenHomeController(req, res) {
  try {
    let IndexHTMLPath = path.join(__dirname, "..", "views", "index.html");
    let IndexHTML = await fs.readFile(IndexHTMLPath, {
      encoding: "utf-8",
    });
    await res.write(IndexHTML);
    await res.end();
  } catch (e) {
    console.log(e + "");
  }
}

module.exports = OpenHomeController;
