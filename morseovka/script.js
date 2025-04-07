const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

function noDiakr(v) {
    let vystup = "";
    let vstup = String(v);
    let dz = "ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýž";
    let ndz = "ACDEEINORSTUUYZacdeeinorstuuyz";
    for (let i = 0; i < vstup.length; i++) {
        let znak = vstup[i];
        let index = dz.indexOf(znak);
        if (index >= 0) {
            znak = ndz[index];
        }
        vystup += znak;
    }
    return vystup;
}

function morseEncode(v) {
    let vstup = noDiakr(String(v).toUpperCase());
    let vystup = ""; 
    for (let i = 0; i < vstup.length; i++) {
        let char = vstup[i];
        if (char >= 'A' && char <= 'Z') {
            vystup += morse[char.charCodeAt(0) - 65] + " ";
        }
    }
    return vystup.trim() + "|"; 
}

function morseDecode(v) {
    let vstup = String(v).toUpperCase();
    let morseVystup = "";
    let morseVstup = vstup.split(" ");
    for (let i = 0; i < morseVstup.length; i++) {
        if (morse.indexOf(morseVstup[i]) >= 0) {
            morseVystup += String.fromCharCode(morse.indexOf(morseVstup[i]) + 65);
        }
    }
    return morseVystup;
}

console.log(morseEncode("Ahoj světe"));  
console.log(morseDecode(".... . .-.. .-.. --- | ... ...- . - . |"));
