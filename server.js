var app = require("express")(),
    env = process.env.NODE_ENV = process.env.NODE_ENV || "development",
    cfg = require("./server/config/env-server-config")[env];

require("./server/config/express-server-config")(app, cfg);
require("./server/config/routes-server-config")(app, cfg);

app.listen(cfg.port);
console.log("[server] up on port " + cfg.port);