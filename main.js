//ask distance - recap line only appears when filled
var total_km = prompt('Quanti km devi percorrere?', '100');
console.log(total_km);
document.getElementById('given-km').innerHTML = total_km;
document.getElementById('data-container').setAttribute('class', 'visible');
document.getElementById('km-container').setAttribute('class', 'visible');

//ask age - recap line only appears when filled
var age = prompt('Quanti anni hai?', '30');
console.log(age);
document.getElementById('given-age').innerHTML = age;
document.getElementById('age-container').setAttribute('class', 'visible');

//km * fare per km
var total_fare = total_km * 0.21;
console.log('total fare:', total_fare);

/* trip fare if <18yo -> -20% discount
else if >65yo -> 40% discount
else -> standard fare
-
fares are rounded to the 2nd decimal */
if(age < 18) {
  var fare_underage = total_fare - ((total_fare / 100) * 20);
  document.getElementById('final-fare').innerHTML = fare_underage.toFixed(2) + ' &euro;';
  document.getElementById('fare-container').setAttribute('class', 'visible');
} else if(age >= 65) {
  var fare_over65 = total_fare - ((total_fare / 100) * 40);
  document.getElementById('final-fare').innerHTML = fare_over65.toFixed(2) + ' &euro;';
  document.getElementById('fare-container').setAttribute('class', 'visible');
} else {
  document.getElementById('final-fare').innerHTML = total_fare.toFixed(2) + ' &euro;';
  document.getElementById('fare-container').setAttribute('class', 'visible');
}
