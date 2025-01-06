import React, { useEffect, useState } from "react"
import { productService } from "../../service/ProductService/productService"
import "./style.css"
export default function ListProducts() {

    const [products, setProducts] = useState([])

    const data = async () => {
        try {
            const productsData = await productService.getProduct()
            setProducts(productsData.data.products)
        } catch (error) {
            console.error("Erro ao buscar produtos:", error)
        }
    }

    useEffect(() => {
        data()
    }, [])
    console.log(products)
    return (
        <div className="main">
            <div className="sub-main">
                <div className="separator">
                    <h1 style={{fontFamily: "monospace"}}>
                        Lista de Itens
                    </h1>
                    <button className="button-add">
                        <a href="/create" style={{textDecoration: "none", color: "white"}}>Adicionar Produto</a>
                    </button>
                </div>
            </div>
            <table className="table-products">
                <thead className="table-head">
                    <tr className="table-sub-head">
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Disponivel</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {Array.isArray(products) && products.map((product) => {
                        return (
                            <tr key={product?.id} className="products">
                                <td>{product?.name}</td>
                                <td>{product?.description}</td>
                                <td>{product?.price}</td>
                                <td>{product?.available ? "Sim" : "Não"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}