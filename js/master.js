function Mostrar() {
  var tex = document.getElementById("text").value;
  var word;
  var texOriginal = tex.toLowerCase();
  var letterSpace = texOriginal.split("");
  var chainWithoutSpace = "";
  for (i in letterSpace) {
    if (letterSpace[i] != " ") {
      chainWithoutSpace += letterSpace[i];
    }
  }

  var letters = chainWithoutSpace.split("");
  var lettersReverse = chainWithoutSpace.split("").reverse();
  var same = true;

  for (i in letters) {
    if (letters[i] == lettersReverse[i]) {

    } else {
      same = false;
    }
  }

  if (same) {
    word = " es un palíndromo";
  } else {
    word = " no es un palíndromo";
  }


  document.getElementById("youWord").innerHTML = tex;
  document.getElementById("result").innerHTML = word;

  return true;
}
