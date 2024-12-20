import sql from 'mssql';

var config = {
    user: 'hdthhnadmin',
    password: 'TymeCrysis123@27',
    server: 'get-the-help-he-needs.database.windows.net', 
    database: 'get-the-help-he-needs-db' 
};

export const executeSqlQuery = async (queryString, response) => {
    console.log('doing request');

    return sql.connect(config, function (err) {
        
        if (err) {
            console.log(err);
        }
        
        var request = new sql.Request();
        request.query(queryString, function (err, recordset) {
    
            if (err) {
                console.log(err);
            }
            
            response.set('Access-Control-Allow-Origin', '*');
            response.send(recordset.recordsets[0]);   
        });
    });
}