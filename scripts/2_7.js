function calcular() {
  let kilometers = parseFloat(document.getElementById("kilometers").value);
  let costPerKilometer = parseFloat(
    document.getElementById("costPerKilometer").value
  );
  let cost = kilometers * costPerKilometer;
  document.getElementById("cost").innerHTML =
    "El costo de su viaje es $" + cost;
}
