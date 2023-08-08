let num = prompt('Enter number 1');
//Input : null , '' , "Qseqwd" , "21"
//null === null [ok]
// '' , '   ' , => str.trim()== ''
//"fewfaa" => isNaN

console.log(num);
//IF-ELSE
//Guard-Clause
//str=trim() ใช้กับ string ได้
if (num === null || num.trim() === '' || isNaN(num)) {
    alert('Invalid Number');
} else if (+num > 0) {
    alert('Positive Number');
} else if (+num == 0) {
    alert('Invalid Number');
} else if (+num < 0) {
    alert('Negative Number');
}



