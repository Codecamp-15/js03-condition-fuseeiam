let A = Number(prompt('Enter number1'));
let B = Number(prompt('Enter number2'));

// console.log(A);
// console.log(B);
// // alert(A + B);

// if (isNaN(A)) {
//     alert('Invalid Number');
// } else  {
//     alert(A + B);
// }


if (isNaN(A) || isNaN(B)) {
    alert("Invalid Number")
} else {
    alert(+A + +B)
}