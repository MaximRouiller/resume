var fs = require("fs");

var base = require("./MaximeRouiller.base.json");
var english = require("./MaximeRouiller.en.json");
var french = require("./MaximeRouiller.fr.json");

var compiled = __dirname + '/compiled';
if (!fs.existsSync(compiled)) {
    fs.mkdirSync(compiled, 0744);
}

fs.writeFile(compiled + "/MaximeRouiller.en.json", JSON.stringify(Object.assign(base, english)), {flag:'w'});
fs.writeFile(compiled + "/MaximeRouiller.fr.json", JSON.stringify(Object.assign(base, french)), {flag:'w'});
