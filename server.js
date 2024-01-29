const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use('/static', express.static('public'))
app.get('/test',(req,res)=>{
  res.send("New Server")
})
///Gojo serivice
const gojoService = require("./src/modules/gojo/gojo");
app.use("/gojo", gojoService);

///movie Service serivice
const movieService = require("./src/modules/movie/movie");
app.use("/movie", movieService);


//Remote Service Configurations
app.listen();
//Loca service Configurations
//app.listen(port,()=>{console.log("Server Statrted @ ${port}")});