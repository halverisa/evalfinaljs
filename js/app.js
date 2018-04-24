var calculadora = {};

calculadora = (function() {
/*variables para calculos*/
  var suma = "";
  var resta = "";
  var multiplicacion="";
  var division ="";
  var operando1 ="";
  var operando2="";
  var operador="";
/*funcion sumar*/
function sumar(){
  suma= parseFloat(operando1) + parseFloat(operando2);
}
/*funcion restar*/
function restar(){
  resta= parseFloat(operando1) - parseFloat(operando2);
}
/*funcion multiplicar*/
function multiplicar(){
  multiplicacion= parseFloat(operando1) * parseFloat(operando2);
  validartexto();
}
/*funcion dividir*/
function dividir(){
  division= parseFloat(operando1) / parseFloat(operando2);
  validartexto();
}
/*validadar cantidad de texto en pantalla*/
function validartexto(){
  var p = document.getElementById("display").innerHTML;
  if (p.length > 8) {
    var strl = display.textContent.slice(0,-1);
    display.textContent = strl;
  }
}
/*boton igual*/
document.getElementById("igual").addEventListener("click", function(){
operando2 = document.getElementById("display").textContent;
sum = operador.indexOf("mas");
rest= operador.indexOf("menos")
mult= operador.indexOf("por")
divd= operador.indexOf("dividido")
  if (sum ==0) {
    sumar();
    display.textContent=suma;
  }
  else if (rest==0) {
    restar();
    display.textContent=resta;
  }
  else if (divd==0) {
    dividir();
    display.textContent=division;
  }
  else if (mult==0) {
    multiplicar();
    display.textContent=multiplicacion;
  }
})
/*metodo para boton sumar*/
document.getElementById("mas").addEventListener("click", function(){
  var display = document.getElementById("display");
  operador= document.getElementById("mas").id;
    if (display.textContent!="0" || display.textContent=="0") {
      operando1=display.textContent;
      display.textContent="";
    }
})
/*metodo para boton menos*/
document.getElementById("menos").addEventListener("click", function(){
  var display = document.getElementById("display");
  operador= document.getElementById("menos").id;
    if (display.textContent!="0" || display.textContent=="0") {
      operando1=display.textContent;
      display.textContent="";
    }
})
/*metodo para boton multiplicar*/
document.getElementById("por").addEventListener("click", function(){
  var display = document.getElementById("display");
  operador= document.getElementById("por").id;
    if (display.textContent!="0" || display.textContent=="0") {
      operando1=display.textContent;
      display.textContent="";
    }
})
/*metodo para boton dividir*/
document.getElementById("dividido").addEventListener("click", function(){
  var display = document.getElementById("display");
  operador= document.getElementById("dividido").id;
    if (display.textContent!="0") {
      operando1=display.textContent;
      display.textContent="";
    }
    else if (display.textContent=="0") {
      alert ("Operando no puede ser 0");
    } alert(operador);
})
/*metodo para boton punto*/
document.getElementById("punto").addEventListener("click", function(){
var display = document.getElementById("display");
var punto = display.textContent.indexOf(".");
  if (display.textContent =="0" && punto =="-1" )
  display.textContent = display.textContent + ".";
  else if (display.textContent !="0" && punto =="-1") {
   display.textContent = display.textContent + ".";
  }
})
/* metotdo para boton ON/C */
document.getElementById("on").addEventListener("click", function(){
  var display = document.getElementById("display");
      if (display.textContent!="0")
      display.textContent = "0";
    })
/*metodo para boton sign */
document.getElementById("sign").addEventListener("click", function(){
var display = document.getElementById("display");
var signo = display.textContent.indexOf("-");
    if (display.textContent !="0" && signo =="-1")
          display.textContent = "-" + display.textContent;
    else if (display.textContent =="0" && signo =="-1") {
       display.textContent="0";
    }
   else {
     var strl = display.textContent.slice(1);
     display.textContent = strl;
   }
     validartexto();
})
/*metodos para escribir en pantalla */
document.getElementById("7").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "7";
  else {
    display.textContent = "7";
  }
    validartexto();
})
document.getElementById("0").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent+"0";

})
document.getElementById("8").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "8";
  else {
    display.textContent = "8";
  }
    validartexto();
})
document.getElementById("9").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "9";
  else {
    display.textContent = "9";
  }
  validartexto();
})
document.getElementById("6").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "6";
  else {
    display.textContent = "6";
  }
    validartexto();
})
document.getElementById("5").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "5";
  else {
    display.textContent = "5";
  }
    validartexto();
})
document.getElementById("4").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "4";
  else {
    display.textContent = "4";
  }
    validartexto();
})
document.getElementById("3").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "3";
  else {
    display.textContent = "3";
  }
    validartexto();
})
document.getElementById("2").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "2";
  else {
    display.textContent = "2";
  }
    validartexto();
})
document.getElementById("1").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "1";
  else {
    display.textContent = "1";
  }
    validartexto();
})

