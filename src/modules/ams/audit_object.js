const express = require("express");
const router = express.Router();
const insertOP=require('../../utils/insert')
const callFunc=require('../../utils/call_backs')
const selectOP=require('../../utils/select')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//===================================================Audit Object
router.get('/object/get',(req,res)=>{
    const stm=selectOP.selectAll("AUDIT_OBJECT");
    callFunc.addDataCallBack(stm,res);
})
router.post('/object/add',(req,res)=>{
    let stm=insertOP.insert('AUDIT_OBJECT',req.body)
    console.log(stm);
    callFunc.addDataCallBack(stm,res);
})

router.put('/object/update',(req,res)=>{
    let stm= updateOP.update("AUDIT_OBJECT",req.body);
    callFunc.addDataCallBack(stm,res);
})

router.delete('/object/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDIT_OBJECT',req.body);
    callFunc.addDataCallBack(stm,res);
})

//=================================================== Audittable Area
router.post('/area/add',(req,res)=>{
    let stm=insertOP.insert('AUDITABLE_AREA',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.get('/area/get',(req,res)=>{
    const stm=selectOP.selectAll("AUDITABLE_AREA");
    callFunc.addDataCallBack(stm,res);
})
router.put('/area/update',(req,res)=>{
    let stm= updateOP.update("AUDITABLE_AREA",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/area/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDITABLE_AREA',req.body);
    callFunc.addDataCallBack(stm,res);
})

//=========================================================Checklist
router.post('/chl/add',(req,res)=>{
    let stm=insertOP.insert('CHECKLIST',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.get('/chl/get',(req,res)=>{
    const stm=selectOP.selectAll("CHECKLIST");
    callFunc.addDataCallBack(stm,res);
})
router.put('/chl/update',(req,res)=>{
    let stm= updateOP.update("CHECKLIST",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/chl/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('CHECKLIST',req.body);
    callFunc.addDataCallBack(stm,res);
})

//=========================================================Checklist
router.post('/type/add',(req,res)=>{
    let stm=insertOP.insert('AUDIT_TYPE',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.get('/type/get',(req,res)=>{
    const stm=selectOP.selectAll("AUDIT_TYPE");
    callFunc.addDataCallBack(stm,res);
})
router.put('/type/update',(req,res)=>{
    let stm= updateOP.update("AUDIT_TYPE",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/type/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDIT_TYPE',req.body);
    callFunc.addDataCallBack(stm,res);
})

//=========================================================Audit Objectives
router.post('/object/obectives/add',(req,res)=>{
    let stm=insertOP.insert('AUDIT_OBJECT_OBJECTIVES',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.get('/object/obectives/get',(req,res)=>{
    const stm=selectOP.selectAll("AUDIT_OBJECT_OBJECTIVES");
    callFunc.addDataCallBack(stm,res);
})
router.put('/object/obectives/update',(req,res)=>{
    let stm= updateOP.update("AUDIT_OBJECT_OBJECTIVES",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/object/obectives/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('AUDIT_OBJECT_OBJECTIVES',req.body);
    callFunc.addDataCallBack(stm,res);
})


module.exports = router;