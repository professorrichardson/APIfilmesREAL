const express = require('express');
const app = express();
const conexao = require('./db');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API de Filmes.. Funcionando!");
});

app.get('/filmes',(req,res)=>{
   const sql = "SELECT * FROM filmes";
   conexao.query(sql,(erro,resultado)=>{
    if(erro){
        return res.status(500).json(erro);
    }
    res.json(resultado);
   });
});

// Rota que adiciona novos filmes
app.post('/filmes',(req,res)=>{
 
const { nome, ano, genero,capa} = req.body;

  const sql= "INSERT INTO filmes(nome,ano,genero,capa) VALUES(?,?,?,?)";

  conexao.query(sql,[nome, ano, genero,capa], (erro)=>{
    if(erro){
        return res.status(500).json(erro);
    }
    res.send("Filme Adicionado ");
  });
});

//Rota que atualiza filme
app.put('/filmes/:id',(req,res)=>{
const id = req.params.id;
const { nome, ano, genero,capa} = req.body;

  const sql= "UPDATE filmes SET nome =?, ano=?, genero=?,capa=? WHERE id =?";

  conexao.query(sql,[nome, ano, genero,capa,id], (erro)=>{
    if(erro){
        return res.status(500).json(erro);
    }
    res.send("Filme Modificado");
  });

});

// rota que deleta filme da lista
app.delete('/filmes/:id', (req,res) =>{
  const id = req.params.id;
  const sql = "DELETE FROM filmes WHERE id = ?";

    conexao.query(sql,[id], (erro)=>{
    if(erro){
        return res.status(500).json(erro);
    }
    res.send("Filme Removido ");
  });

});

app.listen(3000,()=>{
    console.log("Servidor Rodando em http://localhost:3000");
});