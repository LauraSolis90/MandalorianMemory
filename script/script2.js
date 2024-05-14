var abiertos = 0;
var per1, per2;
var parejas = 0;
var seleccionadas = [];
var fallos = 0;

const NOMIMG = [
  "mando1",
  "mando2",
  "mando3",
  "mando4",
  "mando5",
  "mando6",
  "mando7",
  "mando8",
];
var aleatorio;
var repetido = 0;

function asignarClass() {
  for (i = 0; i < 16; i++) {
    do {
      repetido = 0;
      aleatorio = Math.floor(Math.random() * 8);
      for (j = 0; j < i; j++) {
        if (
          NOMIMG[aleatorio] ==
          document.getElementsByTagName("img")[j].classList[0]
        ) {
          repetido++;
          if (repetido == 2) {
            break;
          }
        }
      }
    } while (repetido >= 2);
    document.getElementsByTagName("img")[i].classList.add(NOMIMG[aleatorio]);
  }
}

asignarClass();

for (let i = 0; i < 16; i++) {
  document.getElementsByTagName("img")[i].onclick = function () {
    //solo se puede hacer click a la imagen si faltan parejas por encontrar
    //y si la imagen clickada no tiene pareja (le falta la clase "emparejada")
    if (parejas < 8) {
      //guardo en un array las dos imágenes seleccionadas para que no se "pueda"
      //hacer click dos veces seguidas a la misma imagen
      seleccionadas[abiertos] = document.getElementsByTagName("img")[i];
      if (seleccionadas[0] != seleccionadas[1]) {
        if (abiertos == 0) {
          //extraigo la primera clase, que es la que lleva el nombre del personaje
          per1 = document.getElementsByTagName("img")[i].classList[0];
          document.getElementsByTagName("img")[i].src = "img/" + per1 + ".jpg";
          abiertos++;
        } else if (abiertos == 1) {
          //extraigo la primera clase, que es la que lleva el nombre del personaje
          per2 = document.getElementsByTagName("img")[i].classList[0];
          document.getElementsByTagName("img")[i].src = "img/" + per2 + ".jpg";
          abiertos++;

          if (per1 == per2) {
            abiertos = 0;
            parejas++;
            document
              .getElementsByClassName(per1)[0]
              .classList.add("emparejada");
            document
              .getElementsByClassName(per1)[1]
              .classList.add("emparejada");
            //Necesito este timeout porque, si no, salta el alert antes de que cambie el src
            if (parejas == 8) {
              setTimeout(() => {
                alert("¡Enhorabuena! Has completado el memory de Star Wars.");
              }, 200);
            }
          } else {
            fallos++;
            setTimeout(() => {
              abiertos = 0;
              document.getElementsByClassName(per1)[0].src = "img/logo.jpg";
              document.getElementsByClassName(per1)[1].src = "img/logo.jpg";
              document.getElementsByClassName(per2)[0].src = "img/logo.jpg";
              document.getElementsByClassName(per2)[1].src = "img/logo.jpg";
            }, 500);
          }
          //Hay que "reiniciar" las seleccionadas porque, si no, no se puede volver a hacer
          //click a la misma justo después de comprobarla
          seleccionadas[0] = null;
          seleccionadas[1] = null;
        }
      }
    }
  };
}
for (i = 0; i < 16; i++) {
  document.getElementsById("reiniciar").onclick = function () {
    document.getElementsByTagName("img")[i].src = "img/logo.jpg";
  };
}
