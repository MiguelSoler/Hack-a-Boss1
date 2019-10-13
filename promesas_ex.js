const fsPromises = require('fs').promises;

const rutas = ['datos/MOCK_DATA1.csv', 'datos/MOCK_DATA2.csv', 'datos/MOCK_DATA3.csv'];

const name = 'Cari';
const surname = 'Wederell'

const dameNombre = (array, name ,surname) => {

  let campo;

  for (let i = 0; i < array.length; i++){
      if (array[i][1] == name && array[i][2] == surname){
        campo = array[i];
      }
  }

  return campo[5];
}

const trocear = (archivo) => {
  const resultado = archivo.toString().split('\n').map(string => string.split(','));

    return resultado;
}

const cogerRutas = (rutas) => rutas.map(archivo => fsPromises.readFile(archivo));

Promise.all(cogerRutas(rutas))
.then(trocear)
.then(array => dameNombre(array, name, surname))
.then(encontrado => console.log(encontrado))
.catch(err => console.log(err));
