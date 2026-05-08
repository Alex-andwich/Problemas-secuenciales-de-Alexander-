function calcular() {
  let nights = parseInt(document.getElementById("nights").value);
  let pricePerNight = parseInt(document.getElementById("pricePerNight").value);
  let totalPrice = nights * pricePerNight;
  document.getElementById("totalPrice").innerHTML =
    "Usted pagara $ " + totalPrice;
}
