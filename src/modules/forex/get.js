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
 * 4:'bank_posted'
 * 5:'customer_posted',
 */
let table = [
  "bank",
  "customer",
  "currency",
  "rate",
  "bank_posted",
  "customer_posted",
];

//-----All Data Return
router.get("/data/:tableId", async (req, res) => {
  const ID = req.params.tableId;
  const stm = Query.all(table[ID]);
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/today", (req, res) => {
  const stm = `
  SELECT
    rate.id AS rate_id,
    rate.rate_date,
    rate.buying_cash,
    rate.buying_transaction,
    rate.selling_cash,
    rate.selling_transaction,
    bank.id AS bank_id,
    bank.short_name,
    bank.bank_name,
    bank.email_address AS bank_email,
    currency.id AS currency_id,
    currency.name AS currency_name
FROM
    rate
JOIN
    bank ON rate.bank_id = bank.id
JOIN
    currency ON rate.currency_id = currency.id
WHERE
    DATE(rate.rate_date) = CURDATE();  
`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/max", (req, res) => {
  const stm = `
  SELECT
    rate.id AS rate_id,
    rate.rate_date,
    rate.buying_cash,
    rate.buying_transaction,
    rate.selling_cash,
    rate.selling_transaction,
    bank.id AS bank_id,
    bank.short_name,
    bank.bank_name,
    bank.logo,
    bank.color_main,
    bank.color_back,
    bank.color_text,
    bank.email_address AS bank_email,
    currency.id AS currency_id,
    currency.name AS currency_name,
    currency.description AS description,
    currency.logo AS currency_logo
FROM
    rate
JOIN
    bank ON rate.bank_id = bank.id
JOIN
    currency ON rate.currency_id = currency.id
JOIN (
    SELECT 
        currency_id,
        MAX(rate_date) AS max_rate_date,
        MAX(buying_cash) AS max_buying_cash
    FROM 
        rate
    GROUP BY 
       currency_id
) AS LatestRates ON
rate.currency_id = LatestRates.currency_id
AND rate.rate_date = LatestRates.max_rate_date
;
`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/new", (req, res) => {
  const stm = `
  SELECT
    rate.id AS rate_id,
    rate.rate_date,
    rate.buying_cash,
    rate.buying_transaction,
    rate.selling_cash,
    rate.selling_transaction,
    bank.id AS bank_id,
    bank.short_name,
    bank.bank_name,
    bank.logo,
    bank.color_main,
    bank.color_back,
    bank.color_text,
    bank.email_address AS bank_email,
    currency.id AS currency_id,
    currency.name AS currency_name,
    currency.description AS description,
    currency.logo AS currency_logo
FROM
    rate
JOIN
    bank ON rate.bank_id = bank.id
JOIN
    currency ON rate.currency_id = currency.id
JOIN (
    SELECT 
        bank_id, 
        currency_id,
        MAX(rate_date) AS max_rate_date
    FROM 
        rate
    GROUP BY 
        bank_id, currency_id
) AS LatestRates ON rate.bank_id = LatestRates.bank_id 
AND rate.currency_id = LatestRates.currency_id
AND rate.rate_date = LatestRates.max_rate_date;`;
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

module.exports = router;
