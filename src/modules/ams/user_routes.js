const express = require("express");
const router = express.Router();
//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const callFunc=require('../../utils/call_backs')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//full Path 
//==================================================User Managements
router.get('/get', (req, res) => {
    const stm=selectOP.selectAll("USERS");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/add',(req,res)=>{
    let stm=insertOP.insert('USERS',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/update',(req,res)=>{
    let stm=updateOP.update('USERS',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('USERS',req.body)
    console.log(stm)
    callFunc.addDataCallBack(stm,res);
});

//==================================================User Roles map
router.get('/role/map/get', (req, res) => {
    const stm=selectOP.selectAll("USER_ROLES");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/role/map/add',(req,res)=>{
    let stm=insertOP.insert('USER_ROLES',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/role/map/update',(req,res)=>{
    let stm=updateOP.update('USER_ROLES',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/role/map/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('USER_ROLES',req.body)
    console.log(stm)
    callFunc.addDataCallBack(stm,res);
});


//==================================================Roles
router.get('/role/get', (req, res) => {
    const stm=selectOP.selectAll("ROLES");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/role/add',(req,res)=>{
    let stm=insertOP.insert('ROLES',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/role/update',(req,res)=>{
    let stm=updateOP.update('ROLES',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/role/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('ROLES',req.body)
    console.log(stm)
    callFunc.addDataCallBack(stm,res);
});

//==================================================Schedule Members
router.get('/schedule/get', (req, res) => {
    const stm=selectOP.selectAll("SCHEDULE_MEMEBERS");
    callFunc.addDataCallBack(stm,res);
  });
router.post('/schedule/add',(req,res)=>{
    let stm=insertOP.insert('SCHEDULE_MEMEBERS',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.put('/schedule/update',(req,res)=>{
    let stm=updateOP.update('SCHEDULE_MEMEBERS',req.body)
    callFunc.addDataCallBack(stm,res);
});
router.delete('/finding/delete',(req,res)=>{
    let stm=deleteOP.deleteScript('SCHEDULE_MEMEBERS',req.body)
    callFunc.addDataCallBack(stm,res);
});

module.exports = router;