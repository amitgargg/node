var fs  = require("fs");

fs.readFile("files/project.properties", "utf8", function(err, content) {
    console.log(content);
});

