// let p = +prompt("Enter point...")
// if (p >= 80) console.log("A")
// else if (p >= 70 && p < 80) console.log("B")
// else if (p >= 60 && p < 70) console.log("C")
// else if (p >= 50 && p < 60) console.log("D")
// else console.log("F")

let p = prompt("Enter point");
(p >= 80) ? console.log("A") :
    (p >= 70 && p < 80) ? console.log("B") :
        (p >= 60 && p < 70) ? console.log("C") :
            (p >= 50 && p < 60) ? console.log("D") :
                console.log("F");

