function insert(tableName,json){
    const keys=Object.keys(json);
    const values=Object.values(json);
    const columans=keys.join(" , ")
    const placeholders=values.map((value)=>`"${value}"`).join(" , ");
    const insertStament=`INSERT INTO ${tableName} (${columans}) VALUES(${placeholders})`
    return insertStament;
}

module.exports={insert}