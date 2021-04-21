function Mode() {
    var check = sessionStorage.getItem("modeclair");
    console.log("ModeClair");
    console.log(check);
    if (check == "false"){
      console.log("if");
        document.querySelector("html").style.setProperty('--bck-color', '#262626');
        document.querySelector("html").style.setProperty('--txt-color', 'white');
        document.getElementById("mode").textContent="mode clair";
        document.getElementById("puce").textContent="\u2b24";
    }else{
      console.log("else");
        document.querySelector("html").style.setProperty('--bck-color', 'white');
        document.querySelector("html").style.setProperty('--txt-color', '#262626');
        document.getElementById("mode").textContent="mode sombre";
        document.getElementById("puce").textContent="\u25ef";
    }
}

function ModeSombre() {
    var test = sessionStorage.getItem("modeclair");
    if (test == "true"){
        console.log("if");
        document.querySelector("html").style.setProperty('--bck-color', '#262626');
        document.querySelector("html").style.setProperty('--txt-color', 'white');
        document.getElementById("mode").textContent="mode clair";
        document.getElementById("puce").textContent="\u2b24";
        test="false";
    }else{
      document.querySelector("html").style.setProperty('--bck-color', 'white');
      document.querySelector("html").style.setProperty('--txt-color', '#262626');
      document.getElementById("mode").textContent="mode sombre";
      document.getElementById("puce").textContent="\u25ef";
        test="true";
    }
    console.log("modeSombre");
    console.log(test);
    sessionStorage.removeItem("modeclair");
    sessionStorage.setItem("modeclair",test);
    var aff = sessionStorage.getItem("modeclair");
    console.log(aff);
}
        

function Apparition(img){
    var classe=document.querySelector('.'+img);
    console.log(classe);
    if(classe.style.opacity == "0.3"){
    console.log("opc 1");
    classe.style.opacity="1";
    }else{
    console.log("op 0");
    classe.style.opacity="0.3";
    }
}


var numero = 1;
Visible(numero);

function Increment(n) {
  Visible(numero += n);
}

function Visible(n) {
  var i;
  var img = document.getElementsByClassName("visible");
  if (n > img.length) {numero = 1}
  if (n < 1) {numero = img.length}
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  img[numero-1].style.display = "block";  

  var mk = document.getElementsByClassName("mark");
  console.log(mk);
  /*marker*/
  if (n > mk.length) {numero = 1}
  if (n < 1) {numero = mk.length}
  for (i = 0; i < mk.length; i++) {
    mk[i].textContent="\u25ef";
  }
  mk[numero-1].textContent="\u2b24";  
}