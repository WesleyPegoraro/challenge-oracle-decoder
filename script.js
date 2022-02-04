let inputTexto = document.querySelector(".text-input");
let btnCriptografar = document.querySelector("#btn-cripto");
let btnDescripto = document.querySelector("#btn-descripto");
let resultado = document.querySelector("#msg");
let btnCopy = document.querySelector("#btn-copy")

inputTexto.focus();

function cripto(){

  let texto = inputTexto.value;

  resultadoCripto = texto.replace(/e/gi,"enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");

  resultado.value = resultadoCripto;

  texto=''

}

 
function descripto(){

  let texto = inputTexto.value;

  resultadoCripto = texto.replace(/enter/gi,"e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u");

  resultado.value = resultadoCripto;

  texto=''

}

function copy() {
  var copyText = document.querySelector("#msg");
  copyText.select();
  document.execCommand("copy");
}

  btnCopy.addEventListener("click", copy);

  btnCriptografar.addEventListener("click", function(event){

    event.preventDefault(); 

    cripto();


    inputTexto.focus();

  });

  btnDescripto.addEventListener("click", function(event){
    event.preventDefault(); 

    descripto();

  });



/*Criar a função


Ligar a função ao botão correspondente no HTML  /

retornar na tela o resultado do texto criptografado /

Capturar o texto escrito no campo de input do HTML /

Desenvolver a lógica da criptografia /
*/

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/