//alert("HELLO))");
const isDaynow = false;
let color = null;
if (isDaynow) {
  color = `white`;
} else {
  color = `black`;
}

console.log(color);

if (isDaynow) {
  document.write(
    `<p><span style="color:${color};background-color:grey;"</span>is Day now</p>`
  );
} else {
  document.write(
    `<p> <span style="color:${color};background-color:blue;"</span>is Night now</p>`
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
const discount1 = amount - amount * 0.03;
const discount2 = amount - amount * 0.05;

if (amount > 500) {
  console.log("sum", discount1);
} else if (amount > 800) {
  console.log("sum", discount2);
}
