var users = require("../../controllers/user-server-controller.js");

module.exports = function(app) {
  // list all users and create a user resource
  app.route("/api/users")
     .get(users.list)
     .post(users.create);
  // the rest of the CRUD
  app.route("/api/users/:id")
     .get(users.read)
     .put(users.update)
     .delete(users.delete);
};