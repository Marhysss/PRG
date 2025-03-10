function trojuhelnik51() {
    let t = "";
    for(let r=5; r>=1; r--) {
        for(let s=1; s<=r; s++) {
            t += String(r) + " ";
       }
       t += "\n";
    }
    return t;
}

function trojuhelnik08() {
    let t = "";
    for(let r=1; r<=5; r++) {
        for(let s=1; s<=r; s++) {
            t += String(r * 2 - 2) + " ";
       }
       t += "\n";
    }
    return t;
}

console.log(trojuhelnik51());
console.log(trojuhelnik08());
