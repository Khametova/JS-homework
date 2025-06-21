/*alert("HELLO Victoria))");
const isDaynow = false;
let color = null;
if (isDaynow) {
  color = `black`;
} else {
  color = `white`;
}

console.log(color);

if (isDaynow) {
  document.write(
    `<p><span style="color:${color};background-color:white;"</span>is Day now</p>`
  );
} else {
  document.write(
    `<p> <span style="color:${color};background-color:black;"</span>is Night now</p>`
  );
}

const isOnline = false;

if (isOnline) {
  document.write(`<p>User is online</p>`);
} else {
  document.write(
    `<p>Your messege will be sent when connected to the internet</p>`
  );
}

const amount = +prompt("Enter amount");
let discount1 = 0.03;
let discount2 = 0.05;

if (amount > 500 && amount < 800) {
  console.log("sum", amount - amount * discount1);
} else if (amount >= 800) {
  console.log("sum", amount - amount * discount2);
}

let operator = prompt("Enter any number");
switch (operator) {
  case "7":
  case "Sunday":
    alert("Yes 7 Sunday");
    break;

  default:
    alert("No correct");
}

const operator = prompt("Enter any number");
switch (operator) {
  case "1":
    alert("Monday");
    break;
  case "2":
    alert("Tuesday");
    break;
  // тут аналогічно дні, яких не вистачає
  case "7":
    alert("Sunday");
    break;
  default:
    alert("No correct");
}*/
//let sum = 0;

/*const numbLimit = 100;
let s = 1;
sum = 0;
while (s <= numbLimit) {
  sum = s + sum;
  s++;
}
console.log("sum", sum); */

for (let i = 25; i >= 0; i--) {
  console.log("i", i);
}

let currentPage = 10;
const page = 50;

while (currentPage <= page) {
  if (currentPage % 5 === 0) console.log("currentPage", currentPage);

  currentPage++;
}
