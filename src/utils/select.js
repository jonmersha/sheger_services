//=Select all contents from the table=======================
function selectAll(tableName){
    return `SELECT * FROM ${tableName}`;

}

//Counts All Records of the table=======================
function selectAllCount(tableName){
    return `SELECT Count(*) as 'count' FROM ${tableName}`;

}

//================================================================
function selectCTR(tableName,id,KEY){
    return `SELECT * FROM ${tableName} where ${KEY}=${id}`;

}
function selectCTRCount(tableName,id,KEY){
    return `SELECT Count(*) as count FROM ${tableName} where ${KEY}=${id}`;

}
module.exports={selectAll,selectCTR,selectAllCount,selectCTRCount}