(function() {
  var moment = require('moment');

  var Handlebars = require("handlebars");

  function register() {
    /* HANDLEBARS HELPERS */
    Handlebars.registerHelper('paragraphSplit', function(plaintext) {
      var output = '';
      var lines = plaintext instanceof Array ? plaintext.join('').split(/\r\n|\r|\n/g) : plaintext.split(/\r\n|\r|\n/g);
      var i = 0;

      while (i < lines.length) {
        if (lines[i]) {
          output += '<p>' + lines[i] + '</p>';
        }
        i += 1;
      }

      return new Handlebars.SafeString(output);
    });

    Handlebars.registerHelper('toLowerCase', function(str) {
      return str.toLowerCase();
    });

    Handlebars.registerHelper('spaceToDash', function(str) {
      return str.replace(/\s/g, '-').toLowerCase();
    });

    Handlebars.registerHelper('MY', function(date) {
      return moment(date.toString(), ['YYYY-MM-DD']).format('MMMM YYYY');
    });

    Handlebars.registerHelper('Y', function(date) {
      return moment(date.toString(), ['YYYY-MM-DD']).format('YYYY');
    });

    Handlebars.registerHelper('DMY', function(date) {
      return moment(date.toString(), ['YYYY-MM-DD']).format('D MMMM YYYY');
    });

    Handlebars.registerHelper('birthData', function (birth) {
        var out = [];
        if (birth && Object.keys(birth).length) {
            out.push('<div> Born in ');
            out.push(birth.place);

            if (birth.place && birth.state) {
                out.push(', ');
            }

            out.push(birth.state);

            var year = birth.date &&
                moment(birth.date.toString(), ['YYYY-MM-DD']).format('YYYY');

            if (year && (birth.place || birth.state)) {
                out.push(' in ');
            }
            out.push(year);
            out.push('</div>');
        }

        return new Handlebars.SafeString(out.join(''));
    });
  }

  module.exports = {
    register: register
  };
})();
