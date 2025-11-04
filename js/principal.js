var titulo = document.querySelector(".titulo");
titulo.textContent = "arecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tsAlura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < = 0 || peso >=100){
    console.log("Peso Inválido!")
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = Altura inválida";
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
 