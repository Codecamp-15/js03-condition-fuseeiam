let x = Number(prompt('Enter number 1'));
let y = +prompt('Enter number 2');
let z = +prompt('Enter number 3') * 1;

//-> เริ่มจากงานง่ายๆ
//v.0 แสดงเฉพาะตัวมากสุด
// v.1 handle เฉพาะ เลขที่ไม่เหมือนกัน  > แสดงลำดับจากมากไปน้อย
// v.2 เลขที่เหมือนกันได้ -> >=

//V.1 Handle เลขที่ไม่เหมือนกัน => 
//CASE 1 : x มากที่สุด 
// 1A : y > z
// 2A : z > y

//CASE 2 : y มากที่สุด
//CASE 3 : z มากที่สุด
//DRY Principle : Don't repeat Yourself

// let max;

// if (x > y && x > z) {
//     max = x;
//     // console.log(`MAX = ${x}`);
// } else if (y > x && y > z) {
//     max = y;
//     // console.log(`MAX = ${y}`);
// } else if (z > x && z > y) {
//     max = z;
//     // console.log(`MAX = ${z}`);
// }
// console.log(`MAX = ${max}`);

//CASE 1 : x มากที่สุด 
let max;
let mid;
let min;

if (x > y && x > z) {
    max = x;
    if (y >= z) {
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    }
} else if (y > x && y > z) {
    max = y;
    if (x >= z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else if (z > x && z > y) {
    max = z;
    if (z >= y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    }
}
console.log(`${max} : ${mid} : ${min}`);

//CASE 4 : 6 case

