const process = require('process');

const f1 = () => {
    throw new Error('custom error 1')
}

const f2 = (param) => {
    console.log('calling f2 with param: ', param);

    throw new Error('custom error 2')
}

try {
    let resultF1 = f1();
    let resultF2 = f2(resultF1);
    console.log('Result of F2 is: ', resultF2);
} catch(e) {
    console.error(e.message);
    console.error(e.name);

    process.exit(1);
}
