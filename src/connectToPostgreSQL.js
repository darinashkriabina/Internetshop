const {Client} = require('pg');

const connectionString = 'postgresql://postgres:darina2929@localhost:5432/InternetShop';
const client = new Client({
    connectionString: connectionString, 
});

async function connectToPostgreSQL(){
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error){
        console.error('Error connecting to PostgreSQL:', error);
    } finally {
        await client.end();
    }
}