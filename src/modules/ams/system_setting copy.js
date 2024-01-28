const express = require("express");
const router = express.Router();
const insertOP=require('../../utils/insert')
const callFunc=require('../../utils/call_backs')
const selectOP=require('../../utils/select')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')

//const ="BUDGET_YEAR";


//=================================================== Audit Object

// router.post('/ob/add',(req,res)=>{
//     let stm=insertOP.insert('AUDIT_OBJECT',req.body)
//     callFunc.addDataCallBack(stm,res);

// })
// router.get('/ob/get',(req,res)=>{
//     const stm=selectOP.selectAll("AUDIT_OBJECT");
//     callFunc.addDataCallBack(stm,res);

// })
// router.put('/ob/update',(req,res)=>{
//     let stm= updateOP.update("AUDIT_OBJECT",req.body);
//     callFunc.addDataCallBack(stm,res);

// })
// router.delete('/ob/delete',(req,res)=>{
//     let stm=deleteOP.deleteScript('AUDIT_OBJECT',req.body);
//     callFunc.addDataCallBack(stm,res);

// })
//=========================================================Checklist

// router.post('/chl/add',(req,res)=>{
//     let stm=insertOP.insert('CHECKLIST',req.body)
//     callFunc.addDataCallBack(stm,res);
// })
// router.get('/chl/get',(req,res)=>{
//     const stm=selectOP.selectAll("CHECKLIST");
//     callFunc.addDataCallBack(stm,res);
// })
// router.put('/chl/update',(req,res)=>{
//     let stm= updateOP.update("CHECKLIST",req.body);
//     callFunc.addDataCallBack(stm,res);
// })
// router.delete('/chl/delete',(req,res)=>{
//     let stm=deleteOP.deleteScript('CHECKLIST',req.body);
//     callFunc.addDataCallBack(stm,res);
// })


  

    module.exports = router;