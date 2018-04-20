var calculadora = {};

calculadora = (function() {
  /*variables para calculos*/
var suma = "";
var resta = "";
var multiplicacion="";
var dividision ="";
var operando1 ="";
var operando2="";
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
})
/*metodos para escribir en pantalla */
document.getElementById("7").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "7";
  else {
    display.textContent = "7";
  }
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
})
document.getElementById("9").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "9";
  else {
    display.textContent = "9";
  }
})
document.getElementById("6").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "6";
  else {
    display.textContent = "6";
  }
})
document.getElementById("5").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "5";
  else {
    display.textContent = "5";
  }
})
document.getElementById("4").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "4";
  else {
    display.textContent = "4";
  }
})
document.getElementById("3").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "3";
  else {
    display.textContent = "3";
  }
})
document.getElementById("2").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "2";
  else {
    display.textContent = "2";
  }
})
document.getElementById("1").addEventListener("click", function(){
var display = document.getElementById("display");
  if (display.textContent!="0")
  display.textContent = display.textContent + "1";
  else {
    display.textContent = "1";
  }
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
