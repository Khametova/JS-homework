alert("HELLO))");
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
