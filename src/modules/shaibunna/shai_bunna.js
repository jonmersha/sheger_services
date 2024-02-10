const express = require('express');
var requestIp = require('request-ip');
//const app = express();
const router = express.Router();

//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')


//Call Back Functions
const callFunc=require('./call_backs')

router.get('/ip',(req,res)=>{
  var clientIp = requestIp.getClientIp(req);
  res.send(`${clientIp}`)

})
//Consumer
  //===================================Consumers Oprations==========
router.get('/consumers/get', async (req, res) => {
    const stm=selectOP.selectAll("consumers");
    callFunc.addDataCallBack(stm,res,'consumers');
    
  });

  router.post('/consumers/add', async (req, res) => {
    let stm=insertOP.insert('consumers',req.body)
    callFunc.addDataCallBack(stm,res,);
  });
//====================================Product oprations
router.get('/product/get', async (req, res) => {
  const stm=selectOP.selectAll("product");
  callFunc.addDataCallBack(stm,res,'product');
  
});
router.post('/product/add', async (req, res) => {
  let stm=insertOP.insert('product',req.body)
  callFunc.addDataCallBack(stm,res,'product');
  
});
//====================================Product cat
router.get('/cat/get', async (req, res) => {
  const stm=selectOP.selectAll("product_cat");
  callFunc.addDataCallBack(stm,res,'product_cat');
  
});
router.post('/cat/add', async (req, res) => {
  let stm=insertOP.insert('product_cat',req.body)
  callFunc.addDataCallBack(stm,res,'product_cat');
  
});
//==================================== bussiness_owner
router.get('/owner/get', async (req, res) => {
  const stm=selectOP.selectAll("bussiness_owner");
  callFunc.addDataCallBack(stm,res,'BussinessOwner');
  
});
router.post('/owner/add', async (req, res) => {
  let stm=insertOP.insert('bussiness_owner',req.body)
  callFunc.addDataCallBack(stm,res,'BussinessOwner');
  
});
//==================================== service_centers
router.get('/center/get', async (req, res) => {
  const stm=selectOP.selectAll("service_centers");
  callFunc.addDataCallBack(stm,res,'ServiceCenter');
  
});
router.post('/center/add', async (req, res) => {
  let stm=insertOP.insert('service_centers',req.body)
  callFunc.addDataCallBack(stm,res,'ServiceCenter');
  
});
//==================================== providers_service
router.get('/service/get', async (req, res) => {
  const stm=selectOP.selectAll("providers_service");
  callFunc.addDataCallBack(stm,res,'Service');
  
});
router.post('/servce/add', async (req, res) => {
  let stm=insertOP.insert('providers_service',req.body)
  callFunc.addDataCallBack(stm,res,'Service');
  
});
//==================================== service_order
router.get('/order/get', async (req, res) => {
  const stm=selectOP.selectAll("service_order");
  callFunc.addDataCallBack(stm,res,'Order');
  
});
router.post('/order/add', async (req, res) => {
  let stm=insertOP.insert('service_order',req.body)
  callFunc.addDataCallBack(stm,res,'Order');
});




//   router.get('/save',  (req, res) => {

//   res.send("this is my life, Program development is the best thing i can do for ever")

//   });
  
  
// router.post('/service/add', (req, res) => {
//    let stm=insertOP.insert('movie',req.body)
//     callFunc.addDataCallBack(stm,res);
//   });

module.exports = router;