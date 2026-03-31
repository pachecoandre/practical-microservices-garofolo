function mountRoutes(app, config) {
  // app.use("/", () => {});
  app.use("/", config.homeApp.router);
}

module.exports = mountRoutes;
