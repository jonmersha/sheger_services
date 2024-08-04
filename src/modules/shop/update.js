const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//Crud Opearions
const updateOP = require("../../utils/update");

//Call Back Functions
const callFunc = require("./call_backs");

/**
 * 0:'category',
 * 1:'merchant_store',
 * 2:'product',
 * 5:'product_order',
 * 4'stock_bin',
 * 6:'users'
 */
let table = [
  "category",
  "merchant_store",
  "product",
  "product_order",
  "stock_bin",
  "users",
];

router.put("/update/:tableId", (req, res) => {
  const ID = req.params.tableId;
  let stm = updateOP.update(table[ID], req.body);
  console.log(stm);
  callFunc.DBO(stm, res, "Error Updating");
});

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/shoping/images"); // Set the destination to the public/uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Use timestamp to prevent file name collisions
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage });

//===============================================================================
router.post("/upload/:tableId/:recId", upload.single("image"), (req, res) => {
  const table = req.params.tableId;
  const recID = req.params.recId;
  let body = {
    fields: {
      image_name: req.file.filename,
    },
    criteria: {
      id: recID,
    },
  };

  let stm = updateOP.update(table, body);
  callFunc.DBO(stm, res, "Error Uploading Images");
});

module.exports = router;
