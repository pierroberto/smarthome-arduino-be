const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const sensor = require("./controllers/sensors");

router.get("/humidity", sensor.humidity);

module.exports = router;
