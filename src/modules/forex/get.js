const express = require("express");
//const app = express();
const router = express.Router();

//Crud Opearions
const insertOP = require("../../utils/insert");
const Query = require("../../utils/select");
const updateOP = require("../../utils/update");
const deleteOP = require("../../utils/delete");

//Call Back Functions
const callFunc = require("./call_backs");
/**
 * 0:'bank',
 * 1:'customer',
 * 2:'currency',
 * 3:'rate',
 * 4: "promotions",
 * 5:'bank_posted'
 * 6:'customer_posted',
 * 7:'systemu',
 * 8:'top_offer',
 */
let table = [
  "bank",
  "customer",
  "currency",
  "rate",
  "promotion",
  "bank_posted",
  "customer_posted",
  "systemu",
  "top_offer",
  "offer",
];

//-----All Data Return
router.get("/data/:tableId", async (req, res) => {
  const ID = req.params.tableId;
  const stm = Query.all(table[ID]);
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

//Today Rate Only
router.get("/rate/today", (req, res) => {
  const stm = `select * from todayRate`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

//SELECT * FROM `allAVtrend` WHERE rate_date >= CURDATE() - INTERVAL 20 DAY;

//All Trensd By date interval
router.get("/trend/:interval", async (req, res) => {
  const intervals = req.params.interval;
  const stm = `SELECT * FROM allAVtrend WHERE rate_date >= CURDATE() - INTERVAL ${intervals} DAY;`; //Query.selectAllCount(data[id]);
  callFunc.getData(stm, res);
});
//Per bank Currency trend
router.get("/bank/trend/:bankID/:interval", async (req, res) => {
  const bankId = req.params.bankID;
  const intervals = req.params.interval;

  const stm = `SELECT * FROM rate JOIN currency on currency.id=rate.currency_id where bank_id=${bankId} and rate_date >= CURDATE() - INTERVAL ${intervals} DAY; `; //Query.selectAllCount(data[id]);
  callFunc.getData(stm, res);
});

router.get("/rate/max", (req, res) => {
  const stm = `select * from maxRate`;

  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/cbuying/max", (req, res) => {
  const stm = `select * from cbuyingMax`;

  callFunc.DBO(stm, res, "Error Getting Data!!");
});
router.get("/rate/cselling/min", (req, res) => {
  const stm = `select * from csellingMin`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/tselling/min", (req, res) => {
  const stm = `select * from tsellingMin`;

  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/tbuying/max", (req, res) => {
  const stm = `select * from tbuyingMax`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rates/latest", (req, res) => {
  const stm = `select * from latestRate`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rates/topmax", (req, res) => {
  const stm = `select * from topMax`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/new", (req, res) => {
  const stm = `select * from newRate`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/currency/trend", async (req, res) => {
  const stm = `select * from buyingAVtrend`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/data/:tableId/:id", async (req, res) => {
  const ID = req.params.tableId;
  const merchantID = req.params.id;
  const stm = Query.all_by_merchant(table[ID], merchantID);
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

//----Counting Records in the tables
router.get("/count/:id", async (req, res) => {
  const id = req.params.id;
  const stm = Query.selectAllCount(data[id]);
  callFunc.getData(stm, res);
});

//-----Serch in table with record ID
router.get("/search/:tableId/:recId", async (req, res) => {
  const tableId = req.params.tableId;
  const recId = req.params.recId;
  const stm = Query.selectCTR(data[tableId], recId, "id");
  callFunc.getData(stm, res);
});

//-----Get Users with Email ID
router.get("/user/:uid", async (req, res) => {
  const uid = req.params.uid;
  const stm = Query.selectCTRString("users", uid, "uid");
  callFunc.getData(stm, res);
});
//--- Merchant Product BY category
router.get("/product/:val1/:val2", async (req, res) => {
  const id1 = req.params.val1;
  const id2 = req.params.val2;
  const stm = Query.select2key("product", "category", id1, "merchant_id", id2);
  callFunc.getData(stm, res);
});

//-----All Data Return
router.get("/users/:email", async (req, res) => {
  const emailId = req.params.email;
  const stm = Query.selectCTR("systemu", `'${emailId}'`, "email");
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

module.exports = router;
