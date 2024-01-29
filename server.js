const express = require('express');
const app = express();

const port = 4000;

app.use(express.json());
app.use('/static', express.static('public'))
app.get('/test',(req,res)=>{
  res.send("NEw Server")
})
///Gojo serivice
const gojoService = require("./src/modules/gojo/gojo");
app.use("/gojo", gojoService);

///movie Service serivice
const movieService = require("./src/modules/movie/movie");
app.use("/movie", movieService);


app.listen();
//app.listen(port,()=>{console.log("Server Statrted @ ${port}")});
