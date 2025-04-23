console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);





//variables en js
let edad = 30
let edad2 = 35
var nombre = "juan dhfd udfr rurfrrhuehueeguue"
let numerogrande = 38507657650873650073486
let nombre2 = "dddhfhfjfddjjdjdjdjdjdjd"
const rut = 2344566777


console.log(rut)


//tipos de datos
let texto = "este es un texto";
let numero = 2
let esestudiante = false
let nulo = null
let indefinido;
let numerogrande2 = 445328282929383746464;





//operadores
let a = 10 + 5

let numero1 = 10
let numero2 = 5
let resultado = numero1 + numero2


//operadores
var suma = 10 + 5

var resta = 10 - 5

var multiplicacion = 10 * 5

var division = 10 / 5

var modulo = 10 % 5



//estructuras de control

//if else

let nota = 30
if (nota>= 90) {
    console.log("muy buena nota")
} else if (nota>=50) {
    console.log("nota normal")
} else {
    console.log("reprobado")
}

//bucle

for (let index = 0; index < 10; index++) {
    console.log("index = ",index)
    //alert("dando vuelta")
}
        

//manipulacion del DOM 

const div_test = document.getElementById("div_test")
div_test.innerHTML = "<p> hola desde js</p>"

const div =  document.getElementById("div")
const btn = document.getElementById("btn")

btn.addEventListener('click' , () => {
    div.style.backgroundColor = 'red'   
})


var numero11 = 5
var numero22 = "5"

alert(numero11 == numero22)
alert(numero11 === numero22)

var minombre = prompt("escribe tu nombre")
var miedad = prompt("escribe tu edad")
var mideporte = prompt("escribe tu deporte")



alert("mi nombre es :"+ minombre + miedad + mideporte)