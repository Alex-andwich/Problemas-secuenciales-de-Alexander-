function calcular() {
  let birthYear = parseInt(document.getElementById("birthYear").value);
  const currentYear = 2026;
  let age = currentYear - birthYear;
  document.getElementById("age").innerHTML = "Su edad actual es " + age;
}
