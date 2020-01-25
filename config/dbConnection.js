var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexao com BD foi estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
}

module.exports = function(){
    console.log('O autoload carregou o modulo de conexao com o BD');
    return connMysql;
}