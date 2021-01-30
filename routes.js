let authenticateJWT = require("./validateAuth");

let bookRoutes = require("./routes/Book");
let authRoutes = require("./routes/Auth");
let agamaRoutes = require("./routes/Agama");

const route = (app) => {
  app.use("/auth", authRoutes);
  app.use("/book", authenticateJWT, bookRoutes);
  app.use("/agama", agamaRoutes);
};

module.exports = route;
