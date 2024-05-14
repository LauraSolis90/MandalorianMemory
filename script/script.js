function aleatorio() {
  // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
  return Math.floor(Math.random() * 16);
}
//guardo imagenes en el array
var imagen = [];
imagen[0] = "img/mando1.jpg";
imagen[1] = "img/mando1.jpg";
imagen[2] = "img/mando2.jpg";
imagen[3] = "img/mando2.jpg";
imagen[4] = "img/mando3.jpg";
imagen[5] = "img/mando3.jpg";
imagen[6] = "img/mando4.jpg";
imagen[7] = "img/mando4.jpg";
imagen[8] = "img/mando5.jpg";
imagen[9] = "img/mando5.jpg";
imagen[10] = "img/mando6.jpg";
imagen[11] = "img/mando6.jpg";
imagen[12] = "img/mando7.jpg";
imagen[13] = "img/mando7.jpg";
imagen[14] = "img/mando8.jpg";
imagen[15] = "img/mando8.jpg";
var numeros = [];
var listo = false;
var cont = 0;
var contSel = 0;
var seleccionado = [];
var pareja = [];

function rellenarMemory() {
  // Relleno los elementos img de manera aleatoria
  k = 0;
  for (let i = 0; i < imagen.length; i++) {
    numeros[k] = aleatorio();
    for (let j = 0; j < i; j++) {
      while (numeros[k] == numeros[j]) {
        numeros[k] = aleatorio();
        j = 0;
      }
    }
    document.getElementsByTagName("img")[i].src = imagen[numeros[k]];
    k++;
  }
}

document.getElementById("comenzar").onclick = function () {
  // Obtén todos los elementos <img>
  const imgElements = document.getElementsByTagName("img");
  listo = false;
  divSW();
  // Itera a través de la colección y establece la propiedad style.display en "block" para cada elemento
  for (const img of imgElements) {
    img.style.display = "block";
  }
  rellenarMemory();
  setTimeout(() => {
    ocultarImg();
  }, 3000);
};

function ocultarImg() {
  // Obtengo todos los elementos <img>
  const imgElements = document.getElementsByTagName("img");
  // Itera a través de la colección y establece la propiedad style.display en "block" para cada elemento
  for (const img of imgElements) {
    img.style.display = "none";
    listo = true;
  }
}

function ocultarImgSel() {
  for (let i = 0; i < 2; i++) {
    seleccionado.style.background = "url(../img/logo.jpg)";
  }
}

if (cont < 2) {
  for (let i = 1; i <= imagen.length; i++) {
    document.getElementById("d" + i).onclick = function () {
      if (listo) {
        //Guardo el primer src seleccionado
        if (cont == 0) {
          // Oculta el div al hacer clic
          document.getElementById("d" + i).style.background = "transparent";
          document.getElementById("i" + i).style.display = "block";
          seleccionado[cont] = document.getElementById("d" + i).firstChild.src;
          cont++;
          //Guardo el segundo src seleccionado
        } else if (cont == 1) {
          // Oculta el div al hacer clic
          document.getElementById("d" + i).style.background = "transparent";
          document.getElementById("i" + i).style.display = "block";
          seleccionado[cont] = document.getElementById("d" + i).firstChild.src;
          cont = 0;
          //Si son pareja
          if (seleccionado[0] == seleccionado[1]) {
            alert("pareja");
            pareja[i] = seleccionado[0];
            pareja[i + 1] = seleccionado[1];
            pareja[i].style.display = "block";
            pareja[i + 1].style.display = "block";
            cont = 0;
            //Si no son pareja
          } else if (seleccionado[0] != seleccionado[1]) {
            setTimeout(() => {
              document.getElementById("d" + i).style.background =
                "url(../img/logo.jpg)";
              document.getElementById("i" + i).style.display = "none";
              document.getElementById("d" + (i - 1)).style.background =
                "url(../img/logo.jpg)";
              document.getElementById("i" + (i - 1)).style.display = "none";
            }, 1500);
            cont = 0;
          }
        } else if (cont > 1) {
          listo = false;
        }
      }
    };
  }
}

function divSW() {
  for (let i = 1; i <= imagen.length; i++) {
    document.getElementById("d" + i).style.background = "url(../img/logo.jpg)";
  }
}
