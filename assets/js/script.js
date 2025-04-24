console.log('jQuery versión:', $.fn.jquery);
console.log('Bootstrap Modal existe?', typeof bootstrap.Modal);

$("p").click(function(){

    $(this).hide(4000)
    $(this).fadeIn(4000)
})

$("#boton").click(function(){

    $("#div").css({
        'width: 120px',
        'background-color': ' #fff'
    })
})


var numero11 = 5
var numero22 = "5"

alert(numero11 == numero22)
alert(numero11 === numero22)

var minombre = prompt("escribe tu nombre")
var miedad = prompt("escribe tu edad")
var mideporte = prompt("escribe tu deporte")



alert("mi nombre es :"+ minombre + miedad + mideporte)