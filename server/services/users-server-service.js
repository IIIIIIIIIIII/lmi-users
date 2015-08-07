// a simple collection of user objects
var Users = function() { this.coll = []; };

var id = 1;

Users.prototype.add = function(user) {
  user.id = id;
  id += 1;
  this.coll.push(user);
};

Users.prototype.get = function(id) {
  for (var i = 0, len = this.coll.length; i < len; i += 1) {
    if (id === this.coll[i].id) { return this.coll[i]; }
  }
  return null;
};

Users.prototype.list = function(id) {
  return this.coll;
};

Users.prototype.update = function (id, user) {
  this.remove(id);
  this.add(user);
  return user;
};

Users.prototype.remove = function(id) {
  for (var i = 0; i < this.coll.length; i += 1) {
    if (this.coll[i].id === id) {
      var item = this.coll[i];
      this.coll.splice(i, 1);
      return item;
    }
  }
  return null;
};

// mail addresses should be unique in the collection
Users.prototype.isMailAddressUnique = function(mail) {
  return this.coll.filter(function(e) {
    return e.mailAddress === mail
  }).length === 0;
};

var fillDummyUserData = function (users) {
  users.add({ fullName: "Alice Dummy", mailAddress: "alice@dmy.net", occupation: "Programmer", birthday: "1950-01-01" });
  users.add({ fullName: "Bob Dummy", mailAddress: "bob@dmy.net", occupation: "Developer", birthday: "1950-01-01" });
  users.add({ fullName: "Charlie Dummy", mailAddress: "charlie@dmy.net", occupation: "Secret agent", birthday: "1950-01-01" });
};

module.exports = function() {
  var users = new Users();
  // adding some random dummy users on startup
  fillDummyUserData(users);
  return users;
}();