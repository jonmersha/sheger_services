const db=require('./fetch_data')

function getData(stm,res){

  db.fetchDataFromMySQL(stm, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'error fetching data' });
      } else {
        res.json({Data:results});
      }
    });
}

function addData(stm,res){

  db.fetchDataFromMySQL(stm, (error, results) => {
      if (error) {
        res.status(500).json({ error: 'error data input' });
      } else {
        res.json({Data:results});
      }
    });
}
module.exports={getData,addData}