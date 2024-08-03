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
 * 0:'category',
 * 1:'merchant_store',
 * 2:'product',
 * 5:'product_order',
 * 4'stock_bin',
 * 6:'users'
 */
let table = [
  "category",
  "merchant_store",
  "product",
  "product_order",
  "stock_bin",
  "users",
];

//-----All Data Return
router.get("/data/:tableId", async (req, res) => {
  const ID = req.params.tableId;
  const stm = Query.all(table[ID]);
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
  const email = req.params.uid;

  const stm = Query.selectCTRString("users", email, "uid");
  callFunc.getData(stm, res);
});
//--- Merchant Product BY category
router.get("/product/:val1/:val2", async (req, res) => {
  const id1 = req.params.val1;
  const id2 = req.params.val2;

  const stm = Query.select2key("product", "category", id1, "merchant_id", id2);
  callFunc.getData(stm, res);
});

module.exports = router;
