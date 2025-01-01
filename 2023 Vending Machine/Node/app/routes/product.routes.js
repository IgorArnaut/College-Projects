import { Router } from "express";

import { find, findOne, update } from "../controllers/product.controller.js";

export const routes = (app) => {
  var router = Router();
  app.use("/api/products", router);

  router.get("/", find);
  router.get("/:id", findOne);
  router.put("/:id", update);
};
