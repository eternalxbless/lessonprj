"use strict";


const obj = {
    name: "John",
    age: 25,
    isMarried: true
};

// console.log(obj.name)

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpeg', 'apple.bmp', 6, {}, []];

console.log(arr[1]);

let zopa = 9,
    pizda = 10;

zopa++;
pizda--;
console.log(zopa,pizda);


if (4 == 9){
    console.log('ok')
}
else {
    console.log('loh')
};

let num = 50;
if (num < 49) {
    console.log ('error')
} else if (num > 100) {
    console.log ('mnogo')

} else {
    console.log ('ok')
};

(num === 50) ? console.log ('ok') : console.log ('error');

const pum = 50;
switch (pum) {
    case 49: 
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 52:
        console.log('pravda');
        break;
    default:
        console.log('ti loh');
        break;
        
}

let lum = 50;
// while (lum <= 55) {
//     console.log(lum);
//     lum++;
// } 

// do {
//     console.log(lum);
//     lum++;
// }
// while (lum < 55);


for (let i = 1; i < 8; i++){
    if (i === 6) {
        continue;
    }
    console.log(i);
  
}