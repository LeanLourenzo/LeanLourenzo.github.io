let auxReconhecimento = 0;

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
let recognition = new SpeechRecognition();

recognition.lang = "pt-BR";
recognition.interimResults = true;
recognition.continuous = true;

let finalTranscript = "";

recognition.onresult = (event) => {
  let interimTranscript = "";
  for (let i = event.resultIndex; i < event.results.length; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
      finalTranscript += transcript;
    } else {
      interimTranscript = transcript;
    }
  }
};

recognition.onend = function () {
  //  semAscento = finalTranscript.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
  let semAscento = finalTranscript.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
  let tokenizado = semAscento.split(/\W+/);
  //  alert(semAscento);
  PreparaInput(tokenizado);
  finalTranscript = "";
  interimTranscript = "";
  setTimeout(function () {
    document.getElementById("textoChat").value = "";
  }, 2000);
};

function PegaVoz() {
  porTexto = false;
  if (auxReconhecimento == 0) {
    recognition.start();
    auxReconhecimento = 1;
  } else {
    recognition.stop();
    auxReconhecimento = 0;
  }
}
