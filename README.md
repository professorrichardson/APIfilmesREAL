## Antes de criar abra o terminal e crie a base de dados 

1- mysql -u root -p    senha "escola"

2- CREATE DATABASE filmes_db;

3- USE filmes_db;

4- CREATE TABLE filmes(id INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(100), ano INT, genero VARCHAR(50), capa TEXT);


apos isso abrir o codigo no VsCode e iniciar com "node server.js"
