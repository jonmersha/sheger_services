const express = require("express");
const router = express.Router();


//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const callFunc=require('../../utils/call_backs')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//==================================================audit Universe
router.get('/get', (req, res) => {
    const stm=selectOP.selectAll("AUDIT_PLAN");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/add',(req,res)=>{
    let stm=insertOP.insert('AUDIT_PLAN',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/update',(req,res)=>{
    let stm=updateOP.update('AUDIT_PLAN',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDIT_PLAN',req.body)
    callFunc.addDataCallBack(stm,res);
});

//===================================================Budget Year CRUD
router.post('/year/add',(req,res)=>{
    let stm=insertOP.insert('BUDGET_YEAR',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.get('/year/get',(req,res)=>{
    const stm=selectOP.selectAll("BUDGET_YEAR");
    callFunc.addDataCallBack(stm,res);
})
router.put('/year/update',(req,res)=>{
    let stm= updateOP.update("BUDGET_YEAR",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/year/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('BUDGET_YEAR',req.body);
    callFunc.addDataCallBack(stm,res);
})




module.exports = router;