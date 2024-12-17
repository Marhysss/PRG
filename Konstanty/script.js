const jmeno = "Tomáš";
const prijmeni = "Marhan";
const rokNarozeni = 2007;

let vek = 2024 - rokNarozeni;
vek++;  //inkrementace: vek = vek + 1
vek--;  //dekrementace
vek+=2; //složené přiřazení 
vek-=2; // vek*=2;  vek/=2;   vek%=2;   

console.log(jmeno + " " + prijmeni + " je starý " + vek + " roků.");
