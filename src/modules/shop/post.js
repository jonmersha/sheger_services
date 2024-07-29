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

router.post('/add/:id', (req, res) => {
  const id=req.params.id;
  let stm=insertOP.insert(data[id],req.body)
  callFunc.addDataCallBack(stm,res,'ServiceCenter');
 });

// //1-->User Registrations
// router.post('/user/add', (req, res) => {
//     const stm=selectOP.selectAll("users");
//    callFunc.addDataCallBack(stm,res);
//   });
// //2-->product category Registrations
//   router.post('/category/add', (req, res) => {
//     let stm=insertOP.insert('category',req.body)
//     callFunc.addDataCallBack(stm,res,'ServiceCenter');
//   });

// //-->Product Registrations
//   router.post('/product/add', (req, res) => {
//    let stm=insertOP.insert('product',req.body)
//    callFunc.addDataCallBack(stm,res,'ServiceCenter');
//   });

//   router.post('/stock/add', (req, res) => {
//    let stm=insertOP.insert('stock_bin',req.body)
//    callFunc.addDataCallBack(stm,res,'ServiceCenter');
//   });

//   router.post('/store/add', (req, res) => {
//    let stm=insertOP.insert('merchant_store',req.body)
//    callFunc.addDataCallBack(stm,res,'ServiceCenter');

//   });

//   router.post('/order/add', (req, res) => {
//    let stm=insertOP.insert('product_order',req.body)
//    callFunc.addDataCallBack(stm,res,'ServiceCenter');
//   });
//   router.post('/sells/add', (req, res) => {
//    let stm=insertOP.insert('product_selles',req.body)
//    callFunc.addDataCallBack(stm,res,'ServiceCenter');
//   });
// router.post('/user/add', (req, res) => {
//    let stm=insertOP.insert('users',req.body)
//     callFunc.addDataCallBack(stm,res);
//   });

// //category

module.exports = router;