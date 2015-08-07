var root = require("path").normalize(__dirname + "/../../");

module.exports = {
  development: {
    name: "development",
    root: root,
    port: process.env.PORT || 3210
  },
  production: {
    name: "production",
    root: root,
    port: process.env.PORT || 80
  }
};