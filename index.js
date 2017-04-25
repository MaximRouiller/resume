(function() {
  var fs = require("fs");
  var path = require("path");
  var Handlebars = require("handlebars");
  var handlebarsHelpers = require("./template/HandlebarHelpers");
  var phantomjs = require('phantomjs-prebuilt')

  var base = require("./MaximeRouiller.base.json");
  var english = require("./MaximeRouiller.en.json");
  var french = require("./MaximeRouiller.fr.json");

  var compiled = __dirname + '/compiled';
  if (!fs.existsSync(compiled)) {
    fs.mkdirSync(compiled, 0744);
  }
  handlebarsHelpers.register();

  function render(resume, filename) {
    var css = fs.readFileSync(__dirname + "/template/style.css", "utf-8");
    var tpl = fs.readFileSync(__dirname + "/template/resume.hbs", "utf-8");

    //generates HTML
    fs.writeFile(compiled + "/" + filename + ".html", Handlebars.compile(tpl)({
      css: css,
      resume: resume
    }), {
      flag: 'w'
    });

    // generates PDF
    var program = phantomjs.exec('./scripts/rasterize.js', './compiled/' + filename + '.html', './compiled/' + filename + '.pdf', 'Letter')
    program.stdout.pipe(process.stdout);
    program.stderr.pipe(process.stderr);
  }

  render(Object.assign(base, english), 'MaximeRouiller.en');
  render(Object.assign(base, french), 'MaximeRouiller.fr');
}());