/*metodos para efecto del teclado*/
document.getElementById("on").addEventListener("mousedown", function(){
document.getElementById("on").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("on").addEventListener("mouseup", function(){
document.getElementById("on").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("sign").addEventListener("mousedown", function() {
document.getElementById("sign").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("sign").addEventListener("mouseup", function(){
document.getElementById("sign").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("dividido").addEventListener("mousedown", function() {
document.getElementById("dividido").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("dividido").addEventListener("mouseup", function(){
document.getElementById("dividido").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("7").addEventListener("mousedown", function() {
document.getElementById("7").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("7").addEventListener("mouseup", function(){
document.getElementById("7").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("8").addEventListener("mousedown", function() {
document.getElementById("8").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("8").addEventListener("mouseup", function(){
document.getElementById("8").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("9").addEventListener("mousedown", function() {
document.getElementById("9").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("9").addEventListener("mouseup", function(){
document.getElementById("9").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("por").addEventListener("mousedown", function() {
document.getElementById("por").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("por").addEventListener("mouseup", function(){
document.getElementById("por").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("4").addEventListener("mousedown", function() {
document.getElementById("4").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("4").addEventListener("mouseup", function(){
document.getElementById("4").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("5").addEventListener("mousedown", function() {
document.getElementById("5").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("5").addEventListener("mouseup", function(){
document.getElementById("5").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("6").addEventListener("mousedown", function() {
document.getElementById("6").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("6").addEventListener("mouseup", function(){
document.getElementById("6").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("menos").addEventListener("mousedown", function() {
document.getElementById("menos").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("menos").addEventListener("mouseup", function(){
document.getElementById("menos").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("1").addEventListener("mousedown", function() {
document.getElementById("1").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("1").addEventListener("mouseup", function(){
document.getElementById("1").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("2").addEventListener("mousedown", function() {
document.getElementById("2").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("2").addEventListener("mouseup", function(){
document.getElementById("2").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("3").addEventListener("mousedown", function() {
document.getElementById("3").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("3").addEventListener("mouseup", function(){
document.getElementById("3").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("0").addEventListener("mousedown", function() {
document.getElementById("0").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("0").addEventListener("mouseup", function(){
document.getElementById("0").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("punto").addEventListener("mousedown", function() {
document.getElementById("punto").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("punto").addEventListener("mouseup", function(){
document.getElementById("punto").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("igual").addEventListener("mousedown", function() {
document.getElementById("igual").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("igual").addEventListener("mouseup", function(){
document.getElementById("igual").setAttribute("style","transform:scale(1,1)")
})
document.getElementById("mas").addEventListener("mousedown", function() {
document.getElementById("mas").setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById("mas").addEventListener("mouseup", function(){
document.getElementById("mas").setAttribute("style","transform:scale(1,1)")
})

}());
