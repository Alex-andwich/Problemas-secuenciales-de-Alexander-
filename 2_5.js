function calcular() {
  let squareMeter = parseFloat(document.getElementById("squareMeter").value);
  const pricePerMeter = 150;
  let amount = squareMeter * pricePerMeter;
  document.getElementById("amount").innerHTML =
    "Su cantidad a pagar es $ " + amount;
}
