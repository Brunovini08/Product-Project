import sqlite from "sqlite3"

const products = [
    ['Teclado Mecanico', 'Teclado Mecanico Switch Blue', 150, true],
    ['Teclado Mecanico', 'Teclado Mecanico Switch Red', 160, true],
    ['Teclado Mecanico', 'Teclado Mecanico Switch Black', 170, true],
    ['Teclado Mecanico', 'Teclado Mecanico Switch Yellow', 180, true],
    ['Teclado Mecanico', 'Teclado Mecanico Switch Pink', 190, true]
]

const db = new sqlite.Database(':memory:', (error) => {
    if(error) {
        console.error("Erro ao conectar ao sqlite", error.message)
    } else {
        console.log("Conexão feita com sucesso")
    }
})

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS Product(
            product_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            price INTEGER NOT NULL,
            available BOOLEAN NOT NULL
        )`,
        (error) => {
            if(error) {
                console.error("Erro ao criar a tabela:", error.message)
            } else {
                console.log("Tabela Product criada ou já existe")
            }
        }
    )
})

const insert_products = db.prepare(`INSERT INTO PRODUCT(name, description, price, available) VALUES (?, ?, ?, ?)`)

for(const product of products) {
    insert_products.run(product, (error) => {
        if(error) console.error("Erro ao inserir o produto: ", error.message)
    })
}

insert_products.finalize(() => {
    console.log("Todos os produtos foram inseridos com sucesso")
})

export default db