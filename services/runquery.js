const {db} = require ('../config/mysql')

const executeQuery= async (query,args) => {
    const result = await db.execute(query,args);
    return result;
}
module.exports = {
    executeQuery: executeQuery,
    
}