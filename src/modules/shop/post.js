const express = require('express');
//const app = express();
const router = express.Router();


//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')

//Call Back Functions
const callFunc=require('./call_backs')
/**
 * 0:'category',
 * 1:'merchant_store',
 * 2:'product',
 * 5:'product_order',
 * 4'stock_bin',
 * 6:'users'
 */
let data=['category','merchant_store','product','product_order','stock_bin','users']
//----Addisn Data To Database Table
router.post('/add/:id', (req, res) => {
  const id=req.params.id;
  let stm=insertOP.insert(data[id],req.body)
  callFunc.addDataCallBack(stm,res);
 });

module.exports = router;