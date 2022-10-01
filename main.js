var textarea = document.getElementById("textarea");

function agregar (char) {
    let text = document.createTextNode(char);
    textarea.appendChild(text)
}

var boton1 = document.getElementById("1");
boton1.onclick = (e) => {
   agregar("1")
};

var boton2 = document.getElementById("2")
boton2.onclick = (e) => {
    agregar("2")
 };

 var boton3 = document.getElementById("3")
boton3.onclick = (e) => {
    agregar("3")
 };

 var boton4 = document.getElementById("4")
boton4.onclick = (e) => {
    agregar("4")
 };

 var boton5 = document.getElementById("5")
boton5.onclick = (e) => {
    agregar("5")
 };

 var boton6 = document.getElementById("6")
boton6.onclick = (e) => {
    agregar("6")
 };

 var boton7 = document.getElementById("7")
boton7.onclick = (e) => {
    agregar("7")
 };

 var boton8 = document.getElementById("8")
boton8.onclick = (e) => {
    agregar("8")
 };

 var boton9 = document.getElementById("9")
boton9.onclick = (e) => {
    agregar("9")
 };

 var boton0 = document.getElementById("0")
boton0.onclick = (e) => {
    agregar("0")
 };

 var sumar = document.getElementById("+")
sumar.onclick = (e) => {
    agregar("+")
 };

 var restar = document.getElementById("-")
restar.onclick = (e) => {
    agregar("-")
 };

 var dividir = document.getElementById("/")
dividir.onclick = (e) => {
    agregar("/")
 };

 var multiplicar = document.getElementById("x")
multiplicar.onclick = (e) => {
    agregar("*")
 };

 var parentesis1 = document.getElementById("(")
parentesis1.onclick = (e) => {
    agregar("(")
 };

 var parentesis2 = document.getElementById(")")
parentesis2.onclick = (e) => {
    agregar(")")
 };

 var punto = document.getElementById(".")
punto.onclick = (e) => {
    agregar(".")
 };

 var residuo = document.getElementById("%")
residuo.onclick = (e) => {
    agregar("%")
 };

 var cancelar = document.getElementById("C")
 cancelar.onclick = (e) => {
    textarea.textContent = ""
};

var igualdad = document.getElementById("=");
igualdad.onclick = (e) => {
   let resultado = eval(textarea.textContent);
    textarea.textContent = resultado;
};

