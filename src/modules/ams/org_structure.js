const express = require("express");
const router = express.Router();
const insertOP=require('../../utils/insert')
const callFunc=require('../../utils/call_backs')
const selectOP=require('../../utils/select')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//===================================================Unit Tyep
router.get('/type/get',(req,res)=>{
    const stm=selectOP.selectAll("UNIT_TYPE");
    callFunc.addDataCallBack(stm,res);
})
router.post('/type/add',(req,res)=>{
    let stm=insertOP.insert('UNIT_TYPE',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.put('/type/update',(req,res)=>{
    let stm= updateOP.update("UNIT_TYPE",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/type/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('UNIT_TYPE',req.body);
    callFunc.addDataCallBack(stm,res);
})

//=================================================== Work Unit
router.post('/unit/add',(req,res)=>{
    let stm=insertOP.insert('WORK_UNIT',req.body)
    callFunc.addDataCallBack(stm,res);
})
router.get('/unit/get',(req,res)=>{
    const stm=selectOP.selectAll("WORK_UNIT");
    callFunc.addDataCallBack(stm,res);
})
router.put('/unit/update',(req,res)=>{
    let stm= updateOP.update("WORK_UNIT",req.body);
    callFunc.addDataCallBack(stm,res);
})
router.delete('/unit/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('WORK_UNIT',req.body);
    callFunc.addDataCallBack(stm,res);
})

// //=========================================================Checklist
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

// //=========================================================Checklist
// router.post('/type/add',(req,res)=>{
//     let stm=insertOP.insert('AUDIT_TYPE',req.body)
//     callFunc.addDataCallBack(stm,res);
// })
// router.get('/type/get',(req,res)=>{
//     const stm=selectOP.selectAll("AUDIT_TYPE");
//     callFunc.addDataCallBack(stm,res);
// })
// router.put('/type/update',(req,res)=>{
//     let stm= updateOP.update("AUDIT_TYPE",req.body);
//     callFunc.addDataCallBack(stm,res);
// })
// router.delete('/type/delete',(req,res)=>{
//     let stm=deleteOP.deleteScript('AUDIT_TYPE',req.body);
//     callFunc.addDataCallBack(stm,res);
// })


module.exports = router;