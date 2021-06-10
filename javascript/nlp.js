var model;
lerModel();

window.addEventListener("keyup", (event) => {
  if (
    event.code === "NumpadEnter" ||
    (event.code === "Enter" && document.getElementById("textoChat").value != "")
  ) {
    var fraseDigitada = document.getElementById("textoChat").value;
    var tokenizado = fraseDigitada.split(/\W+/);
    PreparaInput(tokenizado);
    document.getElementById("textoChat").value = "";
  }
});

//----------------------------

var palavraReduzida = natural.LancasterStemmer;
var palavrasIguais = [0];
var inputPreparado = [];

// Sinonimos
const synonyms = {
  remove: "delete",
  junk: "spam",
  transfer: "export",
};

const synonymStems = {};

Object.keys(synonyms).forEach((key) => {
  synonymStems[palavraReduzida.stem(key)] = palavraReduzida.stem(synonyms[key]);
});

const removerEspaco = (arr) => arr.filter((x) => x !== "");
const tirarCapsLock = (arr) => arr.map((x) => x.toLowerCase());
const formaBasicaPalavra = (arr) => arr.map((x) => palavraReduzida.stem(x));
const trocarPorSinonimo = (arr) => arr.map((x) => synonymStems[x] || x);

const PreparaInput = (str) => {
  //var tokenizado = str.split(/\W+/); // Separa as palavras
  var trimzado = removerEspaco(str); // remove os espaços em branco <<<<<<<<<<<<<<<<<<<<<<<<
  var lowrizado = tirarCapsLock(trimzado); // lower case words
  var stemzado = formaBasicaPalavra(lowrizado); // Reduzir as palavras ao básico (Lancaster bastante agressivo)
  var sinonimos = trocarPorSinonimo(stemzado); // sinonimos para ajudar
  FinalizaInput(sinonimos);
};

function FinalizaInput(sinonimos) {
  // Zero em todas posições
  for (var i = 0; i <= sinonimos.length; i++) {
    for (var a = 0; a <= palavras.length - 1; a++) {
      palavrasIguais[a] = 0;
    }
  }
  // Um apenas onde for igual
  for (var i = 0; i <= sinonimos.length; i++) {
    for (var a = 0; a <= palavras.length - 1; a++) {
      if (sinonimos[i] == palavras[a]) {
        palavrasIguais[a] = 1;
      }
    }
  }
  inputPreparado[0] = palavrasIguais;
  fazerPredicao(inputPreparado);
}

function fazerPredicao(inputPreparado) {
  const inputTensor = tf.tensor(inputPreparado); // Converter o input para um tensor
  let resultado = model.predict(inputTensor);
  let outputLegivel = resultado.dataSync();
  let valorDoMaior = Math.max(...outputLegivel);
  let indexDoMaior = outputLegivel.indexOf(valorDoMaior);
  console.log(classes[indexDoMaior]);
  if (classes[indexDoMaior] == "atendentes") {
    window.location.href = "atendentes.html";
  } else if (classes[indexDoMaior] == "clientes") {
    window.location.href = "clientes.html";
  } else if (classes[indexDoMaior] == "deletarAtendentes") {
    window.location.href = "atendente_deletar.html";
  } else if (classes[indexDoMaior] == "deletarClientes") {
    window.location.href = "cliente_deletar.html";
  } else if (classes[indexDoMaior] == "deletarServicoPrestado") {
    window.location.href = "serviosprestados_deletar.html";
  } else if (classes[indexDoMaior] == "deletarSessao") {
    window.location.href = "sessoes_deletar.html";
  } else if (classes[indexDoMaior] == "deletarUnidades") {
    window.location.href = "unidade_deletar.html";
  } else if (classes[indexDoMaior] == "insereAtendentes") {
    window.location.href = "atendente_inserir.html";
  } else if (classes[indexDoMaior] == "insereClientes") {
    window.location.href = "clientes_inserir.html";
  } else if (classes[indexDoMaior] == "insereServicosPrestados") {
    window.location.href = "serviosprestados_inserir.html";
  } else if (classes[indexDoMaior] == "insereSessao") {
    window.location.href = "sessoes.html";
  } else if (classes[indexDoMaior] == "insereUnidades") {
    window.location.href = "unidade_inserir.html";
  } else if (classes[indexDoMaior] == "servicosPrestados") {
    window.location.href = "serviosprestados.html";
  } else if (classes[indexDoMaior] == "sessao") {
    window.location.href = "sessoes.html";
  } else if (classes[indexDoMaior] == "unidades") {
    window.location.href = "unidades.html";
  } else if (classes[indexDoMaior] == "updateAtendentes") {
    window.location.href = "atendente_update.html";
  } else if (classes[indexDoMaior] == "updateClientes") {
    window.location.href = "cliente_update.html";
  } else if (classes[indexDoMaior] == "updateServicoPrestado") {
    window.location.href = "serviosprestados_update.html";
  } else if (classes[indexDoMaior] == "updateSessao") {
    window.location.href = "sessoes.html";
  } else if (classes[indexDoMaior] == "updateUnidades") {
    window.location.href = "unidade_update.html";
  }
}

async function lerModel() {
  model = await tf.loadLayersModel("./model/model.json");
}
