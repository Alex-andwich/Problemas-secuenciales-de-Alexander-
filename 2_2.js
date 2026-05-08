function calcular() {
  let pesosAmount = parseFloat(document.getElementById("pesosAmount").value);
  let dollarPrice = parseFloat(document.getElementById("dollarPrice").value);
  let dollarAmount = pesosAmount / dollarPrice;
  document.getElementById("dollarAmount").innerHTML =
    "Su cantidad a dolares es $" + dollarAmount;
}
