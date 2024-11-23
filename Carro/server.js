const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senac',
    database: 'carros',
    port: 3307
});
// conectar ao banco de dados
db.connect(err => {
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});
 
//listar todos os carros 
app.get('/api/carro',(req, res)=>{
    db.query('SELECT * FROM carro', (err, results)=>{
        if(err){
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erros ao buscar dados');
            return;
        }
        res.send(results);
        });
    });

    // porta
    const PORT = 5501;
    app.listen(PORT, ()=>{
        console.log(`Servidor rodando em http:localhost:${PORT}`);
    });

