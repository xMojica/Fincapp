const express = require("express");
const router = express.Router();
const pool = require("../db");

// Obtener todos los corrales
router.get("/", async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT * FROM corral
        `);
        res.status(200).json(result.rows);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Obtener un corral por ID
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            `
            SELECT * FROM corral WHERE id = $1
        `,
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Crear un nuevo corral
router.post("/", async (req, res, next) => {
    const { capacidad } = req.body;
    try {
        const result = await pool.query(
            `
            INSERT INTO corral (capacidad, cantidad_animales)
            VALUES ($1, $2)
            RETURNING *
        `,
            [capacidad, 0]
        );
        res.status(201).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Actualizar un corral por ID
router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    const { capacidad } = req.body;
    try {
        const corral = await pool.query("SELECT * FROM corral Where id = $1", [
            id
        ]);

        if (corral.rows.length === 0) {
            return res.status(404).json({ error: "El Corral no existe" });
        }

        const nuevoCorral = corral.rows[0];

        nuevoCorral.capacidad = capacidad;

        const result = await pool.query(
            `
            UPDATE corral
            SET capacidad = $1, cantidad_animales = $2
            WHERE id = $3
            RETURNING *
        `,
            [nuevoCorral.capacidad, nuevoCorral.cantidad_animales, id]
        );
        res.status(200).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

// Eliminar un corral por ID
router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            `
            DELETE FROM corral
            WHERE id = $1
            RETURNING *
        `,
            [id]
        );
        res.status(200).json(result.rows[0]);
    } catch (e) {
        res.status(400);
        next(e);
    }
});

module.exports = router;
