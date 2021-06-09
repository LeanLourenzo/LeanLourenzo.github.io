const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_cabeleleiros",
});

// Inserção dos dados no MySQL
app.post("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`ID de conexao ${connection.threadId}`);

    connection.query(req.body.qualQuery, (err, rows) => {
      connection.release();

      if (!err) {
        res.send(`Inseriu o cliente`);
      } else {
        console.log(err);
      }
    });

    console.log(req.body);
  });
});

//Busca por todos os dados da tabela no MySQL
app.get("/todos/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`ID de conexao ${connection.threadId}`);

    // Generalizar a função para pesquisar em qualquer entidade do banco de dados
    let qualQuery = "";
    if (req.params.id == "cliente") {
      qualQuery = "SELECT * from cliente";
    } else if (req.params.id == "atendente") {
      qualQuery = "SELECT * from atendente";
    } else if (req.params.id == "unidade") {
      qualQuery = "SELECT * from unidade";
    } else if (req.params.id == "sessao") {
      qualQuery = "SELECT * from sessao";
    } else if (req.params.id == "servicosprestados") {
      qualQuery = "SELECT * from servicosprestados";
    }

    connection.query(qualQuery, (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

//Busca por ID no MySQL
app.get("/:id", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`ID de conexao ${connection.threadId}`);

    /* Os ID's estão sendo enviados com uma letra antes do número EX: C01, A02, U20
       Comparação do primeiro caratecter para decidir qual query SQL utilizar.   
    */
    let qualQuery = "";
    if (req.params.id[0] == "C") {
      qualQuery = "SELECT * from cliente WHERE ClienteID = ?";
    } else if (req.params.id[0] == "A") {
      qualQuery = "SELECT * from atendente WHERE AtendenteID = ?";
    } else if (req.params.id[1] == "P") {
      qualQuery = "SELECT * from servicosprestados WHERE ServicoID = ?";
    } else if (req.params.id[0] == "S") {
      qualQuery = "SELECT * from sessao WHERE SessaoID = ?";
    } else if (req.params.id[0] == "U") {
      qualQuery = "SELECT * from unidade WHERE UnidadeID = ?";
    }

    connection.query(qualQuery, [req.params.id], (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

// Update dos dados no MySQL, a query SQL já vem pronta através do cliente.
app.put("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`ID de conexao ${connection.threadId}`);

    connection.query(req.body.qualQuery, (err, rows) => {
      connection.release();

      if (!err) {
        res.send(`Inseriu o cliente`);
      } else {
        console.log(err);
      }
    });

    console.log(req.body);
  });
});

// Deletar dados no MySQL, a query SQL já vem pronta através do cliente.
app.delete("", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`ID de conexao ${connection.threadId}`);

    connection.query(req.body.qualQuery, (err, rows) => {
      connection.release(); // return the connection to pool

      if (!err) {
        res.send(`Deletado o cliente`);
      } else {
        console.log(err);
      }
    });
  });
});

app.listen(port, () => console.log(`Porta numero: ${port}`));
