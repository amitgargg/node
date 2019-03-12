var fs  = require("fs");

var content = fs.readFileSync("files/project.properties", "utf8");

console.log(content);