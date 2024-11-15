//importando os módulos necessarios
const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();

//Configurando o CORS e o Parser de JSON
app.use(cors());
app.use(bodyParser.json());

//Configuração de conexão com o banco de dados 
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'senac',
    database: 'animeflix',
    port: 3307
});
//Conectando ao banco de dados 
db.connect(err =>{
if(err){
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
}
console.log('Conectado ao banco de dados');
});

//rota GET para listar todas as pessoas 
app.get('/api/pessoas',(req, res)=>{
    db.query('SELECT * FROM pessoa', (err, results)=>{
        if(err){
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erros ao buscar dados');
            return;
        }
        res.send(results);
    });
});

//Iniciando a servidor na porta 3000
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
});


