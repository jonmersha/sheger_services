const express = require("express");
const router = express.Router();

//Crud Opearions files
const insertOP = require("../../utils/insert");
const selectOP = require("../../utils/select");
const updateOP = require("../../utils/update");
const deleteOP = require("../../utils/delete");

//Call Back Functions
const callFunc = require("./call_backs");

// location infomation
router.get("/location/get", (req, res) => {
  const stm = selectOP.selectAll("P_LOCATION");
  callFunc.addDataCallBack(stm, res);
});

router.post("/location/add", (req, res) => {
  let stm = insertOP.insert("P_LOCATION", req.body);
  callFunc.addDataCallBack(stm, res);
});

//--Price By Car
router.get("/pricebycar/get", (req, res) => {
  const stm = selectOP.selectAll("PRICE_BY_CAR");
  callFunc.addDataCallBack(stm, res);
});

router.post("/locapricebycartion/add", (req, res) => {
  let stm = insertOP.insert("PRICE_BY_CAR", req.body);
  callFunc.addDataCallBack(stm, res);
});

//--CAP_BY_CAR_SIZE
router.get("/capacity/get", (req, res) => {
  const stm = selectOP.selectAll("CAP_BY_CAR_SIZE");
  callFunc.addDataCallBack(stm, res);
});

router.post("/capacity/add", (req, res) => {
  let stm = insertOP.insert("CAP_BY_CAR_SIZE", req.body);
  callFunc.addDataCallBack(stm, res);
});

//--Car Size
router.get("/carsize/get", (req, res) => {
  const stm = selectOP.selectAll("CAR_SIZE");
  callFunc.addDataCallBack(stm, res);
});

router.post("/carsize/add", (req, res) => {
  let stm = insertOP.insert("CAR_SIZE", req.body);
  callFunc.addDataCallBack(stm, res);
});

//--Parked
router.get("/parked/get", (req, res) => {
  const stm = selectOP.selectAll("PARKED");
  callFunc.addDataCallBack(stm, res);
});

router.post("/parked/add", (req, res) => {
  let stm = insertOP.insert("PARKED", req.body);
  callFunc.addDataCallBack(stm, res);
});

//--driver
router.get("/driver/get", (req, res) => {
  const stm = selectOP.selectAll("DRIVER");
  callFunc.addDataCallBack(stm, res);
});

router.post("/driver/add", (req, res) => {
  let stm = insertOP.insert("DRIVER", req.body);
  callFunc.addDataCallBack(stm, res);
});

//--PRICE_BY_CAR
router.get("/price/get", (req, res) => {
  const stm = selectOP.selectAll("PRICE_BY_CAR");
  callFunc.addDataCallBack(stm, res);
});

router.post("/price/add", (req, res) => {
  let stm = insertOP.insert("PRICE_BY_CAR", req.body);
  callFunc.addDataCallBack(stm, res);
});

module.exports = router;
