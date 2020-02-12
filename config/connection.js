const mysql = require("mysql")
var connection = mysql.createConnection({
        host: 'thh2lzgakldp794r.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'n48ozmxsj6c01rqn',
        password: 'js9qvk4berpp68x6',
        database: "aijf6hdj4xftfoyz"
});



connection.connect(function(err){
    if (err) throw err
    console.log("connected");
})

module.exports = connection;