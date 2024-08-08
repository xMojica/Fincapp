const { Pool } = require("pg");
require("dotenv").config();

const poolConfig = JSON.parse(process.env.POOL);
const pool = new Pool(poolConfig);

pool.on("connect", () => {
    console.log("Conexion con la base de datos exitosa!");
});

pool.on("error", (err) => {
    console.error("Conexion con la base de datos rechazada!", err);
    process.exit(-1);
});

module.exports = pool;
