
/**
 * Este módulo es un ejemplo de librería que abstrae
 * al código principal de cómo se gestionan los usuarios
 * 
 * Ahora mismo están guardados en memoria, con lo que si se
 * cierra el servidor se perderá la información. Deberían 
 * almacenarse en base de datos sin necesidad de cambiar la 
 * API, es decir, sin cambiar ni el nombre de las funciones, ni
 * sus parámetros ni los valores devueltos.
 * 
 * Observaréis que las funcionen devuelven una promesa (async)
 * cuando en realidad este código no es asíncrono. Lo hicimos así
 * por compatibilidad, de forma que si se modifica la librería
 * para que guarde en base de datos, que sí es asíncrono, no
 * sea necesario cambiar el código del `server.js`
 */

let users = {};

const saveUser = async (username, password) => {
    if (users[username] !== undefined) {
        throw Error('already-exists');
    }

    users[username] = {
        password: password
    };

    return;
}

const getUserByUsername = async (username) => {
    if (users[username] === undefined) {
        throw Error('unknown-user');
    }

    return users[username];
}

module.exports = {
    saveUser,
    getUserByUsername
}