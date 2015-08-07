var morgan         = require("morgan"),
    stylus         = require("stylus"),
    compress       = require("compression"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override");

// setting up middlewares here
module.exports = function(app, config) {

  if (config.name === "development") {
    // http request logger
    app.use(morgan("dev"));
  } else { app.use(compress()); }

  app.set("view engine", "jade");
  app.set("views", config.root + "/server/views");

  // application/json parser
  app.use(bodyParser.json());
  // application/x-www-form-urlencoded parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride()); // http method support

  app.use(stylus.middleware({
    src    : config.root + "/client",
    compile: function(str, path) { return stylus(str).set("filename", path); }
  }));
};