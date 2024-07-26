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


router.get('/user/get', (req, res) => {
    const stm=selectOP.selectAll("users");
   callFunc.addDataCallBack(stm,res);
  });


  router.get('/category/get', (req, res) => {
    const stm=selectOP.selectAll("category");
   callFunc.addDataCallBack(stm,res);
  });


  router.get('/product/get', (req, res) => {
    const stm=selectOP.selectAll("product");
   callFunc.addDataCallBack(stm,res);
  });

  router.get('/stock/get', (req, res) => {
    const stm=selectOP.selectAll("stock_bin");
   callFunc.addDataCallBack(stm,res);
  });

  router.get('/store/get', (req, res) => {
    const stm=selectOP.selectAll("merchant_store");
   callFunc.addDataCallBack(stm,res);
  });

  router.get('/order/get', (req, res) => {
    const stm=selectOP.selectAll("product_order");
   callFunc.addDataCallBack(stm,res);
  });

  router.get('/sells/get', (req, res) => {
    const stm=selectOP.selectAll("product_selles");
   callFunc.addDataCallBack(stm,res);
  });




  
router.post('/user/add', (req, res) => {
   let stm=insertOP.insert('users',req.body)
    callFunc.addDataCallBack(stm,res);
  });

//category

module.exports = router;