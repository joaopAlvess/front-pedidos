import React from 'react'
import { Button } from 'react-bootstrap'
import './styles/ButtonsOne.css'

const ButtonsOne = () => {
    return (
        <>
            <div className='bt-one'>
                <Button variant="success">Cadastrar Clientes</Button>
                <Button variant="warning">Desabilitar Clientes</Button>
            </div>
        </>

    )
}

export default ButtonsOne