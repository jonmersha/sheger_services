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
//Consumer
  //Get all consumers
router.get('/consumers/get', async (req, res) => {
    const stm=selectOP.selectAll("consumers");
    callFunc.addDataCallBack(stm,res,'consumers');
    
  });

  router.get('/consumers/add', async (req, res) => {
    let stm=insertOP.insert('consumers',req.body)
    callFunc.addDataCallBack(stm,res,);
  });

  router.get('/save',  (req, res) => {

  res.send("this is my life, Program development is the best thing i can do for ever")

  });
  
  
router.post('/service/add', (req, res) => {
   let stm=insertOP.insert('movie',req.body)
    callFunc.addDataCallBack(stm,res);
  });

module.exports = router;