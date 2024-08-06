const express = require("express");
const router = express.Router();
const pool = require("../db");

// Obtener todos los animales
router.get("/", async (req, res, next) => {
    try {
        const result = await pool.query(`SELECT *FROM animal`);
        res.status(200).json(result.rows);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Obtener un animal por ID
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            `SELECT * FROM animal a WHERE a.id = $1`,
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Crear un nuevo animal
router.post("/", async (req, res, next) => {
    const {
        raza,
        peso,
        color,
        precio_ingreso,
        precio_salida,
        fecha_ingreso,
        fecha_salida,
        imagen,
        corral_id,
    } = req.body;
    try {
        const result = await pool.query(
            `
            INSERT INTO animal (raza, peso, color, precio_ingreso, precio_salida, fecha_ingreso, fecha_salida, imagen, corral_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
        `,
            [
                raza,
                peso,
                color,
                precio_ingreso,
                precio_salida,
                fecha_ingreso,
                fecha_salida,
                imagen,
                corral_id,
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Actualizar un animal por ID
router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const {
        raza,
        peso,
        color,
        precio_ingreso,
        precio_salida,
        fecha_ingreso,
        fecha_salida,
        imagen,
        corral_id,
    } = req.body;

    try {
        const animalResult = await pool.query(
            "SELECT * FROM animal WHERE id = $1",
            [id]
        );
        if (animalResult.rows.length === 0) {
            return res.status(404).json({ error: "El Animal no existe" });
        }
        const nuevoAnimal = animalResult.rows[0];

        if (corral_id) {
            const corralResult = await pool.query(
                "SELECT * FROM corral WHERE id = $1",
                [corral_id]
            );
            if (corralResult.rows.length === 0) {
                return res.status(404).json({ error: "El Corral no existe" });
            }
        }

        const animalActualizado = {
            raza: raza !== undefined ? raza : nuevoAnimal.raza,
            peso: peso !== undefined ? peso : nuevoAnimal.peso,
            color: color !== undefined ? color : nuevoAnimal.color,
            precio_ingreso:
                precio_ingreso !== undefined
                    ? precio_ingreso
                    : nuevoAnimal.precio_ingreso,
            precio_salida:
                precio_salida !== undefined
                    ? precio_salida
                    : nuevoAnimal.precio_salida,
            fecha_ingreso:
                fecha_ingreso !== undefined
                    ? fecha_ingreso
                    : nuevoAnimal.fecha_ingreso,
            fecha_salida:
                fecha_salida !== undefined
                    ? fecha_salida
                    : nuevoAnimal.fecha_salida,
            imagen: imagen !== undefined ? imagen : nuevoAnimal.imagen,
            corral_id:
                corral_id !== undefined ? corral_id : nuevoAnimal.corral_id,
        };

        const result = await pool.query(
            `
            UPDATE animal
            SET raza = $1, peso = $2, color = $3, precio_ingreso = $4, precio_salida = $5, fecha_ingreso = $6, fecha_salida = $7, imagen = $8, corral_id = $9
            WHERE id = $10
            RETURNING *
            `,
            [
                animalActualizado.raza,
                animalActualizado.peso,
                animalActualizado.color,
                animalActualizado.precio_ingreso,
                animalActualizado.precio_salida,
                animalActualizado.fecha_ingreso,
                animalActualizado.fecha_salida,
                animalActualizado.imagen,
                animalActualizado.corral_id,
                id,
            ]
        );

        res.status(200).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Eliminar un animal por ID
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            `
            DELETE FROM animal
            WHERE id = $1
            RETURNING *
        `,
            [id]
        );
        res.status(200).json(result.rows[0]);
        console.log("Animal eliminado");
    } catch (e) {
        res.status(400);
        next(e);
    }
});

module.exports = router;
