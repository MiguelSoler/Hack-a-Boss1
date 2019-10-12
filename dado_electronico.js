let totalScore = 0;

for(i = 0; i<=50; i++){
    
    let tirada = Math.ceil(Math.random() * 6);
    console.log(`Nueva tirada: ${tirada}`)
    
    totalScore = totalScore + tirada;
    console.log(`Llevas ${totalScore} puntos acumulados`);

    if(totalScore >= 50){
        console.log('¡¡PARTIDA TERMINADA!! Has realizado demasiadas tiradas con el dado y ya te has pasado de los 50 puntos')
        break;
    }
}

