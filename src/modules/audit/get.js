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

tables=[''];

//all record
router.get("/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectAll(id);
  callFunc.getData(stm, res);
});

module.exports = router;