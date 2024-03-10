function selectAll(tableName){
    return `SELECT * FROM ${tableName}`;

}

function selectCTR(tableName,id,KEY){
    return `SELECT * FROM ${tableName} where ${KEY}=${id}`;

}
module.exports={selectAll,selectCTR}