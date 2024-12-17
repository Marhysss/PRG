let hrac1_jmeno = "Petr";
let hrac2_jmeno = "Karel";

let hrac1_body = 121;
let hrac2_body = 164;

const maxPocetBodu = 300;

let hrac1_uspesnost = (hrac1_body / maxPocetBodu) * 100;
let hrac2_uspesnost = (hrac2_body / maxPocetBodu) * 100;


document.getElementById("hrac1").innerHTML = hrac1_jmeno + ": " + hrac1_uspesnost.toFixed(2) + "%";
document.getElementById("hrac2").innerHTML = hrac2_jmeno + ": " + hrac2_uspesnost.toFixed(2) + "%";