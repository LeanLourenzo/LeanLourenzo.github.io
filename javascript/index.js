/*
  Funções generalizadas de criação de query na linguagem SQL para INSERÇÃO dos dados no MySQL
*/

function criaQueryInsertCliente(
  ClienteID,
  Nome,
  Sobrenome,
  Telefone,
  Rua,
  Cidade,
  Estado,
  Genero,
  CPF
) {
  let dados = JSON.stringify({
    qualQuery:
      "INSERT INTO Cliente VALUES ('" +
      ClienteID +
      "','" +
      Nome +
      "','" +
      Sobrenome +
      "','" +
      Telefone +
      "','" +
      Rua +
      "','" +
      Cidade +
      "','" +
      Estado +
      "','" +
      Genero +
      "', " +
      CPF +
      ")",
  });
  post(dados);
  return dados;
}

function criaQueryInsertAtendente(
  AtendenteID,
  Nome,
  Sobrenome,
  CPF,
  Rua,
  Cidade,
  Estado,
  Salario
) {
  let dados = JSON.stringify({
    qualQuery:
      "INSERT INTO Atendente VALUES ('" +
      AtendenteID +
      "','" +
      Nome +
      "','" +
      Sobrenome +
      "'," +
      CPF +
      ",'" +
      Rua +
      "','" +
      Cidade +
      "','" +
      Estado +
      "'," +
      Salario +
      ")",
  });
  post(dados);
  return dados;
}

function criaQueryInsertUnidade(
  UnidadeID,
  UnidadeNome,
  UnidadeDuracao,
  UnidadePreco,
  UnidadeMateriais
) {
  let dados = JSON.stringify({
    qualQuery:
      "INSERT INTO Unidade VALUES ('" +
      UnidadeID +
      "','" +
      UnidadeNome +
      "'," +
      UnidadeDuracao +
      "," +
      UnidadePreco +
      ",'" +
      UnidadeMateriais +
      "')",
  });
  post(dados);
  return dados;
}

function criaQueryInsertSessao(SessaoID, Data, ClienteID) {
  let dados = JSON.stringify({
    qualQuery:
      "INSERT INTO Sessao VALUES ('" +
      SessaoID +
      "','" +
      Data +
      "','" +
      ClienteID +
      "')",
  });
  post(dados);
  return dados;
}

function criaQueryInsertServicosPrestados(
  ServicoID,
  SessaoID,
  NumeroDoItem,
  UnidadeID,
  AtendenteID
) {
  let dados = JSON.stringify({
    qualQuery:
      "INSERT INTO ServicosPrestados VALUES ('" +
      ServicoID +
      "','" +
      SessaoID +
      "'," +
      NumeroDoItem +
      ",'" +
      UnidadeID +
      "','" +
      AtendenteID +
      "')",
  });
  post(dados);
  return dados;
}

/*
  Funções generalizadas de criação de query na linguagem SQL para UPDATE dos dados no MySQL
*/

function criaQueryUpdateCliente(
  Nome,
  Sobrenome,
  Telefone,
  Rua,
  Cidade,
  Estado,
  Genero,
  CPF,
  ClienteID
) {
  let dados = JSON.stringify({
    qualQuery:
      "UPDATE cliente SET Nome = '" +
      Nome +
      "', Sobrenome = '" +
      Sobrenome +
      "', Telefone = '" +
      Telefone +
      "', Rua = '" +
      Rua +
      "', Cidade = '" +
      Cidade +
      "', Estado = '" +
      Estado +
      "', Genero = '" +
      Genero +
      "', CPF = " +
      CPF +
      " WHERE ClienteID = '" +
      ClienteID +
      "'",
  });
  put(dados);
  return dados;
}

