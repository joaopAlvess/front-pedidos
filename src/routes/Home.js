import React from 'react'
import { Button } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <div>
                <p> Clientes </p>
                <p> Produtos </p>
            </div>
            <div>
                <Button variant="success">Cadastrar</Button>
                <Button variant="warning">Desabilitar Clientes</Button>
            </div>
        </>
    )
}

export default Home