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
  "promotions",
  "bank_posted",
  "customer_posted",
];

//-----All Data Return
router.get("/data/:tableId", async (req, res) => {
  const ID = req.params.tableId;
  const stm = Query.all(table[ID]);
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

//Today Rate Only
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
  WITH latest_rates AS (
  SELECT 
    bank_id, 
    currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id, currency_id
),
ranked_rates AS (
  SELECT
    r.bank_id,
    r.id,
    r.currency_id,
    lr.latest_rate_date,
    r.buying_cash,
    r.selling_cash,
    r.buying_transaction,
    r.selling_transaction,
    (r.selling_cash - r.buying_cash) AS cash_diff,
    (r.selling_transaction - r.buying_transaction) AS tran_diff,
    ROW_NUMBER() OVER (PARTITION BY r.currency_id ORDER BY r.buying_cash DESC) AS rn
  FROM rate r
  INNER JOIN latest_rates lr 
    ON r.bank_id = lr.bank_id 
    AND r.currency_id = lr.currency_id 
    AND r.rate_date = lr.latest_rate_date
)
SELECT 
  rr.bank_id,
  b.short_name,
  b.bank_name,
  b.address,
  b.phone_land_line,
  b.email_address as bank_email,
  b.logo,
  b.color_main,
  b.color_back,
  b.color_text,
  rr.currency_id,
  rr.latest_rate_date as rate_date,
  rr.buying_cash,
  rr.selling_cash,
  rr.buying_transaction,
  rr.selling_transaction,
  rr.cash_diff,
  rr.tran_diff,
  rr.id as rate_id,
  c.name as currency_name,
  c.description,
  c.logo as currency_logo
FROM ranked_rates rr
LEFT JOIN bank b ON b.id = rr.bank_id
LEFT JOIN currency c ON rr.currency_id = c.id
WHERE rr.rn = 1
ORDER BY rr.currency_id;`;

  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/cbuying/max", (req, res) => {
  const stm = `
  WITH latest_rates AS (
  SELECT 
    bank_id, 
    currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id, currency_id
),
ranked_rates AS (
  SELECT
    r.bank_id,
    r.id,
    r.currency_id,
    lr.latest_rate_date,
    r.buying_cash,
    r.selling_cash,
    r.buying_transaction,
    r.selling_transaction,
    (r.selling_cash - r.buying_cash) AS cash_diff,
    (r.selling_transaction - r.buying_transaction) AS tran_diff,
    ROW_NUMBER() OVER (PARTITION BY r.currency_id ORDER BY r.buying_cash DESC) AS rn
  FROM rate r
  INNER JOIN latest_rates lr 
    ON r.bank_id = lr.bank_id 
    AND r.currency_id = lr.currency_id 
    AND r.rate_date = lr.latest_rate_date
)
SELECT 
  rr.bank_id,
  b.short_name,
  b.bank_name,
  b.address,
  b.phone_land_line,
  b.email_address as bank_email,
  b.logo,
  b.color_main,
  b.color_back,
  b.color_text,
  rr.currency_id,
  rr.latest_rate_date as rate_date,
  rr.buying_cash,
  rr.selling_cash,
  rr.buying_transaction,
  rr.selling_transaction,
  rr.cash_diff,
  rr.tran_diff,
  rr.id as rate_id,
  c.name as currency_name,
  c.description,
  c.logo as currency_logo
FROM ranked_rates rr
LEFT JOIN bank b ON b.id = rr.bank_id
LEFT JOIN currency c ON rr.currency_id = c.id
WHERE rr.rn = 1
ORDER BY rr.currency_id;

`;

  callFunc.DBO(stm, res, "Error Getting Data!!");
});
router.get("/rate/cselling/min", (req, res) => {
  const stm = `
  WITH latest_rates AS (
  SELECT 
    bank_id, 
    currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id, currency_id
),
ranked_rates AS (
  SELECT
    r.bank_id,
    r.id,
    r.currency_id,
    lr.latest_rate_date,
    r.buying_cash,
    r.selling_cash,
    r.buying_transaction,
    r.selling_transaction,
    (r.selling_cash - r.buying_cash) AS cash_diff,
    (r.selling_transaction - r.buying_transaction) AS tran_diff,
    ROW_NUMBER() OVER (PARTITION BY r.currency_id ORDER BY r.selling_cash ASC) AS rn
  FROM rate r
  INNER JOIN latest_rates lr 
    ON r.bank_id = lr.bank_id 
    AND r.currency_id = lr.currency_id 
    AND r.rate_date = lr.latest_rate_date
)
SELECT 
  rr.bank_id,
  b.short_name,
  b.bank_name,
  b.address,
  b.phone_land_line,
  b.email_address AS bank_email,
  b.logo,
  b.color_main,
  b.color_back,
  b.color_text,
  rr.currency_id,
  rr.latest_rate_date AS rate_date,
  rr.buying_cash,
  rr.selling_cash,
  rr.buying_transaction,
  rr.selling_transaction,
  rr.cash_diff,
  rr.tran_diff,
  rr.id AS rate_id,
  c.name AS currency_name,
  c.description,
  c.logo AS currency_logo
FROM ranked_rates rr
LEFT JOIN bank b ON b.id = rr.bank_id
LEFT JOIN currency c ON rr.currency_id = c.id
WHERE rr.rn = 1
ORDER BY rr.currency_id;

  `;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/tselling/min", (req, res) => {
  const stm = `
  WITH latest_rates AS (
  SELECT 
    bank_id, 
    currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id, currency_id
),
ranked_rates AS (
  SELECT
    r.bank_id,
    r.id,
    r.currency_id,
    lr.latest_rate_date,
    r.buying_cash,
    r.selling_cash,
    r.buying_transaction,
    r.selling_transaction,
    (r.selling_cash - r.buying_cash) AS cash_diff,
    (r.selling_transaction - r.buying_transaction) AS tran_diff,
    ROW_NUMBER() OVER (PARTITION BY r.currency_id ORDER BY r.selling_transaction ASC) AS rn
  FROM rate r
  INNER JOIN latest_rates lr 
    ON r.bank_id = lr.bank_id 
    AND r.currency_id = lr.currency_id 
    AND r.rate_date = lr.latest_rate_date
)
SELECT 
  rr.bank_id,
  b.short_name,
  b.bank_name,
  b.address,
  b.phone_land_line,
  b.email_address AS bank_email,
  b.logo,
  b.color_main,
  b.color_back,
  b.color_text,
  rr.currency_id,
  rr.latest_rate_date AS rate_date,
  rr.buying_cash,
  rr.selling_cash,
  rr.buying_transaction,
  rr.selling_transaction,
  rr.cash_diff,
  rr.tran_diff,
  rr.id AS rate_id,
  c.name AS currency_name,
  c.description,
  c.logo AS currency_logo
FROM ranked_rates rr
LEFT JOIN bank b ON b.id = rr.bank_id
LEFT JOIN currency c ON rr.currency_id = c.id
WHERE rr.rn = 1
ORDER BY rr.currency_id;
  `;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rate/tbuying/max", (req, res) => {
  const stm = `
  WITH latest_rates AS (
  SELECT 
    bank_id, 
    currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id, currency_id
),
ranked_rates AS (
  SELECT
    r.bank_id,
    r.id,
    r.currency_id,
    lr.latest_rate_date,
    r.buying_cash,
    r.selling_cash,
    r.buying_transaction,
    r.selling_transaction,
    (r.selling_cash - r.buying_cash) AS cash_diff,
    (r.selling_transaction - r.buying_transaction) AS tran_diff,
    ROW_NUMBER() OVER (PARTITION BY r.currency_id ORDER BY r.buying_transaction DESC) AS rn
  FROM rate r
  INNER JOIN latest_rates lr 
    ON r.bank_id = lr.bank_id 
    AND r.currency_id = lr.currency_id 
    AND r.rate_date = lr.latest_rate_date
)
SELECT 
  rr.bank_id,
  b.short_name,
  b.bank_name,
  b.address,
  b.phone_land_line,
  b.email_address AS bank_email,
  b.logo,
  b.color_main,
  b.color_back,
  b.color_text,
  rr.currency_id,
  rr.latest_rate_date AS rate_date,
  rr.buying_cash,
  rr.selling_cash,
  rr.buying_transaction,
  rr.selling_transaction,
  rr.cash_diff,
  rr.tran_diff,
  rr.id AS rate_id,
  c.name AS currency_name,
  c.description,
  c.logo AS currency_logo
FROM ranked_rates rr
LEFT JOIN bank b ON b.id = rr.bank_id
LEFT JOIN currency c ON rr.currency_id = c.id
WHERE rr.rn = 1
ORDER BY rr.currency_id;
  `;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rates/latest", (req, res) => {
  const stm = `with c as (
SELECT 
    bank_id, currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id,currency_id
),
 rates as (select 
 c.bank_id,
 c.currency_id,
 c.latest_rate_date,
 rate.buying_cash,
 rate.selling_cash,
 rate.buying_transaction,
 rate.selling_transaction,
 (rate.selling_cash-rate.buying_cash) as cash_diff,
 (rate.selling_transaction-rate.buying_transaction) as tran_diff
 
 from c
inner join rate on rate.bank_id=c.bank_id
 where c.latest_rate_date=rate.rate_date
 order by c.currency_id
)
select 
	rates.bank_id,
    bank.short_name,
    bank.bank_name,
    bank.address,
    bank.phone_land_line,
    bank.email_address,
    bank.logo,
    bank.color_main,
    bank.color_back,
    bank.color_text,
	  rates.currency_id,
    rates.latest_rate_date,
    rates.buying_cash,
    rates.selling_cash,
    rates.buying_transaction,
    rates.selling_transaction,
    rates.cash_diff,
    rates.tran_diff,
    currency.id,
    currency.name,
    currency.description,
    currency.logo
 from rates
left join bank on bank.id=rates.bank_id
left join currency on rates.currency_id=currency.id`;
  callFunc.DBO(stm, res, "Error Getting Data!!");
});

router.get("/rates/topmax", (req, res) => {
  const stm = `WITH latest_rates AS (
  SELECT 
    bank_id, 
    currency_id,
    MAX(rate_date) AS latest_rate_date
  FROM rate
  GROUP BY bank_id, currency_id
),
ranked_rates AS (
  SELECT
    r.bank_id,
    r.id,
    r.currency_id,
    lr.latest_rate_date,
    r.buying_cash,
    r.selling_cash,
    r.buying_transaction,
    r.selling_transaction,
    (r.selling_cash - r.buying_cash) AS cash_diff,
    (r.selling_transaction - r.buying_transaction) AS tran_diff,
    ROW_NUMBER() OVER (PARTITION BY r.currency_id ORDER BY r.buying_cash DESC) AS rn
  FROM rate r
  INNER JOIN latest_rates lr 
    ON r.bank_id = lr.bank_id 
    AND r.currency_id = lr.currency_id 
    AND r.rate_date = lr.latest_rate_date
)
SELECT 
  rr.bank_id,
  b.short_name,
  b.bank_name,
  b.address,
  b.phone_land_line,
  b.email_address AS bank_email,
  b.logo,
  b.color_main,
  b.color_back,
  b.color_text,
  rr.currency_id,
  rr.latest_rate_date AS rate_date,
  rr.buying_cash,
  rr.selling_cash,
  rr.buying_transaction,
  rr.selling_transaction,
  rr.cash_diff,
  rr.tran_diff,
  rr.id AS rate_id,
  c.name AS currency_name,
  c.description,
  c.logo AS currency_logo
FROM ranked_rates rr
LEFT JOIN bank b ON b.id = rr.bank_id
LEFT JOIN currency c ON rr.currency_id = c.id
WHERE rr.buying_cash>0
ORDER BY rr.currency_id, rr.buying_cash DESC;
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

router.get("/rate/currency/trend", async (req, res) => {
  const stm = `SELECT
    DATE(rate.rate_date) AS rate_date,
    rate.currency_id,
    currency.name,
    currency.description,
     currency.logo,
    AVG(rate.buying_cash) AS avg_buying_cash
FROM
    rate
INNER JOIN
    currency ON currency.id = rate.currency_id
GROUP BY
    DATE(rate.rate_date),
    rate.currency_id,
    currency.name
ORDER BY
    currency_id;
`;
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
