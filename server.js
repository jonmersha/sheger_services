const express = require("express");
const app = express();
var cors = require("cors");

const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/static", express.static("public"));
app.use("/movie", express.static("public/movie"));
app.use("/shoping", express.static("public/shoping/images"));


app.get("/test", (req, res) => {
  res.send(
    "This Is my task to test every thing again testing continued on the activityy"
  );
});

//Forex
//============================================
const forex_get = require("./src/modules/forex/get");
app.use("/forex", forex_get);

//=========================================
const forex_post = require("./src/modules/forex/post");
app.use("/forex", forex_post);

//============================================
const forex_update = require("./src/modules/forex/update");
app.use("/forex", forex_update);



///Aduit System Services serivice is chaged well



//============================================
const ams_get = require("./src/modules/audit/get");
app.use("/ams", ams_get);

const ams_post = require("./src/modules/audit/post");
app.use("/ams", ams_post);

///Shoping Services serivice is chaged well
//============================================
const shoping_get = require("./src/modules/shop/get");
app.use("/shopping", shoping_get);

const shoping_post = require("./src/modules/shop/post");
app.use("/shopping", shoping_post);

//============================================
const shopping_update = require("./src/modules/shop/update");
app.use("/shopping", shopping_update);

//==================================================

///parking serivice
const parkingService = require("./src/modules/parking/parking");
app.use("/parking", parkingService);

///Gojo serivice
const gojoService = require("./src/modules/gojo/gojo");
app.use("/gojo", gojoService);

///Kids Service serivice
const kids = require("./src/modules/kids/kids");
app.use("/kids", kids);

///movie Service serivice
const movieService = require("./src/modules/movie/movie");
app.use("/movie", movieService);

///shai bunna servic
const shaiBunnaService = require("./src/modules/shaibunna/shai_bunna");
app.use("/shaibuna", shaiBunnaService);

//Remote Service Configurations
//app.listen();
//Local service Configurations
app.listen(port, () => {
  console.log(`Server Statrted @ ${port}`);
});
