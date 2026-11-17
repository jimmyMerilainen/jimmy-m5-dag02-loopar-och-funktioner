const kafe = "Kardemumma";

function visaNamn() {
  const recept = "hemligt";
  console.log(kafe); // gissning: Kardemumma
  console.log(recept); // gissning: hemligt
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
  räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: 2

function lokal() {
  let räknare = 100;
  räknare++;
  return räknare;
}
console.log(lokal()); // gissning: 101
console.log(räknare); // gissning: 2

// Ta bort kommentaren på nästa rad och läs felet:
// console.log(recept);    // gissning: Felet blir att den inte hittar recept för den ligger i visaNamn funktion

for (let i = 0; i < 3; i++) {
  console.log("varv", i);
}
// Ta bort kommentaren på nästa rad och läs felet:
// console.log(i);         // gissning: Felet blir att den inte hittar i
