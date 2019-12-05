const process = require('process');

const f1 = () => {
    throw 'custom error 1'
}

const f2 = (param) => {
    console.log('calling f2 with param: ', param);

    throw 'custom error 2'
}

try {
    let resultF1 = f1();
    let resultF2 = f2(resultF1);
    console.log('Result of F2 is: ', resultF2);
} catch(e) {
    console.error(e);
    process.exit(1);
}


