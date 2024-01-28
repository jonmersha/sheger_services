const express = require("express");
const router = express.Router();


//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const callFunc=require('../../utils/call_backs')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//==================================================audit Projcet
router.get('/eng/get', (req, res) => {
    const stm=selectOP.selectAll("AUDIT_PROJECT");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/eng/add',(req,res)=>{
    let stm=insertOP.insert('AUDIT_PROJECT',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/eng/update',(req,res)=>{
    let stm=updateOP.update('AUDIT_PROJECT',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/eng/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDIT_PROJECT',req.body)
    callFunc.addDataCallBack(stm,res);
});


//==================================================Audit Program
router.get('/program/get', (req, res) => {
    const stm=selectOP.selectAll("AUDIT_PROGRAM");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/program/add',(req,res)=>{
    let stm=insertOP.insert('AUDIT_PROGRAM',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/program/update',(req,res)=>{
    let stm=updateOP.update('AUDIT_PROGRAM',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/program/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDIT_PROGRAM',req.body)
    callFunc.addDataCallBack(stm,res);
});

//==================================================Work Program
router.get('/wbs/get', (req, res) => {
    const stm=selectOP.selectAll("WBS");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/wbs/add',(req,res)=>{
    let stm=insertOP.insert('WBS',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/wbs/update',(req,res)=>{
    let stm=updateOP.update('WBS',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/wbs/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('WBS',req.body)
    callFunc.addDataCallBack(stm,res);
});

//==================================================Findings
router.get('/finding/get', (req, res) => {
    const stm=selectOP.selectAll("Finding");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/finding/add',(req,res)=>{
    let stm=insertOP.insert('Finding',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/finding/update',(req,res)=>{
    let stm=updateOP.update('Finding',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/finding/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('Finding',req.body)
    callFunc.addDataCallBack(stm,res);
});




module.exports = router;