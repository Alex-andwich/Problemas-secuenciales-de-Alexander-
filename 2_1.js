function calcular() {
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let area = (base * altura) / 2;
  document.getElementById("area").innerHTML =
    "El area del triangulo es " + area;
}
