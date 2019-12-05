const process = require('process');

class CustomError extends Error{}

const f1 = () => {
    throw new CustomError('custom error 1')
}

const f2 = (param) => {
    console.log('calling f2 with param: ', param);

    throw new CustomError('custom error 2')
}

const f3 = () => {
    /*
     * si se lanza una excepción en f1 y no se captura aquí, 
     * esta excepción se capturará en el try..catch de la llamada
     * a f3
     */
    f1();
}

try {
    let resultF1 = f1();
    let resultF2 = f2(resultF1);
    console.log('Result of F2 is: ', resultF2);
} catch(e) {
    console.error(e.message);
    console.error(e.name);
    console.error(e instanceof CustomError)
    process.exit(1);
}

try {
    f3();
} catch(e) {
    console.error('Error running f3: ', e.message)
}