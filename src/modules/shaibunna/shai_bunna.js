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

router.get('/get', async (req, res) => {

 //   Products(
    //       id: 1,
    //       price: 50,
    //       productDescription: "Some Description of products",
    //       productImage: "Abd",
    //       productName: "Kafa cofe"),

  let products={
    "Products": [
        {
            id: 1,
            productName:"apple MacBook pro 16\"",
            price: 3000,
            productDescription: "Apple laptop computer with Ram 32GB Unified, SSD 1TB storrage,M1 chip Max Pro",
            productImage: "static/products/laptop.jpeg",
        },
        {
          id: 2,
          productName:"Imac pro 32\"",
          price: 3000,
          productDescription: "IMAC dektop Ram 32GB Unified, SSD 1TB storrage,M1 chip Max Pro",
          productImage: "static/products/imac1.jpeg",
      },
      {
        id: 3,
        productName:"Imac pro 32\"",
        price: 3000,
        productDescription: "Apple laptop computer with Ram 32GB Unified, SSD 1TB storrage,M1 chip Max Pro",
        productImage:"static/products/imac2.jpeg",
    },
    {
      id: 4,
      productName:"Iphone Pro Max",
      price: 3000,
      productDescription: "Apple laptop computer with Ram 32GB Unified, SSD 1TB storrage,M1 chip Max Pro",
      productImage: "static/products/mobile.jpeg",
  },
  {
    id: 5,
    productName:"apple watch",
    price: 3000,
    productDescription: "app Watches With longer hours",
    productImage: "static/products/watch.jpeg",
},
{
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
},
{
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
},
{
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
},
{
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
},
{
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
},
{
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}, {
  id: 5,
  productName:"apple watch",
  price: 3000,
  productDescription: "app Watches With longer hours",
  productImage: "static/products/watch.jpeg",
}
       
    ]
}
res.send(products)
    //const stm=selectOP.selectAll("movies");
   //callFunc.addDataCallBack(stm,res);
  });

  router.get('/save',  (req, res) => {

  res.send("this is my life, Program development is the best thing i can do for ever")

  });
  
  
router.post('/service/add', (req, res) => {
   let stm=insertOP.insert('movie',req.body)
    callFunc.addDataCallBack(stm,res);
  });

module.exports = router;