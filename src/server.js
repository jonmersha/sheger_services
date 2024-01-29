const express = require('express');
const app = express();

const axios = require('axios');
const fs = require('fs');
const socketIO = require('socket.io');


const util = require('util');
const http = require('http');
const server = http.createServer(app);
const io = socketIO(server);

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


const videoUrl = 'https://go.wootly.ch/dash?source=web&id=df62685534b198aaa8573cc43e3465b4f0124021&sig=NBaKPa_a8ZTCxrn8tQzDLQ&expire=1706493361&ofs=11&usr=182042'; // Replace with the actual video URL
const downloadPath = '../public/movie'; // Replace with the desired download path
const pipelineAsync = util.promisify(require('stream').pipeline);


app.get('/save', async (req, res) => {
  const fileName = 'ferari 2023.mp4';
  const filePath = `${downloadPath}/${fileName}`;
  

  // Notify the client that the download has started
  io.emit('download_started', 'Download started. Check back later for the file.');
  res.send("Download Started")
  // Initiate the video download
  const writer = fs.createWriteStream(filePath);
  const response = await axios.get(videoUrl, { responseType: 'stream', onDownloadProgress });

  // Stream the video content to the file on the server
  await pipelineAsync(response.data, writer);

  console.log(`Downloaded: ${fileName}`);
  io.emit('download_completed', 'Download completed. The file is ready for download.');
}

);

function onDownloadProgress(progressEvent) {
  const percentage = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
  console.log(percentage)
  io.emit('download_progress', `Download progress: ${percentage}%`);
}

io.on('connection', (socket) => {
  console.log('Client connected');
});


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
