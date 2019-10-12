let operacion = 'potencia'/*Escribe aquí, entre comillas,la operación que deseas que sea realizada: suma, resta, division, multiplicacion o potencia*/

calcula = (n1, n2) => {
    let result; 

    if(operacion === 'suma'){
        console.log(`La ${operacion} de ${n1} más ${n2} es igual a:`)
        result = n1 + n2;
    } else if(operacion === 'resta'){
        console.log(`La ${operacion} de ${n1} menos ${n2} es igual a:`)
        result = n1 - n2;
    } else if(operacion === 'division'){
        console.log(`La ${operacion} de ${n1} entre ${n2} es igual a:`)
        result = n1/n2;
    } else if(operacion === 'multiplicacion'){
        console.log(`La ${operacion} de ${n1} por ${n2} es igual a:`)
        result = n1 * n2;
    } else if(operacion === 'potencia'){
        console.log(`La ${operacion} de ${n1} elevado a ${n2} es igual a:`)
        result = n1;
        for(i = 1; i < n2; i++){
            result = result * n1;
        }
    }
    return result;
}

console.log(calcula(2, 8));/*Escribe aquí los números que quieres que sean utilizados*/