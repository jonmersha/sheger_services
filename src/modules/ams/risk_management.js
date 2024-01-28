const express = require("express");
const router = express.Router();
//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const callFunc=require('../../utils/call_backs')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//==================================================Risk ITEM
router.get('/item/get', (req, res) => {
    const stm=selectOP.selectAll("RISK_ITEM");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/item/add',(req,res)=>{
    let stm=insertOP.insert('RISK_ITEM',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/item/update',(req,res)=>{
    let stm=updateOP.update('RISK_ITEM',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/item/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('RISK_ITEM',req.body)
    callFunc.addDataCallBack(stm,res);
});


//=========================================== RISK_AUDIT_UNIVERSE

router.get('/item/map/get', (req, res) => {
    const stm=selectOP.selectAll("RISK_AUDIT_UNIVERSE");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/item/map/add',(req,res)=>{
    let stm=insertOP.insert('RISK_AUDIT_UNIVERSE',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/item/map/update',(req,res)=>{
    let stm=updateOP.update('RISK_AUDIT_UNIVERSE',req.body)
    callFunc.addDataCallBack(stm,res);
});

router.delete('/item/map/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('RISK_AUDIT_UNIVERSE',req.body)
    callFunc.addDataCallBack(stm,res);
});



module.exports = router;