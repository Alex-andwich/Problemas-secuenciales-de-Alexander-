function calcular() {
  let parkingTime = parseFloat(document.getElementById("parkingTime").value);
  parkingTime = Math.ceil(parkingTime);
  const hourlyRate = 20;
  let amount = parkingTime * hourlyRate;
  document.getElementById("amount").innerHTML =
    "Su cantidad a pagar es $ " + amount;
}
