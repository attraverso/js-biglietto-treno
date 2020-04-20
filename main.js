//ask distance
var total_km = prompt('Quanti km devi percorrere?', '100')
console.log(total_km);

//ask age
var age = prompt('Quanti anni hai?', '30')
console.log(age);

//km * fare per km
var total_fare = total_km * 0.21;
console.log(total_fare);

/* trip fare if <18yo -> -20% discount
else if >65yo -> 40% discount
else -> standard fare */
if(age < 18) {
  var fare_underage = total_fare - ((total_fare / 100) * 20);
  document.writeln(fare_underage);
} else if(age >= 65) {
  var fare_over65 = total_fare - ((total_fare / 100) * 40);
  document.writeln(fare_over65);
} else {
  document.writeln(total_fare);
}
