const process = require('process');

const f1 = () => {
    return -1
}

const f2 = (param) => {
    console.log('calling f2 with param: ', param);

    return -1;
}

let resultF1 = f1();

if (resultF1 === -1) {
    console.log('error en funcion f1')
    process.exit(1);
} 

let resultF2 = f2(resultF1);

if (resultF2 === -1){
    console.log('error en funcion f2');
    process.exit(1);
}

console.log('Result of F2 is: ', resultF2);