function criaQueryUpdateAtendente(
  Nome,
  Sobrenome,
  CPF,
  Rua,
  Cidade,
  Estado,
  Salario,
  AtendenteID
) {
  let dados = JSON.stringify({
    qualQuery:
      "UPDATE atendente SET Nome = '" +
      Nome +
      "', Sobrenome = '" +
      Sobrenome +
      "', CPF = " +
      CPF +
      ", Rua = '" +
      Rua +
      "', Cidade = '" +
      Cidade +
      "', Estado = '" +
      Estado +
      "', Salario = " +
      Salario +
      " WHERE AtendenteID = '" +
      AtendenteID +
      "'",
  });
  put(dados);
  return dados;
}

function criaQueryUpdateUnidade(
  UnidadeNome,
  UnidadeDuracao,
  UnidadePreco,
  UnidadeMateriais,
  UnidadeID
) {
  let dados = JSON.stringify({
    qualQuery:
      "UPDATE unidade SET UnidadeNome = '" +
      UnidadeNome +
      "', UnidadeDuracao = " +
      UnidadeDuracao +
      ", UnidadePreco = " +
      UnidadePreco +
      ", UnidadeMateriais = '" +
      UnidadeMateriais +
      "' WHERE UnidadeID = '" +
      UnidadeID +
      "'",
  });
  put(dados);
  return dados;
}

function criaQueryUpdateSessao(Data, ClienteID, SessaoID) {
  let dados = JSON.stringify({
    qualQuery:
      "UPDATE sessao SET Data = '" +
      Data +
      "', ClienteID = '" +
      ClienteID +
      "' WHERE SessaoID = '" +
      SessaoID +
      "'",
  });
  put(dados);
  return dados;
}

function criaQueryUpdateServicosPrestados(
  SessaoID,
  UnidadeID,
  AtendenteID,
  NumeroDoItem,
  ServicoID
) {
  let dados = JSON.stringify({
    qualQuery:
      "UPDATE servicosprestados SET SessaoID = '" +
      SessaoID +
      "', UnidadeID = '" +
      UnidadeID +
      "', AtendenteID = '" +
      AtendenteID +
      "', NumeroDoItem = " +
      NumeroDoItem +
      " WHERE ServicoID = '" +
      ServicoID +
      "'",
  });
  put(dados);
  return dados;
}

/*
  Funções generalizadas de criação de query na linguagem SQL para REMOÇÃO dos dados no MySQL
*/

function criaQueryDeleteCliente(ClienteID) {
  let dados = JSON.stringify({
    qualQuery: "DELETE from cliente WHERE ClienteID = '" + ClienteID + "'",
  });
  deleteEnviar(dados);
  return dados;
}

function criaQueryDeleteAtendente(AtendenteID) {
  let dados = JSON.stringify({
    qualQuery:
      "DELETE from atendente WHERE AtendenteID = '" + AtendenteID + "'",
  });
  deleteEnviar(dados);
  return dados;
}

function criaQueryDeleteUnidade(UnidadeID) {
  let dados = JSON.stringify({
    qualQuery: "DELETE from unidade WHERE UnidadeID = '" + UnidadeID + "'",
  });
  deleteEnviar(dados);
  return dados;
}

function criaQueryDeleteSessao(SessaoID) {
  let dados = JSON.stringify({
    qualQuery: "DELETE from sessao WHERE SessaoID = '" + SessaoID + "'",
  });
  deleteEnviar(dados);
  return dados;
}
function criaQueryDeleteServicosPrestados(ServicoID) {
  let dados = JSON.stringify({
    qualQuery:
      "DELETE from servicosprestados WHERE ServicoID = '" + ServicoID + "'",
  });
  deleteEnviar(dados);
  return dados;
}

/*
    Funções GET, POST, PUT, DELETE para conversação com a API
*/

const url = "https://6385ce7a98bb.ngrok.io/";

async function getTodos(qualTabela) {
  await fetch(url + "todos/" + qualTabela, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $(".table").bootstrapTable({
        data: data,
      });
    });
}

async function get(qualId) {
  await fetch(url + qualId, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $(".table").bootstrapTable({
        data: data,
      });
    });
}

async function post(dados) {
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dados,
  });
}

async function put(dados) {
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: dados,
  });
}

async function deleteEnviar(dados) {
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: dados,
  });
}
