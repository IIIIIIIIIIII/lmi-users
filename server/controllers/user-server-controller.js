var User = require("../models/user-server-model");
var users = require("../services/users-server-service");

// the controller does some validation and instead of persisting the data,
// it maintains a collection of users in memory while the server is running
exports.create = function(req, res) {
  var data = req.body;

  if (users.isMailAddressUnique(data.mailAddress)) {
    var user = User.createUser(data);
    if (user.validate().status === "success") {
      users.add(user);
    }
    return res.send(user.validate());
  } else {
    res.send({ "error": "A user with that mail address already exists" })
  }
};

exports.read = function(req, res) {
  var user = users.get(+req.params.id);
  res.send(user ? user : { "error": "No user exists with that ID" });
};

exports.update = function(req, res) {
  var user = users.update(+req.params.id, req.body);
  res.send(user);
};

exports.delete = function(req, res) {
  var removedUser = users.remove(+req.params.id);
  res.send(removedUser ? removedUser : { "error": "No user exists with that ID" });
};

exports.list = function(req, res) {
  res.send(users.list());
};