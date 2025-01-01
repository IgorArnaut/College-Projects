module.exports = (app) => {
  const artikli = require("../controllers/artikal.controller.js");

  var router = require("express").Router();

  router.get("/", artikli.vratiSve);

  router.get("/:sifra", artikli.vratiJedan);

  router.put("/:sifra", artikli.azuriraj);

  app.use("/api/artikli", router);
};
