function calcular() {
  let side1 = parseFloat(document.getElementById("side1").value);
  let side2 = parseFloat(document.getElementById("side2").value);
  let multi1 = side1 * side1;
  let multi2 = side2 * side2;
  let hypotenuse = Math.sqrt(multi1 + multi2);
  document.getElementById("hypotenuse").innerHTML =
    "La hipotenusa es " + hypotenuse;
}
