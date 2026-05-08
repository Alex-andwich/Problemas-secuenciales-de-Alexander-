function calcular() {
  let distance = parseFloat(document.getElementById("distance").value);
  let speed = parseFloat(document.getElementById("speed").value);
  let time = distance / speed;
  document.getElementById("time").innerHTML = "Usted tardo " + time + " time";
}
