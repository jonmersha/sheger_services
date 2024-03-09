const express = require("express");
const app = express();
var cors = require('cors')

const port = 3000;
app.use(cors())
app.use(express.json());
app.use("/static", express.static("public"));
app.use("/movie", express.static("public/movie"));

app.get("/test", (req, res) => {
  res.send(
    "This Is my task to test every thing again testing continued on the activityy"
  );
});
///Gojo serivice
const gojoService = require("./src/modules/gojo/gojo");
app.use("/gojo", gojoService);

///movie Service serivice
const movieService = require("./src/modules/movie/movie");
app.use("/movie", movieService);

///shai bunna servic
const shaiBunnaService = require("./src/modules/shaibunna/shai_bunna");
app.use("/shaibuna", shaiBunnaService);

//Remote Service Configurations
 app.listen();
// Loca service Configurations
// app.listen(port, () => {
//   console.log(`Server Statrted @ ${port}`);
// });
