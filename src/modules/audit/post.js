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

router.post('/add/:id', (req, res) => {
  const id=req.params.id;
  let stm=insertOP.insert(id,req.body)
  callFunc.addData(stm,res,'ServiceCenter');
 });

module.exports = router;