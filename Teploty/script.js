const teplota = [2, 5.6, 7.4, 8, 12.8, 20.7, 20.2];
console.log(teplota);
teplota [0] = 3.5;
console.log(teplota);
console.log(teplota[teplota.length-1]);

let soucet = 0;
for (let i = 0; i < teplota.length; i++){
    soucet += teplota[i];
}
console.log("průměrná teplota je " + soucet/teplota.length);

for(let i = teplota.length-1; i >= 0; i--){
    console.log(teplota[i]);
}
 
const ovoce = ["jablko", "hruška", "švestka"];
ovoce[3] = "banán";
console.log(ovoce);
let posledniPrvek = ovoce.pop();
console.log(ovoce);
console.log(posledniPrvek);

ovoce.unshift("ananas");
console.log(ovoce);
ovoce.shift();
console.log(ovoce);

ovoce.push("kiwi");
console.log(ovoce);
ovoce.splice(1, 1);
console.log(ovoce);
ovoce.reverse();
let vsechnoObracene = ovoce.join(", ");
console.log(vsechnoObracene);

console.log(teplota);
