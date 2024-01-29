const express = require('express');
//const app = express();
const router = express.Router();
const http = require('http');
const axios = require('axios');
const fs = require('fs');
const socketIO = require('socket.io');



//const server = http.createServer(app);
//const io = socketIO(server);

const util = require('util');


//Crud Opearions 
const insertOP=require('../../utils/insert')
const selectOP=require('../../utils/select')
const updateOP=require('../../utils/update')
const deleteOP=require('../../utils/delete')

//Call Back Functions
const callFunc=require('./call_backs')


const videoUrl = 'https://go.wootly.ch/dash?source=web&id=df62685534b198aaa8573cc43e3465b4f0124021&sig=pOzxJ89KwXuYwNCyKqv6OQ&expire=1706488456&ofs=11&usr=182042'; // Replace with the actual video URL
const downloadPath = './public/movie'; // Replace with the desired download path

const pipelineAsync = util.promisify(require('stream').pipeline);


router.get('/service/get', async (req, res) => {
    const stm=selectOP.selectAll("movies");
   callFunc.addDataCallBack(stm,res);
  });

  router.get('/save',  (req, res) => {
  // const fileName = 'Ferrari (2023).mp4';
  // const filePath = `${downloadPath}/${fileName}`;
  
  // // Send an immediate response to the client
  // res.status(200).send('Download started. Check back later for the file.');

  // // Initiate the video download
  // const writer = fs.createWriteStream(filePath);
  // const response = await axios.get(videoUrl, { responseType: 'stream' });

  // // Stream the video content to the file on the server
  // await pipelineAsync(response.data, writer);

  // console.log(`Downloaded: ${fileName}`);
  res.send("this is my life, Program development is the best thing i can do for ever")

  });
  
  
router.post('/service/add', (req, res) => {
   let stm=insertOP.insert('movie',req.body)
    callFunc.addDataCallBack(stm,res);
  });




function downloadVideo(callback) {
  axios.get(videoUrl, { responseType: 'stream' })
    .then(response => {
      const fileName = `video.mp4`;
      const writer = fs.createWriteStream(`${downloadPath}/${fileName}`);

      response.data.pipe(writer);

      writer.on('finish', () => {
        console.log(`Downloaded: ${fileName}`);
        callback(null, fileName); // Call the callback with no error and the downloaded filename
      });

      writer.on('error', (err) => {
        console.error('Error writing file:', err.message);
        callback(err); // Call the callback with an error
      });
    })
    .catch(error => {
      console.error('Error:', error.message);
      callback(error); // Call the callback with an error
    });
}







module.exports = router;