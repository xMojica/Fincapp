const { Pool } = require("pg");

const pool = new Pool({
    user: "fincapp_priw_user",
    host: "cqop6po8fa8c73bvrp00-a.oregon-postgres.render.com",
    database: "fincapp_priw",
    password: "q1NjIQ1ddtd0I2DTXv3F2B4vTRi7zOXc",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.on("connect", () => {
    console.log("Conexion con la base de datos exitosa!");
});

pool.on("error", (err) => {
    console.error("Conexion con la base de datos rechazada!", err);
    process.exit(-1);
});

module.exports = pool;
