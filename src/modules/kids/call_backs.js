const db=require('./fetch_data')

function addDataCallBack(stm,res){

    db.fetchDataFromMySQL(stm, (error, results) => {
        if (error) {
          res.status(500).json({ error: 'Failed to fetch data from MySQL' });
        } else {
          res.json({"Data":results});
        }
      });
}

module.exports={addDataCallBack}