import React from 'react'
import './styles/ButtonsTwo.css'
import { Button } from 'react-bootstrap'

const ButtonsTwo = () => {
    return (
        <div className='bt-two'>
            <Button variant="info">Imprimir Relatórios</Button>
            <Button variant="danger">Excluir Registros</Button>
        </div>
    )
}

export default ButtonsTwo