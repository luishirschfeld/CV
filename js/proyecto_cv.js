
const element1 = document.getElementById("botonl1");
element1.addEventListener("click", myFunction1);

function myFunction1() {
var elemento =  document.getElementById("l1")

console.log(elemento.style.visibility)

if (elemento.style.visibility === 'hidden') {
  elemento.style.visibility='visible'
}else {
  elemento.style.visibility='hidden'
}
}


const element2 = document.getElementById("botonl2");
element2.addEventListener("click", myFunction2);

function myFunction2() {
  var elemento2 =  document.getElementById("l2")
  if (elemento2.style.visibility === 'hidden') {
    elemento2.style.visibility='visible'
  }else {
    elemento2.style.visibility='hidden'
  }
}


const elemento3 = document.getElementById("botonl3");
elemento3.addEventListener("click", myFunction3);

function myFunction3() {
  var elemento3 =  document.getElementById("l3")
  if (elemento3.style.visibility === 'hidden') {
    elemento3.style.visibility='visible'
  }else {
    elemento3.style.visibility='hidden'
  }
}

