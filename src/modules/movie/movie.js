const express = require("express");
//const app = express();
const router = express.Router();

//Crud Opearions
const insertOP = require("../../utils/insert");
const selectOP = require("../../utils/select");
const updateOP = require("../../utils/update");
const deleteOP = require("../../utils/delete");

//Call Back Functions
const callFunc = require("./call_backs");
//get main movie list
router.get("/get", async (req, res) => {
  const stm = selectOP.selectAll("movies");
  callFunc.addDataCallBack(stm, res);
});
router.get("/series/get", async (req, res) => {
  const stm = selectOP.selectAll("series");
  callFunc.addDataCallBack(stm, res);
});

router.get("/save", (req, res) => {
  res.send(
    "this is my life, Program development is the best thing i can do for ever"
  );
});
router.post("/add", (req, res) => {
  let stm = insertOP.insert("movie", req.body);
  callFunc.addDataCallBack(stm, res);
});

router.post("/series/add", (req, res) => {
  let stm = insertOP.insert("series", req.body);
  callFunc.addDataCallBack(stm, res);
});

module.exports = router;
