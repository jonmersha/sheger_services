const express = require("express");
const router = express.Router();


//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const callFunc=require('../../utils/call_backs')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//==================================================Report Objectives
router.get('/objective/get', (req, res) => {
    const stm=selectOP.selectAll("SPESIFIC_OBJECTIVES");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/objective/add',(req,res)=>{
    let stm=insertOP.insert('SPESIFIC_OBJECTIVES',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/objective/update',(req,res)=>{
    let stm=updateOP.update('SPESIFIC_OBJECTIVES',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/objective/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('SPESIFIC_OBJECTIVES',req.body)
    callFunc.addDataCallBack(stm,res);
});

//==================================================Report Summary
router.get('/summary/get', (req, res) => {
    const stm=selectOP.selectAll("REPORT_SUMMARY");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/summary/add',(req,res)=>{
    let stm=insertOP.insert('REPORT_SUMMARY',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/summary/update',(req,res)=>{
    let stm=updateOP.update('REPORT_SUMMARY',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/summary/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('REPORT_SUMMARY',req.body)
    callFunc.addDataCallBack(stm,res);
});

//======================================================Report

router.get('/get', (req, res) => {
    const stm=selectOP.selectAll("REPORT");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/add',(req,res)=>{
    let stm=insertOP.insert('REPORT',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/update',(req,res)=>{
    let stm=updateOP.update('REPORT',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('REPORT',req.body)
    callFunc.addDataCallBack(stm,res);
});


module.exports = router;