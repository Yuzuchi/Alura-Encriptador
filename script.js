function encriptar(){
var texto= document.getElementById("txt").value.toLowerCase();
console.log(texto);
  var txtcifrado = texto.replace(/e/igm,"enter");
  var txtcifrado = txtcifrado.replace(/o/igm,"ober");
  var txtcifrado = txtcifrado.replace(/i/igm,"imes");
  var txtcifrado = txtcifrado.replace(/a/igm,"ai");
  var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
console.log(txtcifrado);
  document.getElementById("res1").innerHTML = txtcifrado;
  return txtcifrado;
}
function desencriptar() {
  var texto= document.getElementById("txt").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/igm,"e");
  var txtcifrado = txtcifrado.replace(/ober/igm,"o");
  var txtcifrado = txtcifrado.replace(/imes/igm,"i");
  var txtcifrado = txtcifrado.replace(/ai/igm,"a");
  var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
  console.log(txtcifrado);
  document.getElementById("res1").innerHTML = txtcifrado;
  return txtcifrado;
}

function copiar() {
var c1 = document.getElementById("res1");
console.log(c1.innerText);
var c2 = c1.innerText;
  console.log('hola soy c2',c2);
  navigator.clipboard.writeText(c2);
  alert("Se ha copiado");
}
