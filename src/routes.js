const express = require("express");
const categoryController = require("./controller/CategoryController");
const deviceController = require("./controller/DeviceController");
const routes = express.Router();

routes.get("/category", categoryController.index);
routes.post("/category", categoryController.store);
routes.delete("/category/:categoryName", categoryController.delete);

routes.post("/category/:category_name/device", deviceController.store);
routes.get("/category/device", deviceController.index);
routes.delete("/device/:partNumber", deviceController.delete);

module.exports = routes;
