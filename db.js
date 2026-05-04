const mysql = require('mysql2');

//Cria a conexao
const conexao  = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'escola',
    database:'filmes_db'
});
// conecta
conexao.connect((erro) => {
    if(erro){
        console.log("Erro ao conectar: ", erro);
    }else{
        console.log('Conectado com sucesso ao MySql');
    }
});

module.exports = conexao;