const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

//Static file

//app.use('/mfv', express.static('movies'))

app.use('/static', express.static('../public'))

///Gojo serivice
const gojoService = require("./modules/gojo/gojo");
app.use("/gojo", gojoService);

///movie Service serivice
const movieService = require("./modules/movie/movie");
app.use("/movie", movieService);



//=============================================



// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const planRoutes = require("./routes/plan");
// app.use("/plan", planRoutes);

// const settingRoutes = require("./routes/system_setting");
// app.use("/setting", settingRoutes);

// //Audit Object
// const auditObject = require("./routes/audit_object");
// app.use("/audit", auditObject);

// //Audit Object
// const riskManagement = require("./routes/risk_management");
// app.use("/risk", riskManagement);

// //Audit Object
// const orgStructure = require("./routes/org_structure");
// app.use("/org", orgStructure);


// //User Managemnt
// const userManagement = require("./routes/user_routes");
// app.use("/user", userManagement);


// //Reporting
// const reporting = require("./routes/reporting");
// app.use("/report", reporting);

// //Audit Project
// const project = require("./routes/project");
// app.use("/project", project);



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
