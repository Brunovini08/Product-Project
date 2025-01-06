import db from "../data/data.js";

export function CreateProduct(req, res){
    const { name, description, price, available} = req.body
    const createProduct = db.run(`
            INSERT INTO Product (name, description, price, available) VALUES (?, ?, ?, ?)
        `, [name, description, price, available], function (error) {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(201).json({ productId: this.lastID });
        }
    })
}

export function GetAllProduct(req, res) {
    const getAllProduct = db.all(`
            SELECT * FROM Product ORDER BY price ASC
        `, [], function (error, rows) {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json({ products: rows });
        }
    })
}

export function GetProductById(req, res) {
    const { id } = req.params
    const getProductById = db.each(
        `SELECT * FROM Product WHERE product_id = ?`,
        [id], function (error, row) {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(200).json({ product: row });
            }
        })
}