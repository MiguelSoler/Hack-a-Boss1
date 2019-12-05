const { Pool, Client } = require('pg')

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'reviewclass',
//   password: '123456',
//   port: 5432,
// })
// client.connect()
// client.query('SELECT * from movies', (err, res) => {
//   console.log(res.rows)
//   client.end()
// })


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    password: '123456',
    port: 5432,
    database: 'poi_db'
})

const saveUser = async (username, password) => {

    const client = await pool.connect();
    const resultSelect = await client.query(`select username, password from poi_schema.users where username='${username}' and password='${password}'`);

    if (resultSelect.rows.length !== 0) {
        throw Error('already-exists');
    }
    
    const resultInsert = await client.query(`insert into poi_schema.users (username, password) values ('${username}', '${password}')`);

    client.release();
    
    return;
}

const getUserByUsername = async (username) => {
    const client = await pool.connect()
    
    const resultSelect = await client.query(`select password
    from poi_schema.users where username='${username}'`)
    
    if (resultSelect.rows.length === 0) {
        throw Error('unknown-user');
    }
    return {password: resultSelect.rows[0].password};
    }
    
    

/*const deletePOI = async (id) => {
    const client = await pool.connect()

    const result = await client.query(`delete * from TABLE where id='${id}'`)
    
    client.release();
    
    if (err) {
        return console.error('Error executing query', err.stack)
    }
    return result;


}

data = getPOI()

console.log(data)*/

module.exports = {
    saveUser,
    getUserByUsername
}
