
let t = parseFloat(document.querySelector(".temp").innerHTML);
let s = parseFloat(document.querySelector(".wspeed").innerHTML);
let output = "";

if (t <= 50 && s > 3) {
  output =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.4275 * t * Math.pow(s, 0.16);
  output = Math.round(output) + "&deg;F";
} else {
    output = "N/A"
}

//output
document.getElementById("windChill").innerHTML = output;