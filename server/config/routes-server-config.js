var express = require("express");

module.exports = function(app, config) {

  // simple REST API definition for the users
  require("./routes/users-server-routes.js")(app);

  app.get("/partials/*",
    function(req, res) {
      res.render(config.root + "/client/app/views/" + req.params[0]);
  });

  // catch-all routes and static content serving
  app.all("/api/*", function(req, res) { res.send(404); });
  app.use(express.static(config.root + "/client"));
  app.all("*", function(req, res) { res.render("index-server-view"); });
};