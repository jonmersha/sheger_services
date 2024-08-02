const express = require('express');
const router = express.Router();


//Crud Opearions 
const updateOP=require('../../utils/update')

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
let table=['category','merchant_store','product','product_order','stock_bin','users']


router.put('/update/:tableId',(req,res)=>{

  const ID=req.params.tableId;
  let stm= updateOP.update(table[ID],req.body);
  console.log(stm);
  callFunc.DBO(stm,res,'Error Updating');
})


module.exports = router;