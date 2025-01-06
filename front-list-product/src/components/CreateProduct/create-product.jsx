import { useState } from 'react'
import './style.css'
import { productService } from '../../service/ProductService/productService'
import { Router, useNavigate } from 'react-router'

export default function CreateProduct() {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        available: false
    })

    const navigate = useNavigate()

    const [error, setError] = useState({})

    const validate = () => {
        const errors = {}
        if(!product.name) errors.name = "O nome do produto é obrigatorio"
        if(!product.description) errors.description = "A descrição do produto é obrigatoria"
        if(!product.price || Number(product.price) <= 0) errors.price = "O valor do produto deve ser positivo"
    
        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = validate()
        if(Object.keys(validationErrors).length > 0) {
            setError(validationErrors)
            
        } else{
            setError({})
            try{
                const createProduct = await productService.createProduct(product)
                return navigate("/")
            } catch(error) {
                console.error(error.message)
            }
        }
    }


    return (
        <div className="main">
            <h1>Criar Novo Produto</h1>
            <div className='sub-main'>
                <form className='forms-create' onSubmit={handleSubmit}>
                    <label>Nome do Produto</label>
                    <input type="text" placeholder='Digite o nome do produto...' value={product.name}
                        onChange={(e) => {
                            setProduct({ ...product, name: e.target.value })
                        }}
                    />
                    {error.name && <span className='error'>{error.name}</span>}

                    <label>Descrição do Produto</label>
                    <input type="text" placeholder='Digite a descrição do produto...' value={product.description}
                        onChange={(e) => {
                            setProduct({ ...product, description: e.target.value })
                        }}
                    />
                    {error.description && <span className='error'>{error.description}</span>}

                    <label>Valor do Produto</label>
                    <input type="number" value={product.price}
                        onChange={(e) => {
                            setProduct({ ...product, price: e.target.value })
                        }}
                    />
                    {error.price && <span className='error'>{error.price}</span>}


                    <div className='available'>
                        <input type="checkbox" value={product.available}
                            onChange={(e) => {
                                setProduct({ ...product, available: e.target.checked })
                            }}
                        />
                        <label className='checkbox-label'>Disponível</label>
                    </div>
                    <button className='submit-button' type='submit'>Criar Produto</button>
                </form>
            </div>
        </div>
    )
}