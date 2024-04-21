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





router.get('/service/get', (req, res) => {
    const stm=selectOP.selectAll("SERVICE");
   callFunc.addDataCallBack(stm,res);
  });
  
router.post('/service/add', (req, res) => {
   let stm=insertOP.insert('SERVICE',req.body)
    callFunc.addDataCallBack(stm,res);
  });



module.exports = router;