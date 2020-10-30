const topupRoute = require("express").Router();
const { checkToken } = require("../helper/middleware");

const topupController = require("../controller/Topup");

topupRoute.get("/", topupController.getAllTopupByStep);
topupRoute.get("/all", topupController.getAllTopup);
topupRoute.post("/midtrans", topupController.getMidtrans);

module.exports = topupRoute;