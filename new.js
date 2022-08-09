"use strict";

if (3 == 9) {
    console.log('ok');
} else {
    console.log('error');
}



// if ( num < 49 ) {
//     console.log('errror');
// } else if(num > 100) {
//     console.log('too musc');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('errror');


const num = 50;


switch (num) {
    case 49:
        console.log('FalsE');
        break;
    case 100:
        console.log('FalsE');
        break;
    case 50:
        console.log('TrUe');
        break;
    default:
        console.log('Mb TrUe');
        break;

}