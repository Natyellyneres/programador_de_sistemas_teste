//IMPORTANDO OS MÓDULOS NECESSÁRIOS
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

//CONFIGURANDO O CORS E O PARSER DE JSON
// PARSER:Para processar dados recebidos do cliente.
//CORS: Para permitir que a API seja acessada por diferentes origens.
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Configuração de conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senac',
    database: 'animeflix',
    port: 3307,
  });
  //Conectando ao banco de dados
db.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados', err);
      return;
    }
    console.log('Conectado ao banco de dados');
  });

//Rota GET PARA listar todas as pessoas
//req = requisição
// res= resposta
app.get('/api/anime', (req, res) => {
    db.query('SELECT * FROM Anime', (err, results) => {
      if (err) {
        console.error('Erro ao buscar dados', err);
        res.status(500).send('Erro ao buscar dados');
        return;
      }
      res.send(results);
    });
  });

  //Rota POST para adicionar uma nova pessoa.
app.post('/api/anime', (req, res) => {
    const { Titulo,Genero, Ano_lancamento } = req.body;
    const sql = 'INSERT INTO anime(Titulo,Genero,Ano_lancamento) VALUES(?,?,?)';
    db.query(sql, [Titulo,Genero, Ano_lancamento], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        res.status(500).send('Erro ao inserir os dados');
        return;
      }
      res.status(201).send('Anime adicionado com sucesso!');
    });
  });

  //rota PUT para atualizar uma pessoa existente
app.put('/api/anime/:id', (req, res) => {
    const { id } = req.params;
    const { Titulo,Genero, Ano_lancamento } = req.body;
    const sql =
      'UPDATE Anime SET Titulo = ?, Genero= ?, Ano_lancamento=? WHERE id_anime =?';
    db.query(sql, [Titulo,Genero, Ano_lancamento, id], (err, result) => {
      if (err) {
        console.error('Erro ao atualizar dados,', err);
        res.status(500).send('Erro ao atualizar dados');
        return;
      }
      res.send('Anime atualizado com sucesso!');
    });
  });

  // Rota DELETE PARA REMOVER UMA PESSOA
app.delete('/api/anime/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Anime WHERE id_anime= ?';
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Erro ao deletar dados:', err);
        res.status(500).send('Erro ao deletar dados');
        return;
      }
      res.send('Anime deletado com sucesso!');
    });
  });
//   INICIANDO O SERVIDOR NA PORTA 3000
const PORT = 5577;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});