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

//Simple Response
//1
router.get('/user/get', (req, res) => {
    const stm=selectOP.selectAll("users");
   callFunc.addDataCallBack(stm,res);
  });
  //2
  router.get('/category/get', (req, res) => {
    const stm=selectOP.selectAll("category");
   callFunc.addDataCallBack(stm,res);
  });
  router.get('/category/count/', (req, res) => {
    const stm=selectOP.selectAllCount("category");
   callFunc.addDataCallBack(stm,res);
  });

  router.get('/category/count/:id', (req, res) => {
    const id=req.params.id;
    const stm = selectOP.selectCTRCount("category",id,"merchant_id");
    callFunc.addDataCallBack(stm, res);
  });
  //3
  router.get('/product/get', (req, res) => {
    const stm=selectOP.selectAll("product");
   callFunc.addDataCallBack(stm,res);
  });
  //Product Count
  router.get('/product/count/get', (req, res) => {
    const stm=selectOP.selectAllCount("product");
   callFunc.addDataCallBack(stm,res);
  });
//Product Search by id
  router.get("/product/:id", async (req, res) => {
    const id=req.params.id;
    const stm = selectOP.selectCTR("product",id,"id");
    callFunc.addDataCallBack(stm, res);
  });

  //Product Search by categoty
  router.get("/product/category/:id", async (req, res) => {
    const id=req.params.id;
    const stm = selectOP.selectCTR("product",id,"category");
    callFunc.addDataCallBack(stm, res);
  });

  //Product Count By Category 
  router.get("/product/count/:id", async (req, res) => {
    const id=req.params.id;
    const stm = selectOP.selectCTRCount("product",id,"category");
    callFunc.addDataCallBack(stm, res);
  });
  
//4
  router.get('/stock/get', (req, res) => {
    const stm=selectOP.selectAll("stock_bin");
   callFunc.addDataCallBack(stm,res);
  });

  //5
  router.get('/store/get', (req, res) => {
    const stm=selectOP.selectAll("merchant_store");
   callFunc.addDataCallBack(stm,res);
  });

  //-->6
  router.get('/order/get', (req, res) => {
    const stm=selectOP.selectAll("product_order");
   callFunc.addDataCallBack(stm,res);
  });
//-->7
  router.get('/sells/get', (req, res) => {
    const stm=selectOP.selectAll("product_selles");
   callFunc.addDataCallBack(stm,res);
  });
//Complex Query 
//1-->product of a given categoty
//1-->


router.get('/sells/get', (req, res) => {
  const stm=selectOP.selectAll("product_selles");
 callFunc.addDataCallBack(stm,res);
});

module.exports = router;