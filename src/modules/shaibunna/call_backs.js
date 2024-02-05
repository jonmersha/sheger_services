const db=require('./fetch_data')

function addDataCallBack(stm,res,tableName){
 // var table=tableName

    db.fetchDataFromMySQL(stm,(error, results) => {
        if (error) {
          res.status(500).json({ error: 'Failed to fetch data from MySQL' });
        } else {
       
          res.json({[tableName]:results});
        }
      });
}

module.exports={addDataCallBack}