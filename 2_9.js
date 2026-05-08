function calcular() {
  let minutes = parseFloat(document.getElementById("minutes").value);
  let costPerMinute = 2;
  let callCost = minutes * costPerMinute;
  document.getElementById("callCost").innerHTML = "Usted pagara $" + callCost;
}
