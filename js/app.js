var calculadora = {};

calculadora = (function() {

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
if (document.getElementById("display").value = 0) {
  document.getElementById("7")=7
  
}

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